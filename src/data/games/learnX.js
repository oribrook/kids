// Game: Learn the Letter X
// Category: English Letters (WXYZ)
// Type: Standard selection - introduction to the letter X with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnX = {
  id: 'learn-x',
  categoryId: 'letters-wxyz',
  name: 'X',
  description: 'למדו את האות X',
  icon: 'X',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with X
      {
        id: 'lx-en-e1',
        instruction: 'זוהי האות X. המילים הבאות מתחילות באות X',
        instructionAudio: '/audio/en/intro-x.mp3',
        questionImage: 'letter-X',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-xylophone', label: 'Xylophone', isCorrect: true, optionAudio: '/audio/en/word-xylophone.mp3' },
          { id: 'opt-2', image: 'word-x-ray', label: 'X-ray', isCorrect: true, optionAudio: '/audio/en/word-x-ray.mp3' },
          { id: 'opt-3', image: 'word-fox', label: 'Fox (has X)', isCorrect: true, optionAudio: '/audio/en/word-fox.mp3' },
        ],
      },
      // Question 2: Select all X letters from 3x3 grid
      {
        id: 'lx-en-e2',
        instruction: 'בחרו את כל האותיות X',
        instructionAudio: '/audio/en/select-all-x.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-2', image: 'letter-Y', label: 'Y' },
          { id: 'opt-3', image: 'letter-K', label: 'K' },
          { id: 'opt-4', image: 'letter-Z', label: 'Z' },
          { id: 'opt-5', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-6', image: 'letter-V', label: 'V' },
          { id: 'opt-7', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-8', image: 'letter-W', label: 'W' },
          { id: 'opt-9', image: 'letter-Y', label: 'Y' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lx-en-e3',
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
      // Question 4: Click on the item that starts with X - using Xylophone
      {
        id: 'lx-en-e4',
        instruction: 'איזו מילה מתחילה באות X?',
        instructionAudio: '/audio/en/word-starts-x.mp3',
        options: [
          { id: 'opt-1', image: 'word-xylophone', label: 'Xylophone', isCorrect: true },
          { id: 'opt-2', image: 'word-whale', label: 'Whale' },
          { id: 'opt-3', image: 'word-violin', label: 'Violin' },
          { id: 'opt-4', image: 'word-umbrella', label: 'Umbrella' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter W
      {
        id: 'lx-en-e5',
        instruction: 'מצאו את האות W',
        instructionAudio: '/audio/en/find-w.mp3',
        options: [
          { id: 'opt-1', image: 'letter-X', label: 'X' },
          { id: 'opt-2', image: 'letter-V', label: 'V' },
          { id: 'opt-3', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-4', image: 'letter-M', label: 'M' },
          { id: 'opt-5', image: 'letter-N', label: 'N' },
          { id: 'opt-6', image: 'letter-Y', label: 'Y' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that has X - using X-ray
      {
        id: 'lx-en-e6',
        instruction: 'איזו מילה מתחילה באות X?',
        instructionAudio: '/audio/en/word-starts-x.mp3',
        options: [
          { id: 'opt-1', image: 'word-watermelon', label: 'Watermelon' },
          { id: 'opt-2', image: 'word-x-ray', label: 'X-ray', isCorrect: true },
          { id: 'opt-3', image: 'word-volcano', label: 'Volcano' },
          { id: 'opt-4', image: 'word-rainbow', label: 'Rainbow' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lx-en-e7',
        instruction: 'מצאו את האות X',
        instructionAudio: '/audio/en/find-x.mp3',
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V' },
          { id: 'opt-2', image: 'letter-W', label: 'W' },
          { id: 'opt-3', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-4', image: 'letter-Y', label: 'Y' },
          { id: 'opt-5', image: 'letter-Z', label: 'Z' },
          { id: 'opt-6', image: 'letter-K', label: 'K' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters U, V, W, X
      {
        id: 'lx-en-e8',
        instruction: 'סמנו את כל האותיות U, V, W ו-X',
        instructionAudio: '/audio/en/mark-all-u-v-w-x.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-6', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-9', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-10', image: 'letter-Y', label: 'Y' },
          { id: 'opt-11', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-12', image: 'letter-X', label: 'X', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnX;
