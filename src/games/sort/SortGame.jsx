import { useState, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './SortGame.module.css';

// Hebrew letters in order (22 letters)
const HEBREW_LETTERS = [
  'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י',
  'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת',
];

const MODES = {
  numbers: { icon: '🔢', label: 'מספרים' },
  letters: { icon: 'אב', label: 'אותיות' },
};

const DIFFICULTIES = {
  numbers: [
    { id: 'easy', label: 'קל', emoji: '🐣', description: '1-5' },
    { id: 'medium', label: 'בינוני', emoji: '🐥', description: '1-10 (עם חסרים)' },
    { id: 'hard', label: 'קשה', emoji: '🐔', description: 'ספרות + עשרות' },
    { id: 'veryHard', label: 'קשה מאוד', emoji: '🦅', description: '1-100' },
  ],
  letters: [
    { id: 'easy', label: 'קל', emoji: '🐣', description: '5 אותיות ראשונות' },
    { id: 'medium', label: 'בינוני', emoji: '🐥', description: '5 אותיות (עם חסרות)' },
    { id: 'hard', label: 'קשה', emoji: '🐔', description: '8 אותיות' },
    { id: 'veryHard', label: 'קשה מאוד', emoji: '🦅', description: 'כל האותיות (5)' },
  ],
};

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate items based on mode and difficulty
 */
function generateItems(mode, difficulty) {
  if (mode === 'numbers') {
    switch (difficulty) {
      case 'easy':
        // 1-5
        return [1, 2, 3, 4, 5].map(n => ({ value: n, display: String(n), sortKey: n }));
      case 'medium': {
        // 5 numbers from 1-10 with some missing
        const pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const selected = shuffleArray(pool).slice(0, 5).sort((a, b) => a - b);
        return selected.map(n => ({ value: n, display: String(n), sortKey: n }));
      }
      case 'hard': {
        // Single digits 1-9 + round numbers 10,20,...100 → pick 5
        const singles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const rounds = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const pool = [...singles, ...rounds];
        const selected = shuffleArray(pool).slice(0, 5).sort((a, b) => a - b);
        return selected.map(n => ({ value: n, display: String(n), sortKey: n }));
      }
      case 'veryHard': {
        // 5 random numbers from 1-100
        const nums = new Set();
        while (nums.size < 5) {
          nums.add(Math.floor(Math.random() * 100) + 1);
        }
        const selected = [...nums].sort((a, b) => a - b);
        return selected.map(n => ({ value: n, display: String(n), sortKey: n }));
      }
      default:
        return [1, 2, 3, 4, 5].map(n => ({ value: n, display: String(n), sortKey: n }));
    }
  } else {
    // Letters mode
    switch (difficulty) {
      case 'easy':
        // First 5 letters: א ב ג ד ה
        return HEBREW_LETTERS.slice(0, 5).map((l, i) => ({ value: l, display: l, sortKey: i }));
      case 'medium': {
        // 5 letters from first 10 with gaps
        const pool = HEBREW_LETTERS.slice(0, 10);
        const indices = shuffleArray([...Array(10).keys()]).slice(0, 5).sort((a, b) => a - b);
        return indices.map(i => ({ value: pool[i], display: pool[i], sortKey: i }));
      }
      case 'hard': {
        // 5 letters from first 15
        const pool = HEBREW_LETTERS.slice(0, 15);
        const indices = shuffleArray([...Array(15).keys()]).slice(0, 5).sort((a, b) => a - b);
        return indices.map(i => ({ value: pool[i], display: pool[i], sortKey: i }));
      }
      case 'veryHard': {
        // 5 letters from all 22
        const indices = shuffleArray([...Array(22).keys()]).slice(0, 5).sort((a, b) => a - b);
        return indices.map(i => ({ value: HEBREW_LETTERS[i], display: HEBREW_LETTERS[i], sortKey: i }));
      }
      default:
        return HEBREW_LETTERS.slice(0, 5).map((l, i) => ({ value: l, display: l, sortKey: i }));
    }
  }
}

function SortGame({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [mode, setMode] = useState('numbers');
  const [difficulty, setDifficulty] = useState('easy');
  const [items, setItems] = useState([]); // The correct sorted items
  const [shuffledItems, setShuffledItems] = useState([]); // Items in tray (shuffled)
  const [placed, setPlaced] = useState([]); // Placed items in drop zone
  const [selectedItem, setSelectedItem] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(0);
  const [stars, setStars] = useState(0);
  const [wrongFlash, setWrongFlash] = useState(false);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete } = useAudio();

  const startGame = useCallback(() => {
    const generated = generateItems(mode, difficulty);
    setItems(generated);
    setShuffledItems(shuffleArray([...generated]));
    setPlaced([]);
    setSelectedItem(null);
    setWrongAttempts(0);
    setPhase('playing');
  }, [mode, difficulty]);

  const handleItemClick = useCallback((item) => {
    if (phase !== 'playing') return;

    // If already placed, ignore
    if (placed.find(p => p.value === item.value)) return;

    setSelectedItem(item.value === selectedItem ? null : item.value);
  }, [phase, placed, selectedItem]);

  const handleSlotClick = useCallback((slotIdx) => {
    if (selectedItem === null) return;
    if (placed[slotIdx]) return; // Already filled

    // The next slot to fill should be the leftmost empty one
    const nextEmptyIdx = placed.length;
    if (slotIdx !== nextEmptyIdx) return;

    const item = shuffledItems.find(i => i.value === selectedItem);
    if (!item) return;

    // Check if this is the correct next item in sorted order
    const correctItem = items[nextEmptyIdx];

    if (item.value === correctItem.value) {
      // Correct!
      playCorrect();
      const newPlaced = [...placed, item];
      setPlaced(newPlaced);
      setSelectedItem(null);

      // Check if all items placed
      if (newPlaced.length === items.length) {
        const newRounds = roundsCompleted + 1;
        setRoundsCompleted(newRounds);

        if (newRounds >= 3) {
          // Game complete after 3 rounds
          const gameStars = wrongAttempts === 0 ? 3 : wrongAttempts <= 5 ? 2 : 1;
          setStars(gameStars);
          setTimeout(() => {
            setPhase('ended');
            playComplete();
            addScore(gameStars * 16);
            recordGamePlayed(game.id, gameStars * 16, gameStars);
          }, 600);
        } else {
          // Generate next round
          setTimeout(() => {
            const newItems = generateItems(mode, difficulty);
            setItems(newItems);
            setShuffledItems(shuffleArray([...newItems]));
            setPlaced([]);
            setSelectedItem(null);
          }, 800);
        }
      }
    } else {
      // Wrong!
      playWrong();
      setWrongAttempts(prev => prev + 1);
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 400);
    }
  }, [selectedItem, placed, items, shuffledItems, roundsCompleted, wrongAttempts, mode, difficulty, playCorrect, playWrong, playComplete, addScore, recordGamePlayed, game.id]);

  const handlePlayAgain = () => {
    setPhase('waiting');
    setRoundsCompleted(0);
    setWrongAttempts(0);
  };

  const currentDifficulties = DIFFICULTIES[mode] || DIFFICULTIES.numbers;

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && (
          <>
            <div className={styles.infoDisplay}>
              {mode === 'numbers' ? '🔢' : 'אב'} סיבוב {roundsCompleted + 1}/3
            </div>
            <div className={styles.scoreDisplay}>❌ {wrongAttempts}</div>
          </>
        )}
      </div>

      {/* Game area */}
      {phase === 'playing' && (
        <div className={styles.gameArea}>
          <div className={styles.instruction}>
            {mode === 'numbers' ? '!סדרו את המספרים מהקטן לגדול' : '!סדרו את האותיות לפי הא"ב'}
          </div>

          {/* Drop zone */}
          <div className={styles.dropZone}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.dropSlot} ${placed[idx] ? styles.dropSlotFilled : ''} ${selectedItem !== null && idx === placed.length ? styles.dropSlotHighlight : ''}`}
                onClick={() => handleSlotClick(idx)}
              >
                {placed[idx] ? (
                  <span className={styles.dropSlotContent}>{placed[idx].display}</span>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
            ))}
          </div>

          <div className={styles.arrowHint}>⬆️</div>

          {/* Items to sort */}
          <div className={`${styles.itemsArea} ${wrongFlash ? styles.wrongFlash : ''}`}>
            {shuffledItems.map((item, idx) => {
              const isPlaced = placed.find(p => p.value === item.value);
              return (
                <div
                  key={`${item.value}-${idx}`}
                  className={`${styles.sortItem} ${selectedItem === item.value ? styles.sortItemSelected : ''} ${isPlaced ? styles.sortItemCorrect : ''}`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.display}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🔢</div>
          <div className={styles.startText}>!סדרו בסדר</div>
          <div className={styles.startSubtext}>סדרו מספרים או אותיות בסדר הנכון</div>

          {/* Mode selector */}
          <div className={styles.modeSelector}>
            {Object.entries(MODES).map(([key, m]) => (
              <button
                key={key}
                className={`${styles.modeBtn} ${mode === key ? styles.modeBtnActive : ''}`}
                onClick={() => { setMode(key); setDifficulty('easy'); }}
              >
                <span className={styles.modeIcon}>{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          {/* Difficulty selector */}
          <div className={styles.diffSelector}>
            {currentDifficulties.map(d => (
              <button
                key={d.id}
                className={`${styles.diffBtn} ${difficulty === d.id ? styles.diffBtnActive : ''}`}
                onClick={() => setDifficulty(d.id)}
              >
                {d.emoji} {d.label}
              </button>
            ))}
          </div>

          <button className={styles.startBtn} onClick={startGame}>
            !יאללה 🚀
          </button>
        </div>
      )}

      {/* End overlay */}
      {phase === 'ended' && (
        <div className={styles.endOverlay}>
          <div className={styles.endText}>!כל הכבוד 🎉</div>
          <div className={styles.endScore}>סיימתם 3 סיבובים עם {wrongAttempts} טעויות!</div>
          <div className={styles.endStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          <button className={styles.endBtn} onClick={handlePlayAgain}>🔄 שחקו שוב</button>
          <button className={styles.endBtnSecondary} onClick={onClose}>🏠 חזרה</button>
        </div>
      )}
    </div>
  );
}

export default SortGame;
