import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import { playPop, playSparkle } from '../../utils/soundManager';
import styles from './BalloonPop.module.css';

const GAME_DURATION = 90; // seconds - long game with 3 intensity phases

const COLORS = [
  '#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77',
  '#4D96FF', '#A855F7', '#EC4899', '#F97316',
];

// Intensity ramps up as time passes: faster spawns, faster balloons
const INTENSITY = {
  1: { spawnMs: 800, minDur: 3.6, maxDur: 5.4 }, // 0-30s calm
  2: { spawnMs: 600, minDur: 3.0, maxDur: 4.4 }, // 30-60s faster
  3: { spawnMs: 430, minDur: 2.4, maxDur: 3.6 }, // 60-90s frenzy
};

// Special balloon types: golden (+5), rainbow (pops everything), heart (+5s)
function rollBalloonType() {
  const roll = Math.random();
  if (roll < 0.04) return 'rainbow';
  if (roll < 0.12) return 'golden';
  if (roll < 0.17) return 'heart';
  return 'normal';
}

let effectIdCounter = 0;

function BalloonPop({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [balloons, setBalloons] = useState([]);
  const [stars, setStars] = useState(0);
  const [effects, setEffects] = useState([]); // pop bursts + floating score texts
  const [comboText, setComboText] = useState(null);
  const [milestoneText, setMilestoneText] = useState(null);
  const [rainbowFlash, setRainbowFlash] = useState(false);
  const balloonIdRef = useRef(0);
  const comboRef = useRef({ count: 0, last: 0 });
  const comboTimerRef = useRef(null);
  const prevScoreRef = useRef(0);

  const { addScore, recordGamePlayed } = useUser();
  const { playComplete } = useAudio();

  // Time-based phase: day -> sunset -> night + spawn intensity
  const intensity = phase === 'playing' ? (timeLeft > 60 ? 1 : timeLeft > 30 ? 2 : 3) : 1;
  const bgClass = phase === 'playing' || phase === 'ended'
    ? (intensity === 1 ? styles.bgDay : intensity === 2 ? styles.bgSunset : styles.bgNight)
    : styles.bgDay;

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
      const gameStars = score >= 60 ? 3 : score >= 35 ? 2 : 1;
      setStars(gameStars);
      setPhase('ended');
      playComplete();
      addScore(gameStars * 16);
      recordGamePlayed(game.id, gameStars * 16, gameStars);
    }
  }, [timeLeft, phase, score]); // eslint-disable-line react-hooks/exhaustive-deps

  // Spawn balloons (interval re-created when intensity changes)
  useEffect(() => {
    if (phase !== 'playing') return;
    const cfg = INTENSITY[intensity];

    const spawner = setInterval(() => {
      const id = balloonIdRef.current++;
      const type = rollBalloonType();
      const x = 10 + Math.random() * 80;
      const baseSize = 50 + Math.random() * 30;
      const size = type === 'golden' ? baseSize * 0.8 : baseSize;
      let speed = cfg.minDur + Math.random() * (cfg.maxDur - cfg.minDur);
      if (type === 'golden') speed *= 0.75; // golden flies faster
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const wobble = 8 + Math.random() * 15;

      setBalloons(prev => [...prev, { id, x, size, speed, color, wobble, type }]);

      // Auto-remove after animation completes
      setTimeout(() => {
        setBalloons(prev => prev.filter(b => b.id !== id));
      }, speed * 1000 + 200);
    }, cfg.spawnMs);

    return () => clearInterval(spawner);
  }, [phase, intensity]);

  // Milestone flash every 10 pops (handles +5 jumps crossing a decade)
  useEffect(() => {
    if (phase !== 'playing') return;
    if (Math.floor(score / 10) > Math.floor(prevScoreRef.current / 10)) {
      const decade = Math.floor(score / 10) * 10;
      setMilestoneText(`${decade}! 🎉`);
      playSparkle();
      const t = setTimeout(() => setMilestoneText(null), 900);
      prevScoreRef.current = score;
      return () => clearTimeout(t);
    }
    prevScoreRef.current = score;
  }, [score, phase]);

  // Cleanup combo timer on unmount
  useEffect(() => () => {
    if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
  }, []);

  // Spawn a visual effect (burst / floating text) at screen coords
  const spawnEffect = useCallback((kind, x, y, extra = {}) => {
    const id = `fx-${effectIdCounter++}`;
    setEffects(prev => [...prev, { id, kind, x, y, ...extra }]);
    setTimeout(() => {
      setEffects(prev => prev.filter(fx => fx.id !== id));
    }, 800);
  }, []);

  // Combo tracking - pops within 1.5s chain up
  const trackCombo = useCallback(() => {
    const now = Date.now();
    if (now - comboRef.current.last < 1500) {
      comboRef.current.count += 1;
    } else {
      comboRef.current.count = 1;
    }
    comboRef.current.last = now;
    if (comboRef.current.count >= 3) {
      setComboText(`קומבו x${comboRef.current.count}!`);
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => setComboText(null), 800);
      if (comboRef.current.count % 5 === 0) playSparkle();
    }
  }, []);

  const handlePop = useCallback((e, balloon) => {
    e.stopPropagation();
    // Effect position = tapped balloon center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (balloon.type === 'rainbow') {
      // Rainbow pops EVERYTHING on screen
      playSparkle();
      setRainbowFlash(true);
      setTimeout(() => setRainbowFlash(false), 500);
      const count = balloons.length;
      setBalloons([]);
      setScore(prev => prev + count);
      spawnEffect('text', x, y, { text: `+${count}`, color: '#FFD700' });
      trackCombo();
      return;
    }

    playPop();
    setBalloons(prev => prev.filter(b => b.id !== balloon.id));
    spawnEffect('burst', x, y, { color: balloon.color });

    if (balloon.type === 'golden') {
      playSparkle();
      setScore(prev => prev + 5);
      spawnEffect('text', x, y - 20, { text: '+5', color: '#FFD700' });
    } else if (balloon.type === 'heart') {
      playSparkle();
      setScore(prev => prev + 1);
      setTimeLeft(prev => Math.min(prev + 5, 99));
      spawnEffect('text', x, y - 20, { text: '+5 ⏱️', color: '#FF6B9D' });
    } else {
      setScore(prev => prev + 1);
      spawnEffect('text', x, y - 20, { text: '+1', color: '#FFFFFF' });
    }
    trackCombo();
  }, [balloons, spawnEffect, trackCombo]);

  const handleStart = () => {
    setPhase('playing');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBalloons([]);
    setEffects([]);
    setStars(0);
    balloonIdRef.current = 0;
    comboRef.current = { count: 0, last: 0 };
    prevScoreRef.current = 0;
  };

  const handlePlayAgain = () => {
    setPhase('waiting');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBalloons([]);
    setEffects([]);
  };

  // Balloon SVG per type
  const renderBalloonSvg = (balloon) => {
    const { size, color, type, id } = balloon;
    const gradId = `rb-grad-${id}`;
    return (
      <svg width={size} height={size * 1.3} viewBox="0 0 50 65">
        {type === 'rainbow' && (
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="25%" stopColor="#FFD93D" />
              <stop offset="50%" stopColor="#6BCB77" />
              <stop offset="75%" stopColor="#4D96FF" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        )}
        <ellipse
          cx="25" cy="25" rx="22" ry="25"
          fill={type === 'rainbow' ? `url(#${gradId})` : type === 'golden' ? '#FFD700' : type === 'heart' ? '#FF6B9D' : color}
        />
        <ellipse cx="18" cy="18" rx="6" ry="8" fill="rgba(255,255,255,0.35)" transform="rotate(-20 18 18)" />
        <polygon points="25,50 22,55 28,55" fill={type === 'golden' ? '#FFD700' : type === 'heart' ? '#FF6B9D' : type === 'rainbow' ? '#A855F7' : color} />
        <line x1="25" y1="55" x2="25" y2="65" stroke="#999" strokeWidth="1.5" />
        {type === 'golden' && <text x="25" y="32" textAnchor="middle" fontSize="20">⭐</text>}
        {type === 'heart' && <text x="25" y="32" textAnchor="middle" fontSize="18">💗</text>}
        {type === 'rainbow' && <text x="25" y="32" textAnchor="middle" fontSize="18">🌈</text>}
      </svg>
    );
  };

  return (
    <div className={`${styles.container} ${bgClass}`}>
      {/* Clouds decoration (dimmed at night via CSS) */}
      <div className={styles.cloud} style={{ top: '10%', animationDelay: '0s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '25%', animationDelay: '-7s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '5%', animationDelay: '-14s' }}>☁️</div>

      {/* Night stars */}
      {intensity === 3 && phase === 'playing' && (
        <>
          <div className={styles.nightStar} style={{ top: '12%', left: '15%' }}>✦</div>
          <div className={styles.nightStar} style={{ top: '8%', left: '70%', animationDelay: '-1s' }}>✦</div>
          <div className={styles.nightStar} style={{ top: '22%', left: '45%', animationDelay: '-2s' }}>✦</div>
          <div className={styles.nightStar} style={{ top: '30%', left: '85%', animationDelay: '-0.5s' }}>✦</div>
        </>
      )}

      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && (
          <>
            <div className={styles.scoreDisplay}>🎈 {score}</div>
            <div className={`${styles.timerDisplay} ${timeLeft <= 10 ? styles.timerUrgent : ''}`}>
              ⏱️ {timeLeft}
            </div>
          </>
        )}
      </div>

      {/* Balloons - Framer Motion handles smooth GPU-accelerated animation */}
      <AnimatePresence>
        {phase === 'playing' && balloons.map(balloon => (
          <motion.div
            key={balloon.id}
            className={styles.balloon}
            style={{ left: `${balloon.x}%` }}
            initial={{ y: 0 }}
            animate={{
              y: -(window.innerHeight + 160),
              x: [0, balloon.wobble, 0, -balloon.wobble, 0],
            }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              y: { duration: balloon.speed, ease: 'linear' },
              x: { duration: balloon.speed * 0.4, ease: 'easeInOut', repeat: Infinity },
              exit: { duration: 0.2 },
            }}
            onClick={(e) => handlePop(e, balloon)}
            onTouchStart={(e) => { e.preventDefault(); handlePop(e, balloon); }}
          >
            {renderBalloonSvg(balloon)}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Pop effects: particle bursts + floating score texts */}
      {effects.map(fx => (
        fx.kind === 'burst' ? (
          <div key={fx.id} className={styles.burst} style={{ left: fx.x, top: fx.y }}>
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.5;
              const dist = 30 + Math.random() * 35;
              return (
                <span
                  key={i}
                  className={styles.shard}
                  style={{
                    backgroundColor: fx.color,
                    '--dx': `${Math.cos(angle) * dist}px`,
                    '--dy': `${Math.sin(angle) * dist}px`,
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div key={fx.id} className={styles.floatText} style={{ left: fx.x, top: fx.y, color: fx.color }}>
            {fx.text}
          </div>
        )
      ))}

      {/* Rainbow full-screen flash */}
      {rainbowFlash && <div className={styles.rainbowFlash} />}

      {/* Combo + milestone flashes */}
      {comboText && <div className={styles.comboFlash}>{comboText}</div>}
      {milestoneText && <div className={styles.milestoneFlash}>{milestoneText}</div>}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🎈</div>
          <div className={styles.startText}>פוצצו בלונים!</div>
          <div className={styles.startSubtext}>לחצו על הבלונים לפני שהם עפים!</div>
          <div className={styles.legend}>
            <span>⭐ זהב = 5 נקודות</span>
            <span>🌈 קשת = מפוצץ הכל!</span>
            <span>💗 לב = עוד זמן</span>
          </div>
          <button className={styles.startBtn} onClick={handleStart}>
            !יאללה 🎯
          </button>
        </div>
      )}

      {/* End overlay */}
      {phase === 'ended' && (
        <div className={styles.endOverlay}>
          <div className={styles.fireworks}>
            <span style={{ animationDelay: '0s' }}>🎆</span>
            <span style={{ animationDelay: '0.4s' }}>🎇</span>
            <span style={{ animationDelay: '0.8s' }}>🎆</span>
          </div>
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
