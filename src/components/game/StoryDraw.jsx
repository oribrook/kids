import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './StoryDraw.module.css';
import { STORY_SHAPES, SHAPE_CATEGORIES, getShapesByCategory } from '../../data/storyShapes';

const STORAGE_KEY_RECENT_COLORS = 'storyDraw_recentColors';
const STORAGE_KEY_SAVED_DRAWINGS = 'storyDraw_savedDrawings';
const STORAGE_KEY_AUTOSAVE = 'storyDraw_autosave';
const MAX_RECENT_COLORS = 8;
const MAX_SAVED_DRAWINGS = 50;
const WHEEL_SIZE = 300;
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

const STAMP_SIZES = [
  { id: 'small', label: 'S', size: 30 },
  { id: 'medium', label: 'M', size: 60 },
  { id: 'large', label: 'L', size: 100 },
  { id: 'xlarge', label: 'XL', size: 150 },
];

const BRUSH_SIZES = [
  { id: 'thin', size: 3 },
  { id: 'medium', size: 8 },
  { id: 'thick', size: 16 },
  { id: 'xthick', size: 28 },
];

const PROJECT_IMAGES = [
  { id: 'word-arye', src: '/images/word-arye.png', name: '\u05D0\u05E8\u05D9\u05D4' },
  { id: 'word-avatiach', src: '/images/word-avatiach.png', name: '\u05D0\u05D1\u05D8\u05D9\u05D7' },
  { id: 'word-avokado', src: '/images/word-avokado.png', name: '\u05D0\u05D1\u05D5\u05E7\u05D3\u05D5' },
  { id: 'word-balon', src: '/images/word-balon.png', name: '\u05D1\u05DC\u05D5\u05DF' },
  { id: 'word-banana', src: '/images/word-banana.png', name: '\u05D1\u05E0\u05E0\u05D4' },
  { id: 'word-barvaz', src: '/images/word-barvaz.png', name: '\u05D1\u05E8\u05D5\u05D6' },
  { id: 'word-chatul', src: '/images/word-chatul.png', name: '\u05D7\u05EA\u05D5\u05DC' },
  { id: 'word-dag', src: '/images/word-dag.png', name: '\u05D3\u05D2' },
  { id: 'word-degel', src: '/images/word-degel.png', name: '\u05D3\u05D2\u05DC' },
  { id: 'word-delet', src: '/images/word-delet.png', name: '\u05D3\u05DC\u05EA' },
  { id: 'word-deshe', src: '/images/word-deshe.png', name: '\u05D3\u05E9\u05D0' },
  { id: 'word-dinozaur', src: '/images/word-dinozaur.png', name: '\u05D3\u05D9\u05E0\u05D5\u05D6\u05D0\u05D5\u05E8' },
  { id: 'word-dolphin', src: '/images/word-dolphin.png', name: '\u05D3\u05D5\u05DC\u05E4\u05D9\u05DF' },
  { id: 'word-dvash', src: '/images/word-dvash.png', name: '\u05D3\u05D1\u05E9' },
  { id: 'word-dvora', src: '/images/word-dvora.png', name: '\u05D3\u05D1\u05D5\u05E8\u05D4' },
  { id: 'word-esh', src: '/images/word-esh.png', name: '\u05D0\u05E9' },
  { id: 'word-etz', src: '/images/word-etz.png', name: '\u05E2\u05E5' },
  { id: 'word-fox', src: '/images/word-fox.png', name: '\u05E9\u05D5\u05E2\u05DC' },
  { id: 'word-gamal', src: '/images/word-gamal.png', name: '\u05D2\u05DE\u05DC' },
  { id: 'word-geshem', src: '/images/word-geshem.png', name: '\u05D2\u05E9\u05DD' },
  { id: 'word-gezer', src: '/images/word-gezer.png', name: '\u05D2\u05D6\u05E8' },
  { id: 'word-gina', src: '/images/word-gina.png', name: '\u05D2\u05D9\u05E0\u05D4' },
  { id: 'word-har', src: '/images/word-har.png', name: '\u05D4\u05E8' },
  { id: 'word-helicopter', src: '/images/word-helicopter.png', name: '\u05DE\u05E1\u05D5\u05E7' },
  { id: 'word-ice-cream', src: '/images/word-ice-cream.png', name: '\u05D2\u05DC\u05D9\u05D3\u05D4' },
  { id: 'word-kadur', src: '/images/word-kadur.png', name: '\u05DB\u05D3\u05D5\u05E8' },
  { id: 'word-kanguru', src: '/images/word-kanguru.png', name: '\u05E7\u05E0\u05D2\u05D5\u05E8\u05D5' },
  { id: 'word-kelev', src: '/images/word-kelev.png', name: '\u05DB\u05DC\u05D1' },
  { id: 'word-kite', src: '/images/word-kite.png', name: '\u05E2\u05E4\u05D9\u05E4\u05D5\u05DF' },
  { id: 'word-kochav', src: '/images/word-kochav.png', name: '\u05DB\u05D5\u05DB\u05D1' },
  { id: 'word-kof', src: '/images/word-kof.png', name: '\u05E7\u05D5\u05E3' },
  { id: 'word-kova', src: '/images/word-kova.png', name: '\u05DB\u05D5\u05D1\u05E2' },
  { id: 'word-kursi', src: '/images/word-kursi.png', name: '\u05DB\u05D9\u05E1\u05D0' },
  { id: 'word-lechem', src: '/images/word-lechem.png', name: '\u05DC\u05D7\u05DD' },
  { id: 'word-leitzan', src: '/images/word-leitzan.png', name: '\u05DC\u05D9\u05E6\u05DF' },
  { id: 'word-lev', src: '/images/word-lev.png', name: '\u05DC\u05D1' },
  { id: 'word-limon', src: '/images/word-limon.png', name: '\u05DC\u05D9\u05DE\u05D5\u05DF' },
  { id: 'word-mamtak', src: '/images/word-mamtak.png', name: '\u05DE\u05DE\u05EA\u05E7' },
  { id: 'word-melafafon', src: '/images/word-melafafon.png', name: '\u05DE\u05DC\u05E4\u05E4\u05D5\u05DF' },
  { id: 'word-nachash', src: '/images/word-nachash.png', name: '\u05E0\u05D7\u05E9' },
  { id: 'word-namer', src: '/images/word-namer.png', name: '\u05E0\u05DE\u05E8' },
  { id: 'word-nemala', src: '/images/word-nemala.png', name: '\u05E0\u05DE\u05DC\u05D4' },
  { id: 'word-ner', src: '/images/word-ner.png', name: '\u05E0\u05E8' },
  { id: 'word-octopus', src: '/images/word-octopus.png', name: '\u05EA\u05DE\u05E0\u05D5\u05DF' },
  { id: 'word-orange', src: '/images/word-orange.png', name: '\u05EA\u05E4\u05D5\u05D6' },
  { id: 'word-para', src: '/images/word-para.png', name: '\u05E4\u05E8\u05D4' },
  { id: 'word-parpar', src: '/images/word-parpar.png', name: '\u05E4\u05E8\u05E4\u05E8' },
  { id: 'word-pil', src: '/images/word-pil.png', name: '\u05E4\u05D9\u05DC' },
  { id: 'word-pizza', src: '/images/word-pizza.png', name: '\u05E4\u05D9\u05E6\u05D4' },
  { id: 'word-rabbit', src: '/images/word-rabbit.png', name: '\u05D0\u05E8\u05E0\u05D1' },
  { id: 'word-rainbow', src: '/images/word-rainbow.png', name: '\u05E7\u05E9\u05EA' },
  { id: 'word-rakevet', src: '/images/word-rakevet.png', name: '\u05E8\u05DB\u05D1\u05EA' },
  { id: 'word-rocket', src: '/images/word-rocket.png', name: '\u05E8\u05E7\u05D8\u05D4' },
  { id: 'word-sandal', src: '/images/word-sandal.png', name: '\u05E1\u05E0\u05D3\u05DC' },
  { id: 'word-sayara', src: '/images/word-sayara.png', name: '\u05DE\u05DB\u05D5\u05E0\u05D9\u05EA' },
  { id: 'word-sefer', src: '/images/word-sefer.png', name: '\u05E1\u05E4\u05E8' },
  { id: 'word-shablul', src: '/images/word-shablul.png', name: '\u05E9\u05D1\u05DC\u05D5\u05DC' },
  { id: 'word-shokolata', src: '/images/word-shokolata.png', name: '\u05E9\u05D5\u05E7\u05D5\u05DC\u05D3' },
  { id: 'word-shulchan', src: '/images/word-shulchan.png', name: '\u05E9\u05D5\u05DC\u05D7\u05DF' },
  { id: 'word-sun', src: '/images/word-sun.png', name: '\u05E9\u05DE\u05E9' },
  { id: 'word-sus', src: '/images/word-sus.png', name: '\u05E1\u05D5\u05E1' },
  { id: 'word-tapuach', src: '/images/word-tapuach.png', name: '\u05EA\u05E4\u05D5\u05D7' },
  { id: 'word-telephone', src: '/images/word-telephone.png', name: '\u05D8\u05DC\u05E4\u05D5\u05DF' },
  { id: 'word-tinok', src: '/images/word-tinok.png', name: '\u05EA\u05D9\u05E0\u05D5\u05E7' },
  { id: 'word-traktor', src: '/images/word-traktor.png', name: '\u05D8\u05E8\u05E7\u05D8\u05D5\u05E8' },
  { id: 'word-tsfardea', src: '/images/word-tsfardea.png', name: '\u05E6\u05E4\u05E8\u05D3\u05E2' },
  { id: 'word-tsipor', src: '/images/word-tsipor.png', name: '\u05E6\u05D9\u05E4\u05D5\u05E8' },
  { id: 'word-uga', src: '/images/word-uga.png', name: '\u05E2\u05D5\u05D2\u05D4' },
  { id: 'word-umbrella', src: '/images/word-umbrella.png', name: '\u05DE\u05D8\u05E8\u05D9\u05D4' },
  { id: 'word-unicorn', src: '/images/word-unicorn.png', name: '\u05D7\u05D3\u05E7\u05E8\u05DF' },
  { id: 'word-varod', src: '/images/word-varod.png', name: '\u05D5\u05E8\u05D5\u05D3' },
  { id: 'word-vered', src: '/images/word-vered.png', name: '\u05D5\u05E8\u05D3' },
  { id: 'word-waffle', src: '/images/word-waffle.png', name: '\u05D5\u05E4\u05DC' },
  { id: 'word-whale', src: '/images/word-whale.png', name: '\u05DC\u05D5\u05D9\u05EA\u05DF' },
  { id: 'word-yareach', src: '/images/word-yareach.png', name: '\u05D9\u05E8\u05D7' },
  { id: 'word-zebra', src: '/images/word-zebra.png', name: '\u05D6\u05D1\u05E8\u05D4' },
  { id: 'word-zeev', src: '/images/word-zeev.png', name: '\u05D6\u05D0\u05D1' },
  { id: 'word-zoo', src: '/images/word-zoo.png', name: '\u05D2\u05DF \u05D7\u05D9\u05D5\u05EA' },
];

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
 * StoryDraw - Canvas-based story drawing game for kids ages 3-5
 * Three modes: Free Draw, Shape Stamp, Image Stamp
 * Features: color wheel, FIFO recent colors, save/load gallery, undo, bg colors, RGB tint on images
 */
