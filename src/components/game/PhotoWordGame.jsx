import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import { photoWordsList } from '../../data/games/photoWords';
import { shuffleArray } from '../../utils/shuffle';
import styles from './PhotoWordGame.module.css';

const ALPHABET = [
  'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י',
  'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת',
];
const TILE_COUNT = 12;
const BLUR_START = 24;
const INTRO_AUDIO = '/audio/photo-intro.mp3';
const CONFETTI_COLORS = ['#FFD700', '#FF6B9D', '#00CEC9', '#6C5CE7', '#2ECC71', '#FF9F43'];

function buildTiles(letters) {
  const distractors = shuffleArray(ALPHABET.filter(l => !letters.includes(l)))
    .slice(0, Math.max(0, TILE_COUNT - letters.length));
  return shuffleArray([...letters, ...distractors].map((letter, i) => ({ id: `t${i}`, letter })));
}

function makeConfetti() {
  return Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2.5 + Math.random() * 2,
    size: 8 + Math.random() * 8,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  }));
}

function ModeToggle({ mode, onChange, big = false }) {
  return (
    <div className={`${styles.modeToggle} ${big ? styles.modeToggleBig : ''}`}>
      <button
        type="button"
        className={`${styles.modeBtn} ${mode === 'tap' ? styles.modeBtnActive : ''}`}
        onClick={() => onChange('tap')}
      >
        👆 לחיצה
      </button>
      <button
        type="button"
        className={`${styles.modeBtn} ${mode === 'drag' ? styles.modeBtnActive : ''}`}
        onClick={() => onChange('drag')}
      >
        ✋ גרירה
      </button>
    </div>
  );
}

