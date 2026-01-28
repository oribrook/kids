// Game: Learn the Number 5 (חמש)
// Category: Numbers 1-5 (numbers-12345)
// Type: Standard selection - introduction to the number 5
// Teaches children to recognize the number 5, its name, and counting

const learnFive = {
  id: 'learn-five',
  categoryId: 'numbers-12345',
  name: '5',
  description: 'הכירו את המספר 5',
  icon: '5',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - "This is the number 5"
      {
        id: 'l5-e1',
        instruction: 'זה המספר 5. חָמֵשׁ',
        instructionAudio: '/audio/numbers/intro-5.mp3',
        questionImage: 'number-5',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'apple-red', imageCount: 5, label: '5 תפוחים', isCorrect: true, optionAudio: '/audio/numbers/five-apples.mp3' },
          { id: 'opt-2', image: 'ball-blue', imageCount: 5, label: '5 כדורים', isCorrect: true, optionAudio: '/audio/numbers/five-balls.mp3' },
          { id: 'opt-3', image: 'star', imageCount: 5, label: '5 כוכבים', isCorrect: true, optionAudio: '/audio/numbers/five-stars.mp3' },
        ],
      },
      // Question 2: Find the number 5 among other numbers
      {
        id: 'l5-e2',
        instruction: 'מצאו את המספר 5',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-2', label: '2' },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-4', label: '4' },
          { id: 'opt-5', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-6', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 3: Find the number 5 (different arrangement)
      {
        id: 'l5-e3',
        instruction: 'איפה המספר 5?',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-3', label: '3' },
          { id: 'opt-2', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-3', image: 'number-4', label: '4' },
          { id: 'opt-4', image: 'number-6', label: '6' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Find the number 5 again (different set)
      {
        id: 'l5-e4',
        instruction: 'מצאו את המספר 5',
        instructionAudio: '/audio/numbers/find-5.mp3',
        options: [
          { id: 'opt-1', image: 'number-7', label: '7' },
          { id: 'opt-2', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-8', label: '8' },
          { id: 'opt-5', image: 'number-3', label: '3' },
          { id: 'opt-6', image: 'number-9', label: '9' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 5: Find the number 2 (5-3=2)
      {
        id: 'l5-e5',
        instruction: 'איפה המספר 2?',
        instructionAudio: '/audio/numbers/find-2.mp3',
        options: [
          { id: 'opt-1', image: 'number-4', label: '4' },
          { id: 'opt-2', image: 'number-6', label: '6' },
          { id: 'opt-3', image: 'number-2', label: '2', isCorrect: true },
          { id: 'opt-4', image: 'number-3', label: '3' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Multi-select - find all 5s
      {
        id: 'l5-e6',
        instruction: 'בחרו את כל המספרים 5',
        instructionAudio: '/audio/numbers/select-all-5.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-2', label: '2' },
          { id: 'opt-2', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-3', image: 'number-3', label: '3' },
          { id: 'opt-4', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-5', image: 'number-4', label: '4' },
          { id: 'opt-6', image: 'number-6', label: '6' },
          { id: 'opt-7', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-8', image: 'number-7', label: '7' },
          { id: 'opt-9', image: 'number-8', label: '8' },
        ],
        correctCount: 3,
      },
      // Question 7: Review - Find the number 4 (from previous game)
      {
        id: 'l5-e7',
        instruction: 'מצאו את המספר 4',
        instructionAudio: '/audio/numbers/find-4.mp3',
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-3', image: 'number-5', label: '5' },
          { id: 'opt-4', image: 'number-2', label: '2' },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-3', label: '3' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 8: Multi-select - find all 3, 4, 5
      {
        id: 'l5-e8',
        instruction: 'בחרו את כל המספרים 3, 4, 5',
        instructionAudio: '/audio/numbers/select-all-3-4-5.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-1', label: '1' },
          { id: 'opt-2', image: 'number-3', label: '3', isCorrect: true },
          { id: 'opt-3', image: 'number-2', label: '2' },
          { id: 'opt-4', image: 'number-4', label: '4', isCorrect: true },
          { id: 'opt-5', image: 'number-6', label: '6' },
          { id: 'opt-6', image: 'number-5', label: '5', isCorrect: true },
          { id: 'opt-7', image: 'number-7', label: '7' },
          { id: 'opt-8', image: 'number-8', label: '8' },
          { id: 'opt-9', image: 'number-9', label: '9' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default learnFive;
