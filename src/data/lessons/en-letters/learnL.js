// Game: Learn the Letter L
// Category: English Letters (LMNOP)
// Type: Standard selection - introduction to the letter L with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnL = {
  id: 'learn-l',
  categoryId: 'letters-lmnop',
  name: 'L',
  description: 'למדו את האות L',
  icon: 'L',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with L
      {
        id: 'll-en-e1',
        instruction: 'זוהי האות L. המילים הבאות מתחילות באות L',
        instructionAudio: '/audio/en/intro-l.mp3',
        questionImage: 'letter-L',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'Lion', isCorrect: true, optionAudio: '/audio/en/word-lion.mp3' },
          { id: 'opt-2', image: 'word-limon', label: 'Lemon', isCorrect: true, optionAudio: '/audio/en/word-lemon.mp3' },
          { id: 'opt-3', image: 'word-leaf', label: 'Leaf', isCorrect: true, optionAudio: '/audio/en/word-leaf.mp3' },
        ],
      },
      // Question 2: Select all L letters from 3x3 grid
      {
        id: 'll-en-e2',
        instruction: 'בחרו את כל האותיות L',
        instructionAudio: '/audio/en/select-all-l.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-2', image: 'letter-K', label: 'K' },
          { id: 'opt-3', image: 'letter-I', label: 'I' },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-6', image: 'letter-H', label: 'H' },
          { id: 'opt-7', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-8', image: 'letter-E', label: 'E' },
          { id: 'opt-9', image: 'letter-A', label: 'A' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'll-en-e3',
        instruction: 'מצאו את האות L',
        instructionAudio: '/audio/en/find-l.mp3',
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I' },
          { id: 'opt-2', image: 'letter-J', label: 'J' },
          { id: 'opt-3', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with L
      {
        id: 'll-en-e4',
        instruction: 'איזו מילה מתחילה באות L?',
        instructionAudio: '/audio/en/word-starts-l.mp3',
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'Lion', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-key', label: 'Key' },
          { id: 'opt-4', image: 'word-juice', label: 'Juice' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter K
      {
        id: 'll-en-e5',
        instruction: 'מצאו את האות K',
        instructionAudio: '/audio/en/find-k.mp3',
        options: [
          { id: 'opt-1', image: 'letter-L', label: 'L' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-I', label: 'I' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with L - using Lemon
      {
        id: 'll-en-e6',
        instruction: 'איזו מילה מתחילה באות L?',
        instructionAudio: '/audio/en/word-starts-l.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-limon', label: 'Lemon', isCorrect: true },
          { id: 'opt-3', image: 'word-kite', label: 'Kite' },
          { id: 'opt-4', image: 'word-igloo', label: 'Igloo' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'll-en-e7',
        instruction: 'מצאו את האות L',
        instructionAudio: '/audio/en/find-l.mp3',
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I' },
          { id: 'opt-2', image: 'letter-J', label: 'J' },
          { id: 'opt-3', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-4', image: 'letter-M', label: 'M' },
          { id: 'opt-5', image: 'letter-K', label: 'K' },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters I, J, K, L
      {
        id: 'll-en-e8',
        instruction: 'סמנו את כל האותיות I, J, K ו-L',
        instructionAudio: '/audio/en/mark-all-i-j-k-l.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-6', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-9', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-10', image: 'letter-M', label: 'M' },
          { id: 'opt-11', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-12', image: 'letter-L', label: 'L', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnL;
