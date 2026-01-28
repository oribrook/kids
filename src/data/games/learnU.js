// Game: Learn the Letter U
// Category: English Letters (UV)
// Type: Standard selection - introduction to the letter U with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnU = {
  id: 'learn-u',
  categoryId: 'letters-uv',
  name: 'U',
  description: 'למדו את האות U',
  icon: 'U',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with U
      {
        id: 'lu-en-e1',
        instruction: 'זוהי האות U. המילים הבאות מתחילות באות U',
        instructionAudio: '/audio/en/intro-u.mp3',
        questionImage: 'letter-U',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-umbrella', label: 'Umbrella', isCorrect: true, optionAudio: '/audio/en/word-umbrella.mp3' },
          { id: 'opt-2', image: 'word-unicorn', label: 'Unicorn', isCorrect: true, optionAudio: '/audio/en/word-unicorn.mp3' },
          { id: 'opt-3', image: 'word-uniform', label: 'Uniform', isCorrect: true, optionAudio: '/audio/en/word-uniform.mp3' },
        ],
      },
      // Question 2: Select all U letters from 3x3 grid
      {
        id: 'lu-en-e2',
        instruction: 'בחרו את כל האותיות U',
        instructionAudio: '/audio/en/select-all-u.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-2', image: 'letter-V', label: 'V' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-O', label: 'O' },
          { id: 'opt-5', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-6', image: 'letter-W', label: 'W' },
          { id: 'opt-7', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-8', image: 'letter-N', label: 'N' },
          { id: 'opt-9', image: 'letter-V', label: 'V' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lu-en-e3',
        instruction: 'מצאו את האות U',
        instructionAudio: '/audio/en/find-u.mp3',
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V' },
          { id: 'opt-2', image: 'letter-W', label: 'W' },
          { id: 'opt-3', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-O', label: 'O' },
          { id: 'opt-6', image: 'letter-N', label: 'N' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with U - using Umbrella
      {
        id: 'lu-en-e4',
        instruction: 'איזו מילה מתחילה באות U?',
        instructionAudio: '/audio/en/word-starts-u.mp3',
        options: [
          { id: 'opt-1', image: 'word-umbrella', label: 'Umbrella', isCorrect: true },
          { id: 'opt-2', image: 'word-tigris', label: 'Tiger' },
          { id: 'opt-3', image: 'word-sun', label: 'Sun' },
          { id: 'opt-4', image: 'word-rabbit', label: 'Rabbit' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter T
      {
        id: 'lu-en-e5',
        instruction: 'מצאו את האות T',
        instructionAudio: '/audio/en/find-t.mp3',
        options: [
          { id: 'opt-1', image: 'letter-U', label: 'U' },
          { id: 'opt-2', image: 'letter-I', label: 'I' },
          { id: 'opt-3', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-4', image: 'letter-L', label: 'L' },
          { id: 'opt-5', image: 'letter-F', label: 'F' },
          { id: 'opt-6', image: 'letter-S', label: 'S' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with U - using Unicorn
      {
        id: 'lu-en-e6',
        instruction: 'איזו מילה מתחילה באות U?',
        instructionAudio: '/audio/en/word-starts-u.mp3',
        options: [
          { id: 'opt-1', image: 'word-traktor', label: 'Tractor' },
          { id: 'opt-2', image: 'word-unicorn', label: 'Unicorn', isCorrect: true },
          { id: 'opt-3', image: 'word-queen', label: 'Queen' },
          { id: 'opt-4', image: 'word-rainbow', label: 'Rainbow' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lu-en-e7',
        instruction: 'מצאו את האות U',
        instructionAudio: '/audio/en/find-u.mp3',
        options: [
          { id: 'opt-1', image: 'letter-S', label: 'S' },
          { id: 'opt-2', image: 'letter-T', label: 'T' },
          { id: 'opt-3', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-4', image: 'letter-V', label: 'V' },
          { id: 'opt-5', image: 'letter-W', label: 'W' },
          { id: 'opt-6', image: 'letter-Y', label: 'Y' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters R, S, T, U
      {
        id: 'lu-en-e8',
        instruction: 'סמנו את כל האותיות R, S, T ו-U',
        instructionAudio: '/audio/en/mark-all-r-s-t-u.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-6', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-9', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-10', image: 'letter-V', label: 'V' },
          { id: 'opt-11', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-12', image: 'letter-U', label: 'U', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnU;
