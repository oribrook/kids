# Audio Files for Kids Game Platform

## Required Audio Files

### Game: Count the Animals (counting)
- `count-fish.mp3` - "כמה דגים יש בתמונה?"
- `count-butterflies.mp3` - "כמה פרפרים יש בתמונה?"
- `count-birds.mp3` - "כמה ציפורים יש בתמונה?"
- `count-dogs.mp3` - "כמה כלבים יש בתמונה?"
- `count-cats.mp3` - "כמה חתולים יש בתמונה?"

### Game: Count the Shapes (counting)
- `count-circles.mp3` - "כמה עיגולים יש בתמונה?"
- `count-squares.mp3` - "כמה ריבועים יש בתמונה?"
- `count-triangles.mp3` - "כמה משולשים יש בתמונה?"
- `count-stars.mp3` - "כמה כוכבים יש בתמונה?"
- `count-hearts.mp3` - "כמה לבבות יש בתמונה?"

### Game: Find the Color (colors)
- `find-red-apple.mp3` - "מצאו את התפוח האדום"
- `find-yellow-banana.mp3` - "מצאו את הבננה הצהובה"
- `find-blue-ball.mp3` - "מצאו את הכדור הכחול"
- `find-pink-flower.mp3` - "מצאו את הפרח הוורוד"
- `find-green.mp3` - "מצאו את הירוק"

### Game: Shadow Match (logic)
- `shadow-cat.mp3` - "מצאו את הצללית של החתול"
- `shadow-elephant.mp3` - "מצאו את הצללית של הפיל"
- `shadow-star.mp3` - "מצאו את הצללית של הכוכב"
- `shadow-car.mp3` - "מצאו את הצללית של המכונית"
- `shadow-flower.mp3` - "מצאו את הצללית של הפרח"

### Game: What's Different (logic)
- `whats-different-1.mp3` through `whats-different-5.mp3`

### Game: Complete the Pattern (logic)
- `pattern-1.mp3` through `pattern-5.mp3`

### Game: Match Pairs (logic)
- `match-dog.mp3` - "מה מתאים לכלב?"
- `match-bird.mp3` - "מה מתאים לציפור?"
- `match-fish.mp3` - "מה מתאים לדג?"
- `match-rabbit.mp3` - "מה מתאים לארנב?"
- `match-mouse.mp3` - "מה מתאים לעכבר?"

### Game: Select Letter (letters - Easy)
- `select-alef.mp3` - "בחרו את האות א"
- `select-mem.mp3` - "בחרו את האות מ"
- `select-shin.mp3` - "בחרו את האות ש"
- `select-lamed.mp3` - "בחרו את האות ל"
- `select-he.mp3` - "בחרו את האות ה"

### Game: First Letter (letters - Medium)
- `first-letter-naalayim.mp3` - "באיזו אות מתחילה המילה נעליים"
- `first-letter-bayit.mp3` - "באיזו אות מתחילה המילה בית"
- `first-letter-shemesh.mp3` - "באיזו אות מתחילה המילה שמש"
- `first-letter-kelev.mp3` - "באיזו אות מתחילה המילה כלב"
- `first-letter-tapuach.mp3` - "באיזו אות מתחילה המילה תפוח"

### Game: Double Letter (letters - Hard)
- `double-letter-banana.mp3` - "איזו אות מופיעה פעמיים במילה בננה"
- `double-letter-aba.mp3` - "איזו אות מופיעה פעמיים במילה אבא"
- `double-letter-ima.mp3` - "איזו אות מופיעה פעמיים במילה אמא"
- `double-letter-mamtak.mp3` - "איזו אות מופיעה פעמיים במילה ממתק"
- `double-letter-sababa.mp3` - "איזו אות מופיעה פעמיים במילה סבבה"

---

## Voice Feedback Audio Files (public/sounds/)

Hebrew voice feedback using Microsoft Edge TTS (he-IL-HilaNeural voice).
Random selection provides variety in feedback.

### Correct Answer Phrases (4 variations)
| File | Hebrew Text | Voice Settings |
|------|-------------|----------------|
| `correct-1.mp3` | כל הכבוד | rate +5%, pitch +3Hz |
| `correct-2.mp3` | נהדר | rate +5%, pitch +3Hz |
| `correct-3.mp3` | יופי | rate +5%, pitch +3Hz |
| `correct-4.mp3` | מצוין | rate +5%, pitch +3Hz |

### Wrong Answer Phrases (4 variations)
| File | Hebrew Text | Voice Settings |
|------|-------------|----------------|
| `wrong-1.mp3` | טעות, נסה שנית | rate -5%, pitch -2Hz |
| `wrong-2.mp3` | לא נכון, נסו שוב | rate -5%, pitch -2Hz |
| `wrong-3.mp3` | אופס, נסו עוד פעם | rate -5%, pitch -2Hz |
| `wrong-4.mp3` | כמעט, נסו שוב | rate -5%, pitch -2Hz |

### Game Completion Phrases (3 variations)
| File | Hebrew Text | Voice Settings |
|------|-------------|----------------|
| `complete-1.mp3` | סיימנו | rate +10%, pitch +5Hz |
| `complete-2.mp3` | כל הכבוד, סיימת את המשחק | rate +10%, pitch +5Hz |
| `complete-3.mp3` | מדהים, עשית את זה | rate +10%, pitch +5Hz |

### Encouragement Phrases (3 variations)
| File | Hebrew Text | Voice Settings |
|------|-------------|----------------|
| `encourage-1.mp3` | בוא ננסה עוד פעם | rate 0%, pitch +2Hz |
| `encourage-2.mp3` | אפשר לנסות שוב | rate 0%, pitch +2Hz |
| `encourage-3.mp3` | אל תוותר | rate 0%, pitch +2Hz |

---

## Generating TTS Audio (Hebrew)

Uses edge-tts library (Microsoft Edge's free neural TTS):

**Installation:** `pip install edge-tts`

**Generate single file:**
```bash
edge-tts --voice "he-IL-HilaNeural" --text "הטקסט בעברית" --write-media "public/audio/filename.mp3"
```

**Available Hebrew voices:**
- `he-IL-HilaNeural` (female, recommended for kids)
- `he-IL-AvriNeural` (male)

**Optional modifiers for expressive speech:**
```bash
--rate="+10%"    # faster (for excited/celebratory)
--rate="-10%"    # slower (for gentle/calming)
--pitch="+5Hz"   # higher pitch (for excitement)
--pitch="-5Hz"   # lower pitch (for calm feedback)
```

**Example for generating correct answer audio:**
```bash
edge-tts --voice "he-IL-HilaNeural" --rate="+5%" --pitch="+3Hz" --text "כל הכבוד" --write-media "public/sounds/correct-1.mp3"
```
