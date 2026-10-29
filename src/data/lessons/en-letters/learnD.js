// Game: Learn the Letter D
// Category: English Letters (ABCD)
// Type: Standard selection - introduction to the letter D with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnD = {
  id: 'learn-d',
  categoryId: 'letters-abcd',
  name: 'D',
  description: 'למדו את האות D',
  icon: 'D',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with D
      {
        id: 'ld-en-e1',
        instruction: 'זוהי האות D. המילים הבאות מתחילות באות D',
        instructionAudio: '/audio/en/intro-d.mp3',
        questionImage: 'letter-D',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog', isCorrect: true, optionAudio: '/audio/en/word-dog.mp3' },
          { id: 'opt-2', image: 'word-barvaz', label: 'Duck', isCorrect: true, optionAudio: '/audio/en/word-duck.mp3' },
          { id: 'opt-3', image: 'word-delet', label: 'Door', isCorrect: true, optionAudio: '/audio/en/word-door.mp3' },
        ],
      },
      // Question 2: Select all D letters from 3x3 grid
      {
        id: 'ld-en-e2',
        instruction: 'בחרו את כל האותיות D',
        instructionAudio: '/audio/en/select-all-d.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-B', label: 'B' },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-6', image: 'letter-E', label: 'E' },
          { id: 'opt-7', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-8', image: 'letter-F', label: 'F' },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'ld-en-e3',
        instruction: 'מצאו את האות D',
        instructionAudio: '/audio/en/find-d.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with D
      {
        id: 'ld-en-e4',
        instruction: 'איזו מילה מתחילה באות D?',
        instructionAudio: '/audio/en/word-starts-d.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter C
      {
        id: 'ld-en-e5',
        instruction: 'מצאו את האות C',
        instructionAudio: '/audio/en/find-c.mp3',
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-E', label: 'E' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with D - using Duck
      {
        id: 'ld-en-e6',
        instruction: 'איזו מילה מתחילה באות D?',
        instructionAudio: '/audio/en/word-starts-d.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-barvaz', label: 'Duck', isCorrect: true },
          { id: 'opt-3', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'ld-en-e7',
        instruction: 'מצאו את האות D',
        instructionAudio: '/audio/en/find-d.mp3',
        options: [
          { id: 'opt-1', image: 'letter-B', label: 'B' },
          { id: 'opt-2', image: 'letter-G', label: 'G' },
          { id: 'opt-3', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-A', label: 'A' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark ALL A, B, C and D letters
      {
        id: 'ld-en-e8',
        instruction: 'סמנו את כל האותיות A, B, C ו-D',
        instructionAudio: '/audio/en/mark-all-a-b-c-d.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-2', image: 'letter-E', label: 'E' },
          { id: 'opt-3', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-6', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-7', image: 'letter-G', label: 'G' },
          { id: 'opt-8', image: 'letter-D', label: 'D', isCorrect: true },
          { id: 'opt-9', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-10', image: 'letter-C', label: 'C', isCorrect: true },
          { id: 'opt-11', image: 'letter-H', label: 'H' },
          { id: 'opt-12', image: 'letter-D', label: 'D', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnD;
