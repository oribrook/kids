// Game: Learn the Letter V
// Category: English Letters (UV)
// Type: Standard selection - introduction to the letter V with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English

const learnV = {
  id: 'learn-v',
  categoryId: 'letters-uv',
  name: 'V',
  description: 'למדו את האות V',
  icon: 'V',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with V
      {
        id: 'lv-en-e1',
        instruction: 'זוהי האות V. המילים הבאות מתחילות באות V',
        instructionAudio: '/audio/en/intro-v.mp3',
        questionImage: 'letter-V',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-violin', label: 'Violin', isCorrect: true, optionAudio: '/audio/en/word-violin.mp3' },
          { id: 'opt-2', image: 'word-volcano', label: 'Volcano', isCorrect: true, optionAudio: '/audio/en/word-volcano.mp3' },
          { id: 'opt-3', image: 'word-van', label: 'Van', isCorrect: true, optionAudio: '/audio/en/word-van.mp3' },
        ],
      },
      // Question 2: Select all V letters from 3x3 grid
      {
        id: 'lv-en-e2',
        instruction: 'בחרו את כל האותיות V',
        instructionAudio: '/audio/en/select-all-v.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-2', image: 'letter-U', label: 'U' },
          { id: 'opt-3', image: 'letter-W', label: 'W' },
          { id: 'opt-4', image: 'letter-A', label: 'A' },
          { id: 'opt-5', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-6', image: 'letter-Y', label: 'Y' },
          { id: 'opt-7', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-8', image: 'letter-N', label: 'N' },
          { id: 'opt-9', image: 'letter-U', label: 'U' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lv-en-e3',
        instruction: 'מצאו את האות V',
        instructionAudio: '/audio/en/find-v.mp3',
        options: [
          { id: 'opt-1', image: 'letter-U', label: 'U' },
          { id: 'opt-2', image: 'letter-W', label: 'W' },
          { id: 'opt-3', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-4', image: 'letter-A', label: 'A' },
          { id: 'opt-5', image: 'letter-Y', label: 'Y' },
          { id: 'opt-6', image: 'letter-X', label: 'X' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with V - using Violin
      {
        id: 'lv-en-e4',
        instruction: 'איזו מילה מתחילה באות V?',
        instructionAudio: '/audio/en/word-starts-v.mp3',
        options: [
          { id: 'opt-1', image: 'word-violin', label: 'Violin', isCorrect: true },
          { id: 'opt-2', image: 'word-umbrella', label: 'Umbrella' },
          { id: 'opt-3', image: 'word-tigris', label: 'Tiger' },
          { id: 'opt-4', image: 'word-sun', label: 'Sun' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter U
      {
        id: 'lv-en-e5',
        instruction: 'מצאו את האות U',
        instructionAudio: '/audio/en/find-u.mp3',
        options: [
          { id: 'opt-1', image: 'letter-V', label: 'V' },
          { id: 'opt-2', image: 'letter-W', label: 'W' },
          { id: 'opt-3', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-4', image: 'letter-C', label: 'C' },
          { id: 'opt-5', image: 'letter-O', label: 'O' },
          { id: 'opt-6', image: 'letter-T', label: 'T' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with V - using Volcano
      {
        id: 'lv-en-e6',
        instruction: 'איזו מילה מתחילה באות V?',
        instructionAudio: '/audio/en/word-starts-v.mp3',
        options: [
          { id: 'opt-1', image: 'word-unicorn', label: 'Unicorn' },
          { id: 'opt-2', image: 'word-volcano', label: 'Volcano', isCorrect: true },
          { id: 'opt-3', image: 'word-traktor', label: 'Tractor' },
          { id: 'opt-4', image: 'word-rabbit', label: 'Rabbit' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lv-en-e7',
        instruction: 'מצאו את האות V',
        instructionAudio: '/audio/en/find-v.mp3',
        options: [
          { id: 'opt-1', image: 'letter-T', label: 'T' },
          { id: 'opt-2', image: 'letter-U', label: 'U' },
          { id: 'opt-3', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-4', image: 'letter-W', label: 'W' },
          { id: 'opt-5', image: 'letter-X', label: 'X' },
          { id: 'opt-6', image: 'letter-Y', label: 'Y' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters S, T, U, V
      {
        id: 'lv-en-e8',
        instruction: 'סמנו את כל האותיות S, T, U ו-V',
        instructionAudio: '/audio/en/mark-all-s-t-u-v.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-6', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-V', label: 'V', isCorrect: true },
          { id: 'opt-9', image: 'letter-T', label: 'T', isCorrect: true },
          { id: 'opt-10', image: 'letter-W', label: 'W' },
          { id: 'opt-11', image: 'letter-U', label: 'U', isCorrect: true },
          { id: 'opt-12', image: 'letter-V', label: 'V', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnV;
