import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './DrawingBoard.module.css';

const STORAGE_KEY_RECENT_COLORS = 'drawingBoard_recentColors';
const STORAGE_KEY_SAVED_DRAWINGS = 'drawingBoard_savedDrawings';
const STORAGE_KEY_AUTOSAVE = 'drawingBoard_autosave';
const MAX_RECENT_COLORS = 8;
const MAX_SAVED_DRAWINGS = 50;
const WHEEL_SIZE = 300; // Internal canvas resolution for color wheel
const AUTOSAVE_DEBOUNCE_MS = 500;

const DEFAULT_COLORS = ['#2D3436', '#E74C3C', '#3498DB', '#2ECC71', '#F1C40F', '#E67E22', '#9B59B6', '#FD79A8'];

const BG_COLORS = [
  { id: 'white', hex: '#FFFFFF' },
  { id: 'lightblue', hex: '#D6EAF8' },
  { id: 'lightyellow', hex: '#FEF9E7' },
  { id: 'lightgreen', hex: '#D5F5E3' },
  { id: 'lightpink', hex: '#FDEDEC' },
  { id: 'lightpurple', hex: '#F5EEF8' },
];

const BRUSH_SIZES = [
  { id: 'thin', size: 3 },
  { id: 'medium', size: 8 },
  { id: 'thick', size: 16 },
  { id: 'xthick', size: 28 },
];

const SHAPES = [
  { id: 'circle', label: '●' },
  { id: 'square', label: '■' },
  { id: 'triangle', label: '▲' },
  { id: 'star', label: '★' },
  { id: 'heart', label: '♥' },
  { id: 'diamond', label: '◆' },
];

// Draw a shape on the canvas at (x, y)
function drawShapeOnCanvas(ctx, x, y, shapeId, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();

  switch (shapeId) {
    case 'circle':
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 'square':
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
      break;

    case 'triangle': {
      const h = size * Math.sqrt(3);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + h / 2, y + size / 2);
      ctx.lineTo(x - h / 2, y + size / 2);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'star': {
      const spikes = 5;
      const outerR = size;
      const innerR = size * 0.4;
      let rot = -Math.PI / 2;
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = rot + (i * Math.PI) / spikes;
        const sx = x + Math.cos(angle) * r;
        const sy = y + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'heart': {
      // Draw heart at normalized scale then transform
      ctx.save();
      ctx.translate(x, y);
      const sc = size / 40;
      ctx.scale(sc, sc);
      ctx.moveTo(0, -15);
      ctx.bezierCurveTo(-5, -30, -25, -35, -25, -15);
      ctx.bezierCurveTo(-25, 0, 0, 15, 0, 35);
      ctx.bezierCurveTo(0, 15, 25, 0, 25, -15);
      ctx.bezierCurveTo(25, -35, 5, -30, 0, -15);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      break;
    }

    case 'diamond': {
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size * 0.65, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x - size * 0.65, y);
      ctx.closePath();
      ctx.fill();
      break;
    }

    default:
      break;
  }
}

// HSL to RGB conversion
function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// LocalStorage helpers
function loadRecentColors() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_RECENT_COLORS);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed.slice(0, MAX_RECENT_COLORS);
    }
  } catch {}
  return DEFAULT_COLORS;
}

function saveRecentColors(colors) {
  try { localStorage.setItem(STORAGE_KEY_RECENT_COLORS, JSON.stringify(colors)); } catch {}
}

function loadSavedDrawings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_SAVED_DRAWINGS);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {}
  return [];
}

function saveSavedDrawings(drawings) {
  try { localStorage.setItem(STORAGE_KEY_SAVED_DRAWINGS, JSON.stringify(drawings)); } catch {}
}

/**
 * DrawingBoard - Free-play drawing canvas for toddlers
 * Features: custom color wheel, FIFO recent colors, save/load gallery, undo, bg colors
 */
