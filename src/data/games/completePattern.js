// Game: Complete the Pattern
// Category: Logic
// Type: Standard selection - find what comes next in the pattern

const completePattern = {
  id: 'complete-pattern',
  categoryId: 'logic',
  name: 'השלימו את הדפוס',
  description: 'מצאו מה בא אחרי בסדרה',
  icon: '🔢',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy', 'medium', 'hard'],

  questions: {
    // Easy: Simple AB patterns
    easy: [
      {
        id: 'cp-e1',
        instruction: '🔴 🔵 🔴 🔵 🔴 ❓',
        instructionAudio: '/audio/pattern-1.mp3',
        options: [
          { id: 'opt-1', image: 'circle-red', label: 'עיגול אדום' },
          { id: 'opt-2', image: 'circle-blue', label: 'עיגול כחול', isCorrect: true },
          { id: 'opt-3', image: 'circle-green', label: 'עיגול ירוק' },
          { id: 'opt-4', image: 'circle-yellow', label: 'עיגול צהוב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-e2',
        instruction: '⭐ ⭐ ❤️ ⭐ ⭐ ❓',
        instructionAudio: '/audio/pattern-2.mp3',
        options: [
          { id: 'opt-1', image: 'star-yellow', label: 'כוכב' },
          { id: 'opt-2', image: 'circle-blue', label: 'עיגול' },
          { id: 'opt-3', image: 'heart-red', label: 'לב', isCorrect: true },
          { id: 'opt-4', image: 'square-green', label: 'ריבוע' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'cp-e3',
        instruction: '🟢 🟡 🟢 🟡 🟢 ❓',
        instructionAudio: '/audio/pattern-3.mp3',
        options: [
          { id: 'opt-1', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-2', image: 'circle-yellow', label: 'צהוב', isCorrect: true },
          { id: 'opt-3', image: 'circle-red', label: 'אדום' },
          { id: 'opt-4', image: 'circle-blue', label: 'כחול' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-e4',
        instruction: '🔺 🔺 🔺 ⬛ 🔺 🔺 🔺 ❓',
        instructionAudio: '/audio/pattern-4.mp3',
        options: [
          { id: 'opt-1', image: 'triangle-orange', label: 'משולש' },
          { id: 'opt-2', image: 'circle-blue', label: 'עיגול' },
          { id: 'opt-3', image: 'square-black', label: 'ריבוע', isCorrect: true },
          { id: 'opt-4', image: 'star-yellow', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'cp-e5',
        instruction: '🔵 🔵 🔴 🔵 🔵 ❓',
        instructionAudio: '/audio/pattern-5.mp3',
        options: [
          { id: 'opt-1', image: 'circle-blue', label: 'כחול' },
          { id: 'opt-2', image: 'circle-red', label: 'אדום', isCorrect: true },
          { id: 'opt-3', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],

    // Medium: AAB, ABB, ABC patterns
    medium: [
      {
        id: 'cp-m1',
        instruction: '🔴 🔴 🔵 🔴 🔴 ❓',
        instructionAudio: '/audio/pattern-1.mp3',
        options: [
          { id: 'opt-1', image: 'circle-red', label: 'אדום' },
          { id: 'opt-2', image: 'circle-blue', label: 'כחול', isCorrect: true },
          { id: 'opt-3', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-5', image: 'circle-purple', label: 'סגול' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-m2',
        instruction: '🟢 🟡 🔴 🟢 🟡 ❓',
        instructionAudio: '/audio/pattern-2.mp3',
        options: [
          { id: 'opt-1', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-2', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-3', image: 'circle-red', label: 'אדום', isCorrect: true },
          { id: 'opt-4', image: 'circle-blue', label: 'כחול' },
          { id: 'opt-5', image: 'circle-orange', label: 'כתום' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'cp-m3',
        instruction: '⭐ ❤️ ❤️ ⭐ ❤️ ❓',
        instructionAudio: '/audio/pattern-3.mp3',
        options: [
          { id: 'opt-1', image: 'star-yellow', label: 'כוכב' },
          { id: 'opt-2', image: 'heart-red', label: 'לב', isCorrect: true },
          { id: 'opt-3', image: 'circle-blue', label: 'עיגול' },
          { id: 'opt-4', image: 'square-green', label: 'ריבוע' },
          { id: 'opt-5', image: 'triangle-orange', label: 'משולש' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-m4',
        instruction: '🔵 🔵 🟢 🟢 🔵 🔵 ❓',
        instructionAudio: '/audio/pattern-4.mp3',
        options: [
          { id: 'opt-1', image: 'circle-blue', label: 'כחול' },
          { id: 'opt-2', image: 'circle-green', label: 'ירוק', isCorrect: true },
          { id: 'opt-3', image: 'circle-red', label: 'אדום' },
          { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-5', image: 'circle-purple', label: 'סגול' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-m5',
        instruction: '🔺 ⬛ 🔵 🔺 ⬛ ❓',
        instructionAudio: '/audio/pattern-5.mp3',
        options: [
          { id: 'opt-1', image: 'triangle-orange', label: 'משולש' },
          { id: 'opt-2', image: 'square-black', label: 'ריבוע' },
          { id: 'opt-3', image: 'circle-blue', label: 'עיגול', isCorrect: true },
          { id: 'opt-4', image: 'star-yellow', label: 'כוכב' },
          { id: 'opt-5', image: 'heart-red', label: 'לב' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],

    // Hard: Complex patterns (ABBA, ABCD, increasing/decreasing)
    hard: [
      {
        id: 'cp-h1',
        instruction: '🔴 🔵 🔵 🔴 🔴 🔵 ❓',
        instructionAudio: '/audio/pattern-1.mp3',
        options: [
          { id: 'opt-1', image: 'circle-red', label: 'אדום' },
          { id: 'opt-2', image: 'circle-blue', label: 'כחול', isCorrect: true },
          { id: 'opt-3', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-5', image: 'circle-purple', label: 'סגול' },
          { id: 'opt-6', image: 'circle-orange', label: 'כתום' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-h2',
        instruction: '🟢 🟡 🔴 🔵 🟢 🟡 🔴 ❓',
        instructionAudio: '/audio/pattern-2.mp3',
        options: [
          { id: 'opt-1', image: 'circle-green', label: 'ירוק' },
          { id: 'opt-2', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-3', image: 'circle-red', label: 'אדום' },
          { id: 'opt-4', image: 'circle-blue', label: 'כחול', isCorrect: true },
          { id: 'opt-5', image: 'circle-orange', label: 'כתום' },
          { id: 'opt-6', image: 'circle-purple', label: 'סגול' },
        ],
        correctAnswerId: 'opt-4',
      },
      {
        id: 'cp-h3',
        instruction: '⭐ ⭐ ❤️ ❤️ ❤️ ⭐ ⭐ ❓',
        instructionAudio: '/audio/pattern-3.mp3',
        options: [
          { id: 'opt-1', image: 'star-yellow', label: 'כוכב' },
          { id: 'opt-2', image: 'heart-red', label: 'לב', isCorrect: true },
          { id: 'opt-3', image: 'circle-blue', label: 'עיגול' },
          { id: 'opt-4', image: 'square-green', label: 'ריבוע' },
          { id: 'opt-5', image: 'triangle-orange', label: 'משולש' },
          { id: 'opt-6', image: 'diamond-purple', label: 'יהלום' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'cp-h4',
        instruction: '🔺 ⬛ ⬛ 🔺 ⬛ ⬛ ⬛ ❓',
        instructionAudio: '/audio/pattern-4.mp3',
        options: [
          { id: 'opt-1', image: 'triangle-orange', label: 'משולש', isCorrect: true },
          { id: 'opt-2', image: 'square-black', label: 'ריבוע' },
          { id: 'opt-3', image: 'circle-blue', label: 'עיגול' },
          { id: 'opt-4', image: 'star-yellow', label: 'כוכב' },
          { id: 'opt-5', image: 'heart-red', label: 'לב' },
          { id: 'opt-6', image: 'diamond-purple', label: 'יהלום' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'cp-h5',
        instruction: '🔵 🟢 🔵 🔵 🟢 🔵 🔵 🔵 ❓',
        instructionAudio: '/audio/pattern-5.mp3',
        options: [
          { id: 'opt-1', image: 'circle-blue', label: 'כחול' },
          { id: 'opt-2', image: 'circle-green', label: 'ירוק', isCorrect: true },
          { id: 'opt-3', image: 'circle-red', label: 'אדום' },
          { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
          { id: 'opt-5', image: 'circle-purple', label: 'סגול' },
          { id: 'opt-6', image: 'circle-orange', label: 'כתום' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default completePattern;
