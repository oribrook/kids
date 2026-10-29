// Game: Learn the Letter N
// Category: English Letters (LMNOP)
// Type: Standard selection - introduction to the letter N with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnN = {
  id: 'learn-n',
  categoryId: 'letters-lmnop',
  name: 'N',
  description: 'למדו את האות N',
  icon: 'N',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with N
      {
        id: 'ln-en-e1',
        instruction: 'זוהי האות N. המילים הבאות מתחילות באות N',
        instructionAudio: '/audio/en/intro-n.mp3',
        questionImage: 'letter-N',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-nest', label: 'Nest', isCorrect: true, optionAudio: '/audio/en/word-nest.mp3' },
          { id: 'opt-2', image: 'word-nose', label: 'Nose', isCorrect: true, optionAudio: '/audio/en/word-nose.mp3' },
          { id: 'opt-3', image: 'word-nut', label: 'Nut', isCorrect: true, optionAudio: '/audio/en/word-nut.mp3' },
        ],
      },
      // Question 2: Select all N letters from 3x3 grid
      {
        id: 'ln-en-e2',
        instruction: 'בחרו את כל האותיות N',
        instructionAudio: '/audio/en/select-all-n.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-2', image: 'letter-M', label: 'M' },
          { id: 'opt-3', image: 'letter-H', label: 'H' },
          { id: 'opt-4', image: 'letter-L', label: 'L' },
          { id: 'opt-5', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-6', image: 'letter-K', label: 'K' },
          { id: 'opt-7', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-8', image: 'letter-Z', label: 'Z' },
          { id: 'opt-9', image: 'letter-W', label: 'W' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'ln-en-e3',
        instruction: 'מצאו את האות N',
        instructionAudio: '/audio/en/find-n.mp3',
        options: [
          { id: 'opt-1', image: 'letter-M', label: 'M' },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-4', image: 'letter-H', label: 'H' },
          { id: 'opt-5', image: 'letter-Z', label: 'Z' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with N
      {
        id: 'ln-en-e4',
        instruction: 'איזו מילה מתחילה באות N?',
        instructionAudio: '/audio/en/word-starts-n.mp3',
        options: [
          { id: 'opt-1', image: 'word-nest', label: 'Nest', isCorrect: true },
          { id: 'opt-2', image: 'word-achbar', label: 'Mouse' },
          { id: 'opt-3', image: 'word-arye', label: 'Lion' },
          { id: 'opt-4', image: 'word-key', label: 'Key' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter M
      {
        id: 'ln-en-e5',
        instruction: 'מצאו את האות M',
        instructionAudio: '/audio/en/find-m.mp3',
        options: [
          { id: 'opt-1', image: 'letter-N', label: 'N' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-4', image: 'letter-L', label: 'L' },
          { id: 'opt-5', image: 'letter-K', label: 'K' },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with N - using Nose
      {
        id: 'ln-en-e6',
        instruction: 'איזו מילה מתחילה באות N?',
        instructionAudio: '/audio/en/word-starts-n.mp3',
        options: [
          { id: 'opt-1', image: 'word-milky', label: 'Milk' },
          { id: 'opt-2', image: 'word-nose', label: 'Nose', isCorrect: true },
          { id: 'opt-3', image: 'word-limon', label: 'Lemon' },
          { id: 'opt-4', image: 'word-kite', label: 'Kite' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'ln-en-e7',
        instruction: 'מצאו את האות N',
        instructionAudio: '/audio/en/find-n.mp3',
        options: [
          { id: 'opt-1', image: 'letter-M', label: 'M' },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-4', image: 'letter-O', label: 'O' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-Z', label: 'Z' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters K, L, M, N
      {
        id: 'ln-en-e8',
        instruction: 'סמנו את כל האותיות K, L, M ו-N',
        instructionAudio: '/audio/en/mark-all-k-l-m-n.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-6', image: 'letter-K', label: 'K', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-9', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-10', image: 'letter-O', label: 'O' },
          { id: 'opt-11', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-12', image: 'letter-N', label: 'N', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnN;
