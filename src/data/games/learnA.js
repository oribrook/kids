// Game: Learn the Letter A
// Category: English Letters (ABCD)
// Type: Standard selection - introduction to the letter A with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnA = {
  id: 'learn-a',
  categoryId: 'letters-abcd',
  name: 'A',
  description: 'למדו את האות A',
  icon: 'A',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with A
      {
        id: 'la-en-e1',
        instruction: 'זוהי האות A. המילים הבאות מתחילות באות A',
        instructionAudio: '/audio/en/intro-a.mp3',
        questionImage: 'letter-A',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple', isCorrect: true, optionAudio: '/audio/en/word-apple.mp3' },
          { id: 'opt-2', image: 'word-nemala', label: 'Ant', isCorrect: true, optionAudio: '/audio/en/word-ant.mp3' },
          { id: 'opt-3', image: 'word-airplane', label: 'Airplane', isCorrect: true, optionAudio: '/audio/en/word-airplane.mp3' },
        ],
      },
      // Question 2: Select all A letters from 3x3 grid
      {
        id: 'la-en-e2',
        instruction: 'בחרו את כל האותיות A',
        instructionAudio: '/audio/en/select-all-a.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-5', image: 'letter-D', label: 'D' },
          { id: 'opt-6', image: 'letter-E', label: 'E' },
          { id: 'opt-7', image: 'letter-F', label: 'F' },
          { id: 'opt-8', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'la-en-e3',
        instruction: 'מצאו את האות A',
        instructionAudio: '/audio/en/find-a.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-2', image: 'letter-B', label: 'B' },
          { id: 'opt-3', image: 'letter-H', label: 'H' },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-D', label: 'D' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with A
      {
        id: 'la-en-e4',
        instruction: 'איזו מילה מתחילה באות A?',
        instructionAudio: '/audio/en/word-starts-a.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple', isCorrect: true },
          { id: 'opt-2', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on another item that starts with A - using Ant
      {
        id: 'la-en-e5',
        instruction: 'איזו מילה מתחילה באות A?',
        instructionAudio: '/audio/en/word-starts-a.mp3',
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-2', image: 'word-nemala', label: 'Ant', isCorrect: true },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: Find the letter shape among 6 letters (different set)
      {
        id: 'la-en-e6',
        instruction: 'מצאו את האות A',
        instructionAudio: '/audio/en/find-a.mp3',
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D' },
          { id: 'opt-2', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-H', label: 'H' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Click on item that starts with A - using Airplane
      {
        id: 'la-en-e7',
        instruction: 'איזו מילה מתחילה באות A?',
        instructionAudio: '/audio/en/word-starts-a.mp3',
        options: [
          { id: 'opt-1', image: 'word-airplane', label: 'Airplane', isCorrect: true },
          { id: 'opt-2', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
        correctAnswerId: 'opt-1',
      },
    ],
  },
};

export default learnA;
