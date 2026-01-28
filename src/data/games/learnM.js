// Game: Learn the Letter M
// Category: English Letters (LMNOP)
// Type: Standard selection - introduction to the letter M with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnM = {
  id: 'learn-m',
  categoryId: 'letters-lmnop',
  name: 'M',
  description: 'למדו את האות M',
  icon: 'M',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with M
      {
        id: 'lm-en-e1',
        instruction: 'זוהי האות M. המילים הבאות מתחילות באות M',
        instructionAudio: '/audio/en/intro-m.mp3',
        questionImage: 'letter-M',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-achbar', label: 'Mouse', isCorrect: true, optionAudio: '/audio/en/word-mouse.mp3' },
          { id: 'opt-2', image: 'word-yareach', label: 'Moon', isCorrect: true, optionAudio: '/audio/en/word-moon.mp3' },
          { id: 'opt-3', image: 'word-milky', label: 'Milk', isCorrect: true, optionAudio: '/audio/en/word-milk.mp3' },
        ],
      },
      // Question 2: Select all M letters from 3x3 grid
      {
        id: 'lm-en-e2',
        instruction: 'בחרו את כל האותיות M',
        instructionAudio: '/audio/en/select-all-m.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-N', label: 'N' },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-6', image: 'letter-J', label: 'J' },
          { id: 'opt-7', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-8', image: 'letter-H', label: 'H' },
          { id: 'opt-9', image: 'letter-W', label: 'W' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lm-en-e3',
        instruction: 'מצאו את האות M',
        instructionAudio: '/audio/en/find-m.mp3',
        options: [
          { id: 'opt-1', image: 'letter-N', label: 'N' },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with M
      {
        id: 'lm-en-e4',
        instruction: 'איזו מילה מתחילה באות M?',
        instructionAudio: '/audio/en/word-starts-m.mp3',
        options: [
          { id: 'opt-1', image: 'word-achbar', label: 'Mouse', isCorrect: true },
          { id: 'opt-2', image: 'word-arye', label: 'Lion' },
          { id: 'opt-3', image: 'word-key', label: 'Key' },
          { id: 'opt-4', image: 'word-juice', label: 'Juice' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter L
      {
        id: 'lm-en-e5',
        instruction: 'מצאו את האות L',
        instructionAudio: '/audio/en/find-l.mp3',
        options: [
          { id: 'opt-1', image: 'letter-M', label: 'M' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-I', label: 'I' },
          { id: 'opt-6', image: 'letter-N', label: 'N' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with M - using Moon
      {
        id: 'lm-en-e6',
        instruction: 'איזו מילה מתחילה באות M?',
        instructionAudio: '/audio/en/word-starts-m.mp3',
        options: [
          { id: 'opt-1', image: 'word-limon', label: 'Lemon' },
          { id: 'opt-2', image: 'word-yareach', label: 'Moon', isCorrect: true },
          { id: 'opt-3', image: 'word-kite', label: 'Kite' },
          { id: 'opt-4', image: 'word-jelly', label: 'Jelly' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lm-en-e7',
        instruction: 'מצאו את האות M',
        instructionAudio: '/audio/en/find-m.mp3',
        options: [
          { id: 'opt-1', image: 'letter-N', label: 'N' },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-4', image: 'letter-O', label: 'O' },
          { id: 'opt-5', image: 'letter-K', label: 'K' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters J, K, L, M
      {
        id: 'lm-en-e8',
        instruction: 'סמנו את כל האותיות J, K, L ו-M',
        instructionAudio: '/audio/en/mark-all-j-k-l-m.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-6', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-9', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-10', image: 'letter-N', label: 'N' },
          { id: 'opt-11', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-12', image: 'letter-M', label: 'M', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnM;
