// Game: Speed Count
// Category: Numbers
// Type: Timed - count quickly before time runs out
// Only available in hard difficulty

const speedCount = {
  id: 'speed-count',
  categoryId: 'numbers',
  name: 'ספירה מהירה',
  description: 'ספרו מהר לפני שנגמר הזמן!',
  icon: '⏱️',
  type: 'counting',
  gameType: 'timed',
  timeLimit: 8, // seconds per question
  availableIn: ['hard'],

  questions: {
    hard: [
      {
        id: 'sc-h1',
        instruction: 'כמה כוכבים יש?',
        instructionAudio: '/audio/count-stars.mp3',
        display: '⭐⭐⭐⭐⭐⭐⭐',
        correctAnswer: 7,
        options: [
          { id: 'opt-1', value: 5, display: '5' },
          { id: 'opt-2', value: 6, display: '6' },
          { id: 'opt-3', value: 7, display: '7', isCorrect: true },
          { id: 'opt-4', value: 8, display: '8' },
          { id: 'opt-5', value: 9, display: '9' },
          { id: 'opt-6', value: 10, display: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'sc-h2',
        instruction: 'כמה לבבות יש?',
        instructionAudio: '/audio/count-hearts.mp3',
        display: '❤️❤️❤️❤️❤️❤️❤️❤️❤️',
        correctAnswer: 9,
        options: [
          { id: 'opt-1', value: 7, display: '7' },
          { id: 'opt-2', value: 8, display: '8' },
          { id: 'opt-3', value: 9, display: '9', isCorrect: true },
          { id: 'opt-4', value: 10, display: '10' },
          { id: 'opt-5', value: 11, display: '11' },
          { id: 'opt-6', value: 12, display: '12' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'sc-h3',
        instruction: 'כמה פרחים יש?',
        instructionAudio: '/audio/count-flowers.mp3',
        display: '🌸🌸🌸🌸🌸🌸🌸🌸',
        correctAnswer: 8,
        options: [
          { id: 'opt-1', value: 6, display: '6' },
          { id: 'opt-2', value: 7, display: '7' },
          { id: 'opt-3', value: 8, display: '8', isCorrect: true },
          { id: 'opt-4', value: 9, display: '9' },
          { id: 'opt-5', value: 10, display: '10' },
          { id: 'opt-6', value: 11, display: '11' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'sc-h4',
        instruction: 'כמה תפוחים יש?',
        instructionAudio: '/audio/count-apples.mp3',
        display: '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎',
        correctAnswer: 11,
        options: [
          { id: 'opt-1', value: 9, display: '9' },
          { id: 'opt-2', value: 10, display: '10' },
          { id: 'opt-3', value: 11, display: '11', isCorrect: true },
          { id: 'opt-4', value: 12, display: '12' },
          { id: 'opt-5', value: 13, display: '13' },
          { id: 'opt-6', value: 14, display: '14' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'sc-h5',
        instruction: 'כמה כדורים יש?',
        instructionAudio: '/audio/count-balls.mp3',
        display: '⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽⚽',
        correctAnswer: 12,
        options: [
          { id: 'opt-1', value: 10, display: '10' },
          { id: 'opt-2', value: 11, display: '11' },
          { id: 'opt-3', value: 12, display: '12', isCorrect: true },
          { id: 'opt-4', value: 13, display: '13' },
          { id: 'opt-5', value: 14, display: '14' },
          { id: 'opt-6', value: 15, display: '15' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],
  },
};

export default speedCount;
