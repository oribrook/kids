import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import { playPop, playSparkle, playThud, playHeart, playBoom, playLevelUp, playGameOver } from '../../utils/soundManager';
import styles from './FastBalloon.module.css';

// Fast Balloon - ENDLESS balloon popping with lives:
// - No timer. Starts SLOW, speeds up every 15 seconds - forever.
// - 💣 bomb balloons must NOT be touched (tap = -1 life).
// - Every 5 escaped (missed) balloons = -1 life.
// - Every 5 popped balloons = +1 life (up to 3).
// - Game ends when hearts run out.

const MAX_LIVES = 3;
const POPS_PER_LIFE = 5;    // every 5 pops -> +1 life
const MISSES_PER_LIFE = 5;  // every 5 missed balloons -> -1 life
const SPEEDUP_SECONDS = 15; // speed level up interval
const BOMBS_AFTER_SEC = 12; // calm intro: no bombs in the first seconds

const COLORS = [
  '#FF6B6B', '#FF8E53', '#FFD93D', '#6BCB77',
  '#4D96FF', '#A855F7', '#EC4899', '#F97316',
];

// Speed level -> spawn interval + float duration (no cap: eventually impossible)
function speedConfig(lvl) {
  return {
    spawnMs: Math.max(260, Math.round(1500 * Math.pow(0.85, lvl - 1))),
    minDur: Math.max(1.3, 7.0 * Math.pow(0.88, lvl - 1)),
    maxDur: Math.max(1.8, 9.0 * Math.pow(0.88, lvl - 1)),
  };
}

function rollBalloonType(elapsedSec) {
  const roll = Math.random();
  if (roll < 0.12) return elapsedSec >= BOMBS_AFTER_SEC ? 'bomb' : 'normal'; // 12% bombs (calm intro: none)
  if (roll < 0.15) return 'rainbow';   // 3%
  if (roll < 0.22) return 'golden';    // 7%
  if (roll < 0.26) return 'heart';     // 4%
  return 'normal';
}

let effectIdCounter = 0;

