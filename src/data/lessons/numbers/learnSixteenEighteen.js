// Game: Learn Numbers 16, 17, 18 (שש-עשרה, שבע-עשרה, שמונה-עשרה)
// Category: Numbers 10-20 (numbers-10-20)
// Type: Standard selection - introduction to numbers 16, 17, 18

const learnSixteenEighteen = {
  id: 'learn-sixteen-eighteen',
  categoryId: 'numbers-10-20',
  name: '16-18',
  description: 'הכירו את המספרים 16, 17 ו-18',
  icon: '16',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 16
      {
        id: 'l1618-e1',
        instruction: 'זה המספר 16. שֵׁשׁ עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-16.mp3',
        questionImage: 'number-16',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 16, label: '16 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 16, label: '16 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-green', imageCount: 16, label: '16 כדורים', isCorrect: true },
        ],
      },
      // Question 2: Find the number 16
      {
        id: 'l1618-e2',
        instruction: 'מצאו את המספר 16',
        instructionAudio: '/audio/numbers/find-16.mp3',
        options: [
          { id: 'opt-1', image: 'number-14', label: '14' },
          { id: 'opt-2', image: 'number-15', label: '15' },
          { id: 'opt-3', image: 'number-16', label: '16', isCorrect: true },
          { id: 'opt-4', image: 'number-17', label: '17' },
          { id: 'opt-5', image: 'number-18', label: '18' },
          { id: 'opt-6', image: 'number-13', label: '13' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 17
      {
        id: 'l1618-e3',
        instruction: 'זה המספר 17. שְׁבַע עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-17.mp3',
        questionImage: 'number-17',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-blue', imageCount: 17, label: '17 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'apple-red', imageCount: 17, label: '17 תפוחים', isCorrect: true },
          { id: 'opt-3', image: 'ball-yellow', imageCount: 17, label: '17 כדורים', isCorrect: true },
        ],
      },
      // Question 4: Find the number 17
      {
        id: 'l1618-e4',
        instruction: 'איפה המספר 17?',
        instructionAudio: '/audio/numbers/find-17.mp3',
        options: [
          { id: 'opt-1', image: 'number-15', label: '15' },
          { id: 'opt-2', image: 'number-17', label: '17', isCorrect: true },
          { id: 'opt-3', image: 'number-19', label: '19' },
          { id: 'opt-4', image: 'number-16', label: '16' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Introduction to 18
      {
        id: 'l1618-e5',
        instruction: 'זה המספר 18. שְׁמוֹנֶה עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-18.mp3',
        questionImage: 'number-18',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'star', imageCount: 18, label: '18 כוכבים', isCorrect: true },
          { id: 'opt-2', image: 'ball-red', imageCount: 18, label: '18 כדורים', isCorrect: true },
          { id: 'opt-3', image: 'ball-green', imageCount: 18, label: '18 כדורים', isCorrect: true },
        ],
      },
      // Question 6: Find the number 18
      {
        id: 'l1618-e6',
        instruction: 'מצאו את המספר 18',
        instructionAudio: '/audio/numbers/find-18.mp3',
        options: [
          { id: 'opt-1', image: 'number-16', label: '16' },
          { id: 'opt-2', image: 'number-17', label: '17' },
          { id: 'opt-3', image: 'number-18', label: '18', isCorrect: true },
          { id: 'opt-4', image: 'number-19', label: '19' },
          { id: 'opt-5', image: 'number-15', label: '15' },
          { id: 'opt-6', image: 'number-14', label: '14' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 7: What comes after 15?
      {
        id: 'l1618-e7',
        instruction: 'איזה מספר בא אחרי 15?',
        instructionAudio: '/audio/numbers/what-after-15.mp3',
        questionImage: 'number-15',
        options: [
          { id: 'opt-1', image: 'number-14', label: '14' },
          { id: 'opt-2', image: 'number-17', label: '17' },
          { id: 'opt-3', image: 'number-16', label: '16', isCorrect: true },
          { id: 'opt-4', image: 'number-18', label: '18' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: What comes after 17?
      {
        id: 'l1618-e8',
        instruction: 'איזה מספר בא אחרי 17?',
        instructionAudio: '/audio/numbers/what-after-17.mp3',
        questionImage: 'number-17',
        options: [
          { id: 'opt-1', image: 'number-16', label: '16' },
          { id: 'opt-2', image: 'number-18', label: '18', isCorrect: true },
          { id: 'opt-3', image: 'number-19', label: '19' },
          { id: 'opt-4', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 9: Multi-select - find all 16s, 17s, and 18s
      {
        id: 'l1618-e9',
        instruction: 'בחרו את כל המספרים 16, 17 ו-18',
        instructionAudio: '/audio/numbers/select-all-16-17-18.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-16', label: '16', isCorrect: true },
          { id: 'opt-2', image: 'number-14', label: '14' },
          { id: 'opt-3', image: 'number-17', label: '17', isCorrect: true },
          { id: 'opt-4', image: 'number-15', label: '15' },
          { id: 'opt-5', image: 'number-18', label: '18', isCorrect: true },
          { id: 'opt-6', image: 'number-13', label: '13' },
          { id: 'opt-7', image: 'number-17', label: '17', isCorrect: true },
          { id: 'opt-8', image: 'number-19', label: '19' },
          { id: 'opt-9', image: 'number-18', label: '18', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnSixteenEighteen;
