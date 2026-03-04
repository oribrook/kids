import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './DrawingBoard.module.css';

const COLORS = [
  { id: 'black', hex: '#2D3436', label: 'שחור' },
  { id: 'red', hex: '#E74C3C', label: 'אדום' },
  { id: 'blue', hex: '#3498DB', label: 'כחול' },
  { id: 'green', hex: '#2ECC71', label: 'ירוק' },
  { id: 'yellow', hex: '#F1C40F', label: 'צהוב' },
  { id: 'orange', hex: '#E67E22', label: 'כתום' },
  { id: 'purple', hex: '#9B59B6', label: 'סגול' },
  { id: 'pink', hex: '#FD79A8', label: 'ורוד' },
  { id: 'brown', hex: '#8B4513', label: 'חום' },
  { id: 'white', hex: '#FFFFFF', label: 'מחק' },
];

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

/**
 * DrawingBoard - Free-play drawing canvas for toddlers
 * Supports touch and mouse, color/thickness selection, undo, clear, background color
 */
function DrawingBoard({ game, onClose }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState(COLORS[0].hex);
  const [brushSize, setBrushSize] = useState(BRUSH_SIZES[1].size);
  const [bgColor, setBgColor] = useState(BG_COLORS[0].hex);
  const [showBgPicker, setShowBgPicker] = useState(false);
  // History stack for undo - stores canvas ImageData snapshots
  const [history, setHistory] = useState([]);
  const [canvasReady, setCanvasReady] = useState(false);

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
      // Save current drawing
      const canvas = canvasRef.current;
      if (!canvas) return;
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(canvas, 0, 0);

      // Reinitialize
      initCanvas();

      // Restore drawing
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

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    // Save current image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Fill with new bg
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);

    // Create temp canvas to composite
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.putImageData(imageData, 0, 0);

    // Draw old content on top (only non-bg pixels ideally, but for simplicity just overlay)
    // We just fill bg and note: user strokes will remain from the imageData
    // Actually let's just put imageData back - the bg change will only apply to new clear
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
      // Keep max 30 steps
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
            onClick={() => setShowBgPicker(!showBgPicker)}
            title="צבע רקע"
          >
            🎨
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
                // Clear canvas with new bg
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
        {/* Color palette */}
        <div className={styles.colorPalette}>
          {COLORS.map(c => (
            <button
              key={c.id}
              className={`${styles.colorBtn} ${selectedColor === c.hex ? styles.selectedColor : ''}`}
              style={{ backgroundColor: c.hex, border: c.id === 'white' ? '2px solid #ccc' : undefined }}
              onClick={() => setSelectedColor(c.hex)}
              title={c.label}
            />
          ))}
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
