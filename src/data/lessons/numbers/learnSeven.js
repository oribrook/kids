// Game: Learn the Number 7 (שבע)
// Category: Numbers 6-10 (numbers-67890)
// Type: Standard selection - introduction to the number 7
// Teaches children to recognize the number 7, its name, and counting

const learnSeven = {
  id: 'learn-seven',
  categoryId: 'numbers-67890',
  name: '7',
  description: 'הכירו את המספר 7',
  icon: '7',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 7"
      {
        id: 'l7-e1',
        instruction: 'זה המספר 7. שֶׁבַע',
        instructionAudio: '/audio/numbers/intro-7.mp3',
        questionImage: 'number-7',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 7, label: '7 כדורים', isCorrect: true, optionAudio: '/audio/numbers/seven-balls.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 7, label: '7 כדורים', isCorrect: true, optionAudio: '/audio/numbers/seven-balls.mp3' },
          { id: 'opt-3', image: 'ball-green', imageCount: 7, label: '7 כדורים', isCorrect: true, optionAudio: '/audio/numbers/seven-balls.mp3' },
        ],
      },
      // Question 2: Find the number 7 among other numbers
      {
        id: 'l7-e2',
        instruction: 'מצאו את המספר 7',
        instructionAudio: '/audio/numbers/find-7.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-6', label: '6' },
          { id: 'opt-4', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-5', image: 'number-8', label: '8' },
          { id: 'opt-6', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 3: Find the number 7 (different arrangement)
      {
        id: 'l7-e3',
        instruction: 'איפה המספר 7?',
        instructionAudio: '/audio/numbers/find-7.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-4', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Find the number 7 again (different set)
      {
        id: 'l7-e4',
        instruction: 'מצאו את המספר 7',
        instructionAudio: '/audio/numbers/find-7.mp3',
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-9', label: '9' },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-1', label: '1' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Find the number 4 (7-3=4)
      {
        id: 'l7-e5',
        instruction: 'איפה המספר 4?',
        instructionAudio: '/audio/numbers/find-4.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-8', label: '8' },
          { id: 'opt-3', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-4', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 7s
      {
        id: 'l7-e6',
        instruction: 'בחרו את כל המספרים 7',
        instructionAudio: '/audio/numbers/select-all-7.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-8', label: '8' },
          { id: 'opt-7', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-8', image: 'number-9', label: '9' },
          { id: 'opt-9', image: 'number-3', label: '3' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 6 (from previous game)
      {
        id: 'l7-e7',
        instruction: 'מצאו את המספר 6',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-3', image: 'number-7', label: '7' },
          { id: 'opt-4', image: 'number-5', label: '5' },
          { id: 'opt-5', image: 'number-8', label: '8' },
          { id: 'opt-6', image: 'number-3', label: '3' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Review - Find the number 5
      {
        id: 'l7-e8',
        instruction: 'איפה המספר 5?',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-4', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 9: Final - select all 5s, 6s, and 7s
      {
        id: 'l7-e9',
        instruction: 'בחרו את כל המספרים 5, 6 ו-7',
        instructionAudio: '/audio/numbers/select-all-5-6-7.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-2', image: 'number-8', label: '8' },
          { id: 'opt-3', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-6', image: 'number-9', label: '9' },
          { id: 'opt-7', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-8', image: 'number-3', label: '3' },
          { id: 'opt-9', image: 'number-7', label: '7', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnSeven;
