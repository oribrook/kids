// storyShapes.js — ~103 SVG-style canvas shapes for kids story-drawing game

export const SHAPE_CATEGORIES = [
  { id: 'people', name: 'אנשים', icon: '👤' },
  { id: 'animals', name: 'חיות', icon: '🐕' },
  { id: 'nature', name: 'טבע', icon: '🌳' },
  { id: 'buildings', name: 'מבנים', icon: '🏠' },
  { id: 'transport', name: 'תחבורה', icon: '🚗' },
  { id: 'food', name: 'אוכל', icon: '🍎' },
  { id: 'objects', name: 'חפצים', icon: '📦' },
  { id: 'shapes', name: 'צורות', icon: '⬟' },
  { id: 'elements', name: 'אלמנטים', icon: '🔥' },
  { id: 'faces', name: 'פרצופים', icon: '😊' },
];

// ─── PEOPLE (12) ────────────────────────────────────────────────────────────

const people = [
  {
    id: 'man',
    name: 'איש',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.45, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.fillRect(x - size * 0.15, y - size * 0.22, size * 0.3, size * 0.45);
      // legs
      ctx.fillRect(x - size * 0.15, y + 0.23 * size, size * 0.12, size * 0.35);
      ctx.fillRect(x + size * 0.03, y + 0.23 * size, size * 0.12, size * 0.35);
      // arms
      ctx.fillRect(x - size * 0.35, y - size * 0.18, size * 0.2, size * 0.1);
      ctx.fillRect(x + size * 0.15, y - size * 0.18, size * 0.2, size * 0.1);
      ctx.restore();
    },
  },
  {
    id: 'woman',
    name: 'אישה',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.5, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // hair bumps
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.62, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y - size * 0.62, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      // body / dress triangle
      ctx.beginPath();
      ctx.moveTo(x - size * 0.05, y - size * 0.28);
      ctx.lineTo(x + size * 0.05, y - size * 0.28);
      ctx.lineTo(x + size * 0.3, y + size * 0.45);
      ctx.lineTo(x - size * 0.3, y + size * 0.45);
      ctx.closePath();
      ctx.fill();
      // arms
      ctx.fillRect(x - size * 0.4, y - size * 0.22, size * 0.18, size * 0.09);
      ctx.fillRect(x + size * 0.22, y - size * 0.22, size * 0.18, size * 0.09);
      // legs
      ctx.fillRect(x - size * 0.12, y + size * 0.45, size * 0.09, size * 0.2);
      ctx.fillRect(x + size * 0.03, y + size * 0.45, size * 0.09, size * 0.2);
      ctx.restore();
    },
  },
  {
    id: 'boy',
    name: 'ילד',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.38, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.fillRect(x - size * 0.12, y - size * 0.17, size * 0.24, size * 0.34);
      // legs
      ctx.fillRect(x - size * 0.12, y + 0.17 * size, size * 0.1, size * 0.3);
      ctx.fillRect(x + size * 0.02, y + 0.17 * size, size * 0.1, size * 0.3);
      // arms
      ctx.fillRect(x - size * 0.28, y - size * 0.14, size * 0.16, size * 0.08);
      ctx.fillRect(x + size * 0.12, y - size * 0.14, size * 0.16, size * 0.08);
      ctx.restore();
    },
  },
  {
    id: 'girl',
    name: 'ילדה',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.42, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // pigtails
      ctx.beginPath();
      ctx.arc(x - size * 0.28, y - size * 0.48, size * 0.08, 0, Math.PI * 2);
      ctx.arc(x + size * 0.28, y - size * 0.48, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // dress
      ctx.beginPath();
      ctx.moveTo(x - size * 0.05, y - size * 0.22);
      ctx.lineTo(x + size * 0.05, y - size * 0.22);
      ctx.lineTo(x + size * 0.25, y + size * 0.35);
      ctx.lineTo(x - size * 0.25, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.1, y + size * 0.35, size * 0.08, size * 0.22);
      ctx.fillRect(x + size * 0.02, y + size * 0.35, size * 0.08, size * 0.22);
      ctx.restore();
    },
  },
  {
    id: 'baby',
    name: 'תינוק',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // big round head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      // round body
      ctx.beginPath();
      ctx.arc(x, y + size * 0.25, size * 0.25, 0, Math.PI * 2);
      ctx.fill();
      // little arms
      ctx.beginPath();
      ctx.arc(x - size * 0.35, y + size * 0.18, size * 0.08, 0, Math.PI * 2);
      ctx.arc(x + size * 0.35, y + size * 0.18, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // little legs
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y + size * 0.5, size * 0.08, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y + size * 0.5, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'grandpa',
    name: 'סבא',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.45, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // hat brim
      ctx.fillRect(x - size * 0.3, y - size * 0.68, size * 0.6, size * 0.06);
      // hat top
      ctx.fillRect(x - size * 0.15, y - size * 0.82, size * 0.3, size * 0.14);
      // body
      ctx.fillRect(x - size * 0.18, y - size * 0.22, size * 0.36, size * 0.45);
      // cane
      ctx.fillRect(x + size * 0.3, y - size * 0.1, size * 0.05, size * 0.6);
      // legs
      ctx.fillRect(x - size * 0.15, y + 0.23 * size, size * 0.12, size * 0.32);
      ctx.fillRect(x + size * 0.03, y + 0.23 * size, size * 0.12, size * 0.32);
      ctx.restore();
    },
  },
  {
    id: 'grandma',
    name: 'סבתא',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.45, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // bun on top
      ctx.beginPath();
      ctx.arc(x, y - size * 0.7, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      // body / dress
      ctx.beginPath();
      ctx.moveTo(x - size * 0.08, y - size * 0.22);
      ctx.lineTo(x + size * 0.08, y - size * 0.22);
      ctx.lineTo(x + size * 0.3, y + size * 0.5);
      ctx.lineTo(x - size * 0.3, y + size * 0.5);
      ctx.closePath();
      ctx.fill();
      // arms
      ctx.fillRect(x - size * 0.4, y - size * 0.15, size * 0.18, size * 0.08);
      ctx.fillRect(x + size * 0.22, y - size * 0.15, size * 0.18, size * 0.08);
      ctx.restore();
    },
  },
  {
    id: 'family',
    name: 'משפחה',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // tall person (parent left)
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y - size * 0.4, size * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(x - size * 0.38, y - size * 0.26, size * 0.16, size * 0.45);
      ctx.fillRect(x - size * 0.36, y + size * 0.19, size * 0.05, size * 0.22);
      ctx.fillRect(x - size * 0.27, y + size * 0.19, size * 0.05, size * 0.22);
      // tall person (parent right)
      ctx.beginPath();
      ctx.arc(x + size * 0.3, y - size * 0.38, size * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(x + size * 0.22, y - size * 0.24, size * 0.16, size * 0.42);
      ctx.fillRect(x + size * 0.24, y + size * 0.18, size * 0.05, size * 0.22);
      ctx.fillRect(x + size * 0.33, y + size * 0.18, size * 0.05, size * 0.22);
      // small person (child center)
      ctx.beginPath();
      ctx.arc(x, y - size * 0.12, size * 0.11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(x - size * 0.08, y - size * 0.01, size * 0.16, size * 0.25);
      ctx.fillRect(x - size * 0.06, y + size * 0.24, size * 0.04, size * 0.16);
      ctx.fillRect(x + size * 0.02, y + size * 0.24, size * 0.04, size * 0.16);
      ctx.restore();
    },
  },
  {
    id: 'king',
    name: 'מלך',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // crown
      ctx.beginPath();
      ctx.moveTo(x - size * 0.22, y - size * 0.58);
      ctx.lineTo(x - size * 0.22, y - size * 0.78);
      ctx.lineTo(x - size * 0.11, y - size * 0.65);
      ctx.lineTo(x, y - size * 0.85);
      ctx.lineTo(x + size * 0.11, y - size * 0.65);
      ctx.lineTo(x + size * 0.22, y - size * 0.78);
      ctx.lineTo(x + size * 0.22, y - size * 0.58);
      ctx.closePath();
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.4, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // body (robe)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.1, y - size * 0.2);
      ctx.lineTo(x + size * 0.1, y - size * 0.2);
      ctx.lineTo(x + size * 0.32, y + size * 0.55);
      ctx.lineTo(x - size * 0.32, y + size * 0.55);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'queen',
    name: 'מלכה',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // crown (rounded)
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.72, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x, y - size * 0.78, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y - size * 0.72, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(x - size * 0.2, y - size * 0.66, size * 0.4, size * 0.08);
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.42, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // gown
      ctx.beginPath();
      ctx.moveTo(x - size * 0.08, y - size * 0.22);
      ctx.lineTo(x + size * 0.08, y - size * 0.22);
      ctx.lineTo(x + size * 0.35, y + size * 0.55);
      ctx.lineTo(x - size * 0.35, y + size * 0.55);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'princess',
    name: 'נסיכה',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // tiara - small triangle
      ctx.beginPath();
      ctx.moveTo(x - size * 0.15, y - size * 0.58);
      ctx.lineTo(x, y - size * 0.78);
      ctx.lineTo(x + size * 0.15, y - size * 0.58);
      ctx.closePath();
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.4, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // long hair strands
      ctx.fillRect(x - size * 0.25, y - size * 0.45, size * 0.07, size * 0.35);
      ctx.fillRect(x + size * 0.18, y - size * 0.45, size * 0.07, size * 0.35);
      // big gown
      ctx.beginPath();
      ctx.moveTo(x - size * 0.06, y - size * 0.2);
      ctx.lineTo(x + size * 0.06, y - size * 0.2);
      ctx.lineTo(x + size * 0.4, y + size * 0.55);
      ctx.lineTo(x - size * 0.4, y + size * 0.55);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'superhero',
    name: 'גיבור על',
    category: 'people',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.45, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.fillRect(x - size * 0.18, y - size * 0.24, size * 0.36, size * 0.42);
      // cape (triangles on sides)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.18, y - size * 0.24);
      ctx.lineTo(x - size * 0.45, y + size * 0.5);
      ctx.lineTo(x - size * 0.18, y + size * 0.18);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x + size * 0.18, y - size * 0.24);
      ctx.lineTo(x + size * 0.45, y + size * 0.5);
      ctx.lineTo(x + size * 0.18, y + size * 0.18);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.15, y + 0.18 * size, size * 0.12, size * 0.35);
      ctx.fillRect(x + size * 0.03, y + 0.18 * size, size * 0.12, size * 0.35);
      // fists out
      ctx.beginPath();
      ctx.arc(x - size * 0.35, y - size * 0.12, size * 0.07, 0, Math.PI * 2);
      ctx.arc(x + size * 0.35, y - size * 0.12, size * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
];

