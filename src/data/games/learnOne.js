// Game: Learn the Number 1 (אחד)
// Category: Numbers 1-5 (numbers-12345)
// Type: Standard selection - introduction to the number 1
// Teaches children to recognize the number 1, its name, and counting

const learnOne = {
  id: 'learn-one',
  categoryId: 'numbers-12345',
  name: '1',
  description: 'הכירו את המספר 1',
  icon: '1',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 1"
      {
        id: 'l1-e1',
        instruction: 'זה המספר 1. אֶחָד',
        instructionAudio: '/audio/numbers/intro-1.mp3',
        questionImage: 'number-1',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'apple-red', label: 'תפוח אחד', isCorrect: true, optionAudio: '/audio/numbers/one-apple.mp3' },
          { id: 'opt-2', image: 'ball-red', label: 'כדור אחד', isCorrect: true, optionAudio: '/audio/numbers/one-ball.mp3' },
          { id: 'opt-3', image: 'star', label: 'כוכב אחד', isCorrect: true, optionAudio: '/audio/numbers/one-star.mp3' },
        ],
      },
      // Question 2: Find the number 1 among other numbers
      {
        id: 'l1-e2',
        instruction: 'מצאו את המספר 1',
        instructionAudio: '/audio/numbers/find-1.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-5', label: '5' },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: How many? (1 item)
      {
        id: 'l1-e3',
        instruction: 'כמה פרפרים יש?',
        instructionAudio: '/audio/numbers/how-many-butterflies.mp3',
        questionImage: 'butterfly',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Find the number 1 again (different set)
      {
        id: 'l1-e4',
        instruction: 'מצאו את המספר 1',
        instructionAudio: '/audio/numbers/find-1.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-2', label: '2' },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-7', label: '7' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: How many? (1 dog)
      {
        id: 'l1-e5',
        instruction: 'כמה כלבים יש?',
        instructionAudio: '/audio/numbers/how-many-dogs.mp3',
        questionImage: 'dog',
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-3', label: '3' },
          { id: 'opt-3', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-4', image: 'number-4', label: '4' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 1s
      {
        id: 'l1-e6',
        instruction: 'בחרו את כל המספרים 1',
        instructionAudio: '/audio/numbers/select-all-1.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-5', label: '5' },
          { id: 'opt-7', image: 'number-1', label: '1', isCorrect: true },
          { id: 'opt-8', image: 'number-6', label: '6' },
          { id: 'opt-9', image: 'number-7', label: '7' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default learnOne;