function PhotoWordGame({ game, onClose }) {
  const [phase, setPhase] = useState('intro'); // intro | playing | celebrate
  const [wordIndex, setWordIndex] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [placedIds, setPlacedIds] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [shakeId, setShakeId] = useState(null);
  const [confetti, setConfetti] = useState([]);
  const [inputMode, setInputModeState] = useState(() => {
    try { return localStorage.getItem('photoWordInputMode') || 'tap'; } catch { return 'tap'; }
  });

  const scoreRef = useRef(0);
  const dropRef = useRef(null);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete, playInstruction } = useAudio();

  const word = photoWordsList[wordIndex];
  const totalLetters = word.letters.length;
  const placedCount = placedIds.length;
  const stripWidth = 100 / totalLetters;
  const isLastWord = wordIndex === photoWordsList.length - 1;
  const wordStars = wrongCount === 0 ? 3 : wrongCount <= 2 ? 2 : 1;

  const setInputMode = (mode) => {
    setInputModeState(mode);
    try { localStorage.setItem('photoWordInputMode', mode); } catch { /* ignore */ }
  };

  const startWord = (idx) => {
    setTiles(buildTiles(photoWordsList[idx].letters));
    setPlacedIds([]);
    setWrongCount(0);
    setShakeId(null);
    setPhase('playing');
    playInstruction(photoWordsList[idx].nameAudio);
  };

  const handleStart = () => startWord(wordIndex);

  const playNameAudio = () => playInstruction(word.nameAudio);

  const tryPlace = (tile) => {
    if (phase !== 'playing' || placedIds.includes(tile.id)) return;

    const expected = word.letters[placedCount];
    if (tile.letter === expected) {
      playCorrect();
      const newPlaced = [...placedIds, tile.id];
      setPlacedIds(newPlaced);

      if (newPlaced.length === totalLetters) {
        const stars = wrongCount === 0 ? 3 : wrongCount <= 2 ? 2 : 1;
        scoreRef.current += stars * 16;
        if (isLastWord) {
          addScore(scoreRef.current);
          recordGamePlayed(game.id, scoreRef.current, stars);
        }
        // Let the final un-blur reveal breathe, then celebrate
        setTimeout(() => {
          setConfetti(makeConfetti());
          setPhase('celebrate');
          playInstruction(word.nameAudio);
        }, 1200);
        setTimeout(() => playComplete(), 2600);
      }
    } else {
      // Mistake: nothing changes - just sound + a little shake
      playWrong();
      setWrongCount(c => c + 1);
      setShakeId(tile.id);
      setTimeout(() => setShakeId(null), 500);
    }
  };

  const handleDragEnd = (tile, info) => {
    const rect = dropRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = info.point.x - window.scrollX;
    const y = info.point.y - window.scrollY;
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      tryPlace(tile);
    }
  };

  const handleNextWord = () => {
    const next = wordIndex + 1;
    setWordIndex(next);
    startWord(next);
  };

  const handlePlayAgain = () => {
    scoreRef.current = 0;
    setWordIndex(0);
    startWord(0);
  };

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && <ModeToggle mode={inputMode} onChange={setInputMode} />}
        <button
          className={styles.soundBtn}
          onClick={() => (phase === 'intro' ? playInstruction(INTRO_AUDIO) : playNameAudio())}
        >
          🔊
        </button>
      </div>

      {/* Game area */}
      {phase !== 'intro' && (
        <div className={styles.gameArea}>
          <div className={styles.instructionRow}>
            <div className={styles.instruction}>מי מסתתר בתמונה? 📸</div>
            <button className={styles.nameAudioBtn} onClick={playNameAudio}>🔊 שמעו</button>
          </div>

          <div className={styles.photoCard} ref={dropRef}>
            <div className={styles.photoFrame}>
              {word.letters.map((_, i) => {
                // Strip 0 is the rightmost - strips clear right-to-left, one per letter
                const revealed = phase !== 'playing' || i < placedCount;
                return (
                  <div
                    key={i}
                    className={`${styles.strip} ${revealed ? styles.stripRevealed : ''} ${i > 0 ? styles.stripDivider : ''}`}
                    style={{ width: `${stripWidth}%`, right: `${i * stripWidth}%` }}
                  >
                    <img
                      src={word.image}
                      alt=""
                      draggable={false}
                      className={styles.stripPhoto}
                      style={{
                        width: `${totalLetters * 100}%`,
                        right: `${-i * 100}%`,
                        filter: revealed ? 'none' : `blur(${BLUR_START}px)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Letter slots (RTL - first letter on the right) */}
            <div className={styles.slotsRow}>
              {word.letters.map((_, i) => {
                const filled = i < placedCount;
                const isNext = i === placedCount && phase === 'playing';
                return (
                  <div
                    key={i}
                    className={`${styles.slot} ${filled ? styles.slotFilled : ''} ${isNext ? styles.slotNext : ''}`}
                  >
                    {filled && (
                      <motion.span
                        className={styles.slotLetter}
                        initial={{ scale: 0, y: -24 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      >
                        {word.displayLetters[i]}
                      </motion.span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Letter tiles */}
          <div className={styles.tilesArea}>
            {tiles.map(tile => {
              const used = placedIds.includes(tile.id);
              const draggable = inputMode === 'drag' && !used && phase === 'playing';
              return (
                <motion.button
                  type="button"
                  key={tile.id}
                  className={`${styles.tile} ${used ? styles.tileUsed : ''} ${shakeId === tile.id ? styles.tileShake : ''}`}
                  drag={draggable}
                  dragSnapToOrigin
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.25, zIndex: 60 }}
                  whileTap={!used && phase === 'playing' ? { scale: 0.85 } : undefined}
                  onDragEnd={draggable ? (e, info) => handleDragEnd(tile, info) : undefined}
                  onClick={inputMode === 'tap' ? () => tryPlace(tile) : undefined}
                  disabled={used}
                >
                  {tile.letter}
                </motion.button>
              );
            })}
          </div>
          {inputMode === 'drag' && phase === 'playing' && (
            <div className={styles.dragHint}>גררו את האות אל התמונה ⬆️</div>
          )}
        </div>
      )}

      {/* Intro overlay */}
      {phase === 'intro' && (
        <div className={styles.introOverlay}>
          <div className={styles.introIcon}>📸</div>
          <div className={styles.introTitle}>מי מסתתר בתמונה?</div>
          <div className={styles.introSubtext}>
            בחרו את האותיות של השם לפי הסדר<br />וכל אות נכונה תגלה את התמונה!
          </div>
          <ModeToggle mode={inputMode} onChange={setInputMode} big />
          <button className={styles.startBtn} onClick={handleStart}>יאללה! 🚀</button>
        </div>
      )}

      {/* Celebration overlay */}
      <AnimatePresence>
        {phase === 'celebrate' && (
          <motion.div
            className={styles.celebrateOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {confetti.map(c => (
              <span
                key={c.id}
                className={styles.confetti}
                style={{
                  left: `${c.left}%`,
                  width: c.size,
                  height: c.size,
                  backgroundColor: c.color,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.duration}s`,
                }}
              />
            ))}
            <motion.div
              className={styles.celebratePhotoWrap}
              initial={{ scale: 0.5, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <img src={word.image} alt="" draggable={false} className={styles.celebratePhoto} />
            </motion.div>
            <motion.div
              className={styles.celebrateName}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 15 }}
            >
              {word.fullName}!
            </motion.div>
            <div className={styles.celebrateStars}>
              {[1, 2, 3].map(s => (
                <span key={s} style={{ opacity: s <= wordStars ? 1 : 0.25 }}>⭐</span>
              ))}
            </div>
            <div className={styles.celebrateButtons}>
              {!isLastWord ? (
                <button className={styles.endBtn} onClick={handleNextWord}>לתמונה הבאה ⬅️</button>
              ) : (
                <button className={styles.endBtn} onClick={handlePlayAgain}>🔄 שחקו שוב</button>
              )}
              <button className={styles.endBtnSecondary} onClick={onClose}>🏠 חזרה</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhotoWordGame;
