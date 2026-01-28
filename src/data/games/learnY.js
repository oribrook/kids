// Game: Learn the Letter Y
// Category: English Letters (WXYZ)
// Type: Standard selection - introduction to the letter Y with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnY = {
  id: 'learn-y',
  categoryId: 'letters-wxyz',
  name: 'Y',
  description: 'למדו את האות Y',
  icon: 'Y',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with Y
      {
        id: 'ly-en-e1',
        instruction: 'זוהי האות Y. המילים הבאות מתחילות באות Y',
        instructionAudio: '/audio/en/intro-y.mp3',
        questionImage: 'letter-Y',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-yellow', label: 'Yellow', isCorrect: true, optionAudio: '/audio/en/word-yellow.mp3' },
          { id: 'opt-2', image: 'word-yogurt', label: 'Yogurt', isCorrect: true, optionAudio: '/audio/en/word-yogurt.mp3' },
          { id: 'opt-3', image: 'word-yarn', label: 'Yarn', isCorrect: true, optionAudio: '/audio/en/word-yarn.mp3' },
        ],
      },
      // Question 2: Select all Y letters from 3x3 grid
      {
        id: 'ly-en-e2',
        instruction: 'בחרו את כל האותיות Y',
        instructionAudio: '/audio/en/select-all-y.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-2', image: 'letter-V', label: 'V' },
          { id: 'opt-3', image: 'letter-X', label: 'X' },
          { id: 'opt-4', image: 'letter-T', label: 'T' },
          { id: 'opt-5', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
          { id: 'opt-7', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-8', image: 'letter-Z', label: 'Z' },
          { id: 'opt-9', image: 'letter-V', label: 'V' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'ly-en-e3',
        instruction: 'מצאו את האות Y',
        instructionAudio: '/audio/en/find-y.mp3',
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V' },
          { id: 'opt-2', image: 'letter-X', label: 'X' },
          { id: 'opt-3', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-4', image: 'letter-T', label: 'T' },
          { id: 'opt-5', image: 'letter-W', label: 'W' },
          { id: 'opt-6', image: 'letter-Z', label: 'Z' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with Y - using Yellow
      {
        id: 'ly-en-e4',
        instruction: 'איזו מילה מתחילה באות Y?',
        instructionAudio: '/audio/en/word-starts-y.mp3',
        options: [
          { id: 'opt-1', image: 'word-yellow', label: 'Yellow', isCorrect: true },
          { id: 'opt-2', image: 'word-xylophone', label: 'Xylophone' },
          { id: 'opt-3', image: 'word-whale', label: 'Whale' },
          { id: 'opt-4', image: 'word-violin', label: 'Violin' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter X
      {
        id: 'ly-en-e5',
        instruction: 'מצאו את האות X',
        instructionAudio: '/audio/en/find-x.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Y', label: 'Y' },
          { id: 'opt-2', image: 'letter-K', label: 'K' },
          { id: 'opt-3', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-4', image: 'letter-Z', label: 'Z' },
          { id: 'opt-5', image: 'letter-V', label: 'V' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with Y - using Yogurt
      {
        id: 'ly-en-e6',
        instruction: 'איזו מילה מתחילה באות Y?',
        instructionAudio: '/audio/en/word-starts-y.mp3',
        options: [
          { id: 'opt-1', image: 'word-x-ray', label: 'X-ray' },
          { id: 'opt-2', image: 'word-yogurt', label: 'Yogurt', isCorrect: true },
          { id: 'opt-3', image: 'word-watermelon', label: 'Watermelon' },
          { id: 'opt-4', image: 'word-volcano', label: 'Volcano' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'ly-en-e7',
        instruction: 'מצאו את האות Y',
        instructionAudio: '/audio/en/find-y.mp3',
        options: [
          { id: 'opt-1', image: 'letter-W', label: 'W' },
          { id: 'opt-2', image: 'letter-X', label: 'X' },
          { id: 'opt-3', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-4', image: 'letter-Z', label: 'Z' },
          { id: 'opt-5', image: 'letter-V', label: 'V' },
          { id: 'opt-6', image: 'letter-T', label: 'T' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters V, W, X, Y
      {
        id: 'ly-en-e8',
        instruction: 'סמנו את כל האותיות V, W, X ו-Y',
        instructionAudio: '/audio/en/mark-all-v-w-x-y.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-6', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-9', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-10', image: 'letter-Z', label: 'Z' },
          { id: 'opt-11', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-12', image: 'letter-Y', label: 'Y', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnY;
