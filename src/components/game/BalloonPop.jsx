import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './BalloonPop.module.css';

const GAME_DURATION = 30; // seconds
const SPAWN_INTERVAL = 800; // ms between balloons

const COLORS = [
  '#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77',
  '#4D96FF', '#A855F7', '#EC4899', '#F97316',
];

function BalloonPop({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [pops, setPops] = useState([]);
  const [stars, setStars] = useState(0);
  const [, forceRender] = useState(0);
  const balloonIdRef = useRef(0);
  const balloonsRef = useRef([]);
  const rafRef = useRef(null);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playComplete } = useAudio();

  // Animation loop - runs every frame for smooth movement
  useEffect(() => {
    if (phase !== 'playing') return;

    const animate = () => {
      const now = Date.now();
      let changed = false;
      const before = balloonsRef.current.length;
      balloonsRef.current = balloonsRef.current.filter(b => {
        const elapsed = (now - b.createdAt) / 1000;
        return elapsed < b.speed + 0.5;
      });
      if (balloonsRef.current.length !== before) changed = true;
      if (changed) forceRender(v => v + 1);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase]);

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
      balloonsRef.current = [...balloonsRef.current, {
        id,
        x: 10 + Math.random() * 80,
        size: 50 + Math.random() * 30,
        speed: 2.5 + Math.random() * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        wobble: Math.random() * 20 - 10,
        createdAt: Date.now(),
      }];
      forceRender(v => v + 1);
    }, SPAWN_INTERVAL);

    return () => clearInterval(spawner);
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

    setPops(prev => [...prev, {
      id: balloon.id,
      x: balloon.x,
      y: e.clientY,
    }]);

    balloonsRef.current = balloonsRef.current.filter(b => b.id !== balloon.id);
    setScore(prev => prev + 1);
    playCorrect();
  }, [playCorrect]);

  const handleStart = () => {
    setPhase('playing');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    balloonsRef.current = [];
    balloonIdRef.current = 0;
  };

  const handlePlayAgain = () => {
    setPhase('waiting');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    balloonsRef.current = [];
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
      {phase === 'playing' && balloonsRef.current.map(balloon => {
        const elapsed = (Date.now() - balloon.createdAt) / 1000;
        const progress = Math.min(elapsed / balloon.speed, 1);
        const totalDistance = window.innerHeight + 140;
        const translateY = -progress * totalDistance;
        const wobbleX = Math.sin(elapsed * 3) * balloon.wobble;

        return (
          <div
            key={balloon.id}
            className={styles.balloon}
            style={{
              left: `${balloon.x}%`,
              transform: `translateY(${translateY}px) translateX(${wobbleX}px)`,
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
        );
      })}

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
