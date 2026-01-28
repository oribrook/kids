// Game: Learn the Letter G
// Category: English Letters (EFG)
// Type: Standard selection - introduction to the letter G with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnG = {
  id: 'learn-g',
  categoryId: 'letters-efg',
  name: 'G',
  description: 'למדו את האות G',
  icon: 'G',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with G
      {
        id: 'lg-en-e1',
        instruction: 'זוהי האות G. המילים הבאות מתחילות באות G',
        instructionAudio: '/audio/en/intro-g.mp3',
        questionImage: 'letter-G',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'grapes', label: 'Grapes', isCorrect: true, optionAudio: '/audio/en/word-grapes.mp3' },
          { id: 'opt-2', image: 'word-gina', label: 'Garden', isCorrect: true, optionAudio: '/audio/en/word-garden.mp3' },
          { id: 'opt-3', image: 'word-deshe', label: 'Grass', isCorrect: true, optionAudio: '/audio/en/word-grass.mp3' },
        ],
      },
      // Question 2: Select all G letters from 3x3 grid
      {
        id: 'lg-en-e2',
        instruction: 'בחרו את כל האותיות G',
        instructionAudio: '/audio/en/select-all-g.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
          { id: 'opt-7', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-B', label: 'B' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lg-en-e3',
        instruction: 'מצאו את האות G',
        instructionAudio: '/audio/en/find-g.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-F', label: 'F' },
          { id: 'opt-3', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with G
      {
        id: 'lg-en-e4',
        instruction: 'איזו מילה מתחילה באות G?',
        instructionAudio: '/audio/en/word-starts-g.mp3',
        options: [
          { id: 'opt-1', image: 'grapes', label: 'Grapes', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-dag', label: 'Fish' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter F
      {
        id: 'lg-en-e5',
        instruction: 'מצאו את האות F',
        instructionAudio: '/audio/en/find-f.mp3',
        options: [
          { id: 'opt-1', image: 'letter-G', label: 'G' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with G - using Garden
      {
        id: 'lg-en-e6',
        instruction: 'איזו מילה מתחילה באות G?',
        instructionAudio: '/audio/en/word-starts-g.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-gina', label: 'Garden', isCorrect: true },
          { id: 'opt-3', image: 'flower', label: 'Flower' },
          { id: 'opt-4', image: 'word-pil', label: 'Elephant' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lg-en-e7',
        instruction: 'מצאו את האות G',
        instructionAudio: '/audio/en/find-g.mp3',
        options: [
          { id: 'opt-1', image: 'letter-F', label: 'F' },
          { id: 'opt-2', image: 'letter-E', label: 'E' },
          { id: 'opt-3', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-4', image: 'letter-H', label: 'H' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters D, E, F, G
      {
        id: 'lg-en-e8',
        instruction: 'סמנו את כל האותיות D, E, F ו-G',
        instructionAudio: '/audio/en/mark-all-d-e-f-g.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-6', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-9', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-10', image: 'letter-H', label: 'H' },
          { id: 'opt-11', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-12', image: 'letter-G', label: 'G', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnG;
