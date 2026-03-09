import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './MazeGame.module.css';

// Maze generation using recursive backtracking
function generateMaze(cols, rows) {
  // Each cell has walls: top, right, bottom, left
  const grid = [];
  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
      grid[r][c] = { top: true, right: true, bottom: true, left: true, visited: false };
    }
  }

  const directions = [
    { dr: -1, dc: 0, wall: 'top', opposite: 'bottom' },
    { dr: 0, dc: 1, wall: 'right', opposite: 'left' },
    { dr: 1, dc: 0, wall: 'bottom', opposite: 'top' },
    { dr: 0, dc: -1, wall: 'left', opposite: 'right' },
  ];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Iterative DFS to avoid stack overflow
  const stack = [{ r: 0, c: 0 }];
  grid[0][0].visited = true;

  while (stack.length > 0) {
    const { r, c } = stack[stack.length - 1];
    const neighbors = shuffle(directions).filter(d => {
      const nr = r + d.dr;
      const nc = c + d.dc;
      return nr >= 0 && nr < rows && nc >= 0 && nc < cols && !grid[nr][nc].visited;
    });

    if (neighbors.length === 0) {
      stack.pop();
    } else {
      const d = neighbors[0];
      const nr = r + d.dr;
      const nc = c + d.dc;
      grid[r][c][d.wall] = false;
      grid[nr][nc][d.opposite] = false;
      grid[nr][nc].visited = true;
      stack.push({ r: nr, c: nc });
    }
  }

  return grid;
}

// Draw maze walls on a canvas context
function drawMaze(ctx, grid, cols, rows, cellSize, offsetX, offsetY, wallColor, wallWidth) {
  ctx.strokeStyle = wallColor;
  ctx.lineWidth = wallWidth;
  ctx.lineCap = 'round';

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = offsetX + c * cellSize;
      const y = offsetY + r * cellSize;
      const cell = grid[r][c];

      if (cell.top) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cellSize, y);
        ctx.stroke();
      }
      if (cell.right) {
        ctx.beginPath();
        ctx.moveTo(x + cellSize, y);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
      if (cell.bottom) {
        ctx.beginPath();
        ctx.moveTo(x, y + cellSize);
        ctx.lineTo(x + cellSize, y + cellSize);
        ctx.stroke();
      }
      if (cell.left) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + cellSize);
        ctx.stroke();
      }
    }
  }

  // Draw entrance arrow (top-left)
  const entranceX = offsetX - 12;
  const entranceY = offsetY + cellSize * 0.5;
  ctx.fillStyle = '#2ECC71';
  ctx.font = `bold ${Math.round(cellSize * 0.5)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('➡️', entranceX, entranceY);

  // Draw exit star (bottom-right)
  const exitX = offsetX + cols * cellSize + 12;
  const exitY = offsetY + (rows - 1) * cellSize + cellSize * 0.5;
  ctx.fillStyle = '#F1C40F';
  ctx.fillText('⭐', exitX, exitY);
}

const DEFAULT_COLS = 6;
const DEFAULT_ROWS = 8;
const DRAW_COLOR = '#E74C3C';
const DRAW_WIDTH = 5;
const WALL_COLOR = '#2D3436';
const DEFAULT_WALL_WIDTH = 3;

function MazeGame({ game, onClose }) {
  const MAZE_COLS = game?.mazeConfig?.cols || DEFAULT_COLS;
  const MAZE_ROWS = game?.mazeConfig?.rows || DEFAULT_ROWS;
  const WALL_WIDTH = game?.mazeConfig?.wallWidth || DEFAULT_WALL_WIDTH;
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const mazeRef = useRef(null);
  const mazeDimsRef = useRef({ cellSize: 0, offsetX: 0, offsetY: 0 });

  const [history, setHistory] = useState([]);
  const [mazeKey, setMazeKey] = useState(0); // force re-render on new maze

  // Generate maze and draw it
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctxRef.current = ctx;

    // Calculate cell size to fit the canvas with some padding
    const padding = 30;
    const availW = rect.width - padding * 2;
    const availH = rect.height - padding * 2;
    const cellSize = Math.floor(Math.min(availW / MAZE_COLS, availH / MAZE_ROWS));
    const totalW = cellSize * MAZE_COLS;
    const totalH = cellSize * MAZE_ROWS;
    const offsetX = Math.floor((rect.width - totalW) / 2);
    const offsetY = Math.floor((rect.height - totalH) / 2);
    mazeDimsRef.current = { cellSize, offsetX, offsetY };

    // Generate maze if needed
    if (!mazeRef.current) {
      mazeRef.current = generateMaze(MAZE_COLS, MAZE_ROWS);
      // Open entrance (top-left cell, left wall) and exit (bottom-right cell, right wall)
      mazeRef.current[0][0].left = false;
      mazeRef.current[MAZE_ROWS - 1][MAZE_COLS - 1].right = false;
    }

    // Fill white background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw the maze
    drawMaze(ctx, mazeRef.current, MAZE_COLS, MAZE_ROWS, cellSize, offsetX, offsetY, WALL_COLOR, WALL_WIDTH);

    // Clear undo history for new maze
    setHistory([]);
  }, [mazeKey]);

  useEffect(() => {
    initCanvas();

    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  // Save snapshot to history before each stroke
  const saveToHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => {
      const newHistory = [...prev, imageData];
      if (newHistory.length > 30) newHistory.shift();
      return newHistory;
    });
  }, []);

  const undo = useCallback(() => {
    if (history.length === 0) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const newHistory = [...history];
    const lastState = newHistory.pop();
    setHistory(newHistory);
    ctx.putImageData(lastState, 0, 0);
  }, [history]);

  const newMaze = useCallback(() => {
    mazeRef.current = null;
    setMazeKey(k => k + 1);
  }, []);

  // Get coordinates from event (mouse or touch)
  const getCoords = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }, []);

  const startDrawing = useCallback((e) => {
    e.preventDefault();
    const coords = getCoords(e);
    if (!coords) return;

    saveToHistory();
    isDrawingRef.current = true;
    lastPointRef.current = coords;

    // Draw a dot for single taps
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.strokeStyle = DRAW_COLOR;
      ctx.lineWidth = DRAW_WIDTH;
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      ctx.lineTo(coords.x + 0.1, coords.y + 0.1);
      ctx.stroke();
    }
  }, [getCoords, saveToHistory]);

  const draw = useCallback((e) => {
    e.preventDefault();
    if (!isDrawingRef.current) return;

    const coords = getCoords(e);
    if (!coords || !lastPointRef.current) return;

    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.strokeStyle = DRAW_COLOR;
    ctx.lineWidth = DRAW_WIDTH;
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    lastPointRef.current = coords;
  }, [getCoords]);

  const stopDrawing = useCallback((e) => {
    if (e) e.preventDefault();
    isDrawingRef.current = false;
    lastPointRef.current = null;
  }, []);

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.backButton} onClick={onClose}>
          ✕
        </button>
        <h1 className={styles.title}>{game?.name || 'מבוך'}</h1>
        <div className={styles.topActions}>
          <button
            className={styles.actionButton}
            onClick={undo}
            disabled={history.length === 0}
            title="ביטול"
          >
            ↩️
          </button>
          <button
            className={styles.actionButton}
            onClick={newMaze}
            title="מבוך חדש"
          >
            🔄
          </button>
        </div>
      </div>

      {/* Instruction */}
      <motion.div
        className={styles.instruction}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ציירו את הדרך מ-➡️ אל ⭐
      </motion.div>

      {/* Canvas area */}
      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
        />
      </div>
    </div>
  );
}

export default MazeGame;
