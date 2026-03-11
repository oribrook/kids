import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MazeGame.module.css';

// Maze generation using recursive backtracking
function generateMaze(cols, rows) {
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

// Check if movement from one cell to adjacent cell is allowed (no wall between them)
function canMove(grid, fromR, fromC, toR, toC) {
  const dr = toR - fromR;
  const dc = toC - fromC;
  // Only allow orthogonal single-step moves
  if (Math.abs(dr) + Math.abs(dc) !== 1) return false;

  if (dr === -1) return !grid[fromR][fromC].top;
  if (dr === 1) return !grid[fromR][fromC].bottom;
  if (dc === 1) return !grid[fromR][fromC].right;
  if (dc === -1) return !grid[fromR][fromC].left;
  return false;
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
  ctx.fillText('\u27A1\uFE0F', entranceX, entranceY);

  // Draw exit star (bottom-right)
  const exitX = offsetX + cols * cellSize + 12;
  const exitY = offsetY + (rows - 1) * cellSize + cellSize * 0.5;
  ctx.fillStyle = '#F1C40F';
  ctx.fillText('\u2B50', exitX, exitY);
}

// Draw the user's path on the canvas
function drawPath(ctx, path, cellSize, offsetX, offsetY, pathColor, pathWidth) {
  if (path.length === 0) return;

  // Draw visited cells as highlighted background
  ctx.fillStyle = 'rgba(46, 204, 113, 0.15)';
  for (const { r, c } of path) {
    const x = offsetX + c * cellSize;
    const y = offsetY + r * cellSize;
    ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
  }

  // Draw path line through cell centers
  ctx.strokeStyle = pathColor;
  ctx.lineWidth = pathWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();

  const first = path[0];
  ctx.moveTo(offsetX + first.c * cellSize + cellSize / 2, offsetY + first.r * cellSize + cellSize / 2);

  for (let i = 1; i < path.length; i++) {
    const p = path[i];
    ctx.lineTo(offsetX + p.c * cellSize + cellSize / 2, offsetY + p.r * cellSize + cellSize / 2);
  }
  ctx.stroke();

  // Draw head dot (current position)
  const head = path[path.length - 1];
  const hx = offsetX + head.c * cellSize + cellSize / 2;
  const hy = offsetY + head.r * cellSize + cellSize / 2;
  ctx.fillStyle = pathColor;
  ctx.beginPath();
  ctx.arc(hx, hy, pathWidth * 1.3, 0, Math.PI * 2);
  ctx.fill();
}

const DEFAULT_COLS = 6;
const DEFAULT_ROWS = 8;
const PATH_COLOR = '#E74C3C';
const PATH_WIDTH = 5;
const WALL_COLOR = '#2D3436';
const DEFAULT_WALL_WIDTH = 3;

function MazeGame({ game, onClose }) {
  const MAZE_COLS = game?.mazeConfig?.cols || DEFAULT_COLS;
  const MAZE_ROWS = game?.mazeConfig?.rows || DEFAULT_ROWS;
  const WALL_WIDTH = game?.mazeConfig?.wallWidth || DEFAULT_WALL_WIDTH;
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const mazeRef = useRef(null);
  const mazeDimsRef = useRef({ cellSize: 0, offsetX: 0, offsetY: 0 });
  const pathRef = useRef([]); // Array of {r, c} cells visited

  const [mazeKey, setMazeKey] = useState(0);
  const [won, setWon] = useState(false);
  const [pathLength, setPathLength] = useState(0); // triggers re-render for undo button state

  // Convert pixel coordinates to grid cell
  const pixelToCell = useCallback((x, y) => {
    const { cellSize, offsetX, offsetY } = mazeDimsRef.current;
    if (cellSize === 0) return null;
    const col = Math.floor((x - offsetX) / cellSize);
    const row = Math.floor((y - offsetY) / cellSize);
    if (row < 0 || row >= MAZE_ROWS || col < 0 || col >= MAZE_COLS) return null;
    return { r: row, c: col };
  }, [MAZE_ROWS, MAZE_COLS]);

  // Full redraw: background + maze + path
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    const { cellSize, offsetX, offsetY } = mazeDimsRef.current;

    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw maze walls
    if (mazeRef.current) {
      drawMaze(ctx, mazeRef.current, MAZE_COLS, MAZE_ROWS, cellSize, offsetX, offsetY, WALL_COLOR, WALL_WIDTH);
    }

    // Draw user path
    drawPath(ctx, pathRef.current, cellSize, offsetX, offsetY, PATH_COLOR, PATH_WIDTH);
  }, [MAZE_COLS, MAZE_ROWS, WALL_WIDTH]);

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

    redrawCanvas();
  }, [mazeKey, MAZE_COLS, MAZE_ROWS, redrawCanvas]);

  useEffect(() => {
    initCanvas();

    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

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
    if (won) return;

    const coords = getCoords(e);
    if (!coords) return;

    const cell = pixelToCell(coords.x, coords.y);
    if (!cell) return;

    const path = pathRef.current;

    if (path.length === 0) {
      // Must start at entrance cell (0, 0)
      if (cell.r !== 0 || cell.c !== 0) return;
      pathRef.current = [{ r: 0, c: 0 }];
      setPathLength(1);
      isDrawingRef.current = true;
      redrawCanvas();
    } else {
      // Must touch near the head of the path to continue
      const head = path[path.length - 1];
      if (cell.r === head.r && cell.c === head.c) {
        isDrawingRef.current = true;
      } else {
        // Also allow touching an adjacent cell to the head (for quick continuation)
        if (mazeRef.current && canMove(mazeRef.current, head.r, head.c, cell.r, cell.c)) {
          // Check not already in path (except backtracking)
          const alreadyIdx = path.findIndex(p => p.r === cell.r && p.c === cell.c);
          if (alreadyIdx === -1) {
            pathRef.current = [...path, { r: cell.r, c: cell.c }];
            setPathLength(pathRef.current.length);
            isDrawingRef.current = true;
            redrawCanvas();
            // Check win
            if (cell.r === MAZE_ROWS - 1 && cell.c === MAZE_COLS - 1) {
              setWon(true);
              isDrawingRef.current = false;
            }
          }
        }
      }
    }
  }, [getCoords, pixelToCell, won, redrawCanvas, MAZE_ROWS, MAZE_COLS]);

  const draw = useCallback((e) => {
    e.preventDefault();
    if (!isDrawingRef.current || won) return;

    const coords = getCoords(e);
    if (!coords) return;

    const cell = pixelToCell(coords.x, coords.y);
    if (!cell) return;

    const path = pathRef.current;
    if (path.length === 0) return;

    const head = path[path.length - 1];

    // Same cell as head — no action
    if (cell.r === head.r && cell.c === head.c) return;

    // Check if backtracking (moving to the previous cell in path)
    if (path.length >= 2) {
      const prev = path[path.length - 2];
      if (cell.r === prev.r && cell.c === prev.c) {
        // Backtrack: remove the head
        pathRef.current = path.slice(0, -1);
        setPathLength(pathRef.current.length);
        redrawCanvas();
        return;
      }
    }

    // Check if this is a valid forward move (adjacent + no wall)
    if (!mazeRef.current) return;
    if (!canMove(mazeRef.current, head.r, head.c, cell.r, cell.c)) return;

    // Don't allow revisiting a cell already in the path (no loops)
    const alreadyIdx = path.findIndex(p => p.r === cell.r && p.c === cell.c);
    if (alreadyIdx !== -1) return;

    // Valid move! Add to path
    pathRef.current = [...path, { r: cell.r, c: cell.c }];
    setPathLength(pathRef.current.length);
    redrawCanvas();

    // Check win condition
    if (cell.r === MAZE_ROWS - 1 && cell.c === MAZE_COLS - 1) {
      setWon(true);
      isDrawingRef.current = false;
    }
  }, [getCoords, pixelToCell, won, redrawCanvas, MAZE_ROWS, MAZE_COLS]);

  const stopDrawing = useCallback((e) => {
    if (e) e.preventDefault();
    isDrawingRef.current = false;
  }, []);

  const undo = useCallback(() => {
    if (pathRef.current.length <= 1) return;
    pathRef.current = pathRef.current.slice(0, -1);
    setPathLength(pathRef.current.length);
    redrawCanvas();
  }, [redrawCanvas]);

  const clearPath = useCallback(() => {
    pathRef.current = [];
    setPathLength(0);
    setWon(false);
    redrawCanvas();
  }, [redrawCanvas]);

  const newMaze = useCallback(() => {
    mazeRef.current = null;
    pathRef.current = [];
    setPathLength(0);
    setWon(false);
    setMazeKey(k => k + 1);
  }, []);

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.backButton} onClick={onClose}>
          ✕
        </button>
        <h1 className={styles.title}>{game?.name || '\u05DE\u05D1\u05D5\u05DA'}</h1>
        <div className={styles.topActions}>
          <button
            className={styles.actionButton}
            onClick={undo}
            disabled={pathLength <= 1 || won}
            title="\u05D1\u05D9\u05D8\u05D5\u05DC"
          >
            \u21A9\uFE0F
          </button>
          <button
            className={styles.actionButton}
            onClick={clearPath}
            disabled={pathLength === 0 || won}
            title="\u05E0\u05E7\u05D4"
          >
            \uD83D\uDDD1\uFE0F
          </button>
          <button
            className={styles.actionButton}
            onClick={newMaze}
            title="\u05DE\u05D1\u05D5\u05DA \u05D7\u05D3\u05E9"
          >
            \uD83D\uDD04
          </button>
        </div>
      </div>

      {/* Instruction */}
      <motion.div
        className={styles.instruction}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {won ? '\uD83C\uDF89 \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3! \u05DE\u05E6\u05D0\u05EA\u05DD \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA! \uD83C\uDF89' : '\u05D2\u05E8\u05E8\u05D5 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05DE-\u27A1\uFE0F \u05D0\u05DC \u2B50'}
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

      {/* Win overlay */}
      <AnimatePresence>
        {won && (
          <motion.div
            className={styles.winOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.winContent}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 12 }}
            >
              <div className={styles.winEmoji}>{'\uD83C\uDF1F'}</div>
              <h2 className={styles.winTitle}>{'\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3!'}</h2>
              <p className={styles.winSubtitle}>{'\u05DE\u05E6\u05D0\u05EA\u05DD \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05D1\u05DE\u05D1\u05D5\u05DA!'}</p>
              <button className={styles.winButton} onClick={newMaze}>
                {'\uD83D\uDD04 \u05DE\u05D1\u05D5\u05DA \u05D7\u05D3\u05E9'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MazeGame;
