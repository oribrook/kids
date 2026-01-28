// Game: Learn the Letter Q
// Category: English Letters (QRST)
// Type: Standard selection - introduction to the letter Q with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnQ = {
  id: 'learn-q',
  categoryId: 'letters-qrst',
  name: 'Q',
  description: 'למדו את האות Q',
  icon: 'Q',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with Q
      {
        id: 'lq-en-e1',
        instruction: 'זוהי האות Q. המילים הבאות מתחילות באות Q',
        instructionAudio: '/audio/en/intro-q.mp3',
        questionImage: 'letter-Q',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-queen', label: 'Queen', isCorrect: true, optionAudio: '/audio/en/word-queen.mp3' },
          { id: 'opt-2', image: 'word-question', label: 'Question', isCorrect: true, optionAudio: '/audio/en/word-question.mp3' },
          { id: 'opt-3', image: 'word-quilt', label: 'Quilt', isCorrect: true, optionAudio: '/audio/en/word-quilt.mp3' },
        ],
      },
      // Question 2: Select all Q letters from 3x3 grid
      {
        id: 'lq-en-e2',
        instruction: 'בחרו את כל האותיות Q',
        instructionAudio: '/audio/en/select-all-q.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-2', image: 'letter-O', label: 'O' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-G', label: 'G' },
          { id: 'opt-5', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-6', image: 'letter-P', label: 'P' },
          { id: 'opt-7', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-O', label: 'O' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lq-en-e3',
        instruction: 'מצאו את האות Q',
        instructionAudio: '/audio/en/find-q.mp3',
        options: [
          { id: 'opt-1', image: 'letter-O', label: 'O' },
          { id: 'opt-2', image: 'letter-C', label: 'C' },
          { id: 'opt-3', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-4', image: 'letter-G', label: 'G' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-P', label: 'P' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with Q
      {
        id: 'lq-en-e4',
        instruction: 'איזו מילה מתחילה באות Q?',
        instructionAudio: '/audio/en/word-starts-q.mp3',
        options: [
          { id: 'opt-1', image: 'word-queen', label: 'Queen', isCorrect: true },
          { id: 'opt-2', image: 'word-pig', label: 'Pig' },
          { id: 'opt-3', image: 'word-orange', label: 'Orange' },
          { id: 'opt-4', image: 'word-nest', label: 'Nest' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter P
      {
        id: 'lq-en-e5',
        instruction: 'מצאו את האות P',
        instructionAudio: '/audio/en/find-p.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q' },
          { id: 'opt-2', image: 'letter-R', label: 'R' },
          { id: 'opt-3', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-O', label: 'O' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with Q - using Quilt
      {
        id: 'lq-en-e6',
        instruction: 'איזו מילה מתחילה באות Q?',
        instructionAudio: '/audio/en/word-starts-q.mp3',
        options: [
          { id: 'opt-1', image: 'word-owl', label: 'Owl' },
          { id: 'opt-2', image: 'word-quilt', label: 'Quilt', isCorrect: true },
          { id: 'opt-3', image: 'word-pizza', label: 'Pizza' },
          { id: 'opt-4', image: 'word-nose', label: 'Nose' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lq-en-e7',
        instruction: 'מצאו את האות Q',
        instructionAudio: '/audio/en/find-q.mp3',
        options: [
          { id: 'opt-1', image: 'letter-O', label: 'O' },
          { id: 'opt-2', image: 'letter-P', label: 'P' },
          { id: 'opt-3', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-4', image: 'letter-R', label: 'R' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters N, O, P, Q
      {
        id: 'lq-en-e8',
        instruction: 'סמנו את כל האותיות N, O, P ו-Q',
        instructionAudio: '/audio/en/mark-all-n-o-p-q.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-6', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-9', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-10', image: 'letter-R', label: 'R' },
          { id: 'opt-11', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-12', image: 'letter-Q', label: 'Q', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnQ;
