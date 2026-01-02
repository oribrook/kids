// Game: Match the Pairs
// Category: Logic
// Type: Standard selection - find what goes together

const matchPairs = {
  id: 'match-pairs',
  categoryId: 'logic',
  name: 'התאימו זוגות',
  description: 'מצאו מה הולך ביחד',
  icon: '🧩',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy', 'medium', 'hard'],

  questions: {
    // Easy: 4 options, obvious pairs
    easy: [
      {
        id: 'mp-e1',
        instruction: '🐕 הכלב אוהב לאכול...',
        instructionAudio: '/audio/match-dog.mp3',
        options: [
          { id: 'opt-1', image: 'bone', label: 'עצם', isCorrect: true },
          { id: 'opt-2', image: 'carrot', label: 'גזר' },
          { id: 'opt-3', image: 'cheese', label: 'גבינה' },
          { id: 'opt-4', image: 'fish-food', label: 'דג' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'mp-e2',
        instruction: '🐦 הציפור גרה ב...',
        instructionAudio: '/audio/match-bird.mp3',
        options: [
          { id: 'opt-1', image: 'doghouse', label: 'מלונה' },
          { id: 'opt-2', image: 'nest', label: 'קן', isCorrect: true },
          { id: 'opt-3', image: 'fishbowl', label: 'אקווריום' },
          { id: 'opt-4', image: 'cave', label: 'מערה' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-e3',
        instruction: '🐟 הדג חי ב...',
        instructionAudio: '/audio/match-fish.mp3',
        options: [
          { id: 'opt-1', image: 'tree', label: 'עץ' },
          { id: 'opt-2', image: 'house', label: 'בית' },
          { id: 'opt-3', image: 'water', label: 'מים', isCorrect: true },
          { id: 'opt-4', image: 'cloud', label: 'ענן' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mp-e4',
        instruction: '🐰 הארנב אוהב לאכול...',
        instructionAudio: '/audio/match-rabbit.mp3',
        options: [
          { id: 'opt-1', image: 'bone', label: 'עצם' },
          { id: 'opt-2', image: 'carrot', label: 'גזר', isCorrect: true },
          { id: 'opt-3', image: 'cheese', label: 'גבינה' },
          { id: 'opt-4', image: 'banana', label: 'בננה' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-e5',
        instruction: '🐭 העכבר אוהב לאכול...',
        instructionAudio: '/audio/match-mouse.mp3',
        options: [
          { id: 'opt-1', image: 'bone', label: 'עצם' },
          { id: 'opt-2', image: 'carrot', label: 'גזר' },
          { id: 'opt-3', image: 'cheese', label: 'גבינה', isCorrect: true },
          { id: 'opt-4', image: 'apple-red', label: 'תפוח' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],

    // Medium: 5 options, less obvious pairs
    medium: [
      {
        id: 'mp-m1',
        instruction: '🐝 הדבורה אוספת...',
        instructionAudio: '/audio/match-bee.mp3',
        options: [
          { id: 'opt-1', image: 'honey', label: 'דבש', isCorrect: true },
          { id: 'opt-2', image: 'carrot', label: 'גזר' },
          { id: 'opt-3', image: 'cheese', label: 'גבינה' },
          { id: 'opt-4', image: 'water', label: 'מים' },
          { id: 'opt-5', image: 'apple-red', label: 'תפוח' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'mp-m2',
        instruction: '🦁 האריה חי ב...',
        instructionAudio: '/audio/match-lion.mp3',
        options: [
          { id: 'opt-1', image: 'water', label: 'מים' },
          { id: 'opt-2', image: 'nest', label: 'קן' },
          { id: 'opt-3', image: 'savanna', label: 'סוואנה', isCorrect: true },
          { id: 'opt-4', image: 'house', label: 'בית' },
          { id: 'opt-5', image: 'cave', label: 'מערה' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mp-m3',
        instruction: '🐘 הפיל שותה מ...',
        instructionAudio: '/audio/match-elephant.mp3',
        options: [
          { id: 'opt-1', image: 'bottle', label: 'בקבוק' },
          { id: 'opt-2', image: 'river', label: 'נהר', isCorrect: true },
          { id: 'opt-3', image: 'cup', label: 'כוס' },
          { id: 'opt-4', image: 'pool', label: 'בריכה' },
          { id: 'opt-5', image: 'fountain', label: 'מזרקה' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-m4',
        instruction: '🦋 הפרפר שותה מ...',
        instructionAudio: '/audio/match-butterfly.mp3',
        options: [
          { id: 'opt-1', image: 'water', label: 'מים' },
          { id: 'opt-2', image: 'flower', label: 'פרח', isCorrect: true },
          { id: 'opt-3', image: 'tree', label: 'עץ' },
          { id: 'opt-4', image: 'honey', label: 'דבש' },
          { id: 'opt-5', image: 'fruit', label: 'פרי' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-m5',
        instruction: '🐢 הצב נושא על הגב...',
        instructionAudio: '/audio/match-turtle.mp3',
        options: [
          { id: 'opt-1', image: 'bag', label: 'תיק' },
          { id: 'opt-2', image: 'shell', label: 'שריון', isCorrect: true },
          { id: 'opt-3', image: 'hat', label: 'כובע' },
          { id: 'opt-4', image: 'stone', label: 'אבן' },
          { id: 'opt-5', image: 'leaf', label: 'עלה' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],

    // Hard: 6 options, requires more thinking
    hard: [
      {
        id: 'mp-h1',
        instruction: '👨‍🍳 השף משתמש ב...',
        instructionAudio: '/audio/match-chef.mp3',
        options: [
          { id: 'opt-1', image: 'hammer', label: 'פטיש' },
          { id: 'opt-2', image: 'knife', label: 'סכין', isCorrect: true },
          { id: 'opt-3', image: 'brush', label: 'מברשת' },
          { id: 'opt-4', image: 'pen', label: 'עט' },
          { id: 'opt-5', image: 'scissors', label: 'מספריים' },
          { id: 'opt-6', image: 'ruler', label: 'סרגל' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-h2',
        instruction: '🧑‍🎨 הצייר משתמש ב...',
        instructionAudio: '/audio/match-painter.mp3',
        options: [
          { id: 'opt-1', image: 'hammer', label: 'פטיש' },
          { id: 'opt-2', image: 'knife', label: 'סכין' },
          { id: 'opt-3', image: 'brush', label: 'מברשת', isCorrect: true },
          { id: 'opt-4', image: 'pen', label: 'עט' },
          { id: 'opt-5', image: 'scissors', label: 'מספריים' },
          { id: 'opt-6', image: 'spoon', label: 'כף' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mp-h3',
        instruction: '🌻 החמנייה צומחת לכיוון...',
        instructionAudio: '/audio/match-sunflower.mp3',
        options: [
          { id: 'opt-1', image: 'moon', label: 'ירח' },
          { id: 'opt-2', image: 'sun', label: 'שמש', isCorrect: true },
          { id: 'opt-3', image: 'cloud', label: 'ענן' },
          { id: 'opt-4', image: 'star', label: 'כוכב' },
          { id: 'opt-5', image: 'rain', label: 'גשם' },
          { id: 'opt-6', image: 'wind', label: 'רוח' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mp-h4',
        instruction: '🦉 הינשוף יוצא בלילה לחפש...',
        instructionAudio: '/audio/match-owl.mp3',
        options: [
          { id: 'opt-1', image: 'carrot', label: 'גזר' },
          { id: 'opt-2', image: 'cheese', label: 'גבינה' },
          { id: 'opt-3', image: 'mouse', label: 'עכבר', isCorrect: true },
          { id: 'opt-4', image: 'banana', label: 'בננה' },
          { id: 'opt-5', image: 'apple-red', label: 'תפוח' },
          { id: 'opt-6', image: 'bread', label: 'לחם' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mp-h5',
        instruction: '🌧️ אחרי הגשם מופיע...',
        instructionAudio: '/audio/match-rain.mp3',
        options: [
          { id: 'opt-1', image: 'sun', label: 'שמש' },
          { id: 'opt-2', image: 'rainbow', label: 'קשת', isCorrect: true },
          { id: 'opt-3', image: 'cloud', label: 'ענן' },
          { id: 'opt-4', image: 'snow', label: 'שלג' },
          { id: 'opt-5', image: 'moon', label: 'ירח' },
          { id: 'opt-6', image: 'star', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default matchPairs;
