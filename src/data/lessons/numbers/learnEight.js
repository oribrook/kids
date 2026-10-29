// Game: Learn the Number 8 (שמונה)
// Category: Numbers 6-10 (numbers-67890)
// Type: Standard selection - introduction to the number 8
// Teaches children to recognize the number 8, its name, and counting

const learnEight = {
  id: 'learn-eight',
  categoryId: 'numbers-67890',
  name: '8',
  description: 'הכירו את המספר 8',
  icon: '8',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 8"
      {
        id: 'l8-e1',
        instruction: 'זה המספר 8. שְׁמוֹנֶה',
        instructionAudio: '/audio/numbers/intro-8.mp3',
        questionImage: 'number-8',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 8, label: '8 כדורים', isCorrect: true, optionAudio: '/audio/numbers/eight-balls.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 8, label: '8 כדורים', isCorrect: true, optionAudio: '/audio/numbers/eight-balls.mp3' },
          { id: 'opt-3', image: 'ball-green', imageCount: 8, label: '8 כדורים', isCorrect: true, optionAudio: '/audio/numbers/eight-balls.mp3' },
        ],
      },
      // Question 2: Find the number 8 among other numbers
      {
        id: 'l8-e2',
        instruction: 'מצאו את המספר 8',
        instructionAudio: '/audio/numbers/find-8.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-7', label: '7' },
          { id: 'opt-4', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-5', image: 'number-9', label: '9' },
          { id: 'opt-6', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 3: Find the number 8 (different arrangement)
      {
        id: 'l8-e3',
        instruction: 'איפה המספר 8?',
        instructionAudio: '/audio/numbers/find-8.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-7', label: '7' },
          { id: 'opt-3', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-4', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Find the number 8 again (different set)
      {
        id: 'l8-e4',
        instruction: 'מצאו את המספר 8',
        instructionAudio: '/audio/numbers/find-8.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-3', image: 'number-4', label: '4' },
          { id: 'opt-4', image: 'number-2', label: '2' },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-1', label: '1' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Find the number 5 (8-3=5)
      {
        id: 'l8-e5',
        instruction: 'איפה המספר 5?',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-7', label: '7' },
          { id: 'opt-2', image: 'number-9', label: '9' },
          { id: 'opt-3', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 8s
      {
        id: 'l8-e6',
        instruction: 'בחרו את כל המספרים 8',
        instructionAudio: '/audio/numbers/select-all-8.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-3', image: 'number-6', label: '6' },
          { id: 'opt-4', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-5', image: 'number-7', label: '7' },
          { id: 'opt-6', image: 'number-9', label: '9' },
          { id: 'opt-7', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-8', image: 'number-4', label: '4' },
          { id: 'opt-9', image: 'number-3', label: '3' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 7 (from previous game)
      {
        id: 'l8-e7',
        instruction: 'מצאו את המספר 7',
        instructionAudio: '/audio/numbers/find-7.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-3', image: 'number-8', label: '8' },
          { id: 'opt-4', image: 'number-6', label: '6' },
          { id: 'opt-5', image: 'number-9', label: '9' },
          { id: 'opt-6', image: 'number-4', label: '4' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Review - Find the number 6
      {
        id: 'l8-e8',
        instruction: 'איפה המספר 6?',
        instructionAudio: '/audio/numbers/find-6.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-7', label: '7' },
          { id: 'opt-3', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-4', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 9: Final - select all 6s, 7s, and 8s
      {
        id: 'l8-e9',
        instruction: 'בחרו את כל המספרים 6, 7 ו-8',
        instructionAudio: '/audio/numbers/select-all-6-7-8.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-6', label: '6', isCorrect: true },
          { id: 'opt-2', image: 'number-9', label: '9' },
          { id: 'opt-3', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-4', image: 'number-5', label: '5' },
          { id: 'opt-5', image: 'number-8', label: '8', isCorrect: true },
          { id: 'opt-6', image: 'number-4', label: '4' },
          { id: 'opt-7', image: 'number-7', label: '7', isCorrect: true },
          { id: 'opt-8', image: 'number-3', label: '3' },
          { id: 'opt-9', image: 'number-8', label: '8', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnEight;
