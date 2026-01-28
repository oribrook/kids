// Game: Learn the Number 2 (שתיים)
// Category: Numbers 1-5 (numbers-12345)
// Type: Standard selection - introduction to the number 2
// Teaches children to recognize the number 2, its name, and counting

const learnTwo = {
  id: 'learn-two',
  categoryId: 'numbers-12345',
  name: '2',
  description: 'הכירו את המספר 2',
  icon: '2',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 2"
      {
        id: 'l2-e1',
        instruction: 'זה המספר 2. שְׁתַּיִם',
        instructionAudio: '/audio/numbers/intro-2.mp3',
        questionImage: 'number-2',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'apple-red', imageCount: 2, label: '2 תפוחים', isCorrect: true, optionAudio: '/audio/numbers/two-apples.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 2, label: '2 כדורים', isCorrect: true, optionAudio: '/audio/numbers/two-balls.mp3' },
          { id: 'opt-3', image: 'star', imageCount: 2, label: '2 כוכבים', isCorrect: true, optionAudio: '/audio/numbers/two-stars.mp3' },
        ],
      },
      // Question 2: Find the number 2 among other numbers
      {
        id: 'l2-e2',
        instruction: 'מצאו את המספר 2',
        instructionAudio: '/audio/numbers/find-2.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 3: How many? (2 butterflies)
      {
        id: 'l2-e3',
        instruction: 'כמה פרפרים יש?',
        instructionAudio: '/audio/numbers/how-many-butterflies.mp3',
        questionImage: 'butterfly',
        questionImageCount: 2,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Find the number 2 again (different set)
      {
        id: 'l2-e4',
        instruction: 'מצאו את המספר 2',
        instructionAudio: '/audio/numbers/find-2.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-3', label: '3' },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-5', image: 'number-1', label: '1' },
          { id: 'opt-6', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 5: How many? (2 dogs)
      {
        id: 'l2-e5',
        instruction: 'כמה כלבים יש?',
        instructionAudio: '/audio/numbers/how-many-dogs.mp3',
        questionImage: 'dog',
        questionImageCount: 2,
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-1', label: '1' },
          { id: 'opt-3', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 2s
      {
        id: 'l2-e6',
        instruction: 'בחרו את כל המספרים 2',
        instructionAudio: '/audio/numbers/select-all-2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-8', image: 'number-6', label: '6' },
          { id: 'opt-9', image: 'number-7', label: '7' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - find the number 1 (from previous game)
      {
        id: 'l2-e7',
        instruction: 'מצאו את המספר 1',
        instructionAudio: '/audio/numbers/find-1.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-2', label: '2' },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Final - select all 1s and 2s
      {
        id: 'l2-e8',
        instruction: 'בחרו את כל המספרים 1 ו-2',
        instructionAudio: '/audio/numbers/select-all-1-and-2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-2', image: 'number-3', label: '3' },
          { id: 'opt-3', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-8', image: 'number-6', label: '6' },
          { id: 'opt-9', image: 'number-7', label: '7' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnTwo;