// ─── ANIMALS (15) ───────────────────────────────────────────────────────────

const animals = [
  {
    id: 'dog',
    name: 'כלב',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body oval
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.05, size * 0.35, size * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.35, y - size * 0.15, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // ear
      ctx.beginPath();
      ctx.ellipse(x - size * 0.48, y - size * 0.08, size * 0.06, size * 0.14, 0, 0, Math.PI * 2);
      ctx.fill();
      // snout
      ctx.beginPath();
      ctx.ellipse(x - size * 0.52, y - size * 0.1, size * 0.08, size * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.22, y + size * 0.2, size * 0.08, size * 0.25);
      ctx.fillRect(x - size * 0.08, y + size * 0.2, size * 0.08, size * 0.25);
      ctx.fillRect(x + size * 0.12, y + size * 0.2, size * 0.08, size * 0.25);
      ctx.fillRect(x + size * 0.26, y + size * 0.2, size * 0.08, size * 0.25);
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.35, y - size * 0.05);
      ctx.quadraticCurveTo(x + size * 0.55, y - size * 0.35, x + size * 0.45, y - size * 0.4);
      ctx.lineWidth = size * 0.06;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'cat',
    name: 'חתול',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.05, size * 0.3, size * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y - size * 0.18, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // ears (triangles)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.42, y - size * 0.32);
      ctx.lineTo(x - size * 0.46, y - size * 0.55);
      ctx.lineTo(x - size * 0.32, y - size * 0.34);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x - size * 0.2, y - size * 0.32);
      ctx.lineTo(x - size * 0.16, y - size * 0.55);
      ctx.lineTo(x - size * 0.28, y - size * 0.34);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.18, y + size * 0.18, size * 0.08, size * 0.22);
      ctx.fillRect(x + size * 0.1, y + size * 0.18, size * 0.08, size * 0.22);
      // tail curving up
      ctx.beginPath();
      ctx.moveTo(x + size * 0.3, y);
      ctx.quadraticCurveTo(x + size * 0.55, y - size * 0.1, x + size * 0.5, y - size * 0.35);
      ctx.lineWidth = size * 0.06;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'bird',
    name: 'ציפור',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.3, size * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.32, y - size * 0.15, size * 0.14, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.beginPath();
      ctx.moveTo(x - size * 0.44, y - size * 0.15);
      ctx.lineTo(x - size * 0.58, y - size * 0.1);
      ctx.lineTo(x - size * 0.44, y - size * 0.08);
      ctx.closePath();
      ctx.fill();
      // wing
      ctx.beginPath();
      ctx.ellipse(x + size * 0.05, y - size * 0.1, size * 0.22, size * 0.12, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.3, y - size * 0.05);
      ctx.lineTo(x + size * 0.55, y - size * 0.15);
      ctx.lineTo(x + size * 0.55, y + size * 0.08);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.08, y + size * 0.18);
      ctx.lineTo(x - size * 0.08, y + size * 0.4);
      ctx.moveTo(x + size * 0.08, y + size * 0.18);
      ctx.lineTo(x + size * 0.08, y + size * 0.4);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'fish',
    name: 'דג',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x - size * 0.05, y, size * 0.35, size * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.28, y);
      ctx.lineTo(x + size * 0.52, y - size * 0.22);
      ctx.lineTo(x + size * 0.52, y + size * 0.22);
      ctx.closePath();
      ctx.fill();
      // eye
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y - size * 0.04, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y - size * 0.04, size * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'butterfly',
    name: 'פרפר',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.03, y - size * 0.3, size * 0.06, size * 0.6);
      // top-left wing
      ctx.beginPath();
      ctx.ellipse(x - size * 0.25, y - size * 0.15, size * 0.25, size * 0.2, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // top-right wing
      ctx.beginPath();
      ctx.ellipse(x + size * 0.25, y - size * 0.15, size * 0.25, size * 0.2, 0.3, 0, Math.PI * 2);
      ctx.fill();
      // bottom-left wing
      ctx.beginPath();
      ctx.ellipse(x - size * 0.2, y + size * 0.15, size * 0.18, size * 0.15, 0.3, 0, Math.PI * 2);
      ctx.fill();
      // bottom-right wing
      ctx.beginPath();
      ctx.ellipse(x + size * 0.2, y + size * 0.15, size * 0.18, size * 0.15, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // antennae
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.025;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.3);
      ctx.quadraticCurveTo(x - size * 0.15, y - size * 0.5, x - size * 0.2, y - size * 0.5);
      ctx.moveTo(x, y - size * 0.3);
      ctx.quadraticCurveTo(x + size * 0.15, y - size * 0.5, x + size * 0.2, y - size * 0.5);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'horse',
    name: 'סוס',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.05, size * 0.38, size * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      // neck
      ctx.beginPath();
      ctx.moveTo(x - size * 0.25, y - size * 0.1);
      ctx.lineTo(x - size * 0.35, y - size * 0.45);
      ctx.lineTo(x - size * 0.2, y - size * 0.45);
      ctx.lineTo(x - size * 0.15, y - size * 0.1);
      ctx.closePath();
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.ellipse(x - size * 0.38, y - size * 0.45, size * 0.15, size * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      // ear
      ctx.beginPath();
      ctx.moveTo(x - size * 0.32, y - size * 0.52);
      ctx.lineTo(x - size * 0.28, y - size * 0.65);
      ctx.lineTo(x - size * 0.24, y - size * 0.52);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.2, y + size * 0.2, size * 0.07, size * 0.32);
      ctx.fillRect(x - size * 0.08, y + size * 0.2, size * 0.07, size * 0.32);
      ctx.fillRect(x + size * 0.1, y + size * 0.2, size * 0.07, size * 0.32);
      ctx.fillRect(x + size * 0.22, y + size * 0.2, size * 0.07, size * 0.32);
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.38, y - size * 0.05);
      ctx.quadraticCurveTo(x + size * 0.55, y + size * 0.1, x + size * 0.5, y + size * 0.35);
      ctx.lineWidth = size * 0.06;
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'rabbit',
    name: 'ארנב',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.15, size * 0.25, size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.25, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // ears
      ctx.beginPath();
      ctx.ellipse(x - size * 0.12, y - size * 0.58, size * 0.06, size * 0.2, -0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x + size * 0.12, y - size * 0.58, size * 0.06, size * 0.2, 0.15, 0, Math.PI * 2);
      ctx.fill();
      // feet
      ctx.beginPath();
      ctx.ellipse(x - size * 0.15, y + size * 0.45, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.15, y + size * 0.45, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'lion',
    name: 'אריה',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // mane (big circle behind head)
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.15, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.beginPath();
      ctx.ellipse(x + size * 0.15, y + size * 0.1, size * 0.32, size * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      // head (slightly lighter impression — same color, smaller circle)
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.15, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // legs
      ctx.fillRect(x - size * 0.05, y + size * 0.22, size * 0.08, size * 0.28);
      ctx.fillRect(x + size * 0.12, y + size * 0.22, size * 0.08, size * 0.28);
      ctx.fillRect(x + size * 0.3, y + size * 0.22, size * 0.08, size * 0.28);
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.47, y + size * 0.05);
      ctx.quadraticCurveTo(x + size * 0.65, y - size * 0.1, x + size * 0.6, y - size * 0.25);
      ctx.lineWidth = size * 0.05;
      ctx.strokeStyle = color;
      ctx.stroke();
      // tail tip
      ctx.beginPath();
      ctx.arc(x + size * 0.6, y - size * 0.28, size * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'elephant',
    name: 'פיל',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x + size * 0.05, y, size * 0.38, size * 0.28, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.32, y - size * 0.1, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // ear
      ctx.beginPath();
      ctx.ellipse(x - size * 0.5, y - size * 0.05, size * 0.12, size * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      // trunk
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y + size * 0.05);
      ctx.quadraticCurveTo(x - size * 0.6, y + size * 0.2, x - size * 0.5, y + size * 0.4);
      ctx.lineWidth = size * 0.08;
      ctx.strokeStyle = color;
      ctx.stroke();
      // legs
      ctx.fillRect(x - size * 0.15, y + size * 0.2, size * 0.1, size * 0.3);
      ctx.fillRect(x + size * 0.02, y + size * 0.2, size * 0.1, size * 0.3);
      ctx.fillRect(x + size * 0.2, y + size * 0.2, size * 0.1, size * 0.3);
      ctx.fillRect(x + size * 0.34, y + size * 0.2, size * 0.1, size * 0.3);
      ctx.restore();
    },
  },
  {
    id: 'dolphin',
    name: 'דולפין',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body arc
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y + size * 0.1);
      ctx.quadraticCurveTo(x - size * 0.2, y - size * 0.4, x + size * 0.15, y - size * 0.15);
      ctx.quadraticCurveTo(x + size * 0.35, y - size * 0.05, x + size * 0.25, y + size * 0.15);
      ctx.quadraticCurveTo(x + size * 0.1, y + size * 0.3, x - size * 0.2, y + size * 0.2);
      ctx.quadraticCurveTo(x - size * 0.35, y + size * 0.15, x - size * 0.45, y + size * 0.1);
      ctx.closePath();
      ctx.fill();
      // tail
      ctx.beginPath();
      ctx.moveTo(x - size * 0.42, y + size * 0.1);
      ctx.lineTo(x - size * 0.6, y - size * 0.05);
      ctx.lineTo(x - size * 0.55, y + size * 0.2);
      ctx.closePath();
      ctx.fill();
      // fin
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.15);
      ctx.lineTo(x - size * 0.05, y - size * 0.4);
      ctx.lineTo(x + size * 0.1, y - size * 0.15);
      ctx.closePath();
      ctx.fill();
      // eye
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x + size * 0.15, y - size * 0.02, size * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'turtle',
    name: 'צב',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // shell (dome)
      ctx.beginPath();
      ctx.arc(x, y - size * 0.05, size * 0.3, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // shell bottom
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.05, size * 0.32, size * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.4, y + size * 0.0, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      // legs
      ctx.beginPath();
      ctx.ellipse(x - size * 0.2, y + size * 0.15, size * 0.08, size * 0.05, 0.4, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.2, y + size * 0.15, size * 0.08, size * 0.05, -0.4, 0, Math.PI * 2);
      ctx.ellipse(x - size * 0.15, y + size * 0.18, size * 0.08, size * 0.05, 0.4, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.15, y + size * 0.18, size * 0.08, size * 0.05, -0.4, 0, Math.PI * 2);
      ctx.fill();
      // tail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.3, y + size * 0.0);
      ctx.lineTo(x + size * 0.42, y + size * 0.05);
      ctx.lineTo(x + size * 0.3, y + size * 0.08);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'snake',
    name: 'נחש',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.1;
      ctx.lineCap = 'round';
      // wavy body
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + size * 0.2);
      ctx.bezierCurveTo(
        x - size * 0.3, y - size * 0.3,
        x - size * 0.1, y + size * 0.3,
        x + size * 0.1, y - size * 0.1
      );
      ctx.bezierCurveTo(
        x + size * 0.25, y - size * 0.35,
        x + size * 0.35, y - size * 0.35,
        x + size * 0.4, y - size * 0.25
      );
      ctx.stroke();
      // head
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + size * 0.4, y - size * 0.25, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // tongue
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.02;
      ctx.beginPath();
      ctx.moveTo(x + size * 0.47, y - size * 0.25);
      ctx.lineTo(x + size * 0.55, y - size * 0.28);
      ctx.moveTo(x + size * 0.47, y - size * 0.25);
      ctx.lineTo(x + size * 0.55, y - size * 0.22);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'frog',
    name: 'צפרדע',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.1, size * 0.3, size * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.15, size * 0.25, size * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      // eyes (big, on top)
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.32, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y - size * 0.32, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      // eye whites
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.34, size * 0.05, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y - size * 0.34, size * 0.05, 0, Math.PI * 2);
      ctx.fill();
      // front legs
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.35, y + size * 0.05, size * 0.12, size * 0.06);
      ctx.fillRect(x + size * 0.23, y + size * 0.05, size * 0.12, size * 0.06);
      // back legs
      ctx.beginPath();
      ctx.ellipse(x - size * 0.3, y + size * 0.28, size * 0.14, size * 0.06, 0.5, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.3, y + size * 0.28, size * 0.14, size * 0.06, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'bear',
    name: 'דוב',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.1, size * 0.32, size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x, y - size * 0.3, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // ears
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y - size * 0.48, size * 0.08, 0, Math.PI * 2);
      ctx.arc(x + size * 0.2, y - size * 0.48, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // snout
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.22, size * 0.1, size * 0.07, 0, 0, Math.PI * 2);
      ctx.fill();
      // arms
      ctx.beginPath();
      ctx.ellipse(x - size * 0.35, y + size * 0.0, size * 0.08, size * 0.16, 0.3, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.35, y + size * 0.0, size * 0.08, size * 0.16, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // legs
      ctx.beginPath();
      ctx.ellipse(x - size * 0.15, y + size * 0.42, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.15, y + size * 0.42, size * 0.1, size * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'chicken',
    name: 'תרנגולת',
    category: 'animals',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.05, size * 0.28, size * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();
      // head
      ctx.beginPath();
      ctx.arc(x - size * 0.25, y - size * 0.2, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
      // comb (on top of head)
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y - size * 0.38, size * 0.05, 0, Math.PI * 2);
      ctx.arc(x - size * 0.22, y - size * 0.38, size * 0.05, 0, Math.PI * 2);
      ctx.arc(x - size * 0.26, y - size * 0.42, size * 0.05, 0, Math.PI * 2);
      ctx.fill();
      // beak
      ctx.beginPath();
      ctx.moveTo(x - size * 0.38, y - size * 0.18);
      ctx.lineTo(x - size * 0.48, y - size * 0.15);
      ctx.lineTo(x - size * 0.38, y - size * 0.12);
      ctx.closePath();
      ctx.fill();
      // tail feathers
      ctx.beginPath();
      ctx.moveTo(x + size * 0.28, y - size * 0.05);
      ctx.lineTo(x + size * 0.5, y - size * 0.3);
      ctx.lineTo(x + size * 0.45, y - size * 0.15);
      ctx.lineTo(x + size * 0.55, y - size * 0.2);
      ctx.lineTo(x + size * 0.42, y + size * 0.0);
      ctx.closePath();
      ctx.fill();
      // legs
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.04;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.08, y + size * 0.25);
      ctx.lineTo(x - size * 0.08, y + size * 0.45);
      ctx.moveTo(x + size * 0.08, y + size * 0.25);
      ctx.lineTo(x + size * 0.08, y + size * 0.45);
      ctx.stroke();
      ctx.restore();
    },
  },
];

