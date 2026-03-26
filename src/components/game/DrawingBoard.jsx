import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './DrawingBoard.module.css';

const STORAGE_KEY_RECENT_COLORS = 'drawingBoard_recentColors';
const STORAGE_KEY_SAVED_DRAWINGS = 'drawingBoard_savedDrawings';
const MAX_RECENT_COLORS = 8;
const MAX_SAVED_DRAWINGS = 50;

const DEFAULT_COLORS = ['#2D3436', '#E74C3C', '#3498DB', '#2ECC71', '#F1C40F', '#E67E22', '#9B59B6', '#FD79A8'];

const BG_COLORS = [
  { id: 'white', hex: '#FFFFFF', label: 'לבן' },
  { id: 'lightblue', hex: '#D6EAF8', label: 'תכלת' },
  { id: 'lightyellow', hex: '#FEF9E7', label: 'צהבהב' },
  { id: 'lightgreen', hex: '#D5F5E3', label: 'ירקרק' },
  { id: 'lightpink', hex: '#FDEDEC', label: 'ורדרד' },
  { id: 'lightpurple', hex: '#F5EEF8', label: 'סגלגל' },
];

const BRUSH_SIZES = [
  { id: 'thin', size: 3, label: 'דק' },
  { id: 'medium', size: 8, label: 'בינוני' },
  { id: 'thick', size: 16, label: 'עבה' },
  { id: 'xthick', size: 28, label: 'עבה מאוד' },
];

// Load recent colors from localStorage
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

// Save recent colors to localStorage
function saveRecentColors(colors) {
  try {
    localStorage.setItem(STORAGE_KEY_RECENT_COLORS, JSON.stringify(colors));
  } catch {}
}

// Load saved drawings from localStorage
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

// Save drawings to localStorage
function saveSavedDrawings(drawings) {
  try {
    localStorage.setItem(STORAGE_KEY_SAVED_DRAWINGS, JSON.stringify(drawings));
  } catch {}
}

/**
 * DrawingBoard - Free-play drawing canvas for toddlers
 * Supports touch and mouse, color picker with FIFO recent colors,
 * brush thickness, undo, clear, background color, save/load drawings
 */
