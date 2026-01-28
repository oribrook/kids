// Game: Learn the Letter C
// Category: English Letters (ABCD)
// Type: Standard selection - introduction to the letter C with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnC = {
  id: 'learn-c',
  categoryId: 'letters-abcd',
  name: 'C',
  description: 'למדו את האות C',
  icon: 'C',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with C
      {
        id: 'lc-en-e1',
        instruction: 'זוהי האות C. המילים הבאות מתחילות באות C',
        instructionAudio: '/audio/en/intro-c.mp3',
        questionImage: 'letter-C',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'Cat', isCorrect: true, optionAudio: '/audio/en/word-cat.mp3' },
          { id: 'opt-2', image: 'word-uga', label: 'Cake', isCorrect: true, optionAudio: '/audio/en/word-cake.mp3' },
          { id: 'opt-3', image: 'cup', label: 'Cup', isCorrect: true, optionAudio: '/audio/en/word-cup.mp3' },
        ],
      },
      // Question 2: Select all C letters from 3x3 grid
      {
        id: 'lc-en-e2',
        instruction: 'בחרו את כל האותיות C',
        instructionAudio: '/audio/en/select-all-c.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-B', label: 'B' },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-6', image: 'letter-E', label: 'E' },
          { id: 'opt-7', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-8', image: 'letter-F', label: 'F' },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lc-en-e3',
        instruction: 'מצאו את האות C',
        instructionAudio: '/audio/en/find-c.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with C
      {
        id: 'lc-en-e4',
        instruction: 'איזו מילה מתחילה באות C?',
        instructionAudio: '/audio/en/word-starts-c.mp3',
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'Cat', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter B
      {
        id: 'lc-en-e5',
        instruction: 'מצאו את האות B',
        instructionAudio: '/audio/en/find-b.mp3',
        options: [
          { id: 'opt-1', image: 'letter-C', label: 'C' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-E', label: 'E' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with C - using Cake
      {
        id: 'lc-en-e6',
        instruction: 'איזו מילה מתחילה באות C?',
        instructionAudio: '/audio/en/word-starts-c.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-uga', label: 'Cake', isCorrect: true },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lc-en-e7',
        instruction: 'מצאו את האות C',
        instructionAudio: '/audio/en/find-c.mp3',
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D' },
          { id: 'opt-2', image: 'letter-G', label: 'G' },
          { id: 'opt-3', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-A', label: 'A' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark ALL A, B and C letters
      {
        id: 'lc-en-e8',
        instruction: 'סמנו את כל האותיות A, B ו-C',
        instructionAudio: '/audio/en/mark-all-a-b-c.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-2', image: 'letter-D', label: 'D' },
          { id: 'opt-3', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-6', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-7', image: 'letter-F', label: 'F' },
          { id: 'opt-8', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-9', image: 'letter-C', label: 'C', isCorrect: true },
        ],
        correctCount: 6,
      },
    ],
  },
};

export default learnC;
