// Game: Learn Numbers 60 and 70 (שישים ושבעים)
// Category: Numbers 20-100 (numbers-20-100)
// Type: Standard selection - introduction to tens: 60 and 70

const learnSixtySeventy = {
  id: 'learn-sixty-seventy',
  categoryId: 'numbers-20-100',
  name: '60-70',
  description: 'הכירו את המספרים 60 ו-70',
  icon: '60',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 60
      {
        id: 'l6070-e1',
        instruction: 'זה המספר 60. שִׁשִּׁים',
        instructionAudio: '/audio/numbers/intro-60.mp3',
        questionImage: 'number-60',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-2', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-3', image: 'number-50', label: '50', isCorrect: true },
        ],
      },
      // Question 2: Find the number 60
      {
        id: 'l6070-e2',
        instruction: 'מצאו את המספר 60',
        instructionAudio: '/audio/numbers/find-60.mp3',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-50', label: '50' },
          { id: 'opt-3', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-4', image: 'number-70', label: '70' },
          { id: 'opt-5', image: 'number-16', label: '16' },
          { id: 'opt-6', image: 'number-80', label: '80' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 70
      {
        id: 'l6070-e3',
        instruction: 'זה המספר 70. שִׁבְעִים',
        instructionAudio: '/audio/numbers/intro-70.mp3',
        questionImage: 'number-70',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-40', label: '40', isCorrect: true },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-60', label: '60', isCorrect: true },
        ],
      },
      // Question 4: Find the number 70
      {
        id: 'l6070-e4',
        instruction: 'איפה המספר 70?',
        instructionAudio: '/audio/numbers/find-70.mp3',
        options: [
          { id: 'opt-1', image: 'number-60', label: '60' },
          { id: 'opt-2', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-3', image: 'number-80', label: '80' },
          { id: 'opt-4', image: 'number-17', label: '17' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: What tens comes after 50?
      {
        id: 'l6070-e5',
        instruction: 'איזה מספר עגול בא אחרי 50?',
        instructionAudio: '/audio/numbers/what-tens-after-50.mp3',
        questionImage: 'number-50',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-80', label: '80' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: What tens comes after 60?
      {
        id: 'l6070-e6',
        instruction: 'איזה מספר עגול בא אחרי 60?',
        instructionAudio: '/audio/numbers/what-tens-after-60.mp3',
        questionImage: 'number-60',
        options: [
          { id: 'opt-1', image: 'number-50', label: '50' },
          { id: 'opt-2', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-3', image: 'number-80', label: '80' },
          { id: 'opt-4', image: 'number-90', label: '90' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Review - find 50
      {
        id: 'l6070-e7',
        instruction: 'איפה המספר 50?',
        instructionAudio: '/audio/numbers/find-50.mp3',
        options: [
          { id: 'opt-1', image: 'number-60', label: '60' },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-40', label: '40' },
          { id: 'opt-5', image: 'number-80', label: '80' },
          { id: 'opt-6', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 60s and 70s
      {
        id: 'l6070-e8',
        instruction: 'בחרו את כל המספרים 60 ו-70',
        instructionAudio: '/audio/numbers/select-all-60-70.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-50', label: '50' },
          { id: 'opt-2', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-3', image: 'number-80', label: '80' },
          { id: 'opt-4', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-5', image: 'number-40', label: '40' },
          { id: 'opt-6', image: 'number-60', label: '60', isCorrect: true },
          { id: 'opt-7', image: 'number-90', label: '90' },
          { id: 'opt-8', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-9', image: 'number-30', label: '30' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnSixtySeventy;
