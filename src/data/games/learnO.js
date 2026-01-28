// Game: Learn the Letter O
// Category: English Letters (LMNOP)
// Type: Standard selection - introduction to the letter O with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnO = {
  id: 'learn-o',
  categoryId: 'letters-lmnop',
  name: 'O',
  description: 'למדו את האות O',
  icon: 'O',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with O
      {
        id: 'lo-en-e1',
        instruction: 'זוהי האות O. המילים הבאות מתחילות באות O',
        instructionAudio: '/audio/en/intro-o.mp3',
        questionImage: 'letter-O',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-orange', label: 'Orange', isCorrect: true, optionAudio: '/audio/en/word-orange.mp3' },
          { id: 'opt-2', image: 'word-owl', label: 'Owl', isCorrect: true, optionAudio: '/audio/en/word-owl.mp3' },
          { id: 'opt-3', image: 'word-octopus', label: 'Octopus', isCorrect: true, optionAudio: '/audio/en/word-octopus.mp3' },
        ],
      },
      // Question 2: Select all O letters from 3x3 grid
      {
        id: 'lo-en-e2',
        instruction: 'בחרו את כל האותיות O',
        instructionAudio: '/audio/en/select-all-o.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-2', image: 'letter-Q', label: 'Q' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
          { id: 'opt-7', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-8', image: 'letter-N', label: 'N' },
          { id: 'opt-9', image: 'letter-M', label: 'M' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lo-en-e3',
        instruction: 'מצאו את האות O',
        instructionAudio: '/audio/en/find-o.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q' },
          { id: 'opt-2', image: 'letter-C', label: 'C' },
          { id: 'opt-3', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-N', label: 'N' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with O
      {
        id: 'lo-en-e4',
        instruction: 'איזו מילה מתחילה באות O?',
        instructionAudio: '/audio/en/word-starts-o.mp3',
        options: [
          { id: 'opt-1', image: 'word-orange', label: 'Orange', isCorrect: true },
          { id: 'opt-2', image: 'word-nest', label: 'Nest' },
          { id: 'opt-3', image: 'word-achbar', label: 'Mouse' },
          { id: 'opt-4', image: 'word-arye', label: 'Lion' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter N
      {
        id: 'lo-en-e5',
        instruction: 'מצאו את האות N',
        instructionAudio: '/audio/en/find-n.mp3',
        options: [
          { id: 'opt-1', image: 'letter-O', label: 'O' },
          { id: 'opt-2', image: 'letter-M', label: 'M' },
          { id: 'opt-3', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-4', image: 'letter-L', label: 'L' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-Z', label: 'Z' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with O - using Owl
      {
        id: 'lo-en-e6',
        instruction: 'איזו מילה מתחילה באות O?',
        instructionAudio: '/audio/en/word-starts-o.mp3',
        options: [
          { id: 'opt-1', image: 'word-nose', label: 'Nose' },
          { id: 'opt-2', image: 'word-owl', label: 'Owl', isCorrect: true },
          { id: 'opt-3', image: 'word-milky', label: 'Milk' },
          { id: 'opt-4', image: 'word-limon', label: 'Lemon' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lo-en-e7',
        instruction: 'מצאו את האות O',
        instructionAudio: '/audio/en/find-o.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q' },
          { id: 'opt-2', image: 'letter-N', label: 'N' },
          { id: 'opt-3', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-4', image: 'letter-P', label: 'P' },
          { id: 'opt-5', image: 'letter-M', label: 'M' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters L, M, N, O
      {
        id: 'lo-en-e8',
        instruction: 'סמנו את כל האותיות L, M, N ו-O',
        instructionAudio: '/audio/en/mark-all-l-m-n-o.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-6', image: 'letter-L', label: 'L', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-O', label: 'O', isCorrect: true },
          { id: 'opt-9', image: 'letter-M', label: 'M', isCorrect: true },
          { id: 'opt-10', image: 'letter-P', label: 'P' },
          { id: 'opt-11', image: 'letter-N', label: 'N', isCorrect: true },
          { id: 'opt-12', image: 'letter-O', label: 'O', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnO;
