// Game: Learn the Number 9 (תשע)
// Category: Numbers 6-10 (numbers-67890)
// Type: Standard selection - introduction to the number 9
// Teaches children to recognize the number 9, its name, and counting

const learnNine = {
  id: 'learn-nine',
  categoryId: 'numbers-67890',
  name: '9',
  description: 'הכירו את המספר 9',
  icon: '9',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 9"
      {
        id: 'l9-e1',
        instruction: 'זה המספר 9. תֵּשַׁע',
        instructionAudio: '/audio/numbers/intro-9.mp3',
        questionImage: 'number-9',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 9, label: '9 כדורים', isCorrect: true, optionAudio: '/audio/numbers/nine-balls.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 9, label: '9 כדורים', isCorrect: true, optionAudio: '/audio/numbers/nine-balls.mp3' },
          { id: 'opt-3', image: 'ball-green', imageCount: 9, label: '9 כדורים', isCorrect: true, optionAudio: '/audio/numbers/nine-balls.mp3' },
        ],
      },
      // Question 2: Find the number 9 among other numbers
      {
        id: 'l9-e2',
        instruction: 'מצאו את המספר 9',
        instructionAudio: '/audio/numbers/find-9.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-7', label: '7' },
          { id: 'opt-4', image: 'number-8', label: '8' },
          { id: 'opt-5', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-6', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 3: Find the number 9 (different arrangement)
      {
        id: 'l9-e3',
        instruction: 'איפה המספר 9?',
        instructionAudio: '/audio/numbers/find-9.mp3',
        options: [
          { id: 'opt-1', image: 'number-7', label: '7' },
          { id: 'opt-2', image: 'number-8', label: '8' },
          { id: 'opt-3', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Find the number 9 again (different set)
      {
        id: 'l9-e4',
        instruction: 'מצאו את המספר 9',
        instructionAudio: '/audio/numbers/find-9.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-3', label: '3' },
          { id: 'opt-5', image: 'number-7', label: '7' },
          { id: 'opt-6', image: 'number-2', label: '2' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Find the number 6 (9-3=6)
      {
        id: 'l9-e5',
        instruction: 'איפה המספר 6?',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-8', label: '8' },
          { id: 'opt-2', image: 'number-10', label: '10' },
          { id: 'opt-3', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-4', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 9s
      {
        id: 'l9-e6',
        instruction: 'בחרו את כל המספרים 9',
        instructionAudio: '/audio/numbers/select-all-9.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-3', image: 'number-7', label: '7' },
          { id: 'opt-4', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-5', image: 'number-8', label: '8' },
          { id: 'opt-6', image: 'number-10', label: '10' },
          { id: 'opt-7', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-8', image: 'number-5', label: '5' },
          { id: 'opt-9', image: 'number-4', label: '4' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 8 (from previous game)
      {
        id: 'l9-e7',
        instruction: 'מצאו את המספר 8',
        instructionAudio: '/audio/numbers/find-8.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-3', image: 'number-9', label: '9' },
          { id: 'opt-4', image: 'number-7', label: '7' },
          { id: 'opt-5', image: 'number-10', label: '10' },
          { id: 'opt-6', image: 'number-5', label: '5' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Review - Find the number 7
      {
        id: 'l9-e8',
        instruction: 'איפה המספר 7?',
        instructionAudio: '/audio/numbers/find-7.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-8', label: '8' },
          { id: 'opt-3', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-4', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 9: Final - select all 7s, 8s, and 9s
      {
        id: 'l9-e9',
        instruction: 'בחרו את כל המספרים 7, 8 ו-9',
        instructionAudio: '/audio/numbers/select-all-7-8-9.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-2', image: 'number-10', label: '10' },
          { id: 'opt-3', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-4', image: 'number-6', label: '6' },
          { id: 'opt-5', image: 'number-9', label: '9', isCorrect: true },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-8', image: 'number-4', label: '4' },
          { id: 'opt-9', image: 'number-9', label: '9', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnNine;
