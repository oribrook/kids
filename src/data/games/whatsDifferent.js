// Game: What's Different?
// Category: Logic
// Type: Standard selection - find the odd one out

const whatsDifferent = {
  id: 'whats-different',
  categoryId: 'logic',
  name: 'מה שונה?',
  description: 'מצאו את הפריט השונה מהאחרים',
  icon: '🔍',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy', 'medium', 'hard'],

  questions: {
    // Easy: 4 options, very obvious difference (different object)
    easy: [
      {
        id: 'wd-e1',
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
        id: 'wd-e2',
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
        id: 'wd-e3',
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
        id: 'wd-e4',
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
        id: 'wd-e5',
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

    // Medium: 5 options, subtle color differences
    medium: [
      {
        id: 'wd-m1',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-1.mp3',
        options: [
          { id: 'opt-1', image: 'apple-red', label: 'תפוח אדום' },
          { id: 'opt-2', image: 'apple-red', label: 'תפוח אדום' },
          { id: 'opt-3', image: 'apple-green', label: 'תפוח ירוק', isCorrect: true },
          { id: 'opt-4', image: 'apple-red', label: 'תפוח אדום' },
          { id: 'opt-5', image: 'apple-red', label: 'תפוח אדום' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'wd-m2',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-2.mp3',
        options: [
          { id: 'opt-1', image: 'cat', label: 'חתול' },
          { id: 'opt-2', image: 'dog', label: 'כלב', isCorrect: true },
          { id: 'opt-3', image: 'cat', label: 'חתול' },
          { id: 'opt-4', image: 'cat', label: 'חתול' },
          { id: 'opt-5', image: 'cat', label: 'חתול' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'wd-m3',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-3.mp3',
        options: [
          { id: 'opt-1', image: 'circle-red', label: 'עיגול אדום' },
          { id: 'opt-2', image: 'circle-red', label: 'עיגול אדום' },
          { id: 'opt-3', image: 'circle-red', label: 'עיגול אדום' },
          { id: 'opt-4', image: 'circle-blue', label: 'עיגול כחול', isCorrect: true },
          { id: 'opt-5', image: 'circle-red', label: 'עיגול אדום' },
        ],
        correctAnswerId: 'opt-4',
      },
      {
        id: 'wd-m4',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-4.mp3',
        options: [
          { id: 'opt-1', image: 'triangle-orange', label: 'משולש כתום' },
          { id: 'opt-2', image: 'triangle-orange', label: 'משולש כתום' },
          { id: 'opt-3', image: 'square-orange', label: 'ריבוע כתום', isCorrect: true },
          { id: 'opt-4', image: 'triangle-orange', label: 'משולש כתום' },
          { id: 'opt-5', image: 'triangle-orange', label: 'משולש כתום' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'wd-m5',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-5.mp3',
        options: [
          { id: 'opt-1', image: 'bird', label: 'ציפור' },
          { id: 'opt-2', image: 'bird', label: 'ציפור' },
          { id: 'opt-3', image: 'bird', label: 'ציפור' },
          { id: 'opt-4', image: 'bird', label: 'ציפור' },
          { id: 'opt-5', image: 'butterfly', label: 'פרפר', isCorrect: true },
        ],
        correctAnswerId: 'opt-5',
      },
    ],

    // Hard: 6 options, very subtle differences (size, orientation, shade)
    hard: [
      {
        id: 'wd-h1',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-1.mp3',
        options: [
          { id: 'opt-1', image: 'star-yellow', label: 'כוכב צהוב' },
          { id: 'opt-2', image: 'star-yellow', label: 'כוכב צהוב' },
          { id: 'opt-3', image: 'star-orange', label: 'כוכב כתום', isCorrect: true },
          { id: 'opt-4', image: 'star-yellow', label: 'כוכב צהוב' },
          { id: 'opt-5', image: 'star-yellow', label: 'כוכב צהוב' },
          { id: 'opt-6', image: 'star-yellow', label: 'כוכב צהוב' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'wd-h2',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-2.mp3',
        options: [
          { id: 'opt-1', image: 'ball-blue', label: 'כדור כחול' },
          { id: 'opt-2', image: 'ball-blue', label: 'כדור כחול' },
          { id: 'opt-3', image: 'ball-blue', label: 'כדור כחול' },
          { id: 'opt-4', image: 'ball-lightblue', label: 'כדור תכלת', isCorrect: true },
          { id: 'opt-5', image: 'ball-blue', label: 'כדור כחול' },
          { id: 'opt-6', image: 'ball-blue', label: 'כדור כחול' },
        ],
        correctAnswerId: 'opt-4',
      },
      {
        id: 'wd-h3',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-3.mp3',
        options: [
          { id: 'opt-1', image: 'flower-pink', label: 'פרח ורוד' },
          { id: 'opt-2', image: 'flower-red', label: 'פרח אדום', isCorrect: true },
          { id: 'opt-3', image: 'flower-pink', label: 'פרח ורוד' },
          { id: 'opt-4', image: 'flower-pink', label: 'פרח ורוד' },
          { id: 'opt-5', image: 'flower-pink', label: 'פרח ורוד' },
          { id: 'opt-6', image: 'flower-pink', label: 'פרח ורוד' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'wd-h4',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-4.mp3',
        options: [
          { id: 'opt-1', image: 'heart-red', label: 'לב אדום' },
          { id: 'opt-2', image: 'heart-red', label: 'לב אדום' },
          { id: 'opt-3', image: 'heart-red', label: 'לב אדום' },
          { id: 'opt-4', image: 'heart-red', label: 'לב אדום' },
          { id: 'opt-5', image: 'heart-pink', label: 'לב ורוד', isCorrect: true },
          { id: 'opt-6', image: 'heart-red', label: 'לב אדום' },
        ],
        correctAnswerId: 'opt-5',
      },
      {
        id: 'wd-h5',
        instruction: 'מה שונה מהאחרים?',
        instructionAudio: '/audio/whats-different-5.mp3',
        options: [
          { id: 'opt-1', image: 'square-green', label: 'ריבוע ירוק' },
          { id: 'opt-2', image: 'square-green', label: 'ריבוע ירוק' },
          { id: 'opt-3', image: 'square-green', label: 'ריבוע ירוק' },
          { id: 'opt-4', image: 'square-green', label: 'ריבוע ירוק' },
          { id: 'opt-5', image: 'square-green', label: 'ריבוע ירוק' },
          { id: 'opt-6', image: 'rectangle-green', label: 'מלבן ירוק', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
    ],
  },
};

export default whatsDifferent;
