// Game: Learn the Letter E
// Category: English Letters (EFG)
// Type: Standard selection - introduction to the letter E with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnE = {
  id: 'learn-e',
  categoryId: 'letters-efg',
  name: 'E',
  description: 'למדו את האות E',
  icon: 'E',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with E
      {
        id: 'le-en-e1',
        instruction: 'זוהי האות E. המילים הבאות מתחילות באות E',
        instructionAudio: '/audio/en/intro-e.mp3',
        questionImage: 'letter-E',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-pil', label: 'Elephant', isCorrect: true, optionAudio: '/audio/en/word-elephant.mp3' },
          { id: 'opt-2', image: 'word-ayin-eye', label: 'Eye', isCorrect: true, optionAudio: '/audio/en/word-eye.mp3' },
          { id: 'opt-3', image: 'word-ozen', label: 'Ear', isCorrect: true, optionAudio: '/audio/en/word-ear.mp3' },
        ],
      },
      // Question 2: Select all E letters from 3x3 grid
      {
        id: 'le-en-e2',
        instruction: 'בחרו את כל האותיות E',
        instructionAudio: '/audio/en/select-all-e.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-B', label: 'B' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
          { id: 'opt-7', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'le-en-e3',
        instruction: 'מצאו את האות E',
        instructionAudio: '/audio/en/find-e.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with E
      {
        id: 'le-en-e4',
        instruction: 'איזו מילה מתחילה באות E?',
        instructionAudio: '/audio/en/word-starts-e.mp3',
        options: [
          { id: 'opt-1', image: 'word-pil', label: 'Elephant', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter D
      {
        id: 'le-en-e5',
        instruction: 'מצאו את האות D',
        instructionAudio: '/audio/en/find-d.mp3',
        options: [
          { id: 'opt-1', image: 'letter-E', label: 'E' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with E - using Eye
      {
        id: 'le-en-e6',
        instruction: 'איזו מילה מתחילה באות E?',
        instructionAudio: '/audio/en/word-starts-e.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-ayin-eye', label: 'Eye', isCorrect: true },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'le-en-e7',
        instruction: 'מצאו את האות E',
        instructionAudio: '/audio/en/find-e.mp3',
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D' },
          { id: 'opt-2', image: 'letter-G', label: 'G' },
          { id: 'opt-3', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-A', label: 'A' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters B, C, D, E
      {
        id: 'le-en-e8',
        instruction: 'סמנו את כל האותיות B, C, D ו-E',
        instructionAudio: '/audio/en/mark-all-b-c-d-e.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-6', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-7', image: 'letter-G', label: 'G' },
          { id: 'opt-8', image: 'letter-E', label: 'E', isCorrect: true },
          { id: 'opt-9', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-10', image: 'letter-H', label: 'H' },
          { id: 'opt-11', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-12', image: 'letter-E', label: 'E', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnE;
