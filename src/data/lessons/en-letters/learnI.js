// Game: Learn the Letter I
// Category: English Letters (HIJK)
// Type: Standard selection - introduction to the letter I with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnI = {
  id: 'learn-i',
  categoryId: 'letters-hijk',
  name: 'I',
  description: 'למדו את האות I',
  icon: 'I',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with I
      {
        id: 'li-en-e1',
        instruction: 'זוהי האות I. המילים הבאות מתחילות באות I',
        instructionAudio: '/audio/en/intro-i.mp3',
        questionImage: 'letter-I',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-ice-cream', label: 'Ice cream', isCorrect: true, optionAudio: '/audio/en/word-ice-cream.mp3' },
          { id: 'opt-2', image: 'word-igloo', label: 'Igloo', isCorrect: true, optionAudio: '/audio/en/word-igloo.mp3' },
          { id: 'opt-3', image: 'word-insect', label: 'Insect', isCorrect: true, optionAudio: '/audio/en/word-insect.mp3' },
        ],
      },
      // Question 2: Select all I letters from 3x3 grid
      {
        id: 'li-en-e2',
        instruction: 'בחרו את כל האותיות I',
        instructionAudio: '/audio/en/select-all-i.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-2', image: 'letter-H', label: 'H' },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
          { id: 'opt-7', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-A', label: 'A' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'li-en-e3',
        instruction: 'מצאו את האות I',
        instructionAudio: '/audio/en/find-i.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-F', label: 'F' },
          { id: 'opt-3', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with I
      {
        id: 'li-en-e4',
        instruction: 'איזו מילה מתחילה באות I?',
        instructionAudio: '/audio/en/word-starts-i.mp3',
        options: [
          { id: 'opt-1', image: 'word-ice-cream', label: 'Ice cream', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-sus', label: 'Horse' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter H
      {
        id: 'li-en-e5',
        instruction: 'מצאו את האות H',
        instructionAudio: '/audio/en/find-h.mp3',
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with I - using Igloo
      {
        id: 'li-en-e6',
        instruction: 'איזו מילה מתחילה באות I?',
        instructionAudio: '/audio/en/word-starts-i.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-igloo', label: 'Igloo', isCorrect: true },
          { id: 'opt-3', image: 'grapes', label: 'Grapes' },
          { id: 'opt-4', image: 'word-kova', label: 'Hat' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'li-en-e7',
        instruction: 'מצאו את האות I',
        instructionAudio: '/audio/en/find-i.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-E', label: 'E' },
          { id: 'opt-3', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters F, G, H, I
      {
        id: 'li-en-e8',
        instruction: 'סמנו את כל האותיות F, G, H ו-I',
        instructionAudio: '/audio/en/mark-all-f-g-h-i.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-6', image: 'letter-F', label: 'F', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-9', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-10', image: 'letter-J', label: 'J' },
          { id: 'opt-11', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-12', image: 'letter-I', label: 'I', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnI;