// ─── NATURE (12) ────────────────────────────────────────────────────────────

const nature = [
  {
    id: 'tree',
    name: 'עץ',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // trunk
      ctx.fillRect(x - size * 0.08, y + size * 0.05, size * 0.16, size * 0.5);
      // canopy
      ctx.beginPath();
      ctx.arc(x, y - size * 0.2, size * 0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'flower',
    name: 'פרח',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // stem
      ctx.fillRect(x - size * 0.03, y, size * 0.06, size * 0.5);
      // petals (5 circles around center)
      const petalR = size * 0.14;
      const dist = size * 0.16;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(x + Math.cos(a) * dist, y - size * 0.15 + Math.sin(a) * dist, petalR, 0, Math.PI * 2);
        ctx.fill();
      }
      // center
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // leaf
      ctx.beginPath();
      ctx.ellipse(x + size * 0.15, y + size * 0.2, size * 0.1, size * 0.05, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'sun',
    name: 'שמש',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // center circle
      ctx.beginPath();
      ctx.arc(x, y, size * 0.25, 0, Math.PI * 2);
      ctx.fill();
      // rays
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.06;
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(a) * size * 0.32, y + Math.sin(a) * size * 0.32);
        ctx.lineTo(x + Math.cos(a) * size * 0.5, y + Math.sin(a) * size * 0.5);
        ctx.stroke();
      }
      ctx.restore();
    },
  },
  {
    id: 'moon',
    name: 'ירח',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // crescent: draw full circle then clip out part
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
      ctx.fill();
      // cut out a circle to make crescent
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x + size * 0.2, y - size * 0.1, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'star',
    name: 'כוכב',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerA = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const innerA = outerA + Math.PI / 5;
        ctx.lineTo(x + Math.cos(outerA) * size * 0.45, y + Math.sin(outerA) * size * 0.45);
        ctx.lineTo(x + Math.cos(innerA) * size * 0.2, y + Math.sin(innerA) * size * 0.2);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'cloud',
    name: 'ענן',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y, size * 0.2, 0, Math.PI * 2);
      ctx.arc(x + size * 0.15, y, size * 0.22, 0, Math.PI * 2);
      ctx.arc(x, y - size * 0.12, size * 0.22, 0, Math.PI * 2);
      ctx.arc(x - size * 0.35, y + size * 0.03, size * 0.15, 0, Math.PI * 2);
      ctx.arc(x + size * 0.32, y + size * 0.05, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'rain',
    name: 'גשם',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // cloud
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.2, size * 0.15, 0, Math.PI * 2);
      ctx.arc(x + size * 0.1, y - size * 0.2, size * 0.17, 0, Math.PI * 2);
      ctx.arc(x, y - size * 0.3, size * 0.16, 0, Math.PI * 2);
      ctx.fill();
      // rain drops
      const drops = [
        [x - size * 0.2, y + size * 0.05],
        [x, y + size * 0.1],
        [x + size * 0.2, y + size * 0.0],
        [x - size * 0.1, y + size * 0.28],
        [x + size * 0.1, y + size * 0.25],
      ];
      for (const [dx, dy] of drops) {
        ctx.beginPath();
        ctx.moveTo(dx, dy - size * 0.06);
        ctx.quadraticCurveTo(dx - size * 0.04, dy + size * 0.04, dx, dy + size * 0.06);
        ctx.quadraticCurveTo(dx + size * 0.04, dy + size * 0.04, dx, dy - size * 0.06);
        ctx.fill();
      }
      ctx.restore();
    },
  },
  {
    id: 'mountain',
    name: 'הר',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // main mountain
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + size * 0.4);
      ctx.lineTo(x, y - size * 0.45);
      ctx.lineTo(x + size * 0.5, y + size * 0.4);
      ctx.closePath();
      ctx.fill();
      // smaller mountain behind
      ctx.beginPath();
      ctx.moveTo(x + size * 0.1, y + size * 0.4);
      ctx.lineTo(x + size * 0.4, y - size * 0.2);
      ctx.lineTo(x + size * 0.7, y + size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'rainbow',
    name: 'קשת',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.12;
      ctx.lineCap = 'round';
      // three arcs to suggest rainbow bands
      const offsets = [-0.06, 0, 0.06];
      for (const off of offsets) {
        ctx.beginPath();
        ctx.arc(x, y + size * 0.2, size * (0.45 + off), Math.PI, 0);
        ctx.stroke();
      }
      ctx.restore();
    },
  },
  {
    id: 'grass',
    name: 'דשא',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // several grass blades
      const blades = [-0.35, -0.2, -0.05, 0.1, 0.25, 0.4];
      for (const bx of blades) {
        ctx.beginPath();
        ctx.moveTo(x + size * bx - size * 0.03, y + size * 0.3);
        ctx.quadraticCurveTo(x + size * bx - size * 0.08, y - size * 0.1, x + size * bx, y - size * 0.3);
        ctx.quadraticCurveTo(x + size * bx + size * 0.08, y - size * 0.1, x + size * bx + size * 0.03, y + size * 0.3);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    },
  },
  {
    id: 'leaf',
    name: 'עלה',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // leaf shape
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.bezierCurveTo(x + size * 0.4, y - size * 0.3, x + size * 0.4, y + size * 0.2, x, y + size * 0.35);
      ctx.bezierCurveTo(x - size * 0.4, y + size * 0.2, x - size * 0.4, y - size * 0.3, x, y - size * 0.45);
      ctx.closePath();
      ctx.fill();
      // center vein
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.4);
      ctx.lineTo(x, y + size * 0.3);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'mushroom',
    name: 'פטריה',
    category: 'nature',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // stem
      ctx.fillRect(x - size * 0.1, y, size * 0.2, size * 0.35);
      // cap (half circle)
      ctx.beginPath();
      ctx.arc(x, y, size * 0.32, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // cap dome on top
      ctx.beginPath();
      ctx.arc(x, y - size * 0.08, size * 0.28, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
];

// ─── BUILDINGS (8) ──────────────────────────────────────────────────────────

const buildings = [
  {
    id: 'house',
    name: 'בית',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // walls
      ctx.fillRect(x - size * 0.35, y - size * 0.05, size * 0.7, size * 0.5);
      // roof
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y - size * 0.05);
      ctx.lineTo(x, y - size * 0.5);
      ctx.lineTo(x + size * 0.45, y - size * 0.05);
      ctx.closePath();
      ctx.fill();
      // door
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.08, y + size * 0.15, size * 0.16, size * 0.3);
      // window
      ctx.fillRect(x + size * 0.12, y + size * 0.08, size * 0.12, size * 0.12);
      ctx.fillRect(x - size * 0.26, y + size * 0.08, size * 0.12, size * 0.12);
      ctx.restore();
    },
  },
  {
    id: 'building',
    name: 'בניין',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // tall rectangle
      ctx.fillRect(x - size * 0.25, y - size * 0.55, size * 0.5, size * 1.0);
      // windows (grid)
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          ctx.fillRect(
            x - size * 0.18 + col * size * 0.14,
            y - size * 0.48 + row * size * 0.22,
            size * 0.08,
            size * 0.1
          );
        }
      }
      ctx.restore();
    },
  },
  {
    id: 'castle',
    name: 'טירה',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // main wall
      ctx.fillRect(x - size * 0.35, y - size * 0.15, size * 0.7, size * 0.6);
      // left tower
      ctx.fillRect(x - size * 0.4, y - size * 0.5, size * 0.18, size * 0.55);
      // right tower
      ctx.fillRect(x + size * 0.22, y - size * 0.5, size * 0.18, size * 0.55);
      // battlements on towers
      ctx.fillRect(x - size * 0.44, y - size * 0.58, size * 0.08, size * 0.08);
      ctx.fillRect(x - size * 0.3, y - size * 0.58, size * 0.08, size * 0.08);
      ctx.fillRect(x + size * 0.2, y - size * 0.58, size * 0.08, size * 0.08);
      ctx.fillRect(x + size * 0.36, y - size * 0.58, size * 0.08, size * 0.08);
      // gate arch
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x, y + size * 0.2, size * 0.1, Math.PI, 0);
      ctx.fillRect(x - size * 0.1, y + size * 0.2, size * 0.2, size * 0.25);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'tent',
    name: 'אוהל',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // triangle tent
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y + size * 0.4);
      ctx.lineTo(x, y - size * 0.45);
      ctx.lineTo(x + size * 0.45, y + size * 0.4);
      ctx.closePath();
      ctx.fill();
      // opening
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(x - size * 0.12, y + size * 0.4);
      ctx.lineTo(x, y + size * 0.05);
      ctx.lineTo(x + size * 0.12, y + size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'school',
    name: 'בית ספר',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // main body
      ctx.fillRect(x - size * 0.45, y - size * 0.15, size * 0.9, size * 0.55);
      // roof
      ctx.fillRect(x - size * 0.48, y - size * 0.22, size * 0.96, size * 0.07);
      // center top (small triangle/pediment)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.15, y - size * 0.22);
      ctx.lineTo(x, y - size * 0.42);
      ctx.lineTo(x + size * 0.15, y - size * 0.22);
      ctx.closePath();
      ctx.fill();
      // flag pole
      ctx.fillRect(x - size * 0.015, y - size * 0.58, size * 0.03, size * 0.16);
      // flag
      ctx.fillRect(x + size * 0.015, y - size * 0.58, size * 0.12, size * 0.08);
      // door
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.06, y + size * 0.12, size * 0.12, size * 0.28);
      // windows
      ctx.fillRect(x - size * 0.35, y - size * 0.05, size * 0.1, size * 0.1);
      ctx.fillRect(x + size * 0.25, y - size * 0.05, size * 0.1, size * 0.1);
      ctx.restore();
    },
  },
  {
    id: 'store',
    name: 'חנות',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.4, y - size * 0.15, size * 0.8, size * 0.55);
      // awning
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y - size * 0.15);
      ctx.lineTo(x - size * 0.45, y - size * 0.3);
      ctx.lineTo(x + size * 0.45, y - size * 0.3);
      ctx.lineTo(x + size * 0.45, y - size * 0.15);
      // scalloped bottom
      const scallops = 5;
      for (let i = scallops; i >= 0; i--) {
        const sx = x - size * 0.45 + (i / scallops) * size * 0.9;
        const sy = y - size * 0.15 + (i % 2 === 0 ? 0 : size * 0.06);
        ctx.lineTo(sx, sy);
      }
      ctx.closePath();
      ctx.fill();
      // door
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.06, y + size * 0.1, size * 0.12, size * 0.3);
      // display window
      ctx.fillRect(x + size * 0.12, y + size * 0.0, size * 0.2, size * 0.2);
      ctx.fillRect(x - size * 0.34, y + size * 0.0, size * 0.2, size * 0.2);
      ctx.restore();
    },
  },
  {
    id: 'synagogue',
    name: 'בית כנסת',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.35, y - size * 0.1, size * 0.7, size * 0.55);
      // dome on top
      ctx.beginPath();
      ctx.arc(x, y - size * 0.1, size * 0.22, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // Star of David on top (simplified: two overlapping triangles)
      const sy = y - size * 0.42;
      const ss = size * 0.1;
      ctx.beginPath();
      ctx.moveTo(x, sy - ss);
      ctx.lineTo(x - ss * 0.87, sy + ss * 0.5);
      ctx.lineTo(x + ss * 0.87, sy + ss * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, sy + ss);
      ctx.lineTo(x - ss * 0.87, sy - ss * 0.5);
      ctx.lineTo(x + ss * 0.87, sy - ss * 0.5);
      ctx.closePath();
      ctx.fill();
      // door arch
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x, y + size * 0.2, size * 0.1, Math.PI, 0);
      ctx.fillRect(x - size * 0.1, y + size * 0.2, size * 0.2, size * 0.25);
      ctx.fill();
      // windows
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y + size * 0.05, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x + size * 0.2, y + size * 0.05, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'tower',
    name: 'מגדל',
    category: 'buildings',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // tall body
      ctx.fillRect(x - size * 0.15, y - size * 0.4, size * 0.3, size * 0.85);
      // pointed top
      ctx.beginPath();
      ctx.moveTo(x - size * 0.2, y - size * 0.4);
      ctx.lineTo(x, y - size * 0.7);
      ctx.lineTo(x + size * 0.2, y - size * 0.4);
      ctx.closePath();
      ctx.fill();
      // windows
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.05, y - size * 0.28, size * 0.1, size * 0.1);
      ctx.fillRect(x - size * 0.05, y - size * 0.05, size * 0.1, size * 0.1);
      ctx.fillRect(x - size * 0.05, y + size * 0.18, size * 0.1, size * 0.1);
      ctx.restore();
    },
  },
];

