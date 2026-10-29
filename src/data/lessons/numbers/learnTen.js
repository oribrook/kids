// Game: Learn the Number 10 (עשר)
// Category: Numbers 6-10 (numbers-67890)
// Type: Standard selection - introduction to the number 10
// Teaches children to recognize the number 10, its name, and counting

const learnTen = {
  id: 'learn-ten',
  categoryId: 'numbers-67890',
  name: '10',
  description: 'הכירו את המספר 10',
  icon: '10',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 10"
      {
        id: 'l10-e1',
        instruction: 'זה המספר 10. עֶשֶׂר',
        instructionAudio: '/audio/numbers/intro-10.mp3',
        questionImage: 'number-10',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 10, label: '10 כדורים', isCorrect: true, optionAudio: '/audio/numbers/ten-balls.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 10, label: '10 כדורים', isCorrect: true, optionAudio: '/audio/numbers/ten-balls.mp3' },
          { id: 'opt-3', image: 'ball-green', imageCount: 10, label: '10 כדורים', isCorrect: true, optionAudio: '/audio/numbers/ten-balls.mp3' },
        ],
      },
      // Question 2: Find the number 10 among other numbers
      {
        id: 'l10-e2',
        instruction: 'מצאו את המספר 10',
        instructionAudio: '/audio/numbers/find-10.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-7', label: '7' },
          { id: 'opt-3', image: 'number-8', label: '8' },
          { id: 'opt-4', image: 'number-9', label: '9' },
          { id: 'opt-5', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-6', image: 'number-5', label: '5' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 3: Find the number 10 (different arrangement)
      {
        id: 'l10-e3',
        instruction: 'איפה המספר 10?',
        instructionAudio: '/audio/numbers/find-10.mp3',
        options: [
          { id: 'opt-1', image: 'number-8', label: '8' },
          { id: 'opt-2', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-3', image: 'number-9', label: '9' },
          { id: 'opt-4', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Find the number 10 again (different set)
      {
        id: 'l10-e4',
        instruction: 'מצאו את המספר 10',
        instructionAudio: '/audio/numbers/find-10.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-4', image: 'number-8', label: '8' },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-1', label: '1' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 5: Review - Find the number 8
      {
        id: 'l10-e5',
        instruction: 'איפה המספר 8?',
        instructionAudio: '/audio/numbers/find-8.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-10', label: '10' },
          { id: 'opt-3', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-4', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 10s
      {
        id: 'l10-e6',
        instruction: 'בחרו את כל המספרים 10',
        instructionAudio: '/audio/numbers/select-all-10.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-7', label: '7' },
          { id: 'opt-2', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-3', image: 'number-8', label: '8' },
          { id: 'opt-4', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-5', image: 'number-9', label: '9' },
          { id: 'opt-6', image: 'number-6', label: '6' },
          { id: 'opt-7', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-8', image: 'number-5', label: '5' },
          { id: 'opt-9', image: 'number-4', label: '4' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 9
      {
        id: 'l10-e7',
        instruction: 'מצאו את המספר 9',
        instructionAudio: '/audio/numbers/find-9.mp3',
        options: [
          { id: 'opt-1', image: 'number-7', label: '7' },
          { id: 'opt-2', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-3', image: 'number-10', label: '10' },
          { id: 'opt-4', image: 'number-8', label: '8' },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-5', label: '5' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Final - select all 8s, 9s, and 10s
      {
        id: 'l10-e8',
        instruction: 'בחרו את כל המספרים 8, 9 ו-10',
        instructionAudio: '/audio/numbers/select-all-8-9-10.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-4', image: 'number-7', label: '7' },
          { id: 'opt-5', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-8', image: 'number-4', label: '4' },
          { id: 'opt-9', image: 'number-10', label: '10', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnTen;
