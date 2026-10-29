// Game: Learn the Letter R
// Category: English Letters (QRST)
// Type: Standard selection - introduction to the letter R with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing Hebrew ר images where possible (raashan, regel, rofe, rakevet)

const learnR = {
  id: 'learn-r',
  categoryId: 'letters-qrst',
  name: 'R',
  description: 'למדו את האות R',
  icon: 'R',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with R
      {
        id: 'lr-en-e1',
        instruction: 'זוהי האות R. המילים הבאות מתחילות באות R',
        instructionAudio: '/audio/en/intro-r.mp3',
        questionImage: 'letter-R',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-rabbit', label: 'Rabbit', isCorrect: true, optionAudio: '/audio/en/word-rabbit.mp3' },
          { id: 'opt-2', image: 'word-rainbow', label: 'Rainbow', isCorrect: true, optionAudio: '/audio/en/word-rainbow.mp3' },
          { id: 'opt-3', image: 'word-rocket', label: 'Rocket', isCorrect: true, optionAudio: '/audio/en/word-rocket.mp3' },
        ],
      },
      // Question 2: Select all R letters from 3x3 grid
      {
        id: 'lr-en-e2',
        instruction: 'בחרו את כל האותיות R',
        instructionAudio: '/audio/en/select-all-r.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-2', image: 'letter-P', label: 'P' },
          { id: 'opt-3', image: 'letter-B', label: 'B' },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-6', image: 'letter-Q', label: 'Q' },
          { id: 'opt-7', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-8', image: 'letter-N', label: 'N' },
          { id: 'opt-9', image: 'letter-P', label: 'P' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lr-en-e3',
        instruction: 'מצאו את האות R',
        instructionAudio: '/audio/en/find-r.mp3',
        options: [
          { id: 'opt-1', image: 'letter-P', label: 'P' },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-Q', label: 'Q' },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with R - using Rabbit
      {
        id: 'lr-en-e4',
        instruction: 'איזו מילה מתחילה באות R?',
        instructionAudio: '/audio/en/word-starts-r.mp3',
        options: [
          { id: 'opt-1', image: 'word-rabbit', label: 'Rabbit', isCorrect: true },
          { id: 'opt-2', image: 'word-queen', label: 'Queen' },
          { id: 'opt-3', image: 'word-pig', label: 'Pig' },
          { id: 'opt-4', image: 'word-orange', label: 'Orange' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter Q
      {
        id: 'lr-en-e5',
        instruction: 'מצאו את האות Q',
        instructionAudio: '/audio/en/find-q.mp3',
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R' },
          { id: 'opt-2', image: 'letter-O', label: 'O' },
          { id: 'opt-3', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-P', label: 'P' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with R - using Rainbow
      {
        id: 'lr-en-e6',
        instruction: 'איזו מילה מתחילה באות R?',
        instructionAudio: '/audio/en/word-starts-r.mp3',
        options: [
          { id: 'opt-1', image: 'word-quilt', label: 'Quilt' },
          { id: 'opt-2', image: 'word-rainbow', label: 'Rainbow', isCorrect: true },
          { id: 'opt-3', image: 'word-pizza', label: 'Pizza' },
          { id: 'opt-4', image: 'word-owl', label: 'Owl' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lr-en-e7',
        instruction: 'מצאו את האות R',
        instructionAudio: '/audio/en/find-r.mp3',
        options: [
          { id: 'opt-1', image: 'letter-P', label: 'P' },
          { id: 'opt-2', image: 'letter-Q', label: 'Q' },
          { id: 'opt-3', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-4', image: 'letter-S', label: 'S' },
          { id: 'opt-5', image: 'letter-B', label: 'B' },
          { id: 'opt-6', image: 'letter-K', label: 'K' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters O, P, Q, R
      {
        id: 'lr-en-e8',
        instruction: 'סמנו את כל האותיות O, P, Q ו-R',
        instructionAudio: '/audio/en/mark-all-o-p-q-r.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-6', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-9', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-10', image: 'letter-S', label: 'S' },
          { id: 'opt-11', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-12', image: 'letter-R', label: 'R', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnR;
