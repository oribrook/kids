// Game: Learn the Number 3 (שלוש)
// Category: Numbers 1-5 (numbers-12345)
// Type: Standard selection - introduction to the number 3
// Teaches children to recognize the number 3, its name, and counting

const learnThree = {
  id: 'learn-three',
  categoryId: 'numbers-12345',
  name: '3',
  description: 'הכירו את המספר 3',
  icon: '3',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 3"
      {
        id: 'l3-e1',
        instruction: 'זה המספר 3. שָׁלוֹשׁ',
        instructionAudio: '/audio/numbers/intro-3.mp3',
        questionImage: 'number-3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'apple-red', imageCount: 3, label: '3 תפוחים', isCorrect: true, optionAudio: '/audio/numbers/three-apples.mp3' },
          { id: 'opt-2', image: 'ball-green', imageCount: 3, label: '3 כדורים', isCorrect: true, optionAudio: '/audio/numbers/three-balls.mp3' },
          { id: 'opt-3', image: 'star', imageCount: 3, label: '3 כוכבים', isCorrect: true, optionAudio: '/audio/numbers/three-stars.mp3' },
        ],
      },
      // Question 2: Find the number 3 among other numbers
      {
        id: 'l3-e2',
        instruction: 'מצאו את המספר 3',
        instructionAudio: '/audio/numbers/find-3.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 3: How many? (3 butterflies)
      {
        id: 'l3-e3',
        instruction: 'כמה פרפרים יש?',
        instructionAudio: '/audio/numbers/how-many-butterflies.mp3',
        questionImage: 'butterfly',
        questionImageCount: 3,
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-3', image: 'number-4', label: '4' },
          { id: 'opt-4', image: 'number-5', label: '5' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Find the number 3 again (different set)
      {
        id: 'l3-e4',
        instruction: 'מצאו את המספר 3',
        instructionAudio: '/audio/numbers/find-3.mp3',
        options: [
          { id: 'opt-1', image: 'number-5', label: '5' },
          { id: 'opt-2', image: 'number-1', label: '1' },
          { id: 'opt-3', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-2', label: '2' },
          { id: 'opt-6', image: 'number-8', label: '8' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 5: How many? (3 cats)
      {
        id: 'l3-e5',
        instruction: 'כמה חתולים יש?',
        instructionAudio: '/audio/numbers/how-many-cats.mp3',
        questionImage: 'cat',
        questionImageCount: 3,
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-4', label: '4' },
          { id: 'opt-3', image: 'number-1', label: '1' },
          { id: 'opt-4', image: 'number-3', label: '3', isCorrect: true },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 6: Multi-select - find all 3s
      {
        id: 'l3-e6',
        instruction: 'בחרו את כל המספרים 3',
        instructionAudio: '/audio/numbers/select-all-3.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-4', label: '4' },
          { id: 'opt-7', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-8', image: 'number-6', label: '6' },
          { id: 'opt-9', image: 'number-7', label: '7' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - find the number 2 (from previous game)
      {
        id: 'l3-e7',
        instruction: 'מצאו את המספר 2',
        instructionAudio: '/audio/numbers/find-2.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-3', label: '3' },
          { id: 'opt-5', image: 'number-1', label: '1' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Final - select all 1s, 2s, and 3s
      {
        id: 'l3-e8',
        instruction: 'בחרו את כל המספרים 1, 2 ו-3',
        instructionAudio: '/audio/numbers/select-all-1-2-3.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-2', image: 'number-4', label: '4' },
          { id: 'opt-3', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-4', image: 'number-5', label: '5' },
          { id: 'opt-5', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-6', image: 'number-6', label: '6' },
          { id: 'opt-7', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-8', image: 'number-7', label: '7' },
          { id: 'opt-9', image: 'number-3', label: '3', isCorrect: true },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnThree;
