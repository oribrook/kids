import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './TempleRun.module.css';

// Level configs: [bgGradientTop, bgGradientBottom, roadColor, label, emoji]
const LEVELS = [
  { top: '#87CEEB', bot: '#228B22', road: '#8B7355', label: 'יער', emoji: '🌳' },
  { top: '#F4D03F', bot: '#D4AC0D', road: '#C4A35A', label: 'מדבר', emoji: '🏜️' },
  { top: '#85C1E9', bot: '#AED6F1', road: '#B0C4DE', label: 'קרח', emoji: '🧊' },
  { top: '#7D3C98', bot: '#2C3E50', road: '#5B2C6F', label: 'חלל', emoji: '🚀' },
  { top: '#E74C3C', bot: '#641E16', road: '#A93226', label: 'לבה', emoji: '🌋' },
];

const DIAMONDS_PER_LEVEL = 10;
const MAX_LIVES = 3;
const LANE_COUNT = 3; // left=0, center=1, right=2
const BUNNY_RETURN_MS = 800; // ms before bunny returns to center

// Item types
const ITEM_DIAMOND = 'diamond';
const ITEM_OBSTACLE = 'obstacle';

function TempleRun({ game, onClose }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const gsRef = useRef(null);
  const lastSpawnRef = useRef(0);
  const bunnyTimerRef = useRef(null);

  const [phase, setPhase] = useState('waiting'); // waiting | playing | levelUp | gameOver
  const [diamonds, setDiamonds] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [level, setLevel] = useState(1);
  const [stars, setStars] = useState(0);
  const [showHit, setShowHit] = useState(false);
  const [levelUpShow, setLevelUpShow] = useState(false);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete } = useAudio();

  // Initialize game state
  const initGameState = useCallback((canvas) => {
    const w = canvas.width;
    const h = canvas.height;
    const laneW = w / LANE_COUNT;
    const bunnySize = Math.min(50, w * 0.12);
    const bunnyY = h * 0.75;

    return {
      w, h, laneW,
      bunny: {
        lane: 1, // center
        targetLane: 1,
        x: laneW * 1 + laneW / 2,
        y: bunnyY,
        size: bunnySize,
        isJumping: false,
        jumpY: 0, // vertical offset for jump
      },
      items: [], // { type, lane, y, size, collected }
      roadOffset: 0,
      speed: 2.5,
      diamonds: 0,
      lives: MAX_LIVES,
      level: 1,
      frameCount: 0,
      spawnInterval: 80, // frames between spawns
    };
  }, []);

  // Resize canvas
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gsRef.current = initGameState(canvas);
  }, [initGameState]);

  // Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas();
    const handleResize = () => {
      if (phase === 'waiting') resizeCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (bunnyTimerRef.current) clearTimeout(bunnyTimerRef.current);
    };
  }, [resizeCanvas, phase]);

  // Game loop
  useEffect(() => {
    if (phase !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const loop = () => {
      const gs = gsRef.current;
      if (!gs) {
        animFrameRef.current = requestAnimationFrame(loop);
        return;
      }
      gs.frameCount++;
      updateGame(gs);
      drawGame(ctx, gs);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [phase]);

  // Update game logic
  const updateGame = useCallback((gs) => {
    // Move road
    gs.roadOffset = (gs.roadOffset + gs.speed) % 40;

    // Update bunny X position (smooth slide)
    const targetX = gs.laneW * gs.bunny.targetLane + gs.laneW / 2;
    const dx = targetX - gs.bunny.x;
    gs.bunny.x += dx * 0.2;

    // Update jump animation
    if (gs.bunny.isJumping) {
      // Simple parabolic: jumpY goes from 0 to -jumpMax and back
      gs.bunny.jumpY += gs.bunny.jumpVel;
      gs.bunny.jumpVel += 0.8; // gravity
      if (gs.bunny.jumpY >= 0) {
        gs.bunny.jumpY = 0;
        gs.bunny.isJumping = false;
      }
    }

    // Spawn items
    if (gs.frameCount - lastSpawnRef.current >= gs.spawnInterval) {
      spawnItem(gs);
      lastSpawnRef.current = gs.frameCount;
    }

    // Move items & check collisions
    const bunnyHitbox = {
      x: gs.bunny.x - gs.bunny.size / 2,
      y: gs.bunny.y + gs.bunny.jumpY - gs.bunny.size / 2,
      w: gs.bunny.size,
      h: gs.bunny.size,
    };

    for (let i = gs.items.length - 1; i >= 0; i--) {
      const item = gs.items[i];
      item.y += gs.speed;

      // Off screen
      if (item.y > gs.h + 50) {
        gs.items.splice(i, 1);
        continue;
      }

      if (item.collected) continue;

      // Collision check
      const itemX = gs.laneW * item.lane + gs.laneW / 2;
      const itemHitbox = {
        x: itemX - item.size / 2,
        y: item.y - item.size / 2,
        w: item.size,
        h: item.size,
      };

      if (rectsOverlap(bunnyHitbox, itemHitbox)) {
        item.collected = true;
        if (item.type === ITEM_DIAMOND) {
          gs.diamonds++;
          setDiamonds(gs.diamonds);
          playCorrect();

          // Check level up
          const newLevel = Math.min(LEVELS.length, Math.floor(gs.diamonds / DIAMONDS_PER_LEVEL) + 1);
          if (newLevel > gs.level) {
            gs.level = newLevel;
            gs.speed = 2.5 + (newLevel - 1) * 0.6;
            gs.spawnInterval = Math.max(40, 80 - (newLevel - 1) * 8);
            setLevel(newLevel);
            // Show level up flash
            setLevelUpShow(true);
            setTimeout(() => setLevelUpShow(false), 1200);
          }
        } else {
          // Obstacle hit
          gs.lives--;
          setLives(gs.lives);
          playWrong();
          setShowHit(true);
          setTimeout(() => setShowHit(false), 300);

          if (gs.lives <= 0) {
            handleGameOver(gs.diamonds);
          }
        }
      }
    }
  }, [playCorrect, playWrong]);

  // Spawn a new item
  const spawnItem = useCallback((gs) => {
    const lane = Math.floor(Math.random() * LANE_COUNT);
    const isDiamond = Math.random() < 0.55; // 55% diamonds, 45% obstacles
    const size = Math.min(40, gs.w * 0.09);

    // Don't spawn too close to existing items in same lane
    const tooClose = gs.items.some(
      item => item.lane === lane && item.y < 120
    );
    if (tooClose) return;

    gs.items.push({
      type: isDiamond ? ITEM_DIAMOND : ITEM_OBSTACLE,
      lane,
      y: -size,
      size,
      collected: false,
    });
  }, []);

  // Rectangle overlap check
  const rectsOverlap = (a, b) => {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  };

  // Handle game over
  const handleGameOver = useCallback((finalDiamonds) => {
    const gameStars = finalDiamonds >= 40 ? 3 : finalDiamonds >= 20 ? 2 : finalDiamonds >= 5 ? 1 : 0;
    setStars(gameStars);
    setPhase('gameOver');
    if (gameStars > 0) {
      playComplete();
      addScore(gameStars * 16);
      recordGamePlayed(game.id, gameStars * 16, gameStars);
    }
  }, [playComplete, addScore, recordGamePlayed, game.id]);

  // Draw
  const drawGame = useCallback((ctx, gs) => {
    const { w, h, laneW } = gs;
    const lvl = LEVELS[gs.level - 1];

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, lvl.top);
    bgGrad.addColorStop(1, lvl.bot);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Road
    const roadX = w * 0.08;
    const roadW = w * 0.84;
    ctx.fillStyle = lvl.road;
    ctx.fillRect(roadX, 0, roadW, h);

    // Road edges
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(roadX, 0, 3, h);
    ctx.fillRect(roadX + roadW - 3, 0, 3, h);

    // Lane dividers (dashed, scrolling)
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([20, 20]);
    for (let i = 1; i < LANE_COUNT; i++) {
      const x = i * laneW;
      ctx.beginPath();
      ctx.lineDashOffset = -gs.roadOffset;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Draw items
    for (const item of gs.items) {
      if (item.collected) continue;
      const ix = laneW * item.lane + laneW / 2;
      const iy = item.y;
      const sz = item.size;

      if (item.type === ITEM_DIAMOND) {
        // Diamond shape
        ctx.fillStyle = '#00D2FF';
        ctx.shadowColor = '#00D2FF';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(ix, iy - sz / 2);
        ctx.lineTo(ix + sz / 3, iy);
        ctx.lineTo(ix, iy + sz / 2);
        ctx.lineTo(ix - sz / 3, iy);
        ctx.closePath();
        ctx.fill();
        // Inner shine
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.beginPath();
        ctx.moveTo(ix, iy - sz / 3);
        ctx.lineTo(ix + sz / 5, iy);
        ctx.lineTo(ix, iy + sz / 5);
        ctx.lineTo(ix - sz / 5, iy);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        // Obstacle - rock
        ctx.fillStyle = '#555';
        ctx.shadowColor = 'rgba(0,0,0,0.3)';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.moveTo(ix - sz / 2, iy + sz / 3);
        ctx.lineTo(ix - sz / 3, iy - sz / 3);
        ctx.lineTo(ix, iy - sz / 2);
        ctx.lineTo(ix + sz / 3, iy - sz / 3);
        ctx.lineTo(ix + sz / 2, iy + sz / 3);
        ctx.closePath();
        ctx.fill();
        // Rock detail
        ctx.fillStyle = '#777';
        ctx.beginPath();
        ctx.moveTo(ix - sz / 4, iy);
        ctx.lineTo(ix, iy - sz / 4);
        ctx.lineTo(ix + sz / 4, iy);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Draw bunny
    const bx = gs.bunny.x;
    const by = gs.bunny.y + gs.bunny.jumpY;
    const bSize = gs.bunny.size;

    // Shadow on ground
    if (gs.bunny.jumpY < 0) {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath();
      ctx.ellipse(bx, gs.bunny.y + bSize / 2, bSize / 2.5, bSize / 8, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Body (white circle)
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(bx, by, bSize / 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Ears
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(bx - bSize / 5, by - bSize / 1.8, bSize / 7, bSize / 3, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(bx + bSize / 5, by - bSize / 1.8, bSize / 7, bSize / 3, 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Inner ears (pink)
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(bx - bSize / 5, by - bSize / 1.8, bSize / 12, bSize / 4.5, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(bx + bSize / 5, by - bSize / 1.8, bSize / 12, bSize / 4.5, 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(bx - bSize / 6, by - bSize / 8, bSize / 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx + bSize / 6, by - bSize / 8, bSize / 12, 0, Math.PI * 2);
    ctx.fill();

    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(bx - bSize / 6 + 1, by - bSize / 8 - 1, bSize / 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx + bSize / 6 + 1, by - bSize / 8 - 1, bSize / 30, 0, Math.PI * 2);
    ctx.fill();

    // Nose
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.arc(bx, by + bSize / 10, bSize / 14, 0, Math.PI * 2);
    ctx.fill();

    // Cheeks
    ctx.fillStyle = 'rgba(255, 182, 193, 0.4)';
    ctx.beginPath();
    ctx.arc(bx - bSize / 4, by + bSize / 12, bSize / 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx + bSize / 4, by + bSize / 12, bSize / 10, 0, Math.PI * 2);
    ctx.fill();

  }, []);

  // Controls
  const moveBunny = useCallback((direction) => {
    const gs = gsRef.current;
    if (!gs || phase !== 'playing') return;

    if (bunnyTimerRef.current) {
      clearTimeout(bunnyTimerRef.current);
    }

    if (direction === 'left') {
      gs.bunny.targetLane = 0;
    } else if (direction === 'right') {
      gs.bunny.targetLane = 2;
    } else if (direction === 'up') {
      if (!gs.bunny.isJumping) {
        gs.bunny.isJumping = true;
        gs.bunny.jumpVel = -12;
      }
      // Also stay in current lane (no lane change on jump)
      // But still set return timer
    }

    // Return to center after delay
    bunnyTimerRef.current = setTimeout(() => {
      if (gsRef.current) {
        gsRef.current.bunny.targetLane = 1;
      }
    }, BUNNY_RETURN_MS);
  }, [phase]);

  // Start game
  const handleStart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    gsRef.current = initGameState(canvas);
    lastSpawnRef.current = 0;
    setDiamonds(0);
    setLives(MAX_LIVES);
    setLevel(1);
    setStars(0);
    setPhase('playing');
  }, [initGameState]);

  // Play again
  const handlePlayAgain = useCallback(() => {
    handleStart();
  }, [handleStart]);

  return (
    <div className={styles.container}>
      {/* Canvas */}
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* HUD */}
      <div className={styles.hud}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <div className={styles.scoreDisplay}>
          <div className={styles.diamonds}>💎 {diamonds}</div>
          <div className={styles.lives}>
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <span key={i} style={{ opacity: i < lives ? 1 : 0.25, fontSize: 18 }}>❤️</span>
            ))}
          </div>
          <div className={styles.level}>{LEVELS[level - 1].emoji} {level}</div>
        </div>
      </div>

      {/* Hit flash */}
      {showHit && <div className={styles.hitFlash} />}

      {/* Level up overlay */}
      {levelUpShow && (
        <div className={styles.levelUpOverlay}>
          <div className={styles.levelUpText}>
            !{LEVELS[level - 1].emoji} שלב {level}
          </div>
        </div>
      )}

      {/* Control buttons */}
      {phase === 'playing' && (
        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onTouchStart={(e) => { e.preventDefault(); moveBunny('left'); }}
            onMouseDown={() => moveBunny('left')}
          >
            ⬅️
          </button>
          <button
            className={`${styles.controlBtn} ${styles.controlBtnMiddle}`}
            onTouchStart={(e) => { e.preventDefault(); moveBunny('up'); }}
            onMouseDown={() => moveBunny('up')}
          >
            ⬆️
          </button>
          <button
            className={styles.controlBtn}
            onTouchStart={(e) => { e.preventDefault(); moveBunny('right'); }}
            onMouseDown={() => moveBunny('right')}
          >
            ➡️
          </button>
        </div>
      )}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startBunny}>🐰</div>
          <div className={styles.startText}>!רוץ שפנפן</div>
          <div className={styles.startSubtext}>
            אספו 💎 יהלומים<br />
            הימנעו מ-🪨 מכשולים<br />
            לחצו ⬅️ ➡️ ⬆️ כדי לזוז
          </div>
          <button className={styles.startBtn} onClick={handleStart}>!בואו נרוץ 🏃</button>
        </div>
      )}

      {/* Game over overlay */}
      {phase === 'gameOver' && (
        <div className={styles.gameOverOverlay}>
          <div className={styles.gameOverText}>!המשחק נגמר</div>
          <div className={styles.gameOverScore}>💎 {diamonds} יהלומים</div>
          <div className={styles.gameOverStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          <button className={styles.gameOverBtn} onClick={handlePlayAgain}>🔄 שחקו שוב</button>
          <button
            className={`${styles.gameOverBtn} ${styles.gameOverBtnSecondary}`}
            onClick={onClose}
          >
            🏠 חזרה
          </button>
        </div>
      )}
    </div>
  );
}

export default TempleRun;
