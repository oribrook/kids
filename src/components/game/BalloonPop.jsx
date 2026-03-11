import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './BalloonPop.module.css';

const BALLOON_COLORS = ['🎈'];
const BALLOON_EMOJIS = ['🎈', '🟡', '🔵', '🟢', '🟣', '🟠'];
const GAME_DURATION = 30; // seconds
const SPAWN_INTERVAL = 800; // ms between balloons

// Generate a colored balloon SVG-like element
const COLORS = [
  '#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77',
  '#4D96FF', '#A855F7', '#EC4899', '#F97316',
];

function BalloonPop({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [balloons, setBalloons] = useState([]);
  const [pops, setPops] = useState([]);
  const [stars, setStars] = useState(0);
  const balloonIdRef = useRef(0);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playComplete } = useAudio();

  // Timer countdown
  useEffect(() => {
    if (phase !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  // End game when time runs out
  useEffect(() => {
    if (phase === 'playing' && timeLeft === 0) {
      const gameStars = score >= 25 ? 3 : score >= 15 ? 2 : 1;
      setStars(gameStars);
      setPhase('ended');
      playComplete();
      addScore(gameStars * 16);
      recordGamePlayed(game.id, gameStars * 16, gameStars);
    }
  }, [timeLeft, phase, score]);

  // Spawn balloons
  useEffect(() => {
    if (phase !== 'playing') return;

    const spawner = setInterval(() => {
      const id = balloonIdRef.current++;
      const x = 10 + Math.random() * 80; // % from left
      const size = 50 + Math.random() * 30;
      const speed = 1.5 + Math.random() * 2; // seconds to float up
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const wobble = Math.random() * 20 - 10;

      setBalloons(prev => [...prev, {
        id,
        x,
        size,
        speed,
        color,
        wobble,
        createdAt: Date.now(),
      }]);
    }, SPAWN_INTERVAL);

    return () => clearInterval(spawner);
  }, [phase]);

  // Clean up old balloons that floated off screen
  useEffect(() => {
    if (phase !== 'playing') return;

    const cleaner = setInterval(() => {
      const now = Date.now();
      setBalloons(prev => prev.filter(b => now - b.createdAt < (b.speed + 1) * 1000));
    }, 2000);

    return () => clearInterval(cleaner);
  }, [phase]);

  // Clean up pop effects
  useEffect(() => {
    if (pops.length === 0) return;
    const timer = setTimeout(() => {
      setPops(prev => prev.slice(1));
    }, 500);
    return () => clearTimeout(timer);
  }, [pops]);

  const handlePop = useCallback((e, balloon) => {
    e.stopPropagation();

    // Add pop effect
    setPops(prev => [...prev, {
      id: balloon.id,
      x: balloon.x,
      y: e.clientY,
    }]);

    // Remove balloon
    setBalloons(prev => prev.filter(b => b.id !== balloon.id));

    // Increment score
    setScore(prev => prev + 1);
    playCorrect();
  }, [playCorrect]);

  const handleStart = () => {
    setPhase('playing');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBalloons([]);
    balloonIdRef.current = 0;
  };

  const handlePlayAgain = () => {
    setPhase('waiting');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBalloons([]);
    setPops([]);
  };

  return (
    <div className={styles.container}>
      {/* Clouds decoration */}
      <div className={styles.cloud} style={{ top: '10%', animationDelay: '0s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '25%', animationDelay: '-7s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '5%', animationDelay: '-14s' }}>☁️</div>

      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && (
          <>
            <div className={styles.scoreDisplay}>🎈 {score}</div>
            <div className={styles.timerDisplay}>⏱️ {timeLeft}</div>
          </>
        )}
      </div>

      {/* Balloons */}
      {phase === 'playing' && balloons.map(balloon => (
          <div
            key={balloon.id}
            className={styles.balloon}
            style={{
              left: `${balloon.x}%`,
              '--float-duration': `${balloon.speed}s`,
              '--wobble-amount': `${balloon.wobble}px`,
            }}
            onClick={(e) => handlePop(e, balloon)}
            onTouchStart={(e) => { e.preventDefault(); handlePop(e, balloon); }}
          >
            <svg width={balloon.size} height={balloon.size * 1.3} viewBox="0 0 50 65">
              <ellipse cx="25" cy="25" rx="22" ry="25" fill={balloon.color} />
              <ellipse cx="18" cy="18" rx="6" ry="8" fill="rgba(255,255,255,0.3)" transform="rotate(-20 18 18)" />
              <polygon points="25,50 22,55 28,55" fill={balloon.color} />
              <line x1="25" y1="55" x2="25" y2="65" stroke="#999" strokeWidth="1.5" />
            </svg>
          </div>
      ))}

      {/* Pop effects */}
      {pops.map(pop => (
        <div
          key={pop.id}
          className={styles.popEffect}
          style={{ left: `${pop.x}%`, top: `${pop.y}px` }}
        >
          💥
        </div>
      ))}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🎈</div>
          <div className={styles.startText}>פוצצו בלונים!</div>
          <div className={styles.startSubtext}>לחצו על הבלונים לפני שהם עפים!</div>
          <button className={styles.startBtn} onClick={handleStart}>
            !יאללה 🎯
          </button>
        </div>
      )}

      {/* End overlay */}
      {phase === 'ended' && (
        <div className={styles.endOverlay}>
          <div className={styles.endText}>כל הכבוד! 🎉</div>
          <div className={styles.endScore}>פוצצתם {score} בלונים!</div>
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

export default BalloonPop;
