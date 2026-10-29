// Game: Learn the Letter J
// Category: English Letters (HIJK)
// Type: Standard selection - introduction to the letter J with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnJ = {
  id: 'learn-j',
  categoryId: 'letters-hijk',
  name: 'J',
  description: 'למדו את האות J',
  icon: 'J',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with J
      {
        id: 'lj-en-e1',
        instruction: 'זוהי האות J. המילים הבאות מתחילות באות J',
        instructionAudio: '/audio/en/intro-j.mp3',
        questionImage: 'letter-J',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tsantsenet', label: 'Jar', isCorrect: true, optionAudio: '/audio/en/word-jar.mp3' },
          { id: 'opt-2', image: 'word-juice', label: 'Juice', isCorrect: true, optionAudio: '/audio/en/word-juice.mp3' },
          { id: 'opt-3', image: 'word-jelly', label: 'Jelly', isCorrect: true, optionAudio: '/audio/en/word-jelly.mp3' },
        ],
      },
      // Question 2: Select all J letters from 3x3 grid
      {
        id: 'lj-en-e2',
        instruction: 'בחרו את כל האותיות J',
        instructionAudio: '/audio/en/select-all-j.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-2', image: 'letter-H', label: 'H' },
          { id: 'opt-3', image: 'letter-I', label: 'I' },
          { id: 'opt-4', image: 'letter-F', label: 'F' },
          { id: 'opt-5', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G' },
          { id: 'opt-7', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-8', image: 'letter-D', label: 'D' },
          { id: 'opt-9', image: 'letter-A', label: 'A' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lj-en-e3',
        instruction: 'מצאו את האות J',
        instructionAudio: '/audio/en/find-j.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with J
      {
        id: 'lj-en-e4',
        instruction: 'איזו מילה מתחילה באות J?',
        instructionAudio: '/audio/en/word-starts-j.mp3',
        options: [
          { id: 'opt-1', image: 'word-juice', label: 'Juice', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-ice-cream', label: 'Ice cream' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter I
      {
        id: 'lj-en-e5',
        instruction: 'מצאו את האות I',
        instructionAudio: '/audio/en/find-i.mp3',
        options: [
          { id: 'opt-1', image: 'letter-J', label: 'J' },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-4', image: 'letter-H', label: 'H' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-B', label: 'B' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with J - using Jelly
      {
        id: 'lj-en-e6',
        instruction: 'איזו מילה מתחילה באות J?',
        instructionAudio: '/audio/en/word-starts-j.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-jelly', label: 'Jelly', isCorrect: true },
          { id: 'opt-3', image: 'word-igloo', label: 'Igloo' },
          { id: 'opt-4', image: 'word-kova', label: 'Hat' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lj-en-e7',
        instruction: 'מצאו את האות J',
        instructionAudio: '/audio/en/find-j.mp3',
        options: [
          { id: 'opt-1', image: 'letter-H', label: 'H' },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-4', image: 'letter-K', label: 'K' },
          { id: 'opt-5', image: 'letter-G', label: 'G' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters G, H, I, J
      {
        id: 'lj-en-e8',
        instruction: 'סמנו את כל האותיות G, H, I ו-J',
        instructionAudio: '/audio/en/mark-all-g-h-i-j.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-6', image: 'letter-G', label: 'G', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-J', label: 'J', isCorrect: true },
          { id: 'opt-9', image: 'letter-H', label: 'H', isCorrect: true },
          { id: 'opt-10', image: 'letter-K', label: 'K' },
          { id: 'opt-11', image: 'letter-I', label: 'I', isCorrect: true },
          { id: 'opt-12', image: 'letter-J', label: 'J', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnJ;