// ─── TRANSPORT (10) ─────────────────────────────────────────────────────────

const transport = [
  {
    id: 'car',
    name: 'מכונית',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.42, y - size * 0.05, size * 0.84, size * 0.25);
      // top
      ctx.beginPath();
      ctx.moveTo(x - size * 0.2, y - size * 0.05);
      ctx.lineTo(x - size * 0.12, y - size * 0.28);
      ctx.lineTo(x + size * 0.2, y - size * 0.28);
      ctx.lineTo(x + size * 0.3, y - size * 0.05);
      ctx.closePath();
      ctx.fill();
      // wheels
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(x - size * 0.22, y + size * 0.22, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.22, y + size * 0.22, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      // window
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.08, y - size * 0.24, size * 0.24, size * 0.15);
      ctx.restore();
    },
  },
  {
    id: 'bus',
    name: 'אוטובוס',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.48, y - size * 0.25, size * 0.96, size * 0.42);
      // roof
      ctx.fillRect(x - size * 0.48, y - size * 0.3, size * 0.96, size * 0.05);
      // windows
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      for (let i = 0; i < 5; i++) {
        ctx.fillRect(x - size * 0.42 + i * size * 0.18, y - size * 0.2, size * 0.12, size * 0.15);
      }
      ctx.globalAlpha = 1;
      // wheels
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y + size * 0.2, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.3, y + size * 0.2, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'truck',
    name: 'משאית',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // cargo box
      ctx.fillRect(x - size * 0.48, y - size * 0.3, size * 0.6, size * 0.48);
      // cab
      ctx.fillRect(x + size * 0.15, y - size * 0.15, size * 0.3, size * 0.33);
      // windshield
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x + size * 0.28, y - size * 0.12, size * 0.14, size * 0.15);
      ctx.globalAlpha = 1;
      // wheels
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(x - size * 0.28, y + size * 0.22, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.28, y + size * 0.22, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'airplane',
    name: 'מטוס',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // fuselage
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.45, size * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      // nose cone
      ctx.beginPath();
      ctx.moveTo(x + size * 0.45, y);
      ctx.lineTo(x + size * 0.55, y);
      ctx.lineTo(x + size * 0.45, y - size * 0.03);
      ctx.closePath();
      ctx.fill();
      // wings
      ctx.beginPath();
      ctx.moveTo(x - size * 0.05, y - size * 0.05);
      ctx.lineTo(x + size * 0.05, y - size * 0.05);
      ctx.lineTo(x + size * 0.15, y - size * 0.4);
      ctx.lineTo(x - size * 0.15, y - size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x - size * 0.05, y + size * 0.05);
      ctx.lineTo(x + size * 0.05, y + size * 0.05);
      ctx.lineTo(x + size * 0.15, y + size * 0.4);
      ctx.lineTo(x - size * 0.15, y + size * 0.4);
      ctx.closePath();
      ctx.fill();
      // tail fin
      ctx.beginPath();
      ctx.moveTo(x - size * 0.4, y - size * 0.08);
      ctx.lineTo(x - size * 0.45, y - size * 0.28);
      ctx.lineTo(x - size * 0.3, y - size * 0.08);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'helicopter',
    name: 'מסוק',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.ellipse(x - size * 0.05, y + size * 0.05, size * 0.25, size * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();
      // tail boom
      ctx.fillRect(x + size * 0.15, y - size * 0.02, size * 0.35, size * 0.06);
      // tail rotor
      ctx.fillRect(x + size * 0.46, y - size * 0.15, size * 0.04, size * 0.2);
      // main rotor
      ctx.fillRect(x - size * 0.45, y - size * 0.12, size * 0.8, size * 0.04);
      // rotor mast
      ctx.fillRect(x - size * 0.02, y - size * 0.12, size * 0.04, size * 0.08);
      // skids
      ctx.fillRect(x - size * 0.25, y + size * 0.22, size * 0.4, size * 0.03);
      ctx.fillRect(x - size * 0.12, y + size * 0.18, size * 0.03, size * 0.05);
      ctx.fillRect(x + size * 0.08, y + size * 0.18, size * 0.03, size * 0.05);
      ctx.restore();
    },
  },
  {
    id: 'boat',
    name: 'סירה',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // hull
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y + size * 0.05);
      ctx.lineTo(x - size * 0.35, y + size * 0.3);
      ctx.lineTo(x + size * 0.35, y + size * 0.3);
      ctx.lineTo(x + size * 0.45, y + size * 0.05);
      ctx.closePath();
      ctx.fill();
      // mast
      ctx.fillRect(x - size * 0.02, y - size * 0.45, size * 0.04, size * 0.5);
      // sail
      ctx.beginPath();
      ctx.moveTo(x + size * 0.02, y - size * 0.4);
      ctx.lineTo(x + size * 0.32, y + size * 0.0);
      ctx.lineTo(x + size * 0.02, y + size * 0.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'train',
    name: 'רכבת',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // engine body
      ctx.fillRect(x - size * 0.45, y - size * 0.2, size * 0.55, size * 0.35);
      // cabin
      ctx.fillRect(x + size * 0.1, y - size * 0.35, size * 0.3, size * 0.5);
      // chimney
      ctx.fillRect(x - size * 0.3, y - size * 0.38, size * 0.1, size * 0.18);
      // smokestack top
      ctx.fillRect(x - size * 0.34, y - size * 0.42, size * 0.18, size * 0.05);
      // wheels
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(x - size * 0.3, y + size * 0.2, size * 0.09, 0, Math.PI * 2);
      ctx.arc(x - size * 0.08, y + size * 0.2, size * 0.09, 0, Math.PI * 2);
      ctx.arc(x + size * 0.25, y + size * 0.2, size * 0.09, 0, Math.PI * 2);
      ctx.fill();
      // window
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x + size * 0.18, y - size * 0.28, size * 0.14, size * 0.14);
      ctx.restore();
    },
  },
  {
    id: 'bicycle',
    name: 'אופניים',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.04;
      ctx.fillStyle = color;
      // wheels
      ctx.beginPath();
      ctx.arc(x - size * 0.25, y + size * 0.15, size * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.25, y + size * 0.15, size * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      // frame
      ctx.beginPath();
      ctx.moveTo(x - size * 0.25, y + size * 0.15); // back wheel center
      ctx.lineTo(x, y - size * 0.08); // seat post top
      ctx.lineTo(x + size * 0.25, y + size * 0.15); // front wheel center
      ctx.lineTo(x, y - size * 0.08);
      ctx.lineTo(x - size * 0.05, y + size * 0.15); // bottom bracket
      ctx.lineTo(x - size * 0.25, y + size * 0.15);
      ctx.stroke();
      // handlebars
      ctx.beginPath();
      ctx.moveTo(x + size * 0.18, y - size * 0.18);
      ctx.lineTo(x + size * 0.25, y - size * 0.1);
      ctx.lineTo(x + size * 0.3, y - size * 0.18);
      ctx.stroke();
      // seat
      ctx.fillRect(x - size * 0.08, y - size * 0.12, size * 0.12, size * 0.04);
      ctx.restore();
    },
  },
  {
    id: 'rocket',
    name: 'טיל',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.55);
      ctx.bezierCurveTo(x + size * 0.15, y - size * 0.35, x + size * 0.15, y + size * 0.2, x + size * 0.12, y + size * 0.35);
      ctx.lineTo(x - size * 0.12, y + size * 0.35);
      ctx.bezierCurveTo(x - size * 0.15, y + size * 0.2, x - size * 0.15, y - size * 0.35, x, y - size * 0.55);
      ctx.closePath();
      ctx.fill();
      // left fin
      ctx.beginPath();
      ctx.moveTo(x - size * 0.12, y + size * 0.2);
      ctx.lineTo(x - size * 0.28, y + size * 0.42);
      ctx.lineTo(x - size * 0.12, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      // right fin
      ctx.beginPath();
      ctx.moveTo(x + size * 0.12, y + size * 0.2);
      ctx.lineTo(x + size * 0.28, y + size * 0.42);
      ctx.lineTo(x + size * 0.12, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      // window
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'ambulance',
    name: 'אמבולנס',
    category: 'transport',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // body
      ctx.fillRect(x - size * 0.45, y - size * 0.15, size * 0.7, size * 0.32);
      // cab front
      ctx.beginPath();
      ctx.moveTo(x + size * 0.25, y - size * 0.15);
      ctx.lineTo(x + size * 0.45, y - size * 0.05);
      ctx.lineTo(x + size * 0.45, y + size * 0.17);
      ctx.lineTo(x + size * 0.25, y + size * 0.17);
      ctx.closePath();
      ctx.fill();
      // cross symbol
      ctx.fillStyle = '#fff';
      ctx.fillRect(x - size * 0.17, y - size * 0.06, size * 0.14, size * 0.04);
      ctx.fillRect(x - size * 0.12, y - size * 0.11, size * 0.04, size * 0.14);
      // wheels
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(x - size * 0.28, y + size * 0.2, size * 0.09, 0, Math.PI * 2);
      ctx.arc(x + size * 0.28, y + size * 0.2, size * 0.09, 0, Math.PI * 2);
      ctx.fill();
      // light on top
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.05, y - size * 0.23, size * 0.1, size * 0.08);
      ctx.restore();
    },
  },
];

