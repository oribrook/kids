import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import { playDing, playSparkle, playThud, playWhoosh } from '../../utils/soundManager';
import styles from './TempleRun.module.css';

// Level configs
const LEVELS = [
  { top: '#87CEEB', bot: '#228B22', road: '#8B7355', label: 'יער', emoji: '🌳', mountain: '#2E7D32', sky: '☀️', props: ['🌳', '🌲', '🌼'] },
  { top: '#F4D03F', bot: '#D4AC0D', road: '#C4A35A', label: 'מדבר', emoji: '🏜️', mountain: '#B8860B', sky: '☀️', props: ['🌵', '🪨'] },
  { top: '#85C1E9', bot: '#AED6F1', road: '#B0C4DE', label: 'קרח', emoji: '🧊', mountain: '#90CAF9', sky: '❄️', props: ['⛄', '🧊'] },
  { top: '#2C2C54', bot: '#40407A', road: '#5B2C6F', label: 'חלל', emoji: '🚀', mountain: '#341F97', sky: '🪐', props: ['⭐', '☄️'] },
  { top: '#E74C3C', bot: '#641E16', road: '#A93226', label: 'לבה', emoji: '🌋', mountain: '#7B241C', sky: '🔥', props: ['🌋', '🔥'] },
];

const DIAMONDS_PER_LEVEL = 10;
const MAX_LIVES = 3;
const LANE_COUNT = 3; // left=0, center=1, right=2

// Item types
const ITEM_DIAMOND = 'diamond';
const ITEM_OBSTACLE = 'obstacle';
const ITEM_BARRIER = 'barrier'; // spans all lanes, must jump over
const ITEM_SHIELD = 'shield';   // absorbs one hit
const ITEM_MAGNET = 'magnet';   // pulls diamonds for 5s
const ITEM_CARROT = 'carrot';   // +5 diamonds

const MAGNET_FRAMES = 300; // ~5s
const PERSP_EXP = 1.8;     // perspective curve exponent

