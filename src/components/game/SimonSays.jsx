import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './SimonSays.module.css';

const COLORS = [
  { id: 0, color: '#FF6B6B', activeColor: '#FF9B9B', label: '🔴' },
  { id: 1, color: '#4D96FF', activeColor: '#7DB4FF', label: '🔵' },
  { id: 2, color: '#6BCB77', activeColor: '#9BDBA3', label: '🟢' },
  { id: 3, color: '#FFD93D', activeColor: '#FFE66D', label: '🟡' },
];

// Simple tone frequencies for each button
const TONES = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5

function playTone(freq, duration = 300) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration / 1000);
    setTimeout(() => ctx.close(), duration + 100);
  } catch (e) {
    // Silently fail if audio not supported
  }
}

function SimonSays({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | showing | playerTurn | ended
  const [sequence, setSequence] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [round, setRound] = useState(0);
  const [bestRound, setBestRound] = useState(0);
  const [stars, setStars] = useState(0);
  const showingRef = useRef(false);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete } = useAudio();

  // Show sequence to player
  const showSequence = useCallback(async (seq) => {
    showingRef.current = true;
    setPhase('showing');

    // Brief pause before starting
    await new Promise(r => setTimeout(r, 600));

    for (let i = 0; i < seq.length; i++) {
      if (!showingRef.current) return;
      const btnId = seq[i];
      setActiveButton(btnId);
      playTone(TONES[btnId], 400);
      await new Promise(r => setTimeout(r, 500));
      setActiveButton(null);
      await new Promise(r => setTimeout(r, 200));
    }

    showingRef.current = false;
    setPhase('playerTurn');
    setPlayerIndex(0);
  }, []);

  // Start new game
  const handleStart = useCallback(() => {
    const firstColor = Math.floor(Math.random() * 4);
    const newSeq = [firstColor];
    setSequence(newSeq);
    setRound(1);
    setPlayerIndex(0);
    showSequence(newSeq);
  }, [showSequence]);

  // Add next color and show
  const nextRound = useCallback((currentSeq) => {
    const nextColor = Math.floor(Math.random() * 4);
    const newSeq = [...currentSeq, nextColor];
    setSequence(newSeq);
    setRound(newSeq.length);
    setPlayerIndex(0);
    showSequence(newSeq);
  }, [showSequence]);

  // Player taps a button
  const handleButtonPress = useCallback((btnId) => {
    if (phase !== 'playerTurn') return;

    // Flash the button
    setActiveButton(btnId);
    playTone(TONES[btnId], 300);
    setTimeout(() => setActiveButton(null), 200);

    // Check if correct
    if (btnId === sequence[playerIndex]) {
      // Correct!
      const nextIdx = playerIndex + 1;

      if (nextIdx >= sequence.length) {
        // Completed the sequence! Next round
        playCorrect();
        setBestRound(Math.max(bestRound, sequence.length));
        setTimeout(() => nextRound(sequence), 800);
      } else {
        setPlayerIndex(nextIdx);
      }
    } else {
      // Wrong! Game over
      playWrong();
      const finalRound = Math.max(round - 1, 0);
      const gameStars = finalRound >= 8 ? 3 : finalRound >= 4 ? 2 : finalRound >= 1 ? 1 : 0;
      setStars(gameStars);
      setBestRound(Math.max(bestRound, finalRound));
      setPhase('ended');

      if (gameStars > 0) {
        setTimeout(() => {
          playComplete();
          addScore(gameStars * 16);
          recordGamePlayed(game.id, gameStars * 16, gameStars);
        }, 500);
      }
    }
  }, [phase, sequence, playerIndex, round, bestRound, playCorrect, playWrong, playComplete, nextRound, addScore, recordGamePlayed, game.id]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      showingRef.current = false;
    };
  }, []);

  const handlePlayAgain = () => {
    setPhase('waiting');
    setSequence([]);
    setRound(0);
    setPlayerIndex(0);
    setActiveButton(null);
  };

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase !== 'waiting' && (
          <>
            <div className={styles.roundDisplay}>סיבוב {round}</div>
            <div className={styles.scoreDisplay}>🏆 {bestRound}</div>
          </>
        )}
      </div>

      {/* Game area */}
      <div className={styles.gameArea}>
        <div className={styles.statusText}>
          {phase === 'showing' && '👀 !הסתכלו'}
          {phase === 'playerTurn' && '👆 !תורכם'}
        </div>

        <div className={styles.buttonsGrid}>
          {COLORS.map(btn => (
            <button
              key={btn.id}
              className={`${styles.simonBtn} ${activeButton === btn.id ? styles.simonBtnActive : ''} ${phase !== 'playerTurn' ? styles.simonBtnDisabled : ''}`}
              style={{
                backgroundColor: activeButton === btn.id ? btn.activeColor : btn.color,
                color: btn.color,
              }}
              onClick={() => handleButtonPress(btn.id)}
              disabled={phase !== 'playerTurn'}
            />
          ))}
        </div>
      </div>

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🔴🔵🟢🟡</div>
          <div className={styles.startText}>!שמעון אומר</div>
          <div className={styles.startSubtext}>זכרו את סדר הצבעים ולחצו באותו סדר!</div>
          <button className={styles.startBtn} onClick={handleStart}>
            !התחילו 🧠
          </button>
        </div>
      )}

      {/* End overlay */}
      {phase === 'ended' && (
        <div className={styles.endOverlay}>
          <div className={styles.endText}>{round > 1 ? 'כל הכבוד! 🎉' : '!נסו שוב 💪'}</div>
          <div className={styles.endScore}>הגעתם לסיבוב {round}!</div>
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

export default SimonSays;