// ─── FOOD (10) ──────────────────────────────────────────────────────────────

const food = [
  {
    id: 'apple',
    name: 'תפוח',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // apple body
      ctx.beginPath();
      ctx.arc(x - size * 0.1, y + size * 0.05, size * 0.3, 0, Math.PI * 2);
      ctx.arc(x + size * 0.1, y + size * 0.05, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      // stem
      ctx.fillRect(x - size * 0.02, y - size * 0.35, size * 0.04, size * 0.15);
      // leaf
      ctx.beginPath();
      ctx.ellipse(x + size * 0.1, y - size * 0.32, size * 0.08, size * 0.04, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'banana',
    name: 'בננה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // banana curve
      ctx.beginPath();
      ctx.moveTo(x - size * 0.35, y + size * 0.15);
      ctx.bezierCurveTo(
        x - size * 0.3, y - size * 0.35,
        x + size * 0.3, y - size * 0.35,
        x + size * 0.35, y + size * 0.0
      );
      ctx.bezierCurveTo(
        x + size * 0.25, y - size * 0.15,
        x - size * 0.15, y - size * 0.15,
        x - size * 0.35, y + size * 0.15
      );
      ctx.closePath();
      ctx.fill();
      // stem
      ctx.fillRect(x + size * 0.33, y - size * 0.05, size * 0.08, size * 0.05);
      ctx.restore();
    },
  },
  {
    id: 'iceCream',
    name: 'גלידה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // scoops
      ctx.beginPath();
      ctx.arc(x, y - size * 0.25, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - size * 0.12, y - size * 0.05, size * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + size * 0.12, y - size * 0.05, size * 0.18, 0, Math.PI * 2);
      ctx.fill();
      // cone
      ctx.beginPath();
      ctx.moveTo(x - size * 0.22, y + size * 0.05);
      ctx.lineTo(x, y + size * 0.5);
      ctx.lineTo(x + size * 0.22, y + size * 0.05);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'cake',
    name: 'עוגה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // bottom layer
      ctx.fillRect(x - size * 0.35, y + size * 0.05, size * 0.7, size * 0.25);
      // top layer
      ctx.fillRect(x - size * 0.25, y - size * 0.2, size * 0.5, size * 0.25);
      // top dome
      ctx.beginPath();
      ctx.arc(x, y - size * 0.2, size * 0.25, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // candle
      ctx.fillRect(x - size * 0.02, y - size * 0.52, size * 0.04, size * 0.15);
      // flame
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.58);
      ctx.quadraticCurveTo(x + size * 0.04, y - size * 0.52, x, y - size * 0.5);
      ctx.quadraticCurveTo(x - size * 0.04, y - size * 0.52, x, y - size * 0.58);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'pizza',
    name: 'פיצה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // pizza slice triangle with curved base
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.lineTo(x - size * 0.35, y + size * 0.35);
      ctx.quadraticCurveTo(x, y + size * 0.45, x + size * 0.35, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      // pepperoni dots
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.08, y + size * 0.1, size * 0.05, 0, Math.PI * 2);
      ctx.arc(x + size * 0.1, y + size * 0.15, size * 0.05, 0, Math.PI * 2);
      ctx.arc(x, y - size * 0.1, size * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'cookie',
    name: 'עוגייה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // round cookie
      ctx.beginPath();
      ctx.arc(x, y, size * 0.35, 0, Math.PI * 2);
      ctx.fill();
      // chocolate chips
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = '#000';
      const chips = [
        [0.08, -0.12], [-0.12, 0.05], [0.15, 0.1], [-0.05, -0.18],
        [0.0, 0.2], [-0.18, -0.08], [0.12, -0.02],
      ];
      for (const [cx, cy] of chips) {
        ctx.beginPath();
        ctx.arc(x + size * cx, y + size * cy, size * 0.035, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    },
  },
  {
    id: 'lollipop',
    name: 'סוכרייה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // stick
      ctx.fillRect(x - size * 0.025, y + size * 0.05, size * 0.05, size * 0.5);
      // candy circle
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.28, 0, Math.PI * 2);
      ctx.fill();
      // spiral hint
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.15, 0, Math.PI * 1.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y - size * 0.15, size * 0.08, Math.PI, Math.PI * 2.5);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'watermelon',
    name: 'אבטיח',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // half circle (slice)
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // rind (outer arc)
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.06;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.43, Math.PI, 0);
      ctx.stroke();
      // seeds
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.ellipse(x - size * 0.15, y - size * 0.1, size * 0.025, size * 0.04, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.15, size * 0.025, size * 0.04, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(x + size * 0.15, y - size * 0.1, size * 0.025, size * 0.04, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'falafel',
    name: 'פלאפל',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // pita half-circle
      ctx.beginPath();
      ctx.arc(x, y + size * 0.05, size * 0.35, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // pita body
      ctx.fillRect(x - size * 0.35, y + size * 0.05, size * 0.7, size * 0.15);
      // falafel balls peeking out
      ctx.beginPath();
      ctx.arc(x - size * 0.15, y - size * 0.08, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.02, y - size * 0.12, size * 0.1, 0, Math.PI * 2);
      ctx.arc(x + size * 0.18, y - size * 0.06, size * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'pita',
    name: 'פיתה',
    category: 'food',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // round flat bread
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      // pocket line
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.02, size * 0.3, size * 0.08, 0, 0, Math.PI);
      ctx.stroke();
      ctx.restore();
    },
  },
];

// ─── OBJECTS (12) ───────────────────────────────────────────────────────────

const objects = [
  {
    id: 'ball',
    name: 'כדור',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
      ctx.fill();
      // stripe
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.ellipse(x, y, size * 0.1, size * 0.38, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'book',
    name: 'ספר',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // cover
      ctx.fillRect(x - size * 0.3, y - size * 0.38, size * 0.6, size * 0.76);
      // spine
      ctx.globalAlpha = 0.6;
      ctx.fillRect(x - size * 0.32, y - size * 0.38, size * 0.05, size * 0.76);
      // pages (lighter inner rectangle)
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = '#fff';
      ctx.fillRect(x - size * 0.22, y - size * 0.32, size * 0.46, size * 0.64);
      // title lines
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.1, y - size * 0.15, size * 0.25, size * 0.03);
      ctx.fillRect(x - size * 0.1, y - size * 0.05, size * 0.2, size * 0.03);
      ctx.restore();
    },
  },
  {
    id: 'computer',
    name: 'מחשב',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // monitor
      ctx.fillRect(x - size * 0.35, y - size * 0.38, size * 0.7, size * 0.5);
      // screen
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.28, y - size * 0.32, size * 0.56, size * 0.38);
      ctx.globalAlpha = 1;
      // stand
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.06, y + size * 0.12, size * 0.12, size * 0.12);
      // base
      ctx.fillRect(x - size * 0.2, y + size * 0.24, size * 0.4, size * 0.05);
      ctx.restore();
    },
  },
  {
    id: 'phone',
    name: 'טלפון',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // phone body (rounded rect via manual arcs)
      const w = size * 0.3;
      const h = size * 0.7;
      const r = size * 0.05;
      ctx.beginPath();
      ctx.moveTo(x - w / 2 + r, y - h / 2);
      ctx.lineTo(x + w / 2 - r, y - h / 2);
      ctx.arc(x + w / 2 - r, y - h / 2 + r, r, -Math.PI / 2, 0);
      ctx.lineTo(x + w / 2, y + h / 2 - r);
      ctx.arc(x + w / 2 - r, y + h / 2 - r, r, 0, Math.PI / 2);
      ctx.lineTo(x - w / 2 + r, y + h / 2);
      ctx.arc(x - w / 2 + r, y + h / 2 - r, r, Math.PI / 2, Math.PI);
      ctx.lineTo(x - w / 2, y - h / 2 + r);
      ctx.arc(x - w / 2 + r, y - h / 2 + r, r, Math.PI, -Math.PI / 2);
      ctx.closePath();
      ctx.fill();
      // screen
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#000';
      ctx.fillRect(x - size * 0.11, y - size * 0.28, size * 0.22, size * 0.46);
      // home button
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.28, size * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'glasses',
    name: 'משקפיים',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.05;
      // left lens
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y, size * 0.17, 0, Math.PI * 2);
      ctx.stroke();
      // right lens
      ctx.beginPath();
      ctx.arc(x + size * 0.2, y, size * 0.17, 0, Math.PI * 2);
      ctx.stroke();
      // bridge
      ctx.beginPath();
      ctx.moveTo(x - size * 0.03, y);
      ctx.lineTo(x + size * 0.03, y);
      ctx.stroke();
      // temples
      ctx.beginPath();
      ctx.moveTo(x - size * 0.37, y);
      ctx.lineTo(x - size * 0.5, y + size * 0.05);
      ctx.moveTo(x + size * 0.37, y);
      ctx.lineTo(x + size * 0.5, y + size * 0.05);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'umbrella',
    name: 'מטריה',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // canopy
      ctx.beginPath();
      ctx.arc(x, y - size * 0.1, size * 0.38, Math.PI, 0);
      ctx.closePath();
      ctx.fill();
      // scalloped edge
      ctx.globalCompositeOperation = 'destination-out';
      for (let i = 0; i < 4; i++) {
        const cx = x - size * 0.3 + i * size * 0.2;
        ctx.beginPath();
        ctx.arc(cx, y - size * 0.1, size * 0.08, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
      // handle
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.04;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.1);
      ctx.lineTo(x, y + size * 0.35);
      ctx.arc(x + size * 0.06, y + size * 0.35, size * 0.06, Math.PI, 0, true);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'clock',
    name: 'שעון',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.38, 0, Math.PI * 2);
      ctx.fill();
      // inner circle (lighter)
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      // hour marks
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = color;
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(
          x + Math.cos(a) * size * 0.27,
          y + Math.sin(a) * size * 0.27,
          size * 0.02, 0, Math.PI * 2
        );
        ctx.fill();
      }
      // hands
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.04;
      ctx.lineCap = 'round';
      // hour hand
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size * 0.12, y - size * 0.12);
      ctx.stroke();
      // minute hand
      ctx.lineWidth = size * 0.025;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - size * 0.05, y - size * 0.22);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'lamp',
    name: 'מנורה',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // shade (trapezoid)
      ctx.beginPath();
      ctx.moveTo(x - size * 0.12, y - size * 0.4);
      ctx.lineTo(x + size * 0.12, y - size * 0.4);
      ctx.lineTo(x + size * 0.28, y + size * 0.0);
      ctx.lineTo(x - size * 0.28, y + size * 0.0);
      ctx.closePath();
      ctx.fill();
      // pole
      ctx.fillRect(x - size * 0.03, y + size * 0.0, size * 0.06, size * 0.35);
      // base
      ctx.fillRect(x - size * 0.15, y + size * 0.35, size * 0.3, size * 0.06);
      ctx.restore();
    },
  },
  {
    id: 'key',
    name: 'מפתח',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.06;
      // head (ring)
      ctx.beginPath();
      ctx.arc(x - size * 0.2, y, size * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      // shaft
      ctx.fillRect(x - size * 0.02, y - size * 0.03, size * 0.4, size * 0.06);
      // teeth
      ctx.fillRect(x + size * 0.28, y + size * 0.03, size * 0.06, size * 0.1);
      ctx.fillRect(x + size * 0.18, y + size * 0.03, size * 0.06, size * 0.08);
      ctx.fillRect(x + size * 0.36, y + size * 0.03, size * 0.06, size * 0.12);
      ctx.restore();
    },
  },
  {
    id: 'gift',
    name: 'מתנה',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // box
      ctx.fillRect(x - size * 0.3, y - size * 0.15, size * 0.6, size * 0.55);
      // lid
      ctx.fillRect(x - size * 0.35, y - size * 0.25, size * 0.7, size * 0.12);
      // ribbon vertical
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = '#fff';
      ctx.fillRect(x - size * 0.04, y - size * 0.25, size * 0.08, size * 0.65);
      // ribbon horizontal
      ctx.fillRect(x - size * 0.3, y + size * 0.08, size * 0.6, size * 0.08);
      // bow
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(x - size * 0.1, y - size * 0.32, size * 0.08, size * 0.05, -0.4, 0, Math.PI * 2);
      ctx.ellipse(x + size * 0.1, y - size * 0.32, size * 0.08, size * 0.05, 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'balloon',
    name: 'בלון',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // balloon
      ctx.beginPath();
      ctx.ellipse(x, y - size * 0.1, size * 0.25, size * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
      // knot
      ctx.beginPath();
      ctx.moveTo(x - size * 0.04, y + size * 0.22);
      ctx.lineTo(x, y + size * 0.27);
      ctx.lineTo(x + size * 0.04, y + size * 0.22);
      ctx.closePath();
      ctx.fill();
      // string
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.02;
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.27);
      ctx.quadraticCurveTo(x + size * 0.08, y + size * 0.4, x - size * 0.05, y + size * 0.55);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'kite',
    name: 'עפיפון',
    category: 'objects',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // diamond shape
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.lineTo(x + size * 0.25, y - size * 0.05);
      ctx.lineTo(x, y + size * 0.2);
      ctx.lineTo(x - size * 0.25, y - size * 0.05);
      ctx.closePath();
      ctx.fill();
      // cross struts
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = size * 0.02;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.lineTo(x, y + size * 0.2);
      ctx.moveTo(x - size * 0.25, y - size * 0.05);
      ctx.lineTo(x + size * 0.25, y - size * 0.05);
      ctx.stroke();
      // tail string
      ctx.globalAlpha = 1;
      ctx.lineWidth = size * 0.02;
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.2);
      ctx.quadraticCurveTo(x + size * 0.15, y + size * 0.35, x - size * 0.1, y + size * 0.5);
      ctx.stroke();
      // bows on tail
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + size * 0.05, y + size * 0.32, size * 0.04, 0, Math.PI * 2);
      ctx.arc(x - size * 0.05, y + size * 0.45, size * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
];

