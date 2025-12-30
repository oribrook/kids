// Game: Match the Pairs
// Category: Logic
// Type: Selection - find what goes together

const matchPairs = {
  id: 'match-pairs',
  categoryId: 'logic',
  name: 'התאימו זוגות',
  description: 'מצאו מה הולך ביחד',
  icon: '🧩',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'mp-1',
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
      id: 'mp-2',
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
      id: 'mp-3',
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
      id: 'mp-4',
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
      id: 'mp-5',
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
};

export default matchPairs;
