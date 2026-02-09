// Game: Learn Number 100 (מאה)
// Category: Numbers 20-100 (numbers-20-100)
// Type: Standard selection - introduction to 100 and review of all tens

const learnHundred = {
  id: 'learn-hundred',
  categoryId: 'numbers-20-100',
  name: '100',
  description: 'הכירו את המספר 100!',
  icon: '💯',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 100
      {
        id: 'l100-e1',
        instruction: 'זה המספר 100. מֵאָה!',
        instructionAudio: '/audio/numbers/intro-100.mp3',
        questionImage: 'number-100',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-2', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-3', image: 'number-90', label: '90', isCorrect: true },
        ],
      },
      // Question 2: Find the number 100
      {
        id: 'l100-e2',
        instruction: 'מצאו את המספר 100',
        instructionAudio: '/audio/numbers/find-100.mp3',
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-90', label: '90' },
          { id: 'opt-3', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-4', image: 'number-10', label: '10' },
          { id: 'opt-5', image: 'number-70', label: '70' },
          { id: 'opt-6', image: 'number-50', label: '50' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: What comes after 90?
      {
        id: 'l100-e3',
        instruction: 'איזה מספר עגול בא אחרי 90?',
        instructionAudio: '/audio/numbers/what-tens-after-90.mp3',
        questionImage: 'number-90',
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Find 100 (different set)
      {
        id: 'l100-e4',
        instruction: 'איפה המספר 100?',
        instructionAudio: '/audio/numbers/find-100.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-3', image: 'number-20', label: '20' },
          { id: 'opt-4', image: 'number-40', label: '40' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Order - what comes after 20?
      {
        id: 'l100-e5',
        instruction: 'איזה מספר עגול בא אחרי 20?',
        instructionAudio: '/audio/numbers/what-tens-after-20.mp3',
        questionImage: 'number-20',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-3', image: 'number-40', label: '40' },
          { id: 'opt-4', image: 'number-50', label: '50' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: Find 60 (review)
      {
        id: 'l100-e6',
        instruction: 'מצאו את המספר 60',
        instructionAudio: '/audio/numbers/find-60.mp3',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-50', label: '50' },
          { id: 'opt-3', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-4', image: 'number-70', label: '70' },
          { id: 'opt-5', image: 'number-80', label: '80' },
          { id: 'opt-6', image: 'number-16', label: '16' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 7: Multi-select - find all 100s
      {
        id: 'l100-e7',
        instruction: 'בחרו את כל המספרים 100',
        instructionAudio: '/audio/numbers/select-all-100.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-90', label: '90' },
          { id: 'opt-2', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-3', image: 'number-10', label: '10' },
          { id: 'opt-4', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-5', image: 'number-80', label: '80' },
          { id: 'opt-6', image: 'number-70', label: '70' },
          { id: 'opt-7', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-8', image: 'number-50', label: '50' },
          { id: 'opt-9', image: 'number-20', label: '20' },
        ],
        correctCount: 3,
      },
      // Question 8: Grand finale - find 90 and 100
      {
        id: 'l100-e8',
        instruction: 'בחרו את כל המספרים 90 ו-100',
        instructionAudio: '/audio/numbers/select-all-90-100.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-5', image: 'number-60', label: '60' },
          { id: 'opt-6', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-7', image: 'number-50', label: '50' },
          { id: 'opt-8', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-9', image: 'number-10', label: '10' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnHundred;