function StoryDraw({ game, onClose }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const wheelCanvasRef = useRef(null);
  const autosaveTimerRef = useRef(null);
  const imageCacheRef = useRef({});

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

  // Mode state
  const [activeMode, setActiveMode] = useState('draw'); // 'draw' | 'stamp' | 'image'
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(() =>
    SHAPE_CATEGORIES.length > 0 ? SHAPE_CATEGORIES[0].id : null
  );
  const [stampSize, setStampSize] = useState(STAMP_SIZES[1].size);
  const [showTint, setShowTint] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // ======================== Auto-Save (debounced) ========================

  const autoSave = useCallback(() => {
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

  useEffect(() => {
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    };
  }, []);

  // ======================== Color Wheel ========================

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
          const t = dist / radius;

          let s, l;
          if (t < 0.82) {
            const nt = t / 0.82;
            s = nt * 100;
            l = 100 - nt * 50;
          } else {
            const nt = (t - 0.82) / 0.18;
            s = 100 - nt * 30;
            l = 50 - nt * 35;
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

  useEffect(() => {
    if (showColorWheel) {
      requestAnimationFrame(() => drawColorWheel());
    }
  }, [showColorWheel, drawColorWheel]);

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
        const dpr = window.devicePixelRatio || 1;
        ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width / dpr, canvas.height / dpr);
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

  // ======================== Preload Images ========================

  useEffect(() => {
    if (activeMode !== 'image') return;
    PROJECT_IMAGES.forEach(imgData => {
      if (imageCacheRef.current[imgData.id]) return;
      const img = new Image();
      img.src = imgData.src;
      img.onload = () => {
        imageCacheRef.current[imgData.id] = img;
      };
    });
  }, [activeMode]);

  // ======================== Shape Preview Drawing ========================

  useEffect(() => {
    if (activeMode !== 'stamp') return;
    const shapes = getShapesByCategory(selectedCategory);
    shapes.forEach(shape => {
      const canvas = document.querySelector(`[data-shape-preview="${shape.id}"]`);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const size = 24;
      canvas.width = 60;
      canvas.height = 60;
      ctx.clearRect(0, 0, 60, 60);
      shape.draw(ctx, 30, 30, size, '#555');
    });
  }, [activeMode, selectedCategory]);

  // ======================== History / Undo ========================

  const saveToHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
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

  // ======================== Image Stamp Placement ========================

  const placeImageStamp = useCallback((x, y) => {
    const img = imageCacheRef.current[selectedImage];
    if (!img) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    saveToHistory();

    const displaySize = stampSize;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    let drawW, drawH;
    if (aspectRatio >= 1) {
      drawW = displaySize;
      drawH = displaySize / aspectRatio;
    } else {
      drawH = displaySize;
      drawW = displaySize * aspectRatio;
    }

    if (showTint && selectedColor !== '#FFFFFF') {
      const tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = Math.ceil(drawW);
      tmpCanvas.height = Math.ceil(drawH);
      const tmpCtx = tmpCanvas.getContext('2d');
      tmpCtx.drawImage(img, 0, 0, drawW, drawH);
      tmpCtx.globalCompositeOperation = 'source-atop';
      tmpCtx.fillStyle = selectedColor;
      tmpCtx.globalAlpha = 0.4;
      tmpCtx.fillRect(0, 0, drawW, drawH);
      tmpCtx.globalAlpha = 1;
      tmpCtx.globalCompositeOperation = 'source-over';
      ctx.drawImage(tmpCanvas, x - drawW / 2, y - drawH / 2);
    } else {
      ctx.drawImage(img, x - drawW / 2, y - drawH / 2, drawW, drawH);
    }

    autoSave();
  }, [selectedImage, stampSize, showTint, selectedColor, saveToHistory, autoSave]);

  // ======================== Shape Stamp Placement ========================

  const placeShapeStamp = useCallback((x, y) => {
    if (!selectedShape) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    const shape = STORY_SHAPES.find(s => s.id === selectedShape);
    if (!shape) return;

    saveToHistory();
    shape.draw(ctx, x, y, stampSize, selectedColor);
    autoSave();
  }, [selectedShape, stampSize, selectedColor, saveToHistory, autoSave]);

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

    if (activeMode === 'stamp' && selectedShape) {
      placeShapeStamp(coords.x, coords.y);
      return;
    }

    if (activeMode === 'image' && selectedImage) {
      placeImageStamp(coords.x, coords.y);
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
  }, [getCoords, saveToHistory, selectedColor, brushSize, activeMode, selectedShape, selectedImage, placeShapeStamp, placeImageStamp]);

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
        <button className={styles.backButton} onClick={onClose}>{'\u2715'}</button>
        <h1 className={styles.title}>{game?.name || '\u05E6\u05D9\u05D5\u05E8 \u05E1\u05D9\u05E4\u05D5\u05E8'}</h1>
        <div className={styles.topActions}>
          <button className={styles.actionButton} onClick={undo} disabled={history.length === 0}>
            {'\u21A9\uFE0F'}
          </button>
          <button className={styles.actionButton} onClick={clearCanvas}>
            {'\uD83D\uDDD1\uFE0F'}
          </button>
          <button
            className={`${styles.actionButton} ${showBgPicker ? styles.active : ''}`}
            onClick={() => { setShowBgPicker(!showBgPicker); setShowGallery(false); }}
          >
            {'\uD83C\uDFA8'}
          </button>
          <button className={styles.actionButton} onClick={saveDrawing}>
            {'\uD83D\uDCBE'}
          </button>
          <button
            className={`${styles.actionButton} ${showGallery ? styles.active : ''}`}
            onClick={() => { setShowGallery(!showGallery); setShowBgPicker(false); }}
          >
            {'\uD83D\uDCC2'}
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
            <button className={styles.wheelClose} onClick={() => setShowColorWheel(false)}>{'\u2715'}</button>
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
              <button className={styles.galleryClose} onClick={() => setShowGallery(false)}>{'\u2715'}</button>
            </div>
            {savedDrawings.length === 0 ? (
              <div className={styles.galleryEmpty}>
                <span className={styles.galleryEmptyIcon}>{'\uD83D\uDDBC\uFE0F'}</span>
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
                      {'\u2715'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Stamp indicator when shape selected */}
      {activeMode === 'stamp' && selectedShape && (
        <div className={styles.stampIndicator}>
          <span className={styles.stampShape} style={{ color: selectedColor === '#FFFFFF' ? '#999' : selectedColor }}>
            {STORY_SHAPES.find(s => s.id === selectedShape)?.name || selectedShape}
          </span>
          <button
            className={styles.stampExitBtn}
            onClick={() => { setActiveMode('draw'); setSelectedShape(null); }}
          >
            {'\u2715'}
          </button>
        </div>
      )}

      {/* Stamp indicator when image selected */}
      {activeMode === 'image' && selectedImage && (
        <div className={styles.stampIndicator}>
          <span className={styles.stampShape}>
            {PROJECT_IMAGES.find(i => i.id === selectedImage)?.name || selectedImage}
          </span>
          <button
            className={styles.stampExitBtn}
            onClick={() => { setActiveMode('draw'); setSelectedImage(null); }}
          >
            {'\u2715'}
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

      {/* Bottom panel */}
      <div className={styles.bottomPanel}>
        {/* Color row */}
        <div className={styles.colorRow}>
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
              onClick={() => { setSelectedColor('#FFFFFF'); setActiveMode('draw'); setSelectedShape(null); setSelectedImage(null); }}
            >
              <span className={styles.eraserIcon}>{'\u270F\uFE0F'}</span>
            </button>
          </div>
        </div>

        {/* Mode + Size row */}
        <div className={styles.modeRow}>
          <button
            className={activeMode === 'draw' ? styles.modeBtnActive : styles.modeBtn}
            data-mode="draw"
            onClick={() => { setActiveMode('draw'); setSelectedShape(null); setSelectedImage(null); }}
          >
            <span className={styles.modeIcon}>{'\u270F\uFE0F'}</span>
            <span className={styles.modeLabel}>{'\u05E6\u05D9\u05D5\u05E8'}</span>
          </button>
          <button
            className={activeMode === 'stamp' ? styles.modeBtnActive : styles.modeBtn}
            data-mode="shapes"
            onClick={() => { setActiveMode('stamp'); setSelectedImage(null); }}
          >
            <span className={styles.modeIcon}>{'\u25C6'}</span>
            <span className={styles.modeLabel}>{'\u05E6\u05D5\u05E8\u05D5\u05EA'}</span>
          </button>
          <button
            className={activeMode === 'image' ? styles.modeBtnActive : styles.modeBtn}
            data-mode="images"
            onClick={() => { setActiveMode('image'); setSelectedShape(null); }}
          >
            <span className={styles.modeIcon}>{'\uD83D\uDDBC\uFE0F'}</span>
            <span className={styles.modeLabel}>{'\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA'}</span>
          </button>
          <div className={styles.sizeButtons}>
            {activeMode === 'draw' ? (
              BRUSH_SIZES.map(b => (
                <button
                  key={b.id}
                  className={brushSize === b.size ? styles.sizeBtnActive : styles.sizeBtn}
                  onClick={() => setBrushSize(b.size)}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: Math.min(b.size * 1.5, 24),
                      height: Math.min(b.size * 1.5, 24),
                      borderRadius: '50%',
                      backgroundColor: selectedColor === '#FFFFFF' ? '#999' : selectedColor,
                    }}
                  />
                </button>
              ))
            ) : (
              STAMP_SIZES.map(s => (
                <button
                  key={s.id}
                  className={stampSize === s.size ? styles.sizeBtnActive : styles.sizeBtn}
                  onClick={() => setStampSize(s.size)}
                >
                  {s.label}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Shape panel - shown in stamp mode */}
        {activeMode === 'stamp' && (
          <div className={styles.shapePanel}>
            <div className={styles.categoryTabs}>
              {SHAPE_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={selectedCategory === cat.id ? styles.categoryTabActive : styles.categoryTab}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className={styles.categoryIcon}>{cat.icon}</span>
                  <span className={styles.categoryName}>{cat.name}</span>
                </button>
              ))}
            </div>
            <div className={styles.shapeGrid}>
              {getShapesByCategory(selectedCategory).map(shape => (
                <button
                  key={shape.id}
                  className={selectedShape === shape.id ? styles.shapeItemSelected : styles.shapeItem}
                  onClick={() => setSelectedShape(shape.id)}
                >
                  <canvas
                    data-shape-preview={shape.id}
                    width={60}
                    height={60}
                    style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Image panel - shown in image mode */}
        {activeMode === 'image' && (
          <div className={styles.shapePanel}>
            <div className={styles.rgbTintRow}>
              <button
                className={showTint ? styles.tintBtnActive : styles.tintBtn}
                onClick={() => setShowTint(prev => !prev)}
              >
                {'\uD83C\uDFA8'} {'\u05E6\u05D1\u05E2'}
              </button>
            </div>
            <div className={styles.imageGrid}>
              {PROJECT_IMAGES.map(img => (
                <button
                  key={img.id}
                  className={selectedImage === img.id ? styles.imageItemSelected : styles.imageItem}
                  onClick={() => setSelectedImage(img.id)}
                >
                  <img src={img.src} alt={img.name} className={styles.imageThumb} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryDraw;
