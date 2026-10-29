// Game: Learn the Number 6 (שש)
// Category: Numbers 6-10 (numbers-67890)
// Type: Standard selection - introduction to the number 6
// Teaches children to recognize the number 6, its name, and counting

const learnSix = {
  id: 'learn-six',
  categoryId: 'numbers-67890',
  name: '6',
  description: 'הכירו את המספר 6',
  icon: '6',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 6"
      {
        id: 'l6-e1',
        instruction: 'זה המספר 6. שֵׁשׁ',
        instructionAudio: '/audio/numbers/intro-6.mp3',
        questionImage: 'number-6',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 6, label: '6 כדורים', isCorrect: true, optionAudio: '/audio/numbers/six-balls.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 6, label: '6 כדורים', isCorrect: true, optionAudio: '/audio/numbers/six-balls.mp3' },
          { id: 'opt-3', image: 'ball-green', imageCount: 6, label: '6 כדורים', isCorrect: true, optionAudio: '/audio/numbers/six-balls.mp3' },
        ],
      },
      // Question 2: Find the number 6 among other numbers
      {
        id: 'l6-e2',
        instruction: 'מצאו את המספר 6',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-4', label: '4' },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-5', image: 'number-7', label: '7' },
          { id: 'opt-6', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 3: Find the number 6 (different arrangement)
      {
        id: 'l6-e3',
        instruction: 'איפה המספר 6?',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-4', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Find the number 6 again (different set)
      {
        id: 'l6-e4',
        instruction: 'מצאו את המספר 6',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-9', label: '9' },
          { id: 'opt-2', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-8', label: '8' },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-1', label: '1' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Find the number 3 (6-3=3)
      {
        id: 'l6-e5',
        instruction: 'איפה המספר 3?',
        instructionAudio: '/audio/numbers/find-3.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-7', label: '7' },
          { id: 'opt-3', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-4', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 6s
      {
        id: 'l6-e6',
        instruction: 'בחרו את כל המספרים 6',
        instructionAudio: '/audio/numbers/select-all-6.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-3', image: 'number-4', label: '4' },
          { id: 'opt-4', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-7', label: '7' },
          { id: 'opt-7', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-8', image: 'number-8', label: '8' },
          { id: 'opt-9', image: 'number-9', label: '9' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 5 (from previous game)
      {
        id: 'l6-e7',
        instruction: 'מצאו את המספר 5',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-3', image: 'number-6', label: '6' },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-7', label: '7' },
          { id: 'opt-6', image: 'number-2', label: '2' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Review - Find the number 4
      {
        id: 'l6-e8',
        instruction: 'איפה המספר 4?',
        instructionAudio: '/audio/numbers/find-4.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-4', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 9: Final - select all 4s, 5s, and 6s
      {
        id: 'l6-e9',
        instruction: 'בחרו את כל המספרים 4, 5 ו-6',
        instructionAudio: '/audio/numbers/select-all-4-5-6.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-2', image: 'number-7', label: '7' },
          { id: 'opt-3', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-4', image: 'number-3', label: '3' },
          { id: 'opt-5', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-6', image: 'number-8', label: '8' },
          { id: 'opt-7', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-8', image: 'number-9', label: '9' },
          { id: 'opt-9', image: 'number-6', label: '6', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnSix;
