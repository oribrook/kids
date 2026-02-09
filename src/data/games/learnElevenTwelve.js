// Game: Learn Numbers 11 and 12 (אחת-עשרה ושתים-עשרה)
// Category: Numbers 10-20 (numbers-10-20)
// Type: Standard selection - introduction to numbers 11 and 12

const learnElevenTwelve = {
  id: 'learn-eleven-twelve',
  categoryId: 'numbers-10-20',
  name: '11-12',
  description: 'הכירו את המספרים 11 ו-12',
  icon: '11',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction to 11
      {
        id: 'l1112-e1',
        instruction: 'זה המספר 11. אַחַת עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-11.mp3',
        questionImage: 'number-11',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'star', imageCount: 11, label: '11 כוכבים', isCorrect: true },
          { id: 'opt-2', image: 'ball-red', imageCount: 11, label: '11 כדורים', isCorrect: true },
          { id: 'opt-3', image: 'apple-red', imageCount: 11, label: '11 תפוחים', isCorrect: true },
        ],
      },
      // Question 2: Find the number 11
      {
        id: 'l1112-e2',
        instruction: 'מצאו את המספר 11',
        instructionAudio: '/audio/numbers/find-11.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-3', image: 'number-12', label: '12' },
          { id: 'opt-4', image: 'number-9', label: '9' },
          { id: 'opt-5', image: 'number-13', label: '13' },
          { id: 'opt-6', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 3: Introduction to 12
      {
        id: 'l1112-e3',
        instruction: 'זה המספר 12. שְׁתֵּים עֶשְׂרֵה',
        instructionAudio: '/audio/numbers/intro-12.mp3',
        questionImage: 'number-12',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'ball-blue', imageCount: 12, label: '12 כדורים', isCorrect: true },
          { id: 'opt-2', image: 'star', imageCount: 12, label: '12 כוכבים', isCorrect: true },
          { id: 'opt-3', image: 'ball-green', imageCount: 12, label: '12 כדורים', isCorrect: true },
        ],
      },
      // Question 4: Find the number 12
      {
        id: 'l1112-e4',
        instruction: 'מצאו את המספר 12',
        instructionAudio: '/audio/numbers/find-12.mp3',
        options: [
          { id: 'opt-1', image: 'number-11', label: '11' },
          { id: 'opt-2', image: 'number-13', label: '13' },
          { id: 'opt-3', image: 'number-12', label: '12', isCorrect: true },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 5: Find the number 11 (review)
      {
        id: 'l1112-e5',
        instruction: 'איפה המספר 11?',
        instructionAudio: '/audio/numbers/find-11.mp3',
        options: [
          { id: 'opt-1', image: 'number-12', label: '12' },
          { id: 'opt-2', image: 'number-10', label: '10' },
          { id: 'opt-3', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-4', image: 'number-14', label: '14' },
          { id: 'opt-5', image: 'number-9', label: '9' },
          { id: 'opt-6', image: 'number-13', label: '13' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Which comes after 10?
      {
        id: 'l1112-e6',
        instruction: 'איזה מספר בא אחרי 10?',
        instructionAudio: '/audio/numbers/what-after-10.mp3',
        questionImage: 'number-10',
        options: [
          { id: 'opt-1', image: 'number-9', label: '9' },
          { id: 'opt-2', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-3', image: 'number-12', label: '12' },
          { id: 'opt-4', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Which comes after 11?
      {
        id: 'l1112-e7',
        instruction: 'איזה מספר בא אחרי 11?',
        instructionAudio: '/audio/numbers/what-after-11.mp3',
        questionImage: 'number-11',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-13', label: '13' },
          { id: 'opt-3', image: 'number-12', label: '12', isCorrect: true },
          { id: 'opt-4', image: 'number-14', label: '14' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: Multi-select - find all 11s and 12s
      {
        id: 'l1112-e8',
        instruction: 'בחרו את כל המספרים 11 ו-12',
        instructionAudio: '/audio/numbers/select-all-11-12.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-3', image: 'number-13', label: '13' },
          { id: 'opt-4', image: 'number-12', label: '12', isCorrect: true },
          { id: 'opt-5', image: 'number-9', label: '9' },
          { id: 'opt-6', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-7', image: 'number-14', label: '14' },
          { id: 'opt-8', image: 'number-12', label: '12', isCorrect: true },
          { id: 'opt-9', image: 'number-8', label: '8' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnElevenTwelve;
