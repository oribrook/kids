// Game: Learn Numbers 80 and 90 (שמונים ותשעים)
// Category: Numbers 20-100 (numbers-20-100)
// Type: Standard selection - introduction to tens: 80 and 90

const learnEightyNinety = {
  id: 'learn-eighty-ninety',
  categoryId: 'numbers-20-100',
  name: '80-90',
  description: 'הכירו את המספרים 80 ו-90',
  icon: '80',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 80
      {
        id: 'l8090-e1',
        instruction: 'זה המספר 80. שְׁמוֹנִים',
        instructionAudio: '/audio/numbers/intro-80.mp3',
        questionImage: 'number-80',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-2', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70', isCorrect: true },
        ],
      },
      // Question 2: Find the number 80
      {
        id: 'l8090-e2',
        instruction: 'מצאו את המספר 80',
        instructionAudio: '/audio/numbers/find-80.mp3',
        options: [
          { id: 'opt-1', image: 'number-60', label: '60' },
          { id: 'opt-2', image: 'number-70', label: '70' },
          { id: 'opt-3', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-4', image: 'number-90', label: '90' },
          { id: 'opt-5', image: 'number-18', label: '18' },
          { id: 'opt-6', image: 'number-100', label: '100' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 90
      {
        id: 'l8090-e3',
        instruction: 'זה המספר 90. תִּשְׁעִים',
        instructionAudio: '/audio/numbers/intro-90.mp3',
        questionImage: 'number-90',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-2', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-3', image: 'number-80', label: '80', isCorrect: true },
        ],
      },
      // Question 4: Find the number 90
      {
        id: 'l8090-e4',
        instruction: 'איפה המספר 90?',
        instructionAudio: '/audio/numbers/find-90.mp3',
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-3', image: 'number-100', label: '100' },
          { id: 'opt-4', image: 'number-19', label: '19' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: What tens comes after 70?
      {
        id: 'l8090-e5',
        instruction: 'איזה מספר עגול בא אחרי 70?',
        instructionAudio: '/audio/numbers/what-tens-after-70.mp3',
        questionImage: 'number-70',
        options: [
          { id: 'opt-1', image: 'number-60', label: '60' },
          { id: 'opt-2', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-3', image: 'number-90', label: '90' },
          { id: 'opt-4', image: 'number-100', label: '100' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: What tens comes after 80?
      {
        id: 'l8090-e6',
        instruction: 'איזה מספר עגול בא אחרי 80?',
        instructionAudio: '/audio/numbers/what-tens-after-80.mp3',
        questionImage: 'number-80',
        options: [
          { id: 'opt-1', image: 'number-70', label: '70' },
          { id: 'opt-2', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-3', image: 'number-100', label: '100' },
          { id: 'opt-4', image: 'number-60', label: '60' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Review - find 70
      {
        id: 'l8090-e7',
        instruction: 'איפה המספר 70?',
        instructionAudio: '/audio/numbers/find-70.mp3',
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-3', image: 'number-90', label: '90' },
          { id: 'opt-4', image: 'number-60', label: '60' },
          { id: 'opt-5', image: 'number-100', label: '100' },
          { id: 'opt-6', image: 'number-17', label: '17' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 80s and 90s
      {
        id: 'l8090-e8',
        instruction: 'בחרו את כל המספרים 80 ו-90',
        instructionAudio: '/audio/numbers/select-all-80-90.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-70', label: '70' },
          { id: 'opt-2', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-3', image: 'number-100', label: '100' },
          { id: 'opt-4', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-5', image: 'number-60', label: '60' },
          { id: 'opt-6', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-7', image: 'number-50', label: '50' },
          { id: 'opt-8', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-9', image: 'number-40', label: '40' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnEightyNinety;
