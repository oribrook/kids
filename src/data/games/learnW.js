// Game: Learn the Letter W
// Category: English Letters (WXYZ)
// Type: Standard selection - introduction to the letter W with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnW = {
  id: 'learn-w',
  categoryId: 'letters-wxyz',
  name: 'W',
  description: 'למדו את האות W',
  icon: 'W',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with W
      {
        id: 'lw-en-e1',
        instruction: 'זוהי האות W. המילים הבאות מתחילות באות W',
        instructionAudio: '/audio/en/intro-w.mp3',
        questionImage: 'letter-W',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-watermelon', label: 'Watermelon', isCorrect: true, optionAudio: '/audio/en/word-watermelon.mp3' },
          { id: 'opt-2', image: 'word-whale', label: 'Whale', isCorrect: true, optionAudio: '/audio/en/word-whale.mp3' },
          { id: 'opt-3', image: 'word-window', label: 'Window', isCorrect: true, optionAudio: '/audio/en/word-window.mp3' },
        ],
      },
      // Question 2: Select all W letters from 3x3 grid
      {
        id: 'lw-en-e2',
        instruction: 'בחרו את כל האותיות W',
        instructionAudio: '/audio/en/select-all-w.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-2', image: 'letter-M', label: 'M' },
          { id: 'opt-3', image: 'letter-V', label: 'V' },
          { id: 'opt-4', image: 'letter-N', label: 'N' },
          { id: 'opt-5', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-6', image: 'letter-U', label: 'U' },
          { id: 'opt-7', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-8', image: 'letter-X', label: 'X' },
          { id: 'opt-9', image: 'letter-M', label: 'M' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lw-en-e3',
        instruction: 'מצאו את האות W',
        instructionAudio: '/audio/en/find-w.mp3',
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V' },
          { id: 'opt-2', image: 'letter-M', label: 'M' },
          { id: 'opt-3', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-4', image: 'letter-N', label: 'N' },
          { id: 'opt-5', image: 'letter-U', label: 'U' },
          { id: 'opt-6', image: 'letter-X', label: 'X' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with W - using Watermelon
      {
        id: 'lw-en-e4',
        instruction: 'איזו מילה מתחילה באות W?',
        instructionAudio: '/audio/en/word-starts-w.mp3',
        options: [
          { id: 'opt-1', image: 'word-watermelon', label: 'Watermelon', isCorrect: true },
          { id: 'opt-2', image: 'word-violin', label: 'Violin' },
          { id: 'opt-3', image: 'word-umbrella', label: 'Umbrella' },
          { id: 'opt-4', image: 'word-tigris', label: 'Tiger' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter V
      {
        id: 'lw-en-e5',
        instruction: 'מצאו את האות V',
        instructionAudio: '/audio/en/find-v.mp3',
        options: [
          { id: 'opt-1', image: 'letter-W', label: 'W' },
          { id: 'opt-2', image: 'letter-U', label: 'U' },
          { id: 'opt-3', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-4', image: 'letter-Y', label: 'Y' },
          { id: 'opt-5', image: 'letter-A', label: 'A' },
          { id: 'opt-6', image: 'letter-X', label: 'X' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with W - using Whale
      {
        id: 'lw-en-e6',
        instruction: 'איזו מילה מתחילה באות W?',
        instructionAudio: '/audio/en/word-starts-w.mp3',
        options: [
          { id: 'opt-1', image: 'word-volcano', label: 'Volcano' },
          { id: 'opt-2', image: 'word-whale', label: 'Whale', isCorrect: true },
          { id: 'opt-3', image: 'word-unicorn', label: 'Unicorn' },
          { id: 'opt-4', image: 'word-sun', label: 'Sun' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lw-en-e7',
        instruction: 'מצאו את האות W',
        instructionAudio: '/audio/en/find-w.mp3',
        options: [
          { id: 'opt-1', image: 'letter-U', label: 'U' },
          { id: 'opt-2', image: 'letter-V', label: 'V' },
          { id: 'opt-3', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-4', image: 'letter-X', label: 'X' },
          { id: 'opt-5', image: 'letter-Y', label: 'Y' },
          { id: 'opt-6', image: 'letter-Z', label: 'Z' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters T, U, V, W
      {
        id: 'lw-en-e8',
        instruction: 'סמנו את כל האותיות T, U, V ו-W',
        instructionAudio: '/audio/en/mark-all-t-u-v-w.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-6', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-9', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-10', image: 'letter-X', label: 'X' },
          { id: 'opt-11', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-12', image: 'letter-W', label: 'W', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnW;
