// Game: Learn the Letter Z
// Category: English Letters (WXYZ)
// Type: Standard selection - introduction to the letter Z with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Can reuse word-zebra from Hebrew

const learnZ = {
  id: 'learn-z',
  categoryId: 'letters-wxyz',
  name: 'Z',
  description: 'למדו את האות Z',
  icon: 'Z',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with Z
      {
        id: 'lz-en-e1',
        instruction: 'זוהי האות Z. המילים הבאות מתחילות באות Z',
        instructionAudio: '/audio/en/intro-z.mp3',
        questionImage: 'letter-Z',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'Zebra', isCorrect: true, optionAudio: '/audio/en/word-zebra.mp3' },
          { id: 'opt-2', image: 'word-zoo', label: 'Zoo', isCorrect: true, optionAudio: '/audio/en/word-zoo.mp3' },
          { id: 'opt-3', image: 'word-zero', label: 'Zero', isCorrect: true, optionAudio: '/audio/en/word-zero.mp3' },
        ],
      },
      // Question 2: Select all Z letters from 3x3 grid
      {
        id: 'lz-en-e2',
        instruction: 'בחרו את כל האותיות Z',
        instructionAudio: '/audio/en/select-all-z.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-2', image: 'letter-S', label: 'S' },
          { id: 'opt-3', image: 'letter-N', label: 'N' },
          { id: 'opt-4', image: 'letter-X', label: 'X' },
          { id: 'opt-5', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-6', image: 'letter-Y', label: 'Y' },
          { id: 'opt-7', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-8', image: 'letter-W', label: 'W' },
          { id: 'opt-9', image: 'letter-S', label: 'S' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lz-en-e3',
        instruction: 'מצאו את האות Z',
        instructionAudio: '/audio/en/find-z.mp3',
        options: [
          { id: 'opt-1', image: 'letter-S', label: 'S' },
          { id: 'opt-2', image: 'letter-N', label: 'N' },
          { id: 'opt-3', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-4', image: 'letter-X', label: 'X' },
          { id: 'opt-5', image: 'letter-Y', label: 'Y' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with Z - using Zebra
      {
        id: 'lz-en-e4',
        instruction: 'איזו מילה מתחילה באות Z?',
        instructionAudio: '/audio/en/word-starts-z.mp3',
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'Zebra', isCorrect: true },
          { id: 'opt-2', image: 'word-yellow', label: 'Yellow' },
          { id: 'opt-3', image: 'word-xylophone', label: 'Xylophone' },
          { id: 'opt-4', image: 'word-whale', label: 'Whale' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter Y
      {
        id: 'lz-en-e5',
        instruction: 'מצאו את האות Y',
        instructionAudio: '/audio/en/find-y.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Z', label: 'Z' },
          { id: 'opt-2', image: 'letter-V', label: 'V' },
          { id: 'opt-3', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-4', image: 'letter-X', label: 'X' },
          { id: 'opt-5', image: 'letter-T', label: 'T' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with Z - using Zoo
      {
        id: 'lz-en-e6',
        instruction: 'איזו מילה מתחילה באות Z?',
        instructionAudio: '/audio/en/word-starts-z.mp3',
        options: [
          { id: 'opt-1', image: 'word-yogurt', label: 'Yogurt' },
          { id: 'opt-2', image: 'word-zoo', label: 'Zoo', isCorrect: true },
          { id: 'opt-3', image: 'word-x-ray', label: 'X-ray' },
          { id: 'opt-4', image: 'word-watermelon', label: 'Watermelon' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lz-en-e7',
        instruction: 'מצאו את האות Z',
        instructionAudio: '/audio/en/find-z.mp3',
        options: [
          { id: 'opt-1', image: 'letter-X', label: 'X' },
          { id: 'opt-2', image: 'letter-Y', label: 'Y' },
          { id: 'opt-3', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-4', image: 'letter-A', label: 'A' },
          { id: 'opt-5', image: 'letter-S', label: 'S' },
          { id: 'opt-6', image: 'letter-N', label: 'N' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters W, X, Y, Z
      {
        id: 'lz-en-e8',
        instruction: 'סמנו את כל האותיות W, X, Y ו-Z',
        instructionAudio: '/audio/en/mark-all-w-x-y-z.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-6', image: 'letter-W', label: 'W', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-Z', label: 'Z', isCorrect: true },
          { id: 'opt-9', image: 'letter-X', label: 'X', isCorrect: true },
          { id: 'opt-10', image: 'letter-S', label: 'S' },
          { id: 'opt-11', image: 'letter-Y', label: 'Y', isCorrect: true },
          { id: 'opt-12', image: 'letter-Z', label: 'Z', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnZ;