function TempleRun({ game, onClose }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const gsRef = useRef(null);
  const lastSpawnRef = useRef(0);
  const lastTapRef = useRef(0); // debounce touch+mouse double-fire

  const [phase, setPhase] = useState('waiting'); // waiting | playing | gameOver
  const [diamonds, setDiamonds] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [level, setLevel] = useState(1);
  const [stars, setStars] = useState(0);
  const [showHit, setShowHit] = useState(false);
  const [levelUpShow, setLevelUpShow] = useState(false);
  const [shieldHud, setShieldHud] = useState(false);
  const [magnetHud, setMagnetHud] = useState(0);

  const { addScore, recordGamePlayed } = useUser();
  const { playWrong, playComplete } = useAudio();

  // ----- Pre-rendered sprites (kills per-frame shadowBlur, the mobile FPS killer) -----
  const makeSprites = useCallback((itemBase, bunnySize) => {
    const mk = (size, draw) => {
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const cx = c.getContext('2d');
      draw(cx, size);
      return c;
    };

    const emojiSprite = (emoji) => mk(itemBase * 2, (cx, s) => {
      cx.font = `${Math.floor(s * 0.78)}px serif`;
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillText(emoji, s / 2, s / 2 + s * 0.04);
    });

    return {
      diamond: mk(itemBase * 2, (cx, s) => {
        const m = s / 2;
        cx.shadowColor = '#00D2FF';
        cx.shadowBlur = s * 0.18;
        cx.fillStyle = '#00D2FF';
        cx.beginPath();
        cx.moveTo(m, m - s * 0.4);
        cx.lineTo(m + s * 0.28, m);
        cx.lineTo(m, m + s * 0.4);
        cx.lineTo(m - s * 0.28, m);
        cx.closePath();
        cx.fill();
        cx.shadowBlur = 0;
        cx.fillStyle = 'rgba(255,255,255,0.45)';
        cx.beginPath();
        cx.moveTo(m, m - s * 0.24);
        cx.lineTo(m + s * 0.15, m);
        cx.lineTo(m, m + s * 0.15);
        cx.lineTo(m - s * 0.15, m);
        cx.closePath();
        cx.fill();
      }),
      rock: mk(itemBase * 2, (cx, s) => {
        const m = s / 2;
        cx.shadowColor = 'rgba(0,0,0,0.35)';
        cx.shadowBlur = s * 0.09;
        cx.fillStyle = '#555';
        cx.beginPath();
        cx.moveTo(m - s * 0.4, m + s * 0.28);
        cx.lineTo(m - s * 0.27, m - s * 0.27);
        cx.lineTo(m, m - s * 0.4);
        cx.lineTo(m + s * 0.27, m - s * 0.27);
        cx.lineTo(m + s * 0.4, m + s * 0.28);
        cx.closePath();
        cx.fill();
        cx.shadowBlur = 0;
        cx.fillStyle = '#777';
        cx.beginPath();
        cx.moveTo(m - s * 0.2, m);
        cx.lineTo(m, m - s * 0.2);
        cx.lineTo(m + s * 0.2, m);
        cx.closePath();
        cx.fill();
      }),
      shield: emojiSprite('🛡️'),
      magnet: emojiSprite('🧲'),
      carrot: emojiSprite('🥕'),
      bunny: mk(bunnySize * 2.6, (cx, s) => {
        const bx = s / 2;
        const by = s / 2 + s * 0.08;
        const bSize = s / 1.35;
        // Body
        cx.fillStyle = '#FFFFFF';
        cx.shadowColor = 'rgba(0,0,0,0.25)';
        cx.shadowBlur = s * 0.06;
        cx.beginPath();
        cx.arc(bx, by, bSize / 2.2, 0, Math.PI * 2);
        cx.fill();
        cx.shadowBlur = 0;
        // Ears
        cx.fillStyle = '#FFFFFF';
        cx.beginPath();
        cx.ellipse(bx - bSize / 5, by - bSize / 1.8, bSize / 7, bSize / 3, -0.15, 0, Math.PI * 2);
        cx.fill();
        cx.beginPath();
        cx.ellipse(bx + bSize / 5, by - bSize / 1.8, bSize / 7, bSize / 3, 0.15, 0, Math.PI * 2);
        cx.fill();
        // Inner ears
        cx.fillStyle = '#FFB6C1';
        cx.beginPath();
        cx.ellipse(bx - bSize / 5, by - bSize / 1.8, bSize / 12, bSize / 4.5, -0.15, 0, Math.PI * 2);
        cx.fill();
        cx.beginPath();
        cx.ellipse(bx + bSize / 5, by - bSize / 1.8, bSize / 12, bSize / 4.5, 0.15, 0, Math.PI * 2);
        cx.fill();
        // Eyes
        cx.fillStyle = '#333';
        cx.beginPath();
        cx.arc(bx - bSize / 6, by - bSize / 8, bSize / 12, 0, Math.PI * 2);
        cx.fill();
        cx.beginPath();
        cx.arc(bx + bSize / 6, by - bSize / 8, bSize / 12, 0, Math.PI * 2);
        cx.fill();
        // Eye shine
        cx.fillStyle = '#FFF';
        cx.beginPath();
        cx.arc(bx - bSize / 6 + 2, by - bSize / 8 - 2, bSize / 26, 0, Math.PI * 2);
        cx.fill();
        cx.beginPath();
        cx.arc(bx + bSize / 6 + 2, by - bSize / 8 - 2, bSize / 26, 0, Math.PI * 2);
        cx.fill();
        // Nose
        cx.fillStyle = '#FFB6C1';
        cx.beginPath();
        cx.arc(bx, by + bSize / 10, bSize / 14, 0, Math.PI * 2);
        cx.fill();
        // Cheeks
        cx.fillStyle = 'rgba(255, 182, 193, 0.4)';
        cx.beginPath();
        cx.arc(bx - bSize / 4, by + bSize / 12, bSize / 10, 0, Math.PI * 2);
        cx.fill();
        cx.beginPath();
        cx.arc(bx + bSize / 4, by + bSize / 12, bSize / 10, 0, Math.PI * 2);
        cx.fill();
      }),
    };
  }, []);

  // ----- Perspective helpers (stored on gs for use in update+draw) -----
  // progress p: 0 = horizon (far), 1 = bunny plane, >1 = past the bunny
  const buildGeometry = useCallback((w, h) => {
    const horizonY = h * 0.30;
    const bunnyY = h * 0.78;
    const roadHalfTop = w * 0.10;
    const roadHalfBottom = w * 0.46;
    const syOf = (p) => horizonY + (bunnyY - horizonY) * Math.pow(p, PERSP_EXP);
    const scaleOf = (p) => 0.2 + 0.8 * Math.pow(Math.min(p, 1.25), 1.4);
    // Road half-width is linear in screen-y (straight trapezoid edges)
    const halfWAt = (sy) => {
      const t = Math.max(0, (sy - horizonY) / (h - horizonY));
      return roadHalfTop + (roadHalfBottom - roadHalfTop) * t;
    };
    const laneXAt = (lane, sy) => {
      const laneW = (2 * halfWAt(sy)) / LANE_COUNT;
      return w / 2 + (lane - 1) * laneW;
    };
    return { horizonY, bunnyY, roadHalfTop, roadHalfBottom, syOf, scaleOf, halfWAt, laneXAt };
  }, []);

  // Initialize game state
  const initGameState = useCallback((canvas) => {
    const w = canvas.width;
    const h = canvas.height;
    const geo = buildGeometry(w, h);
    const bunnySize = Math.min(56, w * 0.13);
    const itemBase = Math.min(46, w * 0.105);

    return {
      w, h, geo,
      sprites: makeSprites(itemBase, bunnySize),
      itemBase,
      bunny: {
        lane: 1,
        targetLane: 1,
        x: geo.laneXAt(1, geo.bunnyY),
        size: bunnySize,
        isJumping: false,
        jumpY: 0,
        jumpVel: 0,
        squashFrames: 0,
      },
      items: [],     // { type, lane, p, collected }
      props: [],     // { side, p, emoji }
      particles: [], // { x, y, vx, vy, r, life, maxLife, color }
      floaters: [],  // { x, y, text, life, color }
      roadP: 0,
      speed: 2.5,
      diamonds: 0,
      lives: MAX_LIVES,
      level: 1,
      frameCount: 0,
      spawnInterval: 80,
      propSpawnCounter: 0,
      shield: false,
      magnetFrames: 0,
      shakeFrames: 0,
      over: false,
    };
  }, [buildGeometry, makeSprites]);

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
    };
  }, [resizeCanvas, phase]);

  // Particle helpers
  const spawnParticles = useCallback((gs, x, y, color, count = 8, speedMult = 1) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = (1 + Math.random() * 2.4) * speedMult;
      gs.particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 1,
        r: 2 + Math.random() * 3,
        life: 26, maxLife: 26,
        color,
      });
    }
  }, []);

  const spawnDust = useCallback((gs, x, y) => {
    for (let i = 0; i < 5; i++) {
      gs.particles.push({
        x: x + (Math.random() - 0.5) * gs.bunny.size * 0.8,
        y: y + Math.random() * 6,
        vx: (Math.random() - 0.5) * 1.6,
        vy: -0.4 - Math.random() * 0.8,
        r: 3 + Math.random() * 3,
        life: 18, maxLife: 18,
        color: 'rgba(200,190,170,0.8)',
      });
    }
  }, []);

  const spawnFloater = useCallback((gs, x, y, text, color = '#FFFFFF') => {
    gs.floaters.push({ x, y, text, life: 40, color });
  }, []);

  // Handle game over
  const handleGameOver = useCallback((gs) => {
    if (gs.over) return; // guard against multiple collisions in the same frame
    gs.over = true;
    const finalDiamonds = gs.diamonds;
    const gameStars = finalDiamonds >= 40 ? 3 : finalDiamonds >= 20 ? 2 : finalDiamonds >= 5 ? 1 : 0;
    setStars(gameStars);
    setPhase('gameOver');
    if (gameStars > 0) {
      playComplete();
      addScore(gameStars * 16);
      recordGamePlayed(game.id, gameStars * 16, gameStars);
    }
  }, [playComplete, addScore, recordGamePlayed, game.id]);

  // Spawn a new item
  const spawnItem = useCallback((gs) => {
    const roll = Math.random();

    // 13% barrier (spans all lanes, must jump)
    if (roll < 0.13) {
      const tooCloseBarrier = gs.items.some(
        item => item.type === ITEM_BARRIER && item.p < 0.35
      );
      if (tooCloseBarrier) return;
      gs.items.push({ type: ITEM_BARRIER, lane: 1, p: 0, collected: false });
      return;
    }

    // 6% pickups
    if (roll < 0.19) {
      const allowed = [ITEM_CARROT];
      if (!gs.shield) allowed.push(ITEM_SHIELD);
      if (gs.magnetFrames <= 0) allowed.push(ITEM_MAGNET);
      const type = allowed[Math.floor(Math.random() * allowed.length)];
      const lane = Math.floor(Math.random() * LANE_COUNT);
      const tooClose = gs.items.some(item => item.lane === lane && item.p < 0.18);
      if (tooClose) return;
      gs.items.push({ type, lane, p: 0, collected: false });
      return;
    }

    const lane = Math.floor(Math.random() * LANE_COUNT);
    const isDiamond = roll < 0.66; // ~49% diamonds, ~34% rocks

    const tooClose = gs.items.some(item => item.lane === lane && item.p < 0.18);
    if (tooClose) return;

    gs.items.push({
      type: isDiamond ? ITEM_DIAMOND : ITEM_OBSTACLE,
      lane, p: 0, collected: false,
    });
  }, []);

  // Handle a hit (rock / barrier). Shield absorbs one hit.
  const applyHit = useCallback((gs) => {
    const { geo } = gs;
    if (gs.shield) {
      gs.shield = false;
      playWhoosh();
      spawnParticles(gs, gs.bunny.x, geo.bunnyY, '#4D96FF', 12, 1.4);
      spawnFloater(gs, gs.bunny.x, geo.bunnyY - 50, '🛡️💥', '#4D96FF');
      return;
    }
    gs.lives--;
    setLives(gs.lives);
    playThud();
    playWrong();
    gs.shakeFrames = 12;
    setShowHit(true);
    setTimeout(() => setShowHit(false), 300);
    if (gs.lives <= 0) {
      handleGameOver(gs);
    }
  }, [playWrong, handleGameOver, spawnParticles, spawnFloater]);

  // Collect a diamond (or carrot-worth of diamonds)
  const collectDiamonds = useCallback((gs, amount, x, y) => {
    gs.diamonds += amount;
    setDiamonds(gs.diamonds);
    if (amount === 1) playDing(); else playSparkle();
    spawnParticles(gs, x, y, '#00D2FF', amount === 1 ? 7 : 14);
    spawnFloater(gs, x, y - 26, `+${amount}`, '#00F0FF');

    // Check level up
    const newLevel = Math.min(LEVELS.length, Math.floor(gs.diamonds / DIAMONDS_PER_LEVEL) + 1);
    if (newLevel > gs.level) {
      gs.level = newLevel;
      gs.speed = 2.5 + (newLevel - 1) * 0.6;
      gs.spawnInterval = Math.max(40, 80 - (newLevel - 1) * 8);
      setLevel(newLevel);
      playSparkle();
      setLevelUpShow(true);
      setTimeout(() => setLevelUpShow(false), 1200);
    }
  }, [spawnParticles, spawnFloater]);

  // Update game logic
  const updateGame = useCallback((gs) => {
    const { geo } = gs;
    const dp = gs.speed / geo.bunnyY; // progress per frame (same pacing as linear px/frame)

    gs.roadP = (gs.roadP + dp) % 0.1;

    // Bunny slide toward target lane
    const targetX = geo.laneXAt(gs.bunny.targetLane, geo.bunnyY);
    const dx = targetX - gs.bunny.x;
    gs.bunny.x += dx * 0.22;

    // Jump physics
    if (gs.bunny.isJumping) {
      gs.bunny.jumpY += gs.bunny.jumpVel;
      gs.bunny.jumpVel += 0.8;
      if (gs.bunny.jumpY >= 0) {
        gs.bunny.jumpY = 0;
        gs.bunny.isJumping = false;
        gs.bunny.squashFrames = 7;
        spawnDust(gs, gs.bunny.x, geo.bunnyY + gs.bunny.size / 2);
      }
    }
    if (gs.bunny.squashFrames > 0) gs.bunny.squashFrames--;

    // Magnet timer
    if (gs.magnetFrames > 0) gs.magnetFrames--;
    setMagnetHud(Math.ceil(gs.magnetFrames / 60));
    setShieldHud(gs.shield);

    // Spawn items
    if (gs.frameCount - lastSpawnRef.current >= gs.spawnInterval) {
      spawnItem(gs);
      lastSpawnRef.current = gs.frameCount;
    }

    // Spawn side props
    gs.propSpawnCounter++;
    if (gs.propSpawnCounter >= 34) {
      gs.propSpawnCounter = 0;
      const lvl = LEVELS[gs.level - 1];
      gs.props.push({
        side: Math.random() > 0.5 ? 1 : -1,
        p: 0,
        emoji: lvl.props[Math.floor(Math.random() * lvl.props.length)],
        jitter: Math.random() * 30,
      });
    }

    // Move props
    for (let i = gs.props.length - 1; i >= 0; i--) {
      gs.props[i].p += dp;
      if (gs.props[i].p > 1.5) gs.props.splice(i, 1);
    }

    // Move items & collisions (p-window at the bunny plane)
    for (let i = gs.items.length - 1; i >= 0; i--) {
      const item = gs.items[i];
      item.p += dp;

      // Magnet pulls diamonds into the bunny's lane
      if (gs.magnetFrames > 0 && item.type === ITEM_DIAMOND && item.p > 0.4 && !item.collected) {
        item.lane = gs.bunny.targetLane;
      }

      if (item.p > 1.4) {
        gs.items.splice(i, 1);
        continue;
      }
      if (item.collected) continue;

      const atBunnyPlane = Math.abs(item.p - 1) < 0.055;
      if (!atBunnyPlane) continue;

      if (item.type === ITEM_BARRIER) {
        item.collected = true;
        if (!gs.bunny.isJumping) applyHit(gs);
        continue;
      }

      if (item.lane !== gs.bunny.targetLane) continue;

      item.collected = true;
      const ix = geo.laneXAt(item.lane, geo.bunnyY);
      switch (item.type) {
        case ITEM_DIAMOND:
          collectDiamonds(gs, 1, ix, geo.bunnyY);
          break;
        case ITEM_CARROT:
          collectDiamonds(gs, 5, ix, geo.bunnyY);
          break;
        case ITEM_SHIELD:
          gs.shield = true;
          playSparkle();
          spawnFloater(gs, ix, geo.bunnyY - 30, '🛡️', '#4D96FF');
          break;
        case ITEM_MAGNET:
          gs.magnetFrames = MAGNET_FRAMES;
          playSparkle();
          spawnFloater(gs, ix, geo.bunnyY - 30, '🧲', '#FF6B6B');
          break;
        case ITEM_OBSTACLE:
        default:
          applyHit(gs);
          break;
      }
    }

    // Particles
    for (let i = gs.particles.length - 1; i >= 0; i--) {
      const pt = gs.particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.vy += 0.06;
      pt.life--;
      if (pt.life <= 0) gs.particles.splice(i, 1);
    }

    // Floaters
    for (let i = gs.floaters.length - 1; i >= 0; i--) {
      const f = gs.floaters[i];
      f.y -= 1.6;
      f.life--;
      if (f.life <= 0) gs.floaters.splice(i, 1);
    }

    if (gs.shakeFrames > 0) gs.shakeFrames--;
  }, [spawnItem, applyHit, collectDiamonds, spawnDust, spawnFloater]);

  // Draw
  const drawGame = useCallback((ctx, gs) => {
    const { w, h, geo } = gs;
    const lvl = LEVELS[gs.level - 1];

    ctx.save();
    // Camera shake
    if (gs.shakeFrames > 0) {
      ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8);
    }

    // Sky gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, lvl.top);
    bgGrad.addColorStop(1, lvl.bot);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(-10, -10, w + 20, h + 20);

    // Sky element (sun / snowflake / planet / fire glow)
    ctx.font = `${Math.floor(w * 0.1)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.9;
    ctx.fillText(lvl.sky, w * 0.82, h * 0.1);
    ctx.globalAlpha = 1;

    // Distant mountains sitting on the horizon
    ctx.fillStyle = lvl.mountain;
    ctx.globalAlpha = 0.55;
    const mh = h * 0.09;
    ctx.beginPath();
    ctx.moveTo(-10, geo.horizonY);
    ctx.lineTo(w * 0.16, geo.horizonY - mh);
    ctx.lineTo(w * 0.34, geo.horizonY);
    ctx.lineTo(w * 0.52, geo.horizonY - mh * 1.3);
    ctx.lineTo(w * 0.7, geo.horizonY);
    ctx.lineTo(w * 0.86, geo.horizonY - mh * 0.8);
    ctx.lineTo(w + 10, geo.horizonY);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    // Ground below horizon (subtle darker strip so road pops)
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(-10, geo.horizonY, w + 20, h - geo.horizonY + 10);

    // Road - perspective trapezoid converging to the horizon
    ctx.fillStyle = lvl.road;
    ctx.beginPath();
    ctx.moveTo(w / 2 - geo.roadHalfTop, geo.horizonY);
    ctx.lineTo(w / 2 + geo.roadHalfTop, geo.horizonY);
    ctx.lineTo(w / 2 + geo.roadHalfBottom, h);
    ctx.lineTo(w / 2 - geo.roadHalfBottom, h);
    ctx.closePath();
    ctx.fill();

    // Road edges
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w / 2 - geo.roadHalfTop, geo.horizonY);
    ctx.lineTo(w / 2 - geo.roadHalfBottom, h);
    ctx.moveTo(w / 2 + geo.roadHalfTop, geo.horizonY);
    ctx.lineTo(w / 2 + geo.roadHalfBottom, h);
    ctx.stroke();

    // Lane divider stripes - short segments flowing toward the camera
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    for (let d = 0; d < 2; d++) {
      const laneOffset = d === 0 ? -0.5 : 0.5;
      for (let k = 0; k < 12; k++) {
        const p0 = k * 0.1 + gs.roadP;
        if (p0 > 1.35) continue;
        const p1 = Math.min(p0 + 0.035, 1.4);
        const sy0 = geo.syOf(p0);
        const sy1 = geo.syOf(p1);
        const laneW0 = (2 * geo.halfWAt(sy0)) / LANE_COUNT;
        const laneW1 = (2 * geo.halfWAt(sy1)) / LANE_COUNT;
        ctx.lineWidth = Math.max(1, 3.5 * geo.scaleOf(p0));
        ctx.beginPath();
        ctx.moveTo(w / 2 + laneOffset * laneW0, sy0);
        ctx.lineTo(w / 2 + laneOffset * laneW1, sy1);
        ctx.stroke();
      }
    }

    // Side props (far to near so nearer ones draw on top)
    const sortedProps = [...gs.props].sort((a, b) => a.p - b.p);
    for (const prop of sortedProps) {
      const sy = geo.syOf(prop.p);
      const scale = geo.scaleOf(prop.p);
      const x = w / 2 + prop.side * (geo.halfWAt(sy) + 20 + prop.jitter * scale);
      ctx.font = `${Math.max(8, Math.floor(44 * scale))}px serif`;
      ctx.globalAlpha = Math.min(1, scale * 1.6);
      ctx.fillText(prop.emoji, x, sy);
      ctx.globalAlpha = 1;
    }

    // Speed lines at level 3+
    if (gs.level >= 3) {
      ctx.strokeStyle = 'rgba(255,255,255,0.16)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const sx = (i < 2 ? w * 0.06 : w * 0.94) + (i % 2) * w * 0.03;
        const yOff = ((gs.frameCount * (7 + i * 3)) % (h + 120)) - 60;
        ctx.beginPath();
        ctx.moveTo(sx, yOff);
        ctx.lineTo(sx, yOff + 46);
        ctx.stroke();
      }
    }

    // Items (far to near)
    const sortedItems = [...gs.items].sort((a, b) => a.p - b.p);
    for (const item of sortedItems) {
      if (item.collected) continue;
      const sy = geo.syOf(item.p);
      const scale = geo.scaleOf(item.p);

      if (item.type === ITEM_BARRIER) {
        const halfW = geo.halfWAt(sy) * 0.98;
        const barH = Math.max(6, 16 * scale);
        ctx.fillStyle = '#C0392B';
        ctx.fillRect(w / 2 - halfW, sy - barH / 2, halfW * 2, barH);
        const stripeW = Math.max(6, 22 * scale);
        ctx.fillStyle = '#F1C40F';
        for (let sx = w / 2 - halfW; sx < w / 2 + halfW; sx += stripeW * 2) {
          ctx.fillRect(sx, sy - barH / 2, stripeW, barH);
        }
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.fillRect(w / 2 - halfW, sy - barH / 2, halfW * 2, Math.max(1, 2 * scale));
        continue;
      }

      const ix = geo.laneXAt(item.lane, sy);
      let size = gs.itemBase * 2 * scale;
      // Diamonds gently pulse
      if (item.type === ITEM_DIAMOND) {
        size *= 1 + Math.sin(gs.frameCount * 0.18) * 0.05;
      }
      const sprite = gs.sprites[
        item.type === ITEM_DIAMOND ? 'diamond'
          : item.type === ITEM_OBSTACLE ? 'rock'
            : item.type
      ];
      if (sprite) {
        ctx.drawImage(sprite, ix - size / 2, sy - size / 2, size, size);
      }
    }

    // Bunny
    const bx = gs.bunny.x;
    const jumpNorm = Math.min(1, -gs.bunny.jumpY / 90);
    const by = geo.bunnyY + gs.bunny.jumpY;
    const hopBob = (!gs.bunny.isJumping && gs.bunny.squashFrames === 0)
      ? Math.abs(Math.sin(gs.frameCount * 0.28)) * -4
      : 0;
    const bunnyScale = 1 + jumpNorm * 0.28;
    const squash = gs.bunny.squashFrames > 0 ? 0.86 + (7 - gs.bunny.squashFrames) * 0.02 : 1;
    const tilt = Math.max(-0.22, Math.min(0.22, (geo.laneXAt(gs.bunny.targetLane, geo.bunnyY) - bx) * 0.004));

    // Ground shadow (shrinks while airborne)
    ctx.fillStyle = `rgba(0,0,0,${0.18 - jumpNorm * 0.08})`;
    ctx.beginPath();
    ctx.ellipse(
      bx, geo.bunnyY + gs.bunny.size / 2,
      (gs.bunny.size / 2.4) * (1 - jumpNorm * 0.35),
      (gs.bunny.size / 8) * (1 - jumpNorm * 0.3),
      0, 0, Math.PI * 2
    );
    ctx.fill();

    // Shield glow ring
    if (gs.shield) {
      ctx.strokeStyle = 'rgba(77,150,255,0.75)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(bx, by + hopBob, gs.bunny.size * 0.72 + Math.sin(gs.frameCount * 0.2) * 3, 0, Math.PI * 2);
      ctx.stroke();
    }

    const spriteSize = gs.bunny.size * 2.6 * bunnyScale;
    ctx.save();
    ctx.translate(bx, by + hopBob);
    ctx.rotate(tilt);
    ctx.scale(1, squash);
    ctx.drawImage(gs.sprites.bunny, -spriteSize / 2, -spriteSize / 2, spriteSize, spriteSize);
    ctx.restore();

    // Particles
    for (const pt of gs.particles) {
      ctx.globalAlpha = pt.life / pt.maxLife;
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Floating texts
    ctx.textAlign = 'center';
    for (const f of gs.floaters) {
      ctx.globalAlpha = Math.min(1, f.life / 20);
      ctx.font = 'bold 24px Rubik, sans-serif';
      ctx.fillStyle = f.color;
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 4;
      ctx.fillText(f.text, f.x, f.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    ctx.restore();
  }, []);

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
  }, [phase, updateGame, drawGame]);

  // Jump control
  const jumpBunny = useCallback(() => {
    const gs = gsRef.current;
    if (!gs || phase !== 'playing') return;
    if (!gs.bunny.isJumping) {
      gs.bunny.isJumping = true;
      gs.bunny.jumpVel = -12;
      playWhoosh();
    }
  }, [phase]);

  // Lane tap handler - tap a lane to move one step toward it, tap current lane to jump
  const handleLaneTap = useCallback((e) => {
    const now = Date.now();
    if (now - lastTapRef.current < 100) return;
    lastTapRef.current = now;

    const gs = gsRef.current;
    if (!gs || phase !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    let clientX;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const tapX = clientX - rect.left;

    // Simple & forgiving: screen thirds = lanes
    const tappedLane = Math.min(LANE_COUNT - 1, Math.max(0, Math.floor((tapX / rect.width) * LANE_COUNT)));
    const currentLane = gs.bunny.targetLane;

    if (tappedLane === currentLane) {
      jumpBunny();
    } else if (tappedLane < currentLane) {
      gs.bunny.targetLane = currentLane - 1;
      playWhoosh();
      spawnDust(gs, gs.bunny.x, gs.geo.bunnyY + gs.bunny.size / 2);
    } else {
      gs.bunny.targetLane = currentLane + 1;
      playWhoosh();
      spawnDust(gs, gs.bunny.x, gs.geo.bunnyY + gs.bunny.size / 2);
    }
  }, [phase, jumpBunny, spawnDust]);

  // Start game
  const handleStart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gsRef.current = initGameState(canvas);
    lastSpawnRef.current = 0;
    setDiamonds(0);
    setLives(MAX_LIVES);
    setLevel(1);
    setStars(0);
    setShieldHud(false);
    setMagnetHud(0);
    setPhase('playing');
  }, [initGameState]);

  // Play again
  const handlePlayAgain = useCallback(() => {
    handleStart();
  }, [handleStart]);

  return (
    <div className={styles.container}>
      {/* Canvas - tap on lanes to move */}
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onTouchStart={(e) => { e.preventDefault(); handleLaneTap(e); }}
        onMouseDown={(e) => handleLaneTap(e)}
      />

      {/* HUD */}
      <div className={styles.hud}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <div className={styles.scoreDisplay}>
          <div className={styles.diamonds}>💎 {diamonds}</div>
          <div className={styles.lives}>
            {Array.from({ length: MAX_LIVES }).map((_, i) => (
              <span
                key={i}
                className={lives === 1 && i === 0 ? styles.lastLife : undefined}
                style={{ opacity: i < lives ? 1 : 0.25, fontSize: 18 }}
              >
                ❤️
              </span>
            ))}
          </div>
          <div className={styles.level}>{LEVELS[level - 1].emoji} {level}</div>
          {(shieldHud || magnetHud > 0) && (
            <div className={styles.powerups}>
              {shieldHud && <span>🛡️</span>}
              {magnetHud > 0 && <span>🧲{magnetHud}</span>}
            </div>
          )}
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

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startBunny}>🐰</div>
          <div className={styles.startText}>!רוץ שפנפן</div>
          <div className={styles.startSubtext}>
            אספו 💎 יהלומים<br />
            הימנעו מ-🪨 מכשולים<br />
            קפצו מעל 🚧 מחסומים<br />
            אספו מתנות: 🛡️ מגן, 🧲 מגנט, 🥕 גזר זהב<br />
            לחצו על נתיב אחר כדי לזוז, על הנתיב שלכם כדי לקפוץ
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
