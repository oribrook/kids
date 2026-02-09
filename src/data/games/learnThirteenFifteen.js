// Game: Learn Numbers 13, 14, 15 (שלוש-עשרה, ארבע-עשרה, חמש-עשרה)
// Category: Numbers 10-20 (numbers-10-20)
// Type: Standard selection - introduction to numbers 13, 14, 15

const learnThirteenFifteen = {
  id: 'learn-thirteen-fifteen',
  categoryId: 'numbers-10-20',
  name: '13-15',
  description: 'הכירו את המספרים 13, 14 ו-15',
  icon: '13',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 13
      {
        id: 'l1315-e1',
        instruction: 'זה המספר 13. שְׁלוֹשׁ עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-13.mp3',
        questionImage: 'number-13',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-red', imageCount: 13, label: '13 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 13, label: '13 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-blue', imageCount: 13, label: '13 כדורים', isCorrect: true },
        ],
      },
      // Question 2: Find the number 13
      {
        id: 'l1315-e2',
        instruction: 'מצאו את המספר 13',
        instructionAudio: '/audio/numbers/find-13.mp3',
        options: [
          { id: 'opt-1', image: 'number-11', label: '11' },
          { id: 'opt-2', image: 'number-12', label: '12' },
          { id: 'opt-3', image: 'number-13', label: '13', isCorrect: true },
          { id: 'opt-4', image: 'number-14', label: '14' },
          { id: 'opt-5', image: 'number-15', label: '15' },
          { id: 'opt-6', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: Introduction to 14
      {
        id: 'l1315-e3',
        instruction: 'זה המספר 14. אַרְבַּע עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-14.mp3',
        questionImage: 'number-14',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-green', imageCount: 14, label: '14 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'apple-red', imageCount: 14, label: '14 תפוחים', isCorrect: true },
          { id: 'opt-3', image: 'ball-yellow', imageCount: 14, label: '14 כדורים', isCorrect: true },
        ],
      },
      // Question 4: Find the number 14
      {
        id: 'l1315-e4',
        instruction: 'איפה המספר 14?',
        instructionAudio: '/audio/numbers/find-14.mp3',
        options: [
          { id: 'opt-1', image: 'number-12', label: '12' },
          { id: 'opt-2', image: 'number-14', label: '14', isCorrect: true },
          { id: 'opt-3', image: 'number-16', label: '16' },
          { id: 'opt-4', image: 'number-13', label: '13' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Introduction to 15
      {
        id: 'l1315-e5',
        instruction: 'זה המספר 15. חֲמֵשׁ עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-15.mp3',
        questionImage: 'number-15',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'star', imageCount: 15, label: '15 כוכבים', isCorrect: true },
          { id: 'opt-2', image: 'ball-red', imageCount: 15, label: '15 כדורים', isCorrect: true },
          { id: 'opt-3', image: 'ball-blue', imageCount: 15, label: '15 כדורים', isCorrect: true },
        ],
      },
      // Question 6: Find the number 15
      {
        id: 'l1315-e6',
        instruction: 'מצאו את המספר 15',
        instructionAudio: '/audio/numbers/find-15.mp3',
        options: [
          { id: 'opt-1', image: 'number-13', label: '13' },
          { id: 'opt-2', image: 'number-14', label: '14' },
          { id: 'opt-3', image: 'number-15', label: '15', isCorrect: true },
          { id: 'opt-4', image: 'number-16', label: '16' },
          { id: 'opt-5', image: 'number-12', label: '12' },
          { id: 'opt-6', image: 'number-11', label: '11' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 7: What comes after 12?
      {
        id: 'l1315-e7',
        instruction: 'איזה מספר בא אחרי 12?',
        instructionAudio: '/audio/numbers/what-after-12.mp3',
        questionImage: 'number-12',
        options: [
          { id: 'opt-1', image: 'number-11', label: '11' },
          { id: 'opt-2', image: 'number-14', label: '14' },
          { id: 'opt-3', image: 'number-13', label: '13', isCorrect: true },
          { id: 'opt-4', image: 'number-15', label: '15' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: What comes after 14?
      {
        id: 'l1315-e8',
        instruction: 'איזה מספר בא אחרי 14?',
        instructionAudio: '/audio/numbers/what-after-14.mp3',
        questionImage: 'number-14',
        options: [
          { id: 'opt-1', image: 'number-13', label: '13' },
          { id: 'opt-2', image: 'number-15', label: '15', isCorrect: true },
          { id: 'opt-3', image: 'number-16', label: '16' },
          { id: 'opt-4', image: 'number-12', label: '12' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 9: Multi-select - find all 13s, 14s, and 15s
      {
        id: 'l1315-e9',
        instruction: 'בחרו את כל המספרים 13, 14 ו-15',
        instructionAudio: '/audio/numbers/select-all-13-14-15.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-13', label: '13', isCorrect: true },
          { id: 'opt-2', image: 'number-11', label: '11' },
          { id: 'opt-3', image: 'number-14', label: '14', isCorrect: true },
          { id: 'opt-4', image: 'number-12', label: '12' },
          { id: 'opt-5', image: 'number-15', label: '15', isCorrect: true },
          { id: 'opt-6', image: 'number-10', label: '10' },
          { id: 'opt-7', image: 'number-14', label: '14', isCorrect: true },
          { id: 'opt-8', image: 'number-16', label: '16' },
          { id: 'opt-9', image: 'number-15', label: '15', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnThirteenFifteen;
