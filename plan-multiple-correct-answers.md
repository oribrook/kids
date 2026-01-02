# Plan: Support Multiple Correct Answers in Kids Game

## Problem Statement
Currently, the answer checking logic in `Game.jsx` only supports a single correct answer via `correctAnswerId`. For introduction questions (like Q1 in learn-alef), we want ALL options to be correct.

## Current Architecture

### Answer Checking Flow
1. **Game.jsx:71-83** - `handleAnswer()` function checks correctness:
   ```javascript
   // Current logic (lines 77-83):
   let correct = false;
   if (game.id === 'count-animals' || game.id === 'count-shapes') {
     correct = answerValue === currentQuestion.correctAnswer;
   } else {
     correct = answerId === currentQuestion.correctAnswerId;  // ← Single ID only
   }
   ```

2. **Question Data Structure** - Each option already has `isCorrect: true` flag:
   ```javascript
   options: [
     { id: 'opt-1', image: 'word-avokado', label: 'אבוקדו', isCorrect: true },
     { id: 'opt-2', image: 'word-avatiach-slice', label: 'אבטיח', isCorrect: true },
     { id: 'opt-3', image: 'word-ochel', label: 'אוכל', isCorrect: true },
   ]
   ```

3. **GameContext.jsx** - `submitAnswer(isCorrect)` just receives a boolean, no changes needed there.

## Proposed Solution

### Approach: Use `isCorrect` flag on options (already exists!)
The data structure already supports multiple correct answers via the `isCorrect` property on each option. We just need to update the answer checking logic in `Game.jsx` to use it.

### Implementation Steps

#### Step 1: Modify `handleAnswer()` in Game.jsx (lines 77-83)

**Current:**
```javascript
let correct = false;
if (game.id === 'count-animals' || game.id === 'count-shapes') {
  correct = answerValue === currentQuestion.correctAnswer;
} else {
  correct = answerId === currentQuestion.correctAnswerId;
}
```

**New:**
```javascript
let correct = false;
if (game.id === 'count-animals' || game.id === 'count-shapes') {
  correct = answerValue === currentQuestion.correctAnswer;
} else {
  // Check if the selected option has isCorrect: true
  const selectedOption = currentQuestion.options?.find(opt => opt.id === answerId);
  if (selectedOption?.isCorrect) {
    correct = true;
  } else {
    // Fallback to legacy correctAnswerId check
    correct = answerId === currentQuestion.correctAnswerId;
  }
}
```

This approach:
- ✅ Is backward compatible (uses `correctAnswerId` as fallback)
- ✅ Leverages existing `isCorrect` property on options
- ✅ Supports any number of correct answers (1, some, or all)
- ✅ No changes needed to GameContext or other components
- ✅ Minimal code change (just the Game.jsx file)

#### Step 2: Clean up learnAlef.js data (optional)

Remove the now-redundant `correctAnswerId` from introduction questions since all options are correct. However, keeping it doesn't hurt (serves as documentation/fallback).

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/Game.jsx` | Update `handleAnswer()` to check `option.isCorrect` |

## Audio Generation

The user also requested audio generation. Command to run:

```bash
cd C:\Users\Ori\Desktop\ttd\kids-game
edge-tts --voice "he-IL-HilaNeural" --text "הינה האות א" --write-media "public/audio/hineh-alef.mp3"
```

## Testing

After implementation:
1. Play the "א" game under אותיות category
2. Q1 should accept ANY of the 3 options as correct
3. Other games should still work as before (backward compatibility)