// ─── SHAPES (8) ─────────────────────────────────────────────────────────────

const shapes = [
  {
    id: 'circle',
    name: 'עיגול',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'square',
    name: 'ריבוע',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.fillRect(x - size * 0.35, y - size * 0.35, size * 0.7, size * 0.7);
      ctx.restore();
    },
  },
  {
    id: 'triangle',
    name: 'משולש',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.42);
      ctx.lineTo(x - size * 0.4, y + size * 0.32);
      ctx.lineTo(x + size * 0.4, y + size * 0.32);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'starShape',
    name: 'כוכב',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerA = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const innerA = outerA + Math.PI / 5;
        ctx.lineTo(x + Math.cos(outerA) * size * 0.42, y + Math.sin(outerA) * size * 0.42);
        ctx.lineTo(x + Math.cos(innerA) * size * 0.18, y + Math.sin(innerA) * size * 0.18);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'heart',
    name: 'לב',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.35);
      ctx.bezierCurveTo(x - size * 0.5, y + size * 0.05, x - size * 0.5, y - size * 0.3, x, y - size * 0.1);
      ctx.bezierCurveTo(x + size * 0.5, y - size * 0.3, x + size * 0.5, y + size * 0.05, x, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'diamond',
    name: 'יהלום',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.lineTo(x + size * 0.3, y);
      ctx.lineTo(x, y + size * 0.45);
      ctx.lineTo(x - size * 0.3, y);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'hexagon',
    name: 'משושה',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        ctx.lineTo(x + Math.cos(a) * size * 0.4, y + Math.sin(a) * size * 0.4);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'arrow',
    name: 'חץ',
    category: 'shapes',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      // arrow pointing right
      ctx.moveTo(x + size * 0.45, y);
      ctx.lineTo(x + size * 0.1, y - size * 0.3);
      ctx.lineTo(x + size * 0.1, y - size * 0.12);
      ctx.lineTo(x - size * 0.45, y - size * 0.12);
      ctx.lineTo(x - size * 0.45, y + size * 0.12);
      ctx.lineTo(x + size * 0.1, y + size * 0.12);
      ctx.lineTo(x + size * 0.1, y + size * 0.3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
];

// ─── ELEMENTS (8) ───────────────────────────────────────────────────────────

const elements = [
  {
    id: 'fire',
    name: 'אש',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // outer flame
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.45);
      ctx.bezierCurveTo(x - size * 0.35, y + size * 0.2, x - size * 0.3, y - size * 0.15, x, y - size * 0.5);
      ctx.bezierCurveTo(x + size * 0.3, y - size * 0.15, x + size * 0.35, y + size * 0.2, x, y + size * 0.45);
      ctx.closePath();
      ctx.fill();
      // inner flame
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(x, y + size * 0.35);
      ctx.bezierCurveTo(x - size * 0.15, y + size * 0.15, x - size * 0.15, y - size * 0.05, x, y - size * 0.25);
      ctx.bezierCurveTo(x + size * 0.15, y - size * 0.05, x + size * 0.15, y + size * 0.15, x, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'waterDrop',
    name: 'טיפה',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.bezierCurveTo(x + size * 0.35, y, x + size * 0.3, y + size * 0.3, x, y + size * 0.42);
      ctx.bezierCurveTo(x - size * 0.3, y + size * 0.3, x - size * 0.35, y, x, y - size * 0.45);
      ctx.closePath();
      ctx.fill();
      // highlight
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.ellipse(x - size * 0.08, y + size * 0.05, size * 0.05, size * 0.1, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'lightning',
    name: 'ברק',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x + size * 0.05, y - size * 0.5);
      ctx.lineTo(x - size * 0.15, y - size * 0.05);
      ctx.lineTo(x + size * 0.05, y - size * 0.05);
      ctx.lineTo(x - size * 0.08, y + size * 0.5);
      ctx.lineTo(x + size * 0.2, y + size * 0.0);
      ctx.lineTo(x + size * 0.0, y + size * 0.0);
      ctx.lineTo(x + size * 0.2, y - size * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'snowflake',
    name: 'פתית שלג',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.05;
      ctx.lineCap = 'round';
      // 6 main branches
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const ex = x + Math.cos(a) * size * 0.38;
        const ey = y + Math.sin(a) * size * 0.38;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        // small branches
        const midx = x + Math.cos(a) * size * 0.22;
        const midy = y + Math.sin(a) * size * 0.22;
        for (const da of [-0.5, 0.5]) {
          ctx.beginPath();
          ctx.moveTo(midx, midy);
          ctx.lineTo(
            midx + Math.cos(a + da) * size * 0.1,
            midy + Math.sin(a + da) * size * 0.1
          );
          ctx.stroke();
        }
      }
      ctx.restore();
    },
  },
  {
    id: 'wave',
    name: 'גל',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // wavy shape
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + size * 0.15);
      ctx.quadraticCurveTo(x - size * 0.35, y - size * 0.2, x - size * 0.15, y + size * 0.0);
      ctx.quadraticCurveTo(x, y + size * 0.2, x + size * 0.15, y - size * 0.05);
      ctx.quadraticCurveTo(x + size * 0.3, y - size * 0.25, x + size * 0.5, y + size * 0.0);
      ctx.lineTo(x + size * 0.5, y + size * 0.15);
      ctx.closePath();
      ctx.fill();
      // second wave below
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + size * 0.35);
      ctx.quadraticCurveTo(x - size * 0.3, y + size * 0.1, x - size * 0.1, y + size * 0.25);
      ctx.quadraticCurveTo(x + size * 0.1, y + size * 0.4, x + size * 0.3, y + size * 0.2);
      ctx.quadraticCurveTo(x + size * 0.4, y + size * 0.12, x + size * 0.5, y + size * 0.2);
      ctx.lineTo(x + size * 0.5, y + size * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'wind',
    name: 'רוח',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 0.05;
      ctx.lineCap = 'round';
      // three wind lines
      ctx.beginPath();
      ctx.moveTo(x - size * 0.4, y - size * 0.2);
      ctx.quadraticCurveTo(x + size * 0.1, y - size * 0.25, x + size * 0.35, y - size * 0.15);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - size * 0.45, y);
      ctx.quadraticCurveTo(x + size * 0.15, y - size * 0.05, x + size * 0.45, y + size * 0.05);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - size * 0.35, y + size * 0.2);
      ctx.quadraticCurveTo(x + size * 0.05, y + size * 0.15, x + size * 0.3, y + size * 0.22);
      ctx.stroke();
      // curl at end of middle line
      ctx.beginPath();
      ctx.arc(x + size * 0.45, y + size * 0.1, size * 0.06, -Math.PI / 2, Math.PI);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'tornado',
    name: 'סופה',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // funnel shape made of progressively narrower ellipses
      const levels = [
        { yOff: -0.35, w: 0.35, h: 0.08 },
        { yOff: -0.2, w: 0.3, h: 0.07 },
        { yOff: -0.05, w: 0.22, h: 0.06 },
        { yOff: 0.1, w: 0.15, h: 0.05 },
        { yOff: 0.25, w: 0.08, h: 0.04 },
        { yOff: 0.38, w: 0.04, h: 0.03 },
      ];
      for (const l of levels) {
        ctx.beginPath();
        ctx.ellipse(x, y + size * l.yOff, size * l.w, size * l.h, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    },
  },
  {
    id: 'sparkle',
    name: 'ניצוץ',
    category: 'elements',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // 4-pointed star sparkle
      ctx.beginPath();
      ctx.moveTo(x, y - size * 0.45);
      ctx.quadraticCurveTo(x + size * 0.06, y - size * 0.06, x + size * 0.45, y);
      ctx.quadraticCurveTo(x + size * 0.06, y + size * 0.06, x, y + size * 0.45);
      ctx.quadraticCurveTo(x - size * 0.06, y + size * 0.06, x - size * 0.45, y);
      ctx.quadraticCurveTo(x - size * 0.06, y - size * 0.06, x, y - size * 0.45);
      ctx.closePath();
      ctx.fill();
      // small secondary sparkle
      ctx.globalAlpha = 0.5;
      const sx = x + size * 0.25;
      const sy = y - size * 0.25;
      const ss = size * 0.3;
      ctx.beginPath();
      ctx.moveTo(sx, sy - ss * 0.4);
      ctx.quadraticCurveTo(sx + ss * 0.05, sy - ss * 0.05, sx + ss * 0.4, sy);
      ctx.quadraticCurveTo(sx + ss * 0.05, sy + ss * 0.05, sx, sy + ss * 0.4);
      ctx.quadraticCurveTo(sx - ss * 0.05, sy + ss * 0.05, sx - ss * 0.4, sy);
      ctx.quadraticCurveTo(sx - ss * 0.05, sy - ss * 0.05, sx, sy - ss * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
  },
];

