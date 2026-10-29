// Game: Learn the Letter H
// Category: English Letters (HIJK)
// Type: Standard selection - introduction to the letter H with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnH = {
  id: 'learn-h',
  categoryId: 'letters-hijk',
  name: 'H',
  description: 'למדו את האות H',
  icon: 'H',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with H
      {
        id: 'lh-en-e1',
        instruction: 'זוהי האות H. המילים הבאות מתחילות באות H',
        instructionAudio: '/audio/en/intro-h.mp3',
        questionImage: 'letter-H',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'Horse', isCorrect: true, optionAudio: '/audio/en/word-horse.mp3' },
          { id: 'opt-2', image: 'word-kova', label: 'Hat', isCorrect: true, optionAudio: '/audio/en/word-hat.mp3' },
          { id: 'opt-3', image: 'word-dvash', label: 'Honey', isCorrect: true, optionAudio: '/audio/en/word-honey.mp3' },
        ],
      },
      // Question 2: Select all H letters from 3x3 grid
      {
        id: 'lh-en-e2',
        instruction: 'בחרו את כל האותיות H',
        instructionAudio: '/audio/en/select-all-h.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
          { id: 'opt-7', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-B', label: 'B' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lh-en-e3',
        instruction: 'מצאו את האות H',
        instructionAudio: '/audio/en/find-h.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-F', label: 'F' },
          { id: 'opt-3', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with H
      {
        id: 'lh-en-e4',
        instruction: 'איזו מילה מתחילה באות H?',
        instructionAudio: '/audio/en/word-starts-h.mp3',
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'Horse', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-dag', label: 'Fish' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter G
      {
        id: 'lh-en-e5',
        instruction: 'מצאו את האות G',
        instructionAudio: '/audio/en/find-g.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with H - using Hat
      {
        id: 'lh-en-e6',
        instruction: 'איזו מילה מתחילה באות H?',
        instructionAudio: '/audio/en/word-starts-h.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-kova', label: 'Hat', isCorrect: true },
          { id: 'opt-3', image: 'grapes', label: 'Grapes' },
          { id: 'opt-4', image: 'word-pil', label: 'Elephant' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lh-en-e7',
        instruction: 'מצאו את האות H',
        instructionAudio: '/audio/en/find-h.mp3',
        options: [
          { id: 'opt-1', image: 'letter-F', label: 'F' },
          { id: 'opt-2', image: 'letter-E', label: 'E' },
          { id: 'opt-3', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-4', image: 'letter-I', label: 'I' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters E, F, G, H
      {
        id: 'lh-en-e8',
        instruction: 'סמנו את כל האותיות E, F, G ו-H',
        instructionAudio: '/audio/en/mark-all-e-f-g-h.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-6', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-9', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-10', image: 'letter-I', label: 'I' },
          { id: 'opt-11', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-12', image: 'letter-H', label: 'H', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnH;
