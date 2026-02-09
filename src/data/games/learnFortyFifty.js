// Game: Learn Numbers 40 and 50 (ארבעים וחמישים)
// Category: Numbers 20-100 (numbers-20-100)
// Type: Standard selection - introduction to tens: 40 and 50

const learnFortyFifty = {
  id: 'learn-forty-fifty',
  categoryId: 'numbers-20-100',
  name: '40-50',
  description: 'הכירו את המספרים 40 ו-50',
  icon: '40',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 40
      {
        id: 'l4050-e1',
        instruction: 'זה המספר 40. אַרְבָּעִים',
        instructionAudio: '/audio/numbers/intro-40.mp3',
        questionImage: 'number-40',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-30', label: '30', isCorrect: true },
        ],
      },
      // Question 2: Find the number 40
      {
        id: 'l4050-e2',
        instruction: 'מצאו את המספר 40',
        instructionAudio: '/audio/numbers/find-40.mp3',
        options: [
          { id: 'opt-1', image: 'number-20', label: '20' },
          { id: 'opt-2', image: 'number-30', label: '30' },
          { id: 'opt-3', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-4', image: 'number-50', label: '50' },
          { id: 'opt-5', image: 'number-14', label: '14' },
          { id: 'opt-6', image: 'number-60', label: '60' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 50
      {
        id: 'l4050-e3',
        instruction: 'זה המספר 50. חֲמִשִּׁים',
        instructionAudio: '/audio/numbers/intro-50.mp3',
        questionImage: 'number-50',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-2', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-3', image: 'number-40', label: '40', isCorrect: true },
        ],
      },
      // Question 4: Find the number 50
      {
        id: 'l4050-e4',
        instruction: 'איפה המספר 50?',
        instructionAudio: '/audio/numbers/find-50.mp3',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-60', label: '60' },
          { id: 'opt-4', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: What tens comes after 30?
      {
        id: 'l4050-e5',
        instruction: 'איזה מספר עגול בא אחרי 30?',
        instructionAudio: '/audio/numbers/what-tens-after-30.mp3',
        questionImage: 'number-30',
        options: [
          { id: 'opt-1', image: 'number-20', label: '20' },
          { id: 'opt-2', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-3', image: 'number-50', label: '50' },
          { id: 'opt-4', image: 'number-60', label: '60' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: What tens comes after 40?
      {
        id: 'l4050-e6',
        instruction: 'איזה מספר עגול בא אחרי 40?',
        instructionAudio: '/audio/numbers/what-tens-after-40.mp3',
        questionImage: 'number-40',
        options: [
          { id: 'opt-1', image: 'number-30', label: '30' },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-60', label: '60' },
          { id: 'opt-4', image: 'number-70', label: '70' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Review - find 30
      {
        id: 'l4050-e7',
        instruction: 'איפה המספר 30?',
        instructionAudio: '/audio/numbers/find-30.mp3',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-3', image: 'number-50', label: '50' },
          { id: 'opt-4', image: 'number-20', label: '20' },
          { id: 'opt-5', image: 'number-60', label: '60' },
          { id: 'opt-6', image: 'number-13', label: '13' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 40s and 50s
      {
        id: 'l4050-e8',
        instruction: 'בחרו את כל המספרים 40 ו-50',
        instructionAudio: '/audio/numbers/select-all-40-50.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-30', label: '30' },
          { id: 'opt-2', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-3', image: 'number-60', label: '60' },
          { id: 'opt-4', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-5', image: 'number-20', label: '20' },
          { id: 'opt-6', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-7', image: 'number-70', label: '70' },
          { id: 'opt-8', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-9', image: 'number-80', label: '80' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnFortyFifty;