function DrawingBoard({ game, onClose }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const wheelCanvasRef = useRef(null);
  const autosaveTimerRef = useRef(null);

  const [recentColors, setRecentColors] = useState(loadRecentColors);
  const [selectedColor, setSelectedColor] = useState(() => loadRecentColors()[0] || '#2D3436');
  const [brushSize, setBrushSize] = useState(BRUSH_SIZES[1].size);
  const [bgColor, setBgColor] = useState(BG_COLORS[0].hex);
  const [showBgPicker, setShowBgPicker] = useState(false);
  const [showColorWheel, setShowColorWheel] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [savedDrawings, setSavedDrawings] = useState(loadSavedDrawings);
  const [history, setHistory] = useState([]);
  const [canvasReady, setCanvasReady] = useState(false);

  // Shapes stamp mode
  const [activeMode, setActiveMode] = useState('draw'); // 'draw' | 'stamp'
  const [showShapesMenu, setShowShapesMenu] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null);

  // ======================== Auto-Save (debounced, async) ========================

  const autoSave = useCallback(() => {
    // Cancel any pending autosave
    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      try {
        const dataUrl = canvas.toDataURL('image/png');
        localStorage.setItem(STORAGE_KEY_AUTOSAVE, dataUrl);
      } catch {}
    }, AUTOSAVE_DEBOUNCE_MS);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    };
  }, []);

  // ======================== Color Wheel ========================

  // Draw the HSL color wheel on canvas
  const drawColorWheel = useCallback(() => {
    const canvas = wheelCanvasRef.current;
    if (!canvas) return;

    canvas.width = WHEEL_SIZE;
    canvas.height = WHEEL_SIZE;

    const ctx = canvas.getContext('2d');
    const center = WHEEL_SIZE / 2;
    const radius = center - 4;
    const imageData = ctx.createImageData(WHEEL_SIZE, WHEEL_SIZE);
    const data = imageData.data;

    for (let y = 0; y < WHEEL_SIZE; y++) {
      for (let x = 0; x < WHEEL_SIZE; x++) {
        const dx = x - center;
        const dy = y - center;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= radius) {
          const angle = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
          const t = dist / radius; // 0 at center, 1 at edge

          let s, l;
          if (t < 0.82) {
            // Main area: white center → vivid colors at edge
            const nt = t / 0.82;
            s = nt * 100;
            l = 100 - nt * 50; // 100 (white) → 50 (vivid)
          } else {
            // Outer dark ring: vivid → dark
            const nt = (t - 0.82) / 0.18;
            s = 100 - nt * 30;
            l = 50 - nt * 35; // 50 (vivid) → 15 (dark)
          }

          const [r, g, b] = hslToRgb(angle, s, l);
          const idx = (y * WHEEL_SIZE + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Draw wheel when modal opens
  useEffect(() => {
    if (showColorWheel) {
      // Small delay to ensure canvas is mounted
      requestAnimationFrame(() => drawColorWheel());
    }
  }, [showColorWheel, drawColorWheel]);

  // Handle tap on color wheel - read pixel color
  const handleWheelTap = useCallback((e) => {
    const canvas = wheelCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = Math.round((clientX - rect.left) * scaleX);
    const cy = Math.round((clientY - rect.top) * scaleY);

    if (cx < 0 || cy < 0 || cx >= canvas.width || cy >= canvas.height) return;

    const ctx = canvas.getContext('2d');
    const pixel = ctx.getImageData(cx, cy, 1, 1).data;

    // Only pick if pixel is not transparent (inside the wheel circle)
    if (pixel[3] > 0) {
      const hex = '#' + [pixel[0], pixel[1], pixel[2]]
        .map(v => v.toString(16).padStart(2, '0')).join('');
      addToRecentColors(hex);
      setSelectedColor(hex);
      setShowColorWheel(false);
    }
  }, []);

  // ======================== Recent Colors ========================

  const addToRecentColors = useCallback((hex) => {
    setRecentColors(prev => {
      const filtered = prev.filter(c => c.toLowerCase() !== hex.toLowerCase());
      const updated = [hex, ...filtered].slice(0, MAX_RECENT_COLORS);
      saveRecentColors(updated);
      return updated;
    });
  }, []);

  // ======================== Canvas Init ========================

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

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Restore autosaved drawing if exists
    try {
      const autosaved = localStorage.getItem(STORAGE_KEY_AUTOSAVE);
      if (autosaved) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, rect.width, rect.height);
        };
        img.src = autosaved;
      }
    } catch {}

    setCanvasReady(true);
  }, []);

  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0);

      initCanvas();

      const ctx = ctxRef.current;
      if (ctx) {
        ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  useEffect(() => {
    if (!canvasReady) return;
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);
  }, [bgColor, canvasReady]);

  // ======================== History / Undo ========================

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
    autoSave();
  }, [history, autoSave]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    saveToHistory();
    const dpr = window.devicePixelRatio || 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    autoSave();
  }, [bgColor, saveToHistory, autoSave]);

  // ======================== Save / Load ========================

  const saveDrawing = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const newDrawing = { id: Date.now(), dataUrl };
    setSavedDrawings(prev => {
      const updated = [newDrawing, ...prev].slice(0, MAX_SAVED_DRAWINGS);
      saveSavedDrawings(updated);
      return updated;
    });
  }, []);

  const loadDrawing = useCallback((drawing) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    saveToHistory();
    const img = new Image();
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      autoSave();
    };
    img.src = drawing.dataUrl;
    setShowGallery(false);
  }, [saveToHistory, autoSave]);

  const deleteDrawing = useCallback((drawingId) => {
    setSavedDrawings(prev => {
      const updated = prev.filter(d => d.id !== drawingId);
      saveSavedDrawings(updated);
      return updated;
    });
  }, []);

  // ======================== Drawing Events ========================

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
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const startDrawing = useCallback((e) => {
    e.preventDefault();
    const coords = getCoords(e);
    if (!coords) return;

    // Stamp mode: place shape and return (size derived from brushSize)
    if (activeMode === 'stamp' && selectedShape) {
      saveToHistory();
      const ctx = ctxRef.current;
      if (ctx) {
        drawShapeOnCanvas(ctx, coords.x, coords.y, selectedShape, brushSize * 3, selectedColor);
        autoSave();
      }
      return;
    }

    // Normal draw mode
    saveToHistory();
    isDrawingRef.current = true;
    lastPointRef.current = coords;
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      ctx.lineTo(coords.x + 0.1, coords.y + 0.1);
      ctx.stroke();
    }
  }, [getCoords, saveToHistory, selectedColor, brushSize, activeMode, selectedShape, autoSave]);

  const draw = useCallback((e) => {
    e.preventDefault();
    if (!isDrawingRef.current) return;
    const coords = getCoords(e);
    if (!coords || !lastPointRef.current) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    lastPointRef.current = coords;
  }, [getCoords, selectedColor, brushSize]);

  const stopDrawing = useCallback((e) => {
    if (e) e.preventDefault();
    if (isDrawingRef.current) autoSave();
    isDrawingRef.current = false;
    lastPointRef.current = null;
  }, [autoSave]);

  // ======================== Render ========================

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.backButton} onClick={onClose}>✕</button>
        <h1 className={styles.title}>{game?.name || 'לוח ציור'}</h1>
        <div className={styles.topActions}>
          <button className={styles.actionButton} onClick={undo} disabled={history.length === 0}>
            ↩️
          </button>
          <button className={styles.actionButton} onClick={clearCanvas}>
            🗑️
          </button>
          <button
            className={`${styles.actionButton} ${showBgPicker ? styles.active : ''}`}
            onClick={() => { setShowBgPicker(!showBgPicker); setShowGallery(false); }}
          >
            🎨
          </button>
          <button className={styles.actionButton} onClick={saveDrawing}>
            💾
          </button>
          <button
            className={`${styles.actionButton} ${showGallery ? styles.active : ''}`}
            onClick={() => { setShowGallery(!showGallery); setShowBgPicker(false); }}
          >
            📂
          </button>
        </div>
      </div>

      {/* Background color picker dropdown */}
      {showBgPicker && (
        <motion.div
          className={styles.bgPicker}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {BG_COLORS.map(c => (
            <button
              key={c.id}
              className={`${styles.bgColorBtn} ${bgColor === c.hex ? styles.selectedBg : ''}`}
              style={{ backgroundColor: c.hex }}
              onClick={() => {
                setBgColor(c.hex);
                setShowBgPicker(false);
                const canvas = canvasRef.current;
                const ctx = ctxRef.current;
                if (canvas && ctx) {
                  saveToHistory();
                  const dpr = window.devicePixelRatio || 1;
                  ctx.fillStyle = c.hex;
                  ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
                  autoSave();
                }
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Color Wheel Modal */}
      {showColorWheel && (
        <motion.div
          className={styles.wheelOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowColorWheel(false)}
        >
          <motion.div
            className={styles.wheelContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.wheelClose} onClick={() => setShowColorWheel(false)}>✕</button>
            <canvas
              ref={wheelCanvasRef}
              className={styles.wheelCanvas}
              onClick={handleWheelTap}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Gallery modal */}
      {showGallery && (
        <motion.div
          className={styles.galleryOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowGallery(false)}
        >
          <motion.div
            className={styles.galleryModal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.galleryHeader}>
              <button className={styles.galleryClose} onClick={() => setShowGallery(false)}>✕</button>
            </div>
            {savedDrawings.length === 0 ? (
              <div className={styles.galleryEmpty}>
                <span className={styles.galleryEmptyIcon}>🖼️</span>
              </div>
            ) : (
              <div className={styles.galleryGrid}>
                {savedDrawings.map(drawing => (
                  <div key={drawing.id} className={styles.galleryItem}>
                    <img
                      src={drawing.dataUrl}
                      alt=""
                      className={styles.galleryThumb}
                      onClick={() => loadDrawing(drawing)}
                    />
                    <button
                      className={styles.galleryDeleteBtn}
                      onClick={(e) => { e.stopPropagation(); deleteDrawing(drawing.id); }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Shapes menu dropdown */}
      {showShapesMenu && (
        <motion.div
          className={styles.shapesMenu}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.shapesGrid}>
            {SHAPES.map(s => (
              <button
                key={s.id}
                className={`${styles.shapeBtn} ${selectedShape === s.id ? styles.selectedShapeBtn : ''}`}
                onClick={() => {
                  setSelectedShape(s.id);
                  setActiveMode('stamp');
                  setShowShapesMenu(false);
                }}
              >
                <span className={styles.shapeIcon}>{s.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Stamp mode indicator */}
      {activeMode === 'stamp' && selectedShape && (
        <div className={styles.stampIndicator}>
          <span className={styles.stampShape} style={{ color: selectedColor === '#FFFFFF' ? '#999' : selectedColor }}>
            {SHAPES.find(s => s.id === selectedShape)?.label}
          </span>
          <button
            className={styles.stampExitBtn}
            onClick={() => { setActiveMode('draw'); setSelectedShape(null); }}
          >
            ✕
          </button>
        </div>
      )}

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

      {/* Bottom toolbar */}
      <div className={styles.toolbar}>
        {/* Recent colors + picker + eraser */}
        <div className={styles.colorPalette}>
          {recentColors.map((hex, idx) => (
            <button
              key={`${hex}-${idx}`}
              className={`${styles.colorBtn} ${selectedColor === hex ? styles.selectedColor : ''}`}
              style={{ backgroundColor: hex }}
              onClick={() => setSelectedColor(hex)}
            />
          ))}
          <button
            className={styles.colorPickerBtn}
            onClick={() => setShowColorWheel(true)}
          />
          <button
            className={`${styles.colorBtn} ${styles.eraserBtn} ${selectedColor === '#FFFFFF' ? styles.selectedColor : ''}`}
            onClick={() => { setSelectedColor('#FFFFFF'); setActiveMode('draw'); setSelectedShape(null); setShowShapesMenu(false); }}
          >
            <span className={styles.eraserIcon}>✏️</span>
          </button>
        </div>

        {/* Shapes button */}
        <button
          className={`${styles.shapesToggleBtn} ${activeMode === 'stamp' ? styles.shapesActive : ''} ${showShapesMenu ? styles.shapesOpen : ''}`}
          onClick={() => {
            if (activeMode === 'stamp' && !showShapesMenu) {
              // Exit stamp mode
              setActiveMode('draw');
              setSelectedShape(null);
              setShowShapesMenu(false);
            } else {
              setShowShapesMenu(!showShapesMenu);
            }
          }}
        >
          {activeMode === 'stamp' && selectedShape
            ? SHAPES.find(s => s.id === selectedShape)?.label || '◆'
            : '◆'}
        </button>

        {/* Brush sizes */}
        <div className={styles.brushSizes}>
          {BRUSH_SIZES.map(b => (
            <button
              key={b.id}
              className={`${styles.brushBtn} ${brushSize === b.size && activeMode === 'draw' ? styles.selectedBrush : ''}`}
              onClick={() => {
                setBrushSize(b.size);
                setActiveMode('draw');
                setSelectedShape(null);
                setShowShapesMenu(false);
              }}
            >
              <span
                className={styles.brushDot}
                style={{
                  width: Math.min(b.size * 1.5, 36),
                  height: Math.min(b.size * 1.5, 36),
                  backgroundColor: selectedColor === '#FFFFFF' ? '#999' : selectedColor,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrawingBoard;