function FastBalloon({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [missCount, setMissCount] = useState(0);
  const [speedLevel, setSpeedLevel] = useState(1);
  const [balloons, setBalloons] = useState([]);
  const [stars, setStars] = useState(0);
  const [effects, setEffects] = useState([]); // pop bursts + floating texts
  const [comboText, setComboText] = useState(null);
  const [milestoneText, setMilestoneText] = useState(null);
  const [speedFlash, setSpeedFlash] = useState(false);
  const [rainbowFlash, setRainbowFlash] = useState(false);
  const [hurtFlash, setHurtFlash] = useState(false);
  const [shaking, setShaking] = useState(false);

  const balloonIdRef = useRef(0);
  const activeRef = useRef(new Map()); // id -> type, for miss detection
  const scoreRef = useRef(0);
  const livesRef = useRef(MAX_LIVES);
  const missRef = useRef(0);
  const popCountRef = useRef(0);
  const elapsedRef = useRef(0);
  const speedLevelRef = useRef(1);
  const overRef = useRef(false);
  const comboRef = useRef({ count: 0, last: 0 });
  const comboTimerRef = useRef(null);
  const prevScoreRef = useRef(0);

  const { addScore, recordGamePlayed } = useUser();
  const { playWrong, playComplete } = useAudio();

  // Background evolves with speed: day -> sunset -> night
  const bgClass = speedLevel >= 5 ? styles.bgNight : speedLevel >= 3 ? styles.bgSunset : styles.bgDay;

  // Spawn a visual effect (burst / boom / floating text) at screen coords
  const spawnEffect = useCallback((kind, x, y, extra = {}) => {
    const id = `fx-${effectIdCounter++}`;
    setEffects(prev => [...prev, { id, kind, x, y, ...extra }]);
    setTimeout(() => {
      setEffects(prev => prev.filter(fx => fx.id !== id));
    }, 800);
  }, []);

  // End the game (hearts ran out)
  const endGame = useCallback(() => {
    if (overRef.current) return;
    overRef.current = true;
    const finalScore = scoreRef.current;
    const gameStars = finalScore >= 50 ? 3 : finalScore >= 25 ? 2 : 1;
    setStars(gameStars);
    setBalloons([]);
    activeRef.current.clear();
    setPhase('ended');
    playGameOver();
    setTimeout(() => playComplete(), 700);
    addScore(gameStars * 16);
    recordGamePlayed(game.id, gameStars * 16, gameStars);
  }, [addScore, recordGamePlayed, game.id, playComplete]);

  // Lose one life (bomb tap / 5 misses)
  const loseLife = useCallback(() => {
    if (overRef.current) return;
    livesRef.current -= 1;
    setLives(livesRef.current);
    playWrong();
    setHurtFlash(true);
    setShaking(true);
    setTimeout(() => setHurtFlash(false), 400);
    setTimeout(() => setShaking(false), 450);
    if (livesRef.current <= 0) endGame();
  }, [playWrong, endGame]);

  // Gain one life (5 pops / heart balloon)
  const gainLife = useCallback((x, y) => {
    if (livesRef.current >= MAX_LIVES) return false;
    livesRef.current += 1;
    setLives(livesRef.current);
    playHeart();
    spawnEffect('text', x, y - 40, { text: '+❤️', color: '#FF6B9D' });
    return true;
  }, [spawnEffect]);

  // Add points to the score
  const addPoints = useCallback((n) => {
    scoreRef.current += n;
    setScore(scoreRef.current);
  }, []);

  // Count popped balloons; every 5 -> +1 life
  const addPops = useCallback((n, x, y) => {
    const before = popCountRef.current;
    popCountRef.current += n;
    const crossings = Math.floor(popCountRef.current / POPS_PER_LIFE)
      - Math.floor(before / POPS_PER_LIFE);
    for (let i = 0; i < crossings; i++) gainLife(x, y);
  }, [gainLife]);

  // A poppable balloon escaped off-screen
  const registerMiss = useCallback((x) => {
    if (overRef.current) return;
    missRef.current += 1;
    if (missRef.current >= MISSES_PER_LIFE) {
      missRef.current = 0;
      setMissCount(0);
      playThud();
      spawnEffect('text', x, window.innerHeight * 0.25, { text: '💔', color: '#E74C3C' });
      loseLife();
    } else {
      setMissCount(missRef.current);
    }
  }, [loseLife, spawnEffect]);

  // Elapsed seconds -> speed level ramps up forever
  useEffect(() => {
    if (phase !== 'playing') return;
    const timer = setInterval(() => {
      elapsedRef.current += 1;
      const lvl = 1 + Math.floor(elapsedRef.current / SPEEDUP_SECONDS);
      if (lvl > speedLevelRef.current) {
        speedLevelRef.current = lvl;
        setSpeedLevel(lvl);
        playLevelUp();
        setSpeedFlash(true);
        setTimeout(() => setSpeedFlash(false), 1000);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  // Spawn balloons (interval re-created when speed level changes)
  useEffect(() => {
    if (phase !== 'playing') return;
    const cfg = speedConfig(speedLevel);

    const spawner = setInterval(() => {
      const id = balloonIdRef.current++;
      const type = rollBalloonType(elapsedRef.current);
      const x = 10 + Math.random() * 80;
      const baseSize = 52 + Math.random() * 30;
      const size = type === 'golden' ? baseSize * 0.8 : baseSize;
      let speed = cfg.minDur + Math.random() * (cfg.maxDur - cfg.minDur);
      if (type === 'golden') speed *= 0.8; // golden flies faster
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const wobble = 8 + Math.random() * 15;

      activeRef.current.set(id, type);
      setBalloons(prev => [...prev, { id, x, size, speed, color, wobble, type }]);

      // Escape detection: still active after its float time = missed
      setTimeout(() => {
        if (activeRef.current.has(id)) {
          const missedType = activeRef.current.get(id);
          activeRef.current.delete(id);
          setBalloons(prev => prev.filter(b => b.id !== id));
          if (missedType !== 'bomb') {
            registerMiss(window.innerWidth * (x / 100));
          }
        }
      }, speed * 1000 + 200);
    }, cfg.spawnMs);

    return () => clearInterval(spawner);
  }, [phase, speedLevel, registerMiss]);

  // Milestone flash every 10 pops
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
    if (overRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 💣 BOMB - don't touch!
    if (balloon.type === 'bomb') {
      playBoom();
      activeRef.current.delete(balloon.id);
      setBalloons(prev => prev.filter(b => b.id !== balloon.id));
      spawnEffect('boom', x, y);
      spawnEffect('text', x, y - 30, { text: '💥', color: '#E74C3C' });
      loseLife();
      return;
    }

    // 🌈 Rainbow pops EVERYTHING (and safely clears bombs)
    if (balloon.type === 'rainbow') {
      playSparkle();
      setRainbowFlash(true);
      setTimeout(() => setRainbowFlash(false), 500);
      let cleared = 0;
      activeRef.current.forEach(t => { if (t !== 'bomb') cleared++; });
      activeRef.current.clear();
      setBalloons([]);
      addPoints(cleared);
      addPops(cleared, x, y);
      spawnEffect('text', x, y, { text: `+${cleared}`, color: '#FFD700' });
      trackCombo();
      return;
    }

    playPop();
    activeRef.current.delete(balloon.id);
    setBalloons(prev => prev.filter(b => b.id !== balloon.id));
    spawnEffect('burst', x, y, { color: balloon.color });

    if (balloon.type === 'golden') {
      playSparkle();
      addPoints(5);
      spawnEffect('text', x, y - 20, { text: '+5', color: '#FFD700' });
    } else if (balloon.type === 'heart') {
      addPoints(1);
      if (!gainLife(x, y)) {
        spawnEffect('text', x, y - 20, { text: '+1 💗', color: '#FF6B9D' });
      }
    } else {
      addPoints(1);
      spawnEffect('text', x, y - 20, { text: '+1', color: '#FFFFFF' });
    }
    addPops(1, x, y);
    trackCombo();
  }, [spawnEffect, trackCombo, addPoints, addPops, gainLife, loseLife]);

  const handleStart = () => {
    setPhase('playing');
    setScore(0);
    setLives(MAX_LIVES);
    setMissCount(0);
    setSpeedLevel(1);
    setBalloons([]);
    setEffects([]);
    setStars(0);
    balloonIdRef.current = 0;
    activeRef.current.clear();
    scoreRef.current = 0;
    livesRef.current = MAX_LIVES;
    missRef.current = 0;
    popCountRef.current = 0;
    elapsedRef.current = 0;
    speedLevelRef.current = 1;
    overRef.current = false;
    comboRef.current = { count: 0, last: 0 };
    prevScoreRef.current = 0;
  };

  // Balloon SVG per type
  const renderBalloonSvg = (balloon) => {
    const { size, color, type, id } = balloon;
    const gradId = `fb-grad-${id}`;
    if (type === 'bomb') {
      return (
        <svg width={size} height={size * 1.3} viewBox="0 0 50 65">
          <ellipse cx="25" cy="25" rx="22" ry="25" fill="#2C3E50" stroke="#E74C3C" strokeWidth="3" strokeDasharray="6 4" />
          <ellipse cx="18" cy="18" rx="6" ry="8" fill="rgba(255,255,255,0.15)" transform="rotate(-20 18 18)" />
          <polygon points="25,50 22,55 28,55" fill="#2C3E50" />
          <line x1="25" y1="55" x2="25" y2="65" stroke="#999" strokeWidth="1.5" />
          <text x="25" y="33" textAnchor="middle" fontSize="22">💣</text>
        </svg>
      );
    }
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
    <div className={`${styles.container} ${bgClass} ${shaking ? styles.shake : ''}`}>
      {/* Clouds decoration (dimmed at night via CSS) */}
      <div className={styles.cloud} style={{ top: '10%', animationDelay: '0s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '25%', animationDelay: '-7s' }}>☁️</div>
      <div className={styles.cloud} style={{ top: '5%', animationDelay: '-14s' }}>☁️</div>

      {/* Night stars */}
      {speedLevel >= 5 && phase === 'playing' && (
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
            {speedLevel >= 2 && <div className={styles.speedBadge}>⚡{speedLevel}</div>}
            <div className={styles.statusGroup}>
              <div className={styles.lives}>
                {Array.from({ length: MAX_LIVES }).map((_, i) => (
                  <span key={i} style={{ opacity: i < lives ? 1 : 0.25 }}>❤️</span>
                ))}
              </div>
              <div className={styles.missDots} title="בלונים שברחו">
                {Array.from({ length: MISSES_PER_LIFE }).map((_, i) => (
                  <span key={i} className={i < missCount ? styles.missDotOn : styles.missDot} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Balloons */}
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

      {/* Pop effects: bursts / bomb booms / floating texts */}
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
        ) : fx.kind === 'boom' ? (
          <div key={fx.id} className={styles.burst} style={{ left: fx.x, top: fx.y }}>
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.4;
              const dist = 40 + Math.random() * 50;
              return (
                <span
                  key={i}
                  className={styles.shard}
                  style={{
                    backgroundColor: i % 2 === 0 ? '#E74C3C' : '#F39C12',
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

      {/* Hurt red flash */}
      {hurtFlash && <div className={styles.hurtFlash} />}

      {/* Combo + milestone + speed-up flashes */}
      {comboText && <div className={styles.comboFlash}>{comboText}</div>}
      {milestoneText && <div className={styles.milestoneFlash}>{milestoneText}</div>}
      {speedFlash && <div className={styles.speedFlash}>!מהר יותר 🚀</div>}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🎈</div>
          <div className={styles.startText}>בלון מהיר!</div>
          <div className={styles.startSubtext}>בלי שעון! המשחק נהיה מהיר... עד שתפספסו</div>
          <div className={styles.legend}>
            <span>💣 פצצה = אסור לגעת! (❤️-)</span>
            <span>🎈 5 בלונים שבורחים = ❤️-</span>
            <span>🎯 כל 5 פיצוצים = ❤️+</span>
            <span>⭐ זהב = 5 נקודות | 🌈 = מפוצץ הכל | 💗 = לב</span>
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
          <div className={styles.endText}>איזה מהירות! 🚀</div>
          <div className={styles.endScore}>פוצצתם {score} בלונים!</div>
          <div className={styles.endSpeed}>הגעתם למהירות ⚡{speedLevel}</div>
          <div className={styles.endStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          <button className={styles.endBtn} onClick={handleStart}>🔄 שחקו שוב</button>
          <button className={styles.endBtnSecondary} onClick={onClose}>🏠 חזרה</button>
        </div>
      )}
    </div>
  );
}

export default FastBalloon;
