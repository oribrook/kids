// Game: Learn the Letter P
// Category: English Letters (LMNOP)
// Type: Standard selection - introduction to the letter P with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnP = {
  id: 'learn-p',
  categoryId: 'letters-lmnop',
  name: 'P',
  description: 'למדו את האות P',
  icon: 'P',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with P
      {
        id: 'lp-en-e1',
        instruction: 'זוהי האות P. המילים הבאות מתחילות באות P',
        instructionAudio: '/audio/en/intro-p.mp3',
        questionImage: 'letter-P',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-pig', label: 'Pig', isCorrect: true, optionAudio: '/audio/en/word-pig.mp3' },
          { id: 'opt-2', image: 'word-pizza', label: 'Pizza', isCorrect: true, optionAudio: '/audio/en/word-pizza.mp3' },
          { id: 'opt-3', image: 'word-pineapple', label: 'Pineapple', isCorrect: true, optionAudio: '/audio/en/word-pineapple.mp3' },
        ],
      },
      // Question 2: Select all P letters from 3x3 grid
      {
        id: 'lp-en-e2',
        instruction: 'בחרו את כל האותיות P',
        instructionAudio: '/audio/en/select-all-p.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-2', image: 'letter-R', label: 'R' },
          { id: 'opt-3', image: 'letter-B', label: 'B' },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-6', image: 'letter-Q', label: 'Q' },
          { id: 'opt-7', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-8', image: 'letter-O', label: 'O' },
          { id: 'opt-9', image: 'letter-N', label: 'N' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lp-en-e3',
        instruction: 'מצאו את האות P',
        instructionAudio: '/audio/en/find-p.mp3',
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R' },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-Q', label: 'Q' },
          { id: 'opt-6', image: 'letter-O', label: 'O' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with P
      {
        id: 'lp-en-e4',
        instruction: 'איזו מילה מתחילה באות P?',
        instructionAudio: '/audio/en/word-starts-p.mp3',
        options: [
          { id: 'opt-1', image: 'word-pig', label: 'Pig', isCorrect: true },
          { id: 'opt-2', image: 'word-orange', label: 'Orange' },
          { id: 'opt-3', image: 'word-nest', label: 'Nest' },
          { id: 'opt-4', image: 'word-achbar', label: 'Mouse' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter O
      {
        id: 'lp-en-e5',
        instruction: 'מצאו את האות O',
        instructionAudio: '/audio/en/find-o.mp3',
        options: [
          { id: 'opt-1', image: 'letter-P', label: 'P' },
          { id: 'opt-2', image: 'letter-Q', label: 'Q' },
          { id: 'opt-3', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-N', label: 'N' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with P - using Pizza
      {
        id: 'lp-en-e6',
        instruction: 'איזו מילה מתחילה באות P?',
        instructionAudio: '/audio/en/word-starts-p.mp3',
        options: [
          { id: 'opt-1', image: 'word-owl', label: 'Owl' },
          { id: 'opt-2', image: 'word-pizza', label: 'Pizza', isCorrect: true },
          { id: 'opt-3', image: 'word-nose', label: 'Nose' },
          { id: 'opt-4', image: 'word-milky', label: 'Milk' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lp-en-e7',
        instruction: 'מצאו את האות P',
        instructionAudio: '/audio/en/find-p.mp3',
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R' },
          { id: 'opt-2', image: 'letter-O', label: 'O' },
          { id: 'opt-3', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-4', image: 'letter-Q', label: 'Q' },
          { id: 'opt-5', image: 'letter-N', label: 'N' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters M, N, O, P
      {
        id: 'lp-en-e8',
        instruction: 'סמנו את כל האותיות M, N, O ו-P',
        instructionAudio: '/audio/en/mark-all-m-n-o-p.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-6', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-9', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-10', image: 'letter-Q', label: 'Q' },
          { id: 'opt-11', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-12', image: 'letter-P', label: 'P', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnP;
