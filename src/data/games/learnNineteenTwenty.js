// Game: Learn Numbers 19 and 20 (תשע-עשרה ועשרים)
// Category: Numbers 10-20 (numbers-10-20)
// Type: Standard selection - introduction to numbers 19 and 20

const learnNineteenTwenty = {
  id: 'learn-nineteen-twenty',
  categoryId: 'numbers-10-20',
  name: '19-20',
  description: 'הכירו את המספרים 19 ו-20',
  icon: '19',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 19
      {
        id: 'l1920-e1',
        instruction: 'זה המספר 19. תְּשַׁע עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-19.mp3',
        questionImage: 'number-19',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 19, label: '19 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 19, label: '19 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-blue', imageCount: 19, label: '19 כדורים', isCorrect: true },
        ],
      },
      // Question 2: Find the number 19
      {
        id: 'l1920-e2',
        instruction: 'מצאו את המספר 19',
        instructionAudio: '/audio/numbers/find-19.mp3',
        options: [
          { id: 'opt-1', image: 'number-17', label: '17' },
          { id: 'opt-2', image: 'number-18', label: '18' },
          { id: 'opt-3', image: 'number-19', label: '19', isCorrect: true },
          { id: 'opt-4', image: 'number-20', label: '20' },
          { id: 'opt-5', image: 'number-16', label: '16' },
          { id: 'opt-6', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 20
      {
        id: 'l1920-e3',
        instruction: 'זה המספר 20. עֶשְׂרִים',
        instructionAudio: '/audio/numbers/intro-20.mp3',
        questionImage: 'number-20',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-green', imageCount: 20, label: '20 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 20, label: '20 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-yellow', imageCount: 20, label: '20 כדורים', isCorrect: true },
        ],
      },
      // Question 4: Find the number 20
      {
        id: 'l1920-e4',
        instruction: 'מצאו את המספר 20',
        instructionAudio: '/audio/numbers/find-20.mp3',
        options: [
          { id: 'opt-1', image: 'number-18', label: '18' },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-12', label: '12' },
          { id: 'opt-4', image: 'number-19', label: '19' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: What comes after 18?
      {
        id: 'l1920-e5',
        instruction: 'איזה מספר בא אחרי 18?',
        instructionAudio: '/audio/numbers/what-after-18.mp3',
        questionImage: 'number-18',
        options: [
          { id: 'opt-1', image: 'number-17', label: '17' },
          { id: 'opt-2', image: 'number-19', label: '19', isCorrect: true },
          { id: 'opt-3', image: 'number-20', label: '20' },
          { id: 'opt-4', image: 'number-16', label: '16' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: What comes after 19?
      {
        id: 'l1920-e6',
        instruction: 'איזה מספר בא אחרי 19?',
        instructionAudio: '/audio/numbers/what-after-19.mp3',
        questionImage: 'number-19',
        options: [
          { id: 'opt-1', image: 'number-18', label: '18' },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-11', label: '11' },
          { id: 'opt-4', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Review - find 16
      {
        id: 'l1920-e7',
        instruction: 'איפה המספר 16?',
        instructionAudio: '/audio/numbers/find-16.mp3',
        options: [
          { id: 'opt-1', image: 'number-19', label: '19' },
          { id: 'opt-2', image: 'number-16', label: '16', isCorrect: true },
          { id: 'opt-3', image: 'number-18', label: '18' },
          { id: 'opt-4', image: 'number-20', label: '20' },
          { id: 'opt-5', image: 'number-14', label: '14' },
          { id: 'opt-6', image: 'number-11', label: '11' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 19s and 20s
      {
        id: 'l1920-e8',
        instruction: 'בחרו את כל המספרים 19 ו-20',
        instructionAudio: '/audio/numbers/select-all-19-20.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-18', label: '18' },
          { id: 'opt-2', image: 'number-19', label: '19', isCorrect: true },
          { id: 'opt-3', image: 'number-17', label: '17' },
          { id: 'opt-4', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-5', image: 'number-16', label: '16' },
          { id: 'opt-6', image: 'number-19', label: '19', isCorrect: true },
          { id: 'opt-7', image: 'number-15', label: '15' },
          { id: 'opt-8', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-9', image: 'number-14', label: '14' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnNineteenTwenty;
