// Game: Learn the Letter F
// Category: English Letters (EFG)
// Type: Standard selection - introduction to the letter F with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnF = {
  id: 'learn-f',
  categoryId: 'letters-efg',
  name: 'F',
  description: 'למדו את האות F',
  icon: 'F',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with F
      {
        id: 'lf-en-e1',
        instruction: 'זוהי האות F. המילים הבאות מתחילות באות F',
        instructionAudio: '/audio/en/intro-f.mp3',
        questionImage: 'letter-F',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-dag', label: 'Fish', isCorrect: true, optionAudio: '/audio/en/word-fish.mp3' },
          { id: 'opt-2', image: 'flower', label: 'Flower', isCorrect: true, optionAudio: '/audio/en/word-flower.mp3' },
          { id: 'opt-3', image: 'word-tsfardea', label: 'Frog', isCorrect: true, optionAudio: '/audio/en/word-frog.mp3' },
        ],
      },
      // Question 2: Select all F letters from 3x3 grid
      {
        id: 'lf-en-e2',
        instruction: 'בחרו את כל האותיות F',
        instructionAudio: '/audio/en/select-all-f.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
          { id: 'opt-7', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-8', image: 'letter-C', label: 'C' },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lf-en-e3',
        instruction: 'מצאו את האות F',
        instructionAudio: '/audio/en/find-f.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-E', label: 'E' },
          { id: 'opt-3', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with F
      {
        id: 'lf-en-e4',
        instruction: 'איזו מילה מתחילה באות F?',
        instructionAudio: '/audio/en/word-starts-f.mp3',
        options: [
          { id: 'opt-1', image: 'word-dag', label: 'Fish', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter E
      {
        id: 'lf-en-e5',
        instruction: 'מצאו את האות E',
        instructionAudio: '/audio/en/find-e.mp3',
        options: [
          { id: 'opt-1', image: 'letter-F', label: 'F' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with F - using Flower
      {
        id: 'lf-en-e6',
        instruction: 'איזו מילה מתחילה באות F?',
        instructionAudio: '/audio/en/word-starts-f.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'flower', label: 'Flower', isCorrect: true },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-pil', label: 'Elephant' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lf-en-e7',
        instruction: 'מצאו את האות F',
        instructionAudio: '/audio/en/find-f.mp3',
        options: [
          { id: 'opt-1', image: 'letter-E', label: 'E' },
          { id: 'opt-2', image: 'letter-G', label: 'G' },
          { id: 'opt-3', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters C, D, E, F
      {
        id: 'lf-en-e8',
        instruction: 'סמנו את כל האותיות C, D, E ו-F',
        instructionAudio: '/audio/en/mark-all-c-d-e-f.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-6', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-7', image: 'letter-G', label: 'G' },
          { id: 'opt-8', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-9', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-10', image: 'letter-H', label: 'H' },
          { id: 'opt-11', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-12', image: 'letter-F', label: 'F', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnF;
