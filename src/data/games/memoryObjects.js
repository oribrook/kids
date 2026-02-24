// Game: Memory Card Game - Objects/Words (משחק זיכרון - מילים)
// Category: memory-objects
// Type: memoryCard - classic flip-and-match memory game with cute object images
// Player picks grid size (4x4 or 6x6), then flips cards to find matching pairs.
// Each card shows an object image with a small Hebrew letter badge.
// Each card flip plays the letter name audio.

export const objectItemPool = [
  // Animals (חיות)
  { id: 'arye', image: '/images/word-arye.png', label: 'אריה', letter: 'א', audio: '/audio/letters/he/alef.mp3' },
  { id: 'kelev', image: '/images/word-kelev.png', label: 'כלב', letter: 'כ', audio: '/audio/letters/he/kaf.mp3' },
  { id: 'chatul', image: '/images/word-chatul.png', label: 'חתול', letter: 'ח', audio: '/audio/letters/he/chet.mp3' },
  { id: 'sus', image: '/images/word-sus.png', label: 'סוס', letter: 'ס', audio: '/audio/letters/he/samech.mp3' },
  { id: 'dag', image: '/images/word-dag.png', label: 'דג', letter: 'ד', audio: '/audio/letters/he/dalet.mp3' },
  { id: 'dvora', image: '/images/word-dvora.png', label: 'דבורה', letter: 'ד', audio: '/audio/letters/he/dalet.mp3' },
  { id: 'gamal', image: '/images/word-gamal.png', label: 'גמל', letter: 'ג', audio: '/audio/letters/he/gimel.mp3' },
  { id: 'zebra', image: '/images/word-zebra.png', label: 'זברה', letter: 'ז', audio: '/audio/letters/he/zayin.mp3' },
  { id: 'pil', image: '/images/word-pil.png', label: 'פיל', letter: 'פ', audio: '/audio/letters/he/peh.mp3' },
  { id: 'parpar', image: '/images/word-parpar.png', label: 'פרפר', letter: 'פ', audio: '/audio/letters/he/peh.mp3' },
  { id: 'nachash', image: '/images/word-nachash.png', label: 'נחש', letter: 'נ', audio: '/audio/letters/he/nun.mp3' },
  { id: 'achbar', image: '/images/word-achbar.png', label: 'עכבר', letter: 'ע', audio: '/audio/letters/he/ayin.mp3' },
  { id: 'barvaz', image: '/images/word-barvaz.png', label: 'ברווז', letter: 'ב', audio: '/audio/letters/he/bet.mp3' },
  { id: 'namer', image: '/images/word-namer.png', label: 'נמר', letter: 'נ', audio: '/audio/letters/he/nun.mp3' },
  { id: 'para', image: '/images/word-para.png', label: 'פרה', letter: 'פ', audio: '/audio/letters/he/peh.mp3' },
  { id: 'zeev', image: '/images/word-zeev.png', label: 'זאב', letter: 'ז', audio: '/audio/letters/he/zayin.mp3' },
  { id: 'tigris', image: '/images/word-tigris.png', label: 'טיגריס', letter: 'ט', audio: '/audio/letters/he/tet.mp3' },
  { id: 'kof', image: '/images/word-kof.png', label: 'קוף', letter: 'ק', audio: '/audio/letters/he/kof.mp3' },
  { id: 'nemala', image: '/images/word-nemala.png', label: 'נמלה', letter: 'נ', audio: '/audio/letters/he/nun.mp3' },

  // Clothes & Shoes (בגדים ונעליים)
  { id: 'naal', image: '/images/word-naal.png', label: 'נעל', letter: 'נ', audio: '/audio/letters/he/nun.mp3' },
  { id: 'garbayim', image: '/images/word-garbayim.png', label: 'גרביים', letter: 'ג', audio: '/audio/letters/he/gimel.mp3' },
  { id: 'kova', image: '/images/word-kova.png', label: 'כובע', letter: 'כ', audio: '/audio/letters/he/kaf.mp3' },
  { id: 'sandal', image: '/images/word-sandal.png', label: 'סנדל', letter: 'ס', audio: '/audio/letters/he/samech.mp3' },

  // Food (אוכל)
  { id: 'banana', image: '/images/word-banana.png', label: 'בננה', letter: 'ב', audio: '/audio/letters/he/bet.mp3' },
  { id: 'gezer', image: '/images/word-gezer.png', label: 'גזר', letter: 'ג', audio: '/audio/letters/he/gimel.mp3' },
  { id: 'limon', image: '/images/word-limon.png', label: 'לימון', letter: 'ל', audio: '/audio/letters/he/lamed.mp3' },
  { id: 'avatiach', image: '/images/word-avatiach.png', label: 'אבטיח', letter: 'א', audio: '/audio/letters/he/alef.mp3' },
  { id: 'lechem', image: '/images/word-lechem.png', label: 'לחם', letter: 'ל', audio: '/audio/letters/he/lamed.mp3' },
  { id: 'uga', image: '/images/word-uga.png', label: 'עוגה', letter: 'ע', audio: '/audio/letters/he/ayin.mp3' },
  { id: 'dvash', image: '/images/word-dvash.png', label: 'דבש', letter: 'ד', audio: '/audio/letters/he/dalet.mp3' },
  { id: 'melafafon', image: '/images/word-melafafon.png', label: 'מלפפון', letter: 'מ', audio: '/audio/letters/he/mem.mp3' },
  { id: 'avokado', image: '/images/word-avokado.png', label: 'אבוקדו', letter: 'א', audio: '/audio/letters/he/alef.mp3' },

  // Objects (חפצים)
  { id: 'kadur', image: '/images/word-kadur.png', label: 'כדור', letter: 'כ', audio: '/audio/letters/he/kaf.mp3' },
  { id: 'sefer', image: '/images/word-sefer.png', label: 'ספר', letter: 'ס', audio: '/audio/letters/he/samech.mp3' },
  { id: 'kochav', image: '/images/word-kochav.png', label: 'כוכב', letter: 'כ', audio: '/audio/letters/he/kaf.mp3' },
  { id: 'balon', image: '/images/word-balon.png', label: 'בלון', letter: 'ב', audio: '/audio/letters/he/bet.mp3' },
  { id: 'ner', image: '/images/word-ner.png', label: 'נר', letter: 'נ', audio: '/audio/letters/he/nun.mp3' },
  { id: 'lev', image: '/images/word-lev.png', label: 'לב', letter: 'ל', audio: '/audio/letters/he/lamed.mp3' },
  { id: 'degel', image: '/images/word-degel.png', label: 'דגל', letter: 'ד', audio: '/audio/letters/he/dalet.mp3' },
  { id: 'tabaat', image: '/images/word-tabaat.png', label: 'טבעת', letter: 'ט', audio: '/audio/letters/he/tet.mp3' },
  { id: 'delet', image: '/images/word-delet.png', label: 'דלת', letter: 'ד', audio: '/audio/letters/he/dalet.mp3' },
  { id: 'har', image: '/images/word-har.png', label: 'הר', letter: 'ה', audio: '/audio/letters/he/he.mp3' },
  { id: 'etz', image: '/images/word-etz.png', label: 'עץ', letter: 'ע', audio: '/audio/letters/he/ayin.mp3' },
  { id: 'vered', image: '/images/word-vered.png', label: 'ורד', letter: 'ו', audio: '/audio/letters/he/vav.mp3' },
  { id: 'geshem', image: '/images/word-geshem.png', label: 'גשם', letter: 'ג', audio: '/audio/letters/he/gimel.mp3' },
];

const memoryObjects = {
  id: 'memory-objects',
  categoryId: 'memory-objects',
  name: 'זיכרון מילים',
  description: 'משחק זיכרון - מצאו זוגות של מילים חמודות',
  icon: '🎀',
  type: 'selection',
  gameType: 'memoryCard',
  availableIn: ['easy'],
  gridSizes: [
    { size: 16, label: '4\u00D74', pairs: 8 },
    { size: 36, label: '6\u00D76', pairs: 18 },
  ],
  itemPool: objectItemPool,
  questions: { easy: [] },
};

export default memoryObjects;