function DrawingBoard({ game, onClose }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const colorInputRef = useRef(null);

  const [recentColors, setRecentColors] = useState(loadRecentColors);
  const [selectedColor, setSelectedColor] = useState(() => loadRecentColors()[0] || '#2D3436');
  const [brushSize, setBrushSize] = useState(BRUSH_SIZES[1].size);
  const [bgColor, setBgColor] = useState(BG_COLORS[0].hex);
  const [showBgPicker, setShowBgPicker] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [savedDrawings, setSavedDrawings] = useState(loadSavedDrawings);
  // History stack for undo - stores canvas ImageData snapshots
  const [history, setHistory] = useState([]);
  const [canvasReady, setCanvasReady] = useState(false);

  // Add a color to recent list (FIFO)
  const addToRecentColors = useCallback((hex) => {
    setRecentColors(prev => {
      // Remove if already exists (move to front)
      const filtered = prev.filter(c => c.toLowerCase() !== hex.toLowerCase());
      const updated = [hex, ...filtered].slice(0, MAX_RECENT_COLORS);
      saveRecentColors(updated);
      return updated;
    });
  }, []);

  // Handle color picked from native color input
  const handleColorPicked = useCallback((e) => {
    const hex = e.target.value;
    addToRecentColors(hex);
    setSelectedColor(hex);
  }, [addToRecentColors]);

  // Open native color picker
  const openColorPicker = useCallback(() => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  }, []);

  // Initialize canvas
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

    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, rect.width, rect.height);

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

  // Change background color - redraw canvas
  useEffect(() => {
    if (!canvasReady) return;
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);
  }, [bgColor, canvasReady]);

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

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    saveToHistory();
    const dpr = window.devicePixelRatio || 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
  }, [bgColor, saveToHistory]);

  // Save current drawing
  const saveDrawing = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const newDrawing = {
      id: Date.now(),
      dataUrl,
      timestamp: new Date().toLocaleString('he-IL'),
    };

    setSavedDrawings(prev => {
      const updated = [newDrawing, ...prev].slice(0, MAX_SAVED_DRAWINGS);
      saveSavedDrawings(updated);
      return updated;
    });
  }, []);

  // Load a saved drawing onto canvas
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
    };
    img.src = drawing.dataUrl;
    setShowGallery(false);
  }, [saveToHistory]);

  // Delete a saved drawing
  const deleteDrawing = useCallback((drawingId) => {
    setSavedDrawings(prev => {
      const updated = prev.filter(d => d.id !== drawingId);
      saveSavedDrawings(updated);
      return updated;
    });
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

    const ctx = ctxRef.current;
    if (ctx) {
      ctx.strokeStyle = selectedColor;
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      ctx.lineTo(coords.x + 0.1, coords.y + 0.1);
      ctx.stroke();
    }
  }, [getCoords, saveToHistory, selectedColor, brushSize]);

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
    isDrawingRef.current = false;
    lastPointRef.current = null;
  }, []);

  return (
    <div className={styles.container}>
      {/* Hidden native color input */}
      <input
        ref={colorInputRef}
        type="color"
        className={styles.hiddenColorInput}
        value={selectedColor}
        onChange={handleColorPicked}
      />

      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.backButton} onClick={onClose}>
          ✕
        </button>
        <h1 className={styles.title}>{game?.name || 'לוח ציור'}</h1>
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
            onClick={clearCanvas}
            title="נקה הכל"
          >
            🗑️
          </button>
          <button
            className={`${styles.actionButton} ${showBgPicker ? styles.active : ''}`}
            onClick={() => { setShowBgPicker(!showBgPicker); setShowGallery(false); }}
            title="צבע רקע"
          >
            🎨
          </button>
          <button
            className={styles.actionButton}
            onClick={() => { saveDrawing(); }}
            title="שמור ציור"
          >
            💾
          </button>
          <button
            className={`${styles.actionButton} ${showGallery ? styles.active : ''}`}
            onClick={() => { setShowGallery(!showGallery); setShowBgPicker(false); }}
            title="טען ציור"
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
          exit={{ opacity: 0, y: -10 }}
        >
          <span className={styles.bgPickerLabel}>צבע רקע:</span>
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
                }
              }}
              title={c.label}
            />
          ))}
        </motion.div>
      )}

      {/* Gallery modal for saved drawings */}
      {showGallery && (
        <motion.div
          className={styles.galleryOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowGallery(false)}
        >
          <motion.div
            className={styles.galleryModal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.galleryHeader}>
              <h2 className={styles.galleryTitle}>הציורים שלי</h2>
              <button className={styles.galleryClose} onClick={() => setShowGallery(false)}>✕</button>
            </div>
            {savedDrawings.length === 0 ? (
              <div className={styles.galleryEmpty}>
                <span className={styles.galleryEmptyIcon}>🖼️</span>
                <p>אין ציורים שמורים עדיין</p>
              </div>
            ) : (
              <div className={styles.galleryGrid}>
                {savedDrawings.map(drawing => (
                  <div key={drawing.id} className={styles.galleryItem}>
                    <img
                      src={drawing.dataUrl}
                      alt="ציור שמור"
                      className={styles.galleryThumb}
                      onClick={() => loadDrawing(drawing)}
                    />
                    <div className={styles.galleryItemInfo}>
                      <span className={styles.galleryTimestamp}>{drawing.timestamp}</span>
                      <button
                        className={styles.galleryDeleteBtn}
                        onClick={(e) => { e.stopPropagation(); deleteDrawing(drawing.id); }}
                        title="מחק"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
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
        {/* Color palette: recent colors + picker + eraser */}
        <div className={styles.colorPalette}>
          {recentColors.map((hex, idx) => (
            <button
              key={`${hex}-${idx}`}
              className={`${styles.colorBtn} ${selectedColor === hex ? styles.selectedColor : ''}`}
              style={{ backgroundColor: hex }}
              onClick={() => setSelectedColor(hex)}
            />
          ))}
          {/* Color picker button */}
          <button
            className={styles.colorPickerBtn}
            onClick={openColorPicker}
            title="בחר צבע"
          >
            🌈
          </button>
          {/* Eraser */}
          <button
            className={`${styles.colorBtn} ${styles.eraserBtn} ${selectedColor === '#FFFFFF' ? styles.selectedColor : ''}`}
            style={{ backgroundColor: '#FFFFFF' }}
            onClick={() => setSelectedColor('#FFFFFF')}
            title="מחק"
          >
            <span className={styles.eraserIcon}>✏️</span>
          </button>
        </div>

        {/* Brush sizes */}
        <div className={styles.brushSizes}>
          {BRUSH_SIZES.map(b => (
            <button
              key={b.id}
              className={`${styles.brushBtn} ${brushSize === b.size ? styles.selectedBrush : ''}`}
              onClick={() => setBrushSize(b.size)}
              title={b.label}
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
