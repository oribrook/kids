// Game: Learn Numbers 20 and 30 (עשרים ושלושים)
// Category: Numbers 20-100 (numbers-20-100)
// Type: Standard selection - introduction to tens: 20 and 30

const learnTwentyThirty = {
  id: 'learn-twenty-thirty',
  categoryId: 'numbers-20-100',
  name: '20-30',
  description: 'הכירו את המספרים 20 ו-30',
  icon: '20',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 20
      {
        id: 'l2030-e1',
        instruction: 'זה המספר 20. עֶשְׂרִים',
        instructionAudio: '/audio/numbers/intro-20.mp3',
        questionImage: 'number-20',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 20, label: '20 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 20, label: '20 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-blue', imageCount: 20, label: '20 כדורים', isCorrect: true },
        ],
      },
      // Question 2: Find the number 20
      {
        id: 'l2030-e2',
        instruction: 'מצאו את המספר 20',
        instructionAudio: '/audio/numbers/find-20.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-30', label: '30' },
          { id: 'opt-4', image: 'number-12', label: '12' },
          { id: 'opt-5', image: 'number-40', label: '40' },
          { id: 'opt-6', image: 'number-50', label: '50' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 3: Introduction to 30
      {
        id: 'l2030-e3',
        instruction: 'זה המספר 30. שְׁלוֹשִׁים',
        instructionAudio: '/audio/numbers/intro-30.mp3',
        questionImage: 'number-30',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-green', imageCount: 30, label: '30 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'apple-red', imageCount: 30, label: '30 תפוחים', isCorrect: true },
          { id: 'opt-3', image: 'ball-yellow', imageCount: 30, label: '30 כדורים', isCorrect: true },
        ],
      },
      // Question 4: Find the number 30
      {
        id: 'l2030-e4',
        instruction: 'איפה המספר 30?',
        instructionAudio: '/audio/numbers/find-30.mp3',
        options: [
          { id: 'opt-1', image: 'number-20', label: '20' },
          { id: 'opt-2', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-3', image: 'number-40', label: '40' },
          { id: 'opt-4', image: 'number-13', label: '13' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: What comes after 20?
      {
        id: 'l2030-e5',
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
      // Question 6: Find 20 again (different set)
      {
        id: 'l2030-e6',
        instruction: 'מצאו את המספר 20',
        instructionAudio: '/audio/numbers/find-20.mp3',
        options: [
          { id: 'opt-1', image: 'number-30', label: '30' },
          { id: 'opt-2', image: 'number-50', label: '50' },
          { id: 'opt-3', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-4', image: 'number-40', label: '40' },
          { id: 'opt-5', image: 'number-60', label: '60' },
          { id: 'opt-6', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 7: Review - find 10
      {
        id: 'l2030-e7',
        instruction: 'איפה המספר 10?',
        instructionAudio: '/audio/numbers/find-10.mp3',
        options: [
          { id: 'opt-1', image: 'number-20', label: '20' },
          { id: 'opt-2', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-3', image: 'number-30', label: '30' },
          { id: 'opt-4', image: 'number-40', label: '40' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 20s and 30s
      {
        id: 'l2030-e8',
        instruction: 'בחרו את כל המספרים 20 ו-30',
        instructionAudio: '/audio/numbers/select-all-20-30.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-40', label: '40' },
          { id: 'opt-4', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-5', image: 'number-50', label: '50' },
          { id: 'opt-6', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-7', image: 'number-60', label: '60' },
          { id: 'opt-8', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-9', image: 'number-70', label: '70' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnTwentyThirty;
