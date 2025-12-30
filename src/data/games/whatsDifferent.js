// Game: What's Different?
// Category: Logic
// Type: Selection - find the odd one out

const whatsDifferent = {
  id: 'whats-different',
  categoryId: 'logic',
  name: 'מה שונה?',
  description: 'מצאו את הפריט השונה מהאחרים',
  icon: '🔍',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'wd-1',
      instruction: 'מה שונה מהאחרים?',
      instructionAudio: '/audio/whats-different-1.mp3',
      options: [
        { id: 'opt-1', image: 'apple-red', label: 'תפוח אדום' },
        { id: 'opt-2', image: 'apple-red', label: 'תפוח אדום' },
        { id: 'opt-3', image: 'banana', label: 'בננה', isCorrect: true },
        { id: 'opt-4', image: 'apple-red', label: 'תפוח אדום' },
      ],
      correctAnswerId: 'opt-3',
    },
    {
      id: 'wd-2',
      instruction: 'מה שונה מהאחרים?',
      instructionAudio: '/audio/whats-different-2.mp3',
      options: [
        { id: 'opt-1', image: 'ball-blue', label: 'כדור כחול' },
        { id: 'opt-2', image: 'ball-blue', label: 'כדור כחול' },
        { id: 'opt-3', image: 'ball-blue', label: 'כדור כחול' },
        { id: 'opt-4', image: 'ball-red', label: 'כדור אדום', isCorrect: true },
      ],
      correctAnswerId: 'opt-4',
    },
    {
      id: 'wd-3',
      instruction: 'מה שונה מהאחרים?',
      instructionAudio: '/audio/whats-different-3.mp3',
      options: [
        { id: 'opt-1', image: 'flower-yellow', label: 'פרח צהוב', isCorrect: true },
        { id: 'opt-2', image: 'flower-pink', label: 'פרח ורוד' },
        { id: 'opt-3', image: 'flower-pink', label: 'פרח ורוד' },
        { id: 'opt-4', image: 'flower-pink', label: 'פרח ורוד' },
      ],
      correctAnswerId: 'opt-1',
    },
    {
      id: 'wd-4',
      instruction: 'מה שונה מהאחרים?',
      instructionAudio: '/audio/whats-different-4.mp3',
      options: [
        { id: 'opt-1', image: 'star-yellow', label: 'כוכב' },
        { id: 'opt-2', image: 'heart-red', label: 'לב', isCorrect: true },
        { id: 'opt-3', image: 'star-yellow', label: 'כוכב' },
        { id: 'opt-4', image: 'star-yellow', label: 'כוכב' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'wd-5',
      instruction: 'מה שונה מהאחרים?',
      instructionAudio: '/audio/whats-different-5.mp3',
      options: [
        { id: 'opt-1', image: 'circle-blue', label: 'עיגול' },
        { id: 'opt-2', image: 'circle-blue', label: 'עיגול' },
        { id: 'opt-3', image: 'square-blue', label: 'ריבוע', isCorrect: true },
        { id: 'opt-4', image: 'circle-blue', label: 'עיגול' },
      ],
      correctAnswerId: 'opt-3',
    },
  ],
};

export default whatsDifferent;
