// Game: Learn the Letter K
// Category: English Letters (HIJK)
// Type: Standard selection - introduction to the letter K with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnK = {
  id: 'learn-k',
  categoryId: 'letters-hijk',
  name: 'K',
  description: 'למדו את האות K',
  icon: 'K',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with K
      {
        id: 'lk-en-e1',
        instruction: 'זוהי האות K. המילים הבאות מתחילות באות K',
        instructionAudio: '/audio/en/intro-k.mp3',
        questionImage: 'letter-K',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kanguru', label: 'Kangaroo', isCorrect: true, optionAudio: '/audio/en/word-kangaroo.mp3' },
          { id: 'opt-2', image: 'word-kite', label: 'Kite', isCorrect: true, optionAudio: '/audio/en/word-kite.mp3' },
          { id: 'opt-3', image: 'word-key', label: 'Key', isCorrect: true, optionAudio: '/audio/en/word-key.mp3' },
        ],
      },
      // Question 2: Select all K letters from 3x3 grid
      {
        id: 'lk-en-e2',
        instruction: 'בחרו את כל האותיות K',
        instructionAudio: '/audio/en/select-all-k.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-2', image: 'letter-H', label: 'H' },
          { id: 'opt-3', image: 'letter-I', label: 'I' },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
          { id: 'opt-7', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-A', label: 'A' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lk-en-e3',
        instruction: 'מצאו את האות K',
        instructionAudio: '/audio/en/find-k.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with K
      {
        id: 'lk-en-e4',
        instruction: 'איזו מילה מתחילה באות K?',
        instructionAudio: '/audio/en/word-starts-k.mp3',
        options: [
          { id: 'opt-1', image: 'word-kite', label: 'Kite', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-juice', label: 'Juice' },
          { id: 'opt-4', image: 'word-ice-cream', label: 'Ice cream' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter J
      {
        id: 'lk-en-e5',
        instruction: 'מצאו את האות J',
        instructionAudio: '/audio/en/find-j.mp3',
        options: [
          { id: 'opt-1', image: 'letter-K', label: 'K' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-4', image: 'letter-I', label: 'I' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with K - using Key
      {
        id: 'lk-en-e6',
        instruction: 'איזו מילה מתחילה באות K?',
        instructionAudio: '/audio/en/word-starts-k.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-key', label: 'Key', isCorrect: true },
          { id: 'opt-3', image: 'word-jelly', label: 'Jelly' },
          { id: 'opt-4', image: 'word-igloo', label: 'Igloo' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lk-en-e7',
        instruction: 'מצאו את האות K',
        instructionAudio: '/audio/en/find-k.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-4', image: 'letter-L', label: 'L' },
          { id: 'opt-5', image: 'letter-J', label: 'J' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters H, I, J, K
      {
        id: 'lk-en-e8',
        instruction: 'סמנו את כל האותיות H, I, J ו-K',
        instructionAudio: '/audio/en/mark-all-h-i-j-k.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-6', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-9', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-10', image: 'letter-L', label: 'L' },
          { id: 'opt-11', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-12', image: 'letter-K', label: 'K', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnK;