// ─── FACES (8) ──────────────────────────────────────────────────────────────

const faces = [
  {
    id: 'happy',
    name: 'שמח',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face circle
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      // pupils
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.03, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.03, 0, Math.PI * 2);
      ctx.fill();
      // smile
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.02, size * 0.18, 0.15, Math.PI - 0.15);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'sad',
    name: 'עצוב',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.03, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.03, 0, Math.PI * 2);
      ctx.fill();
      // frown (upside down arc)
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.22, size * 0.14, Math.PI + 0.3, -0.3);
      ctx.stroke();
      // tear
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.ellipse(x - size * 0.2, y + size * 0.02, size * 0.03, size * 0.05, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
  },
  {
    id: 'surprised',
    name: 'מופתע',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // eyes (big circles)
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.08, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.1, size * 0.04, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.1, size * 0.04, 0, Math.PI * 2);
      ctx.fill();
      // O mouth
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.14, size * 0.08, 0, Math.PI * 2);
      ctx.stroke();
      // eyebrows raised
      ctx.beginPath();
      ctx.moveTo(x - size * 0.2, y - size * 0.22);
      ctx.lineTo(x - size * 0.08, y - size * 0.24);
      ctx.moveTo(x + size * 0.08, y - size * 0.24);
      ctx.lineTo(x + size * 0.2, y - size * 0.22);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'loveEyes',
    name: 'מאוהב',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // heart eyes
      const drawHeart = (hx, hy, hs) => {
        ctx.beginPath();
        ctx.moveTo(hx, hy + hs * 0.3);
        ctx.bezierCurveTo(hx - hs * 0.45, hy + hs * 0.05, hx - hs * 0.45, hy - hs * 0.25, hx, hy - hs * 0.05);
        ctx.bezierCurveTo(hx + hs * 0.45, hy - hs * 0.25, hx + hs * 0.45, hy + hs * 0.05, hx, hy + hs * 0.3);
        ctx.closePath();
        ctx.fill();
      };
      ctx.fillStyle = '#ff3366';
      drawHeart(x - size * 0.14, y - size * 0.1, size * 0.22);
      drawHeart(x + size * 0.14, y - size * 0.1, size * 0.22);
      // smile
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.05, size * 0.16, 0.2, Math.PI - 0.2);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'sleeping',
    name: 'ישן',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // closed eyes (arcs)
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.08, size * 0.07, 0, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.14, y - size * 0.08, size * 0.07, 0, Math.PI);
      ctx.stroke();
      // tiny mouth
      ctx.beginPath();
      ctx.ellipse(x, y + size * 0.14, size * 0.05, size * 0.03, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Z's
      ctx.fillStyle = color;
      ctx.font = `${size * 0.15}px sans-serif`;
      ctx.globalAlpha = 0.7;
      ctx.fillText('z', x + size * 0.25, y - size * 0.25);
      ctx.font = `${size * 0.2}px sans-serif`;
      ctx.fillText('Z', x + size * 0.35, y - size * 0.4);
      ctx.restore();
    },
  },
  {
    id: 'laughing',
    name: 'צוחק',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // squinted eyes (closed happy arcs)
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.08, size * 0.07, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + size * 0.14, y - size * 0.08, size * 0.07, Math.PI, 0);
      ctx.stroke();
      // big open mouth smile
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x, y + size * 0.08, size * 0.16, 0.1, Math.PI - 0.1);
      ctx.closePath();
      ctx.fill();
      // teeth hint
      ctx.fillStyle = '#fff';
      ctx.fillRect(x - size * 0.1, y + size * 0.08, size * 0.2, size * 0.05);
      ctx.restore();
    },
  },
  {
    id: 'angry',
    name: 'כועס',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // angry eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.06, size * 0.06, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.06, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x - size * 0.14, y - size * 0.06, size * 0.03, 0, Math.PI * 2);
      ctx.arc(x + size * 0.14, y - size * 0.06, size * 0.03, 0, Math.PI * 2);
      ctx.fill();
      // angry eyebrows (V shape)
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.04;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.22, y - size * 0.14);
      ctx.lineTo(x - size * 0.08, y - size * 0.2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + size * 0.22, y - size * 0.14);
      ctx.lineTo(x + size * 0.08, y - size * 0.2);
      ctx.stroke();
      // frown
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.arc(x, y + size * 0.24, size * 0.12, Math.PI + 0.4, -0.4);
      ctx.stroke();
      ctx.restore();
    },
  },
  {
    id: 'cool',
    name: 'מגניב',
    category: 'faces',
    draw: (ctx, x, y, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      // face
      ctx.beginPath();
      ctx.arc(x, y, size * 0.42, 0, Math.PI * 2);
      ctx.fill();
      // sunglasses
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 0.7;
      // left lens
      ctx.fillRect(x - size * 0.26, y - size * 0.18, size * 0.2, size * 0.14);
      // right lens
      ctx.fillRect(x + size * 0.06, y - size * 0.18, size * 0.2, size * 0.14);
      // bridge
      ctx.fillRect(x - size * 0.06, y - size * 0.14, size * 0.12, size * 0.04);
      // temples
      ctx.fillRect(x - size * 0.35, y - size * 0.14, size * 0.1, size * 0.04);
      ctx.fillRect(x + size * 0.25, y - size * 0.14, size * 0.1, size * 0.04);
      ctx.globalAlpha = 1;
      // smirk
      ctx.strokeStyle = '#000';
      ctx.lineWidth = size * 0.03;
      ctx.beginPath();
      ctx.moveTo(x - size * 0.12, y + size * 0.12);
      ctx.quadraticCurveTo(x + size * 0.05, y + size * 0.2, x + size * 0.18, y + size * 0.1);
      ctx.stroke();
      ctx.restore();
    },
  },
];

// ─── COMBINED EXPORTS ───────────────────────────────────────────────────────

export const STORY_SHAPES = [
  ...people,
  ...animals,
  ...nature,
  ...buildings,
  ...transport,
  ...food,
  ...objects,
  ...shapes,
  ...elements,
  ...faces,
];

export function getShapesByCategory(categoryId) {
  return STORY_SHAPES.filter((s) => s.category === categoryId);
}
