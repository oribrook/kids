// Game: Learn the Letter T
// Category: English Letters (QRST)
// Type: Standard selection - introduction to the letter T with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing Hebrew ת/ט images where possible (tapuach, tigris, traktor, telephone)

const learnT = {
  id: 'learn-t-en',
  categoryId: 'letters-qrst',
  name: 'T',
  description: 'למדו את האות T',
  icon: 'T',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with T
      {
        id: 'lt-en-e1',
        instruction: 'זוהי האות T. המילים הבאות מתחילות באות T',
        instructionAudio: '/audio/en/intro-t.mp3',
        questionImage: 'letter-T',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tigris', label: 'Tiger', isCorrect: true, optionAudio: '/audio/en/word-tiger.mp3' },
          { id: 'opt-2', image: 'word-traktor', label: 'Tractor', isCorrect: true, optionAudio: '/audio/en/word-tractor.mp3' },
          { id: 'opt-3', image: 'word-telephone', label: 'Telephone', isCorrect: true, optionAudio: '/audio/en/word-telephone.mp3' },
        ],
      },
      // Question 2: Select all T letters from 3x3 grid
      {
        id: 'lt-en-e2',
        instruction: 'בחרו את כל האותיות T',
        instructionAudio: '/audio/en/select-all-t.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-L', label: 'L' },
          { id: 'opt-4', image: 'letter-S', label: 'S' },
          { id: 'opt-5', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-6', image: 'letter-R', label: 'R' },
          { id: 'opt-7', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-8', image: 'letter-Q', label: 'Q' },
          { id: 'opt-9', image: 'letter-I', label: 'I' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lt-en-e3',
        instruction: 'מצאו את האות T',
        instructionAudio: '/audio/en/find-t.mp3',
        options: [
          { id: 'opt-1', image: 'letter-I', label: 'I' },
          { id: 'opt-2', image: 'letter-L', label: 'L' },
          { id: 'opt-3', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-4', image: 'letter-J', label: 'J' },
          { id: 'opt-5', image: 'letter-F', label: 'F' },
          { id: 'opt-6', image: 'letter-S', label: 'S' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with T - using Tiger
      {
        id: 'lt-en-e4',
        instruction: 'איזו מילה מתחילה באות T?',
        instructionAudio: '/audio/en/word-starts-t.mp3',
        options: [
          { id: 'opt-1', image: 'word-tigris', label: 'Tiger', isCorrect: true },
          { id: 'opt-2', image: 'word-nachash', label: 'Snake' },
          { id: 'opt-3', image: 'word-rabbit', label: 'Rabbit' },
          { id: 'opt-4', image: 'word-queen', label: 'Queen' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter S
      {
        id: 'lt-en-e5',
        instruction: 'מצאו את האות S',
        instructionAudio: '/audio/en/find-s.mp3',
        options: [
          { id: 'opt-1', image: 'letter-T', label: 'T' },
          { id: 'opt-2', image: 'letter-Z', label: 'Z' },
          { id: 'opt-3', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-R', label: 'R' },
          { id: 'opt-6', image: 'letter-Q', label: 'Q' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with T - using Tractor
      {
        id: 'lt-en-e6',
        instruction: 'איזו מילה מתחילה באות T?',
        instructionAudio: '/audio/en/word-starts-t.mp3',
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'Sun' },
          { id: 'opt-2', image: 'word-traktor', label: 'Tractor', isCorrect: true },
          { id: 'opt-3', image: 'word-rainbow', label: 'Rainbow' },
          { id: 'opt-4', image: 'word-quilt', label: 'Quilt' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lt-en-e7',
        instruction: 'מצאו את האות T',
        instructionAudio: '/audio/en/find-t.mp3',
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R' },
          { id: 'opt-2', image: 'letter-S', label: 'S' },
          { id: 'opt-3', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-4', image: 'letter-U', label: 'U' },
          { id: 'opt-5', image: 'letter-I', label: 'I' },
          { id: 'opt-6', image: 'letter-L', label: 'L' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters Q, R, S, T
      {
        id: 'lt-en-e8',
        instruction: 'סמנו את כל האותיות Q, R, S ו-T',
        instructionAudio: '/audio/en/mark-all-q-r-s-t.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-6', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-9', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-10', image: 'letter-U', label: 'U' },
          { id: 'opt-11', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-12', image: 'letter-T', label: 'T', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnT;
