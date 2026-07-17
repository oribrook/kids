import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './BrickBreaker.module.css';

// Brick colors per row (rainbow)
const ROW_COLORS = ['#FF6B6B', '#FFA502', '#FFD93D', '#6BCB77', '#4D96FF'];

// Speed presets: [label, emoji, multiplier]
const SPEEDS = [
  { id: 'very-slow', emoji: '🐢', label: 'איטי', mult: 0.5 },
  { id: 'slow', emoji: '🐇', label: 'רגיל', mult: 1.0 },
  { id: 'fast', emoji: '🚀', label: 'מהיר', mult: 1.6 },
];

const BRICK_ROWS = 3;
const BRICK_COLS = 5;
const TOTAL_BRICKS = BRICK_ROWS * BRICK_COLS;

function BrickBreaker({ game, onClose }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const gameStateRef = useRef(null);
  const [phase, setPhase] = useState('waiting'); // waiting | playing | won
  const [speedIdx, setSpeedIdx] = useState(0); // default very-slow
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  // Phase mirror for callbacks that must not re-create on phase change
  const phaseRef = useRef('waiting');
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playComplete } = useAudio();

  // Check orientation
  useEffect(() => {
    const check = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Initialize game state for canvas
  const initGameState = useCallback((canvas) => {
    const w = canvas.width;
    const h = canvas.height;

    // Brick layout
    const brickPadding = 4;
    const brickTop = 40;
    const brickWidth = (w - (BRICK_COLS + 1) * brickPadding) / BRICK_COLS;
    const brickHeight = Math.min(24, h * 0.06);

    const bricks = [];
    for (let r = 0; r < BRICK_ROWS; r++) {
      for (let c = 0; c < BRICK_COLS; c++) {
        bricks.push({
          x: brickPadding + c * (brickWidth + brickPadding),
          y: brickTop + r * (brickHeight + brickPadding),
          w: brickWidth,
          h: brickHeight,
          alive: true,
          color: ROW_COLORS[r % ROW_COLORS.length],
        });
      }
    }

    // Paddle
    const paddleW = w * 0.25;
    const paddleH = Math.min(14, h * 0.035);
    const paddleY = h - paddleH - 12;

    // Ball
    const ballR = Math.min(8, h * 0.02);

    return {
      w, h,
      bricks,
      bricksLeft: TOTAL_BRICKS,
      paddle: { x: w / 2 - paddleW / 2, y: paddleY, w: paddleW, h: paddleH },
      ball: {
        x: w / 2,
        y: paddleY - ballR - 2,
        r: ballR,
        dx: 0,
        dy: 0,
        launched: false,
      },
      score: 0,
    };
  }, []);

  // Launch ball
  const launchBall = useCallback(() => {
    const gs = gameStateRef.current;
    if (!gs || gs.ball.launched) return;
    const baseSpeed = 2.2;
    const mult = SPEEDS[speedIdx].mult;
    gs.ball.dx = baseSpeed * mult * (Math.random() > 0.5 ? 1 : -1);
    gs.ball.dy = -baseSpeed * mult;
    gs.ball.launched = true;
    setPhase('playing');
  }, [speedIdx]);

  // Resize canvas to fill screen
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Never wipe a finished game - rotating the phone after winning used to
    // reset the win screen back to 'waiting' (looked like a stuck/lost game)
    if (phaseRef.current === 'won') return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Re-init game state on resize
    gameStateRef.current = initGameState(canvas);
    setScore(0);
    setPhase('waiting');
  }, [initGameState]);

  // Setup canvas & game loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isPortrait) return;

    resizeCanvas();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPortrait, resizeCanvas]);

  // Game loop
  useEffect(() => {
    if (isPortrait || phase === 'won') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const loop = () => {
      const gs = gameStateRef.current;
      if (!gs) {
        animFrameRef.current = requestAnimationFrame(loop);
        return;
      }

      // Update
      if (gs.ball.launched) {
        updateBall(gs);
      } else {
        // Ball follows paddle
        gs.ball.x = gs.paddle.x + gs.paddle.w / 2;
        gs.ball.y = gs.paddle.y - gs.ball.r - 2;
      }

      // Draw
      draw(ctx, gs);

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPortrait, phase]);

  // Update ball physics
  const updateBall = useCallback((gs) => {
    const ball = gs.ball;
    const paddle = gs.paddle;

    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collisions (left/right)
    if (ball.x - ball.r <= 0) {
      ball.x = ball.r;
      ball.dx = Math.abs(ball.dx);
    }
    if (ball.x + ball.r >= gs.w) {
      ball.x = gs.w - ball.r;
      ball.dx = -Math.abs(ball.dx);
    }
    // Top wall
    if (ball.y - ball.r <= 0) {
      ball.y = ball.r;
      ball.dy = Math.abs(ball.dy);
    }

    // Paddle collision
    if (
      ball.dy > 0 &&
      ball.y + ball.r >= paddle.y &&
      ball.y + ball.r <= paddle.y + paddle.h + 4 &&
      ball.x >= paddle.x &&
      ball.x <= paddle.x + paddle.w
    ) {
      ball.dy = -Math.abs(ball.dy);
      // Adjust angle based on where ball hits paddle
      const hitPos = (ball.x - paddle.x) / paddle.w; // 0 to 1
      const angle = (hitPos - 0.5) * 1.2; // -0.6 to 0.6
      const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
      ball.dx = speed * angle;
      // Ensure dy stays reasonable
      ball.dy = -Math.sqrt(Math.max(speed * speed - ball.dx * ball.dx, speed * speed * 0.3));
    }

    // Ball fell below screen - respawn (no game-over for kids)
    if (ball.y - ball.r > gs.h) {
      ball.launched = false;
      ball.x = paddle.x + paddle.w / 2;
      ball.y = paddle.y - ball.r - 2;
      // Re-launch automatically after a short delay
      setTimeout(() => {
        if (gameStateRef.current && !gameStateRef.current.ball.launched && gameStateRef.current.bricksLeft > 0) {
          const baseSpeed = 2.2;
          const mult = SPEEDS[speedIdx].mult;
          gameStateRef.current.ball.dx = baseSpeed * mult * (Math.random() > 0.5 ? 1 : -1);
          gameStateRef.current.ball.dy = -baseSpeed * mult;
          gameStateRef.current.ball.launched = true;
        }
      }, 600);
    }

    // Brick collisions
    for (const brick of gs.bricks) {
      if (!brick.alive) continue;

      if (
        ball.x + ball.r > brick.x &&
        ball.x - ball.r < brick.x + brick.w &&
        ball.y + ball.r > brick.y &&
        ball.y - ball.r < brick.y + brick.h
      ) {
        brick.alive = false;
        ball.dy = -ball.dy;
        gs.bricksLeft--;
        gs.score++;
        setScore(gs.score);

        // Check win
        if (gs.bricksLeft <= 0) {
          handleWin(gs);
        }
        break; // one brick per frame
      }
    }
  }, [speedIdx]);

  // Handle win
  const handleWin = useCallback((gs) => {
    if (gs.won) return; // guard against double-fire from the game loop
    gs.won = true;
    const gameStars = gs.score >= TOTAL_BRICKS ? 3 : gs.score >= 10 ? 2 : 1;
    setStars(gameStars);
    setPhase('won');
    playComplete();
    addScore(gameStars * 16);
    recordGamePlayed(game.id, gameStars * 16, gameStars);
  }, [playComplete, addScore, recordGamePlayed, game.id]);

  // Draw everything
  const draw = useCallback((ctx, gs) => {
    const { w, h, bricks, paddle, ball } = gs;

    // Clear
    ctx.clearRect(0, 0, w, h);

    // Draw bricks
    for (const brick of bricks) {
      if (!brick.alive) continue;
      ctx.fillStyle = brick.color;
      ctx.beginPath();
      const r = 4;
      ctx.roundRect(brick.x, brick.y, brick.w, brick.h, r);
      ctx.fill();

      // Shine effect
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.beginPath();
      ctx.roundRect(brick.x, brick.y, brick.w, brick.h / 2, [r, r, 0, 0]);
      ctx.fill();
    }

    // Draw paddle
    const grad = ctx.createLinearGradient(paddle.x, paddle.y, paddle.x, paddle.y + paddle.h);
    grad.addColorStop(0, '#e0e0e0');
    grad.addColorStop(1, '#888');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(paddle.x, paddle.y, paddle.w, paddle.h, 7);
    ctx.fill();

    // Draw ball
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }, []);

  // Touch / Mouse controls
  const handlePointerMove = useCallback((e) => {
    const gs = gameStateRef.current;
    if (!gs) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let clientX;
    if (e.touches) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    gs.paddle.x = Math.max(0, Math.min(gs.w - gs.paddle.w, x - gs.paddle.w / 2));
  }, []);

  const handleTap = useCallback(() => {
    if (phase === 'waiting') {
      launchBall();
    }
  }, [phase, launchBall]);

  // Update speed on the live ball
  const handleSpeedChange = useCallback((idx) => {
    setSpeedIdx(idx);
    const gs = gameStateRef.current;
    if (gs && gs.ball.launched) {
      const oldSpeed = Math.sqrt(gs.ball.dx * gs.ball.dx + gs.ball.dy * gs.ball.dy);
      if (oldSpeed === 0) return;
      const newSpeed = 2.2 * SPEEDS[idx].mult;
      const ratio = newSpeed / oldSpeed;
      gs.ball.dx *= ratio;
      gs.ball.dy *= ratio;
    }
  }, []);

  // Reset game
  const handlePlayAgain = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Refresh canvas dims (they may be stale after rotating during the win screen)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameStateRef.current = initGameState(canvas);
    setScore(0);
    setPhase('waiting');
  }, [initGameState]);

  // Show rotate overlay in portrait - but never hide a finished game behind it
  // (the win overlay stays reachable in any orientation)
  if (isPortrait && phase !== 'won') {
    return (
      <div className={styles.rotateOverlay}>
        <div className={styles.rotateIcon}>📱</div>
        <div className={styles.rotateText}>!סובבו את המסך</div>
        <button className={styles.closeBtn} onClick={onClose} style={{ position: 'absolute', top: 16, right: 16 }}>
          ✕
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.scoreDisplay}>🧱 {score} / {TOTAL_BRICKS}</div>

        <div className={styles.speedControl}>
          <span className={styles.speedLabel}>מהירות</span>
          {SPEEDS.map((s, idx) => (
            <button
              key={s.id}
              className={`${styles.speedBtn} ${idx === speedIdx ? styles.speedBtnActive : ''}`}
              onClick={() => handleSpeedChange(idx)}
            >
              {s.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Game canvas */}
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onTouchMove={handlePointerMove}
        onTouchStart={handleTap}
        onMouseMove={handlePointerMove}
        onClick={handleTap}
      />

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay} onClick={handleTap} onTouchStart={handleTap}>
          <div className={styles.tapIcon}>👆</div>
          <div className={styles.startText}>לחצו להתחיל!</div>
          <div className={styles.startSubtext}>הזיזו את האצבע כדי להזיז את המשוט</div>
        </div>
      )}

      {/* Win overlay */}
      {phase === 'won' && (
        <div className={styles.winOverlay}>
          <div className={styles.winText}>כל הכבוד! 🎉</div>
          <div className={styles.winStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          <button className={styles.winBtn} onClick={handlePlayAgain}>🔄 שחקו שוב</button>
          <button className={styles.winBtn} onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            🏠 חזרה
          </button>
        </div>
      )}
    </div>
  );
}

export default BrickBreaker;
