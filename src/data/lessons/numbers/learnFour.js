// Game: Learn the Number 4 (ארבע)
// Category: Numbers 1-5 (numbers-12345)
// Type: Standard selection - introduction to the number 4
// Teaches children to recognize the number 4, its name, and counting

const learnFour = {
  id: 'learn-four',
  categoryId: 'numbers-12345',
  name: '4',
  description: 'הכירו את המספר 4',
  icon: '4',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 4"
      {
        id: 'l4-e1',
        instruction: 'זה המספר 4. אַרְבַּע',
        instructionAudio: '/audio/numbers/intro-4.mp3',
        questionImage: 'number-4',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'apple-red', imageCount: 4, label: '4 תפוחים', isCorrect: true, optionAudio: '/audio/numbers/four-apples.mp3' },
          { id: 'opt-2', image: 'ball-yellow', imageCount: 4, label: '4 כדורים', isCorrect: true, optionAudio: '/audio/numbers/four-balls.mp3' },
          { id: 'opt-3', image: 'star', imageCount: 4, label: '4 כוכבים', isCorrect: true, optionAudio: '/audio/numbers/four-stars.mp3' },
        ],
      },
      // Question 2: Find the number 4 among other numbers
      {
        id: 'l4-e2',
        instruction: 'מצאו את המספר 4',
        instructionAudio: '/audio/numbers/find-4.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 3: How many? (4 butterflies)
      {
        id: 'l4-e3',
        instruction: 'כמה פרפרים יש?',
        instructionAudio: '/audio/numbers/how-many-butterflies.mp3',
        questionImage: 'butterfly',
        questionImageCount: 4,
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-3', label: '3' },
          { id: 'opt-3', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-4', image: 'number-5', label: '5' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Find the number 4 again (different set)
      {
        id: 'l4-e4',
        instruction: 'מצאו את המספר 4',
        instructionAudio: '/audio/numbers/find-4.mp3',
        options: [
          { id: 'opt-1', image: 'number-6', label: '6' },
          { id: 'opt-2', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-5', label: '5' },
          { id: 'opt-5', image: 'number-3', label: '3' },
          { id: 'opt-6', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: How many? (4 birds)
      {
        id: 'l4-e5',
        instruction: 'כמה ציפורים יש?',
        instructionAudio: '/audio/numbers/how-many-birds.mp3',
        questionImage: 'bird',
        questionImageCount: 4,
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-4', image: 'number-2', label: '2' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 4s
      {
        id: 'l4-e6',
        instruction: 'בחרו את כל המספרים 4',
        instructionAudio: '/audio/numbers/select-all-4.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-5', image: 'number-3', label: '3' },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-8', image: 'number-6', label: '6' },
          { id: 'opt-9', image: 'number-7', label: '7' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - find the number 3 (from previous game)
      {
        id: 'l4-e7',
        instruction: 'מצאו את המספר 3',
        instructionAudio: '/audio/numbers/find-3.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-3', image: 'number-4', label: '4' },
          { id: 'opt-4', image: 'number-2', label: '2' },
          { id: 'opt-5', image: 'number-1', label: '1' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Final - select all 2s, 3s, and 4s
      {
        id: 'l4-e8',
        instruction: 'בחרו את כל המספרים 2, 3 ו-4',
        instructionAudio: '/audio/numbers/select-all-2-3-4.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-2', image: 'number-5', label: '5' },
          { id: 'opt-3', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-4', image: 'number-1', label: '1' },
          { id: 'opt-5', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-6', image: 'number-6', label: '6' },
          { id: 'opt-7', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-8', image: 'number-7', label: '7' },
          { id: 'opt-9', image: 'number-4', label: '4', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnFour;
