// Game: Learn the Letter B
// Category: English Letters (ABCD)
// Type: Standard selection - introduction to the letter B with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing PNG images where possible

const learnB = {
  id: 'learn-b',
  categoryId: 'letters-abcd',
  name: 'B',
  description: 'למדו את האות B',
  icon: 'B',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with B
      {
        id: 'lb-en-e1',
        instruction: 'זוהי האות B. המילים הבאות מתחילות באות B',
        instructionAudio: '/audio/en/intro-b.mp3',
        questionImage: 'letter-B',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'Ball', isCorrect: true, optionAudio: '/audio/en/word-ball.mp3' },
          { id: 'opt-2', image: 'word-banana', label: 'Banana', isCorrect: true, optionAudio: '/audio/en/word-banana.mp3' },
          { id: 'opt-3', image: 'bird', label: 'Bird', isCorrect: true, optionAudio: '/audio/en/word-bird.mp3' },
        ],
      },
      // Question 2: Select all B letters from 3x3 grid
      {
        id: 'lb-en-e2',
        instruction: 'בחרו את כל האותיות B',
        instructionAudio: '/audio/en/select-all-b.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-6', image: 'letter-E', label: 'E' },
          { id: 'opt-7', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-8', image: 'letter-F', label: 'F' },
          { id: 'opt-9', image: 'letter-G', label: 'G' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'lb-en-e3',
        instruction: 'מצאו את האות B',
        instructionAudio: '/audio/en/find-b.mp3',
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A' },
          { id: 'opt-2', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-3', image: 'letter-D', label: 'D' },
          { id: 'opt-4', image: 'letter-E', label: 'E' },
          { id: 'opt-5', image: 'letter-C', label: 'C' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 4: Click on the item that starts with B
      {
        id: 'lb-en-e4',
        instruction: 'איזו מילה מתחילה באות B?',
        instructionAudio: '/audio/en/word-starts-b.mp3',
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'Ball', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter A
      {
        id: 'lb-en-e5',
        instruction: 'מצאו את האות A',
        instructionAudio: '/audio/en/find-a.mp3',
        options: [
          { id: 'opt-1', image: 'letter-B', label: 'B' },
          { id: 'opt-2', image: 'letter-C', label: 'C' },
          { id: 'opt-3', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-E', label: 'E' },
          { id: 'opt-6', image: 'letter-F', label: 'F' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with B - using Bird
      {
        id: 'lb-en-e6',
        instruction: 'איזו מילה מתחילה באות B?',
        instructionAudio: '/audio/en/word-starts-b.mp3',
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'bird', label: 'Bird', isCorrect: true },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'lb-en-e7',
        instruction: 'מצאו את האות B',
        instructionAudio: '/audio/en/find-b.mp3',
        options: [
          { id: 'opt-1', image: 'letter-D', label: 'D' },
          { id: 'opt-2', image: 'letter-G', label: 'G' },
          { id: 'opt-3', image: 'letter-E', label: 'E' },
          { id: 'opt-4', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-5', image: 'letter-H', label: 'H' },
          { id: 'opt-6', image: 'letter-A', label: 'A' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 8: MULTI-SELECT - Mark ALL A and B letters
      {
        id: 'lb-en-e8',
        instruction: 'סמנו את כל האותיות A ו-B',
        instructionAudio: '/audio/en/mark-all-a-b.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-2', image: 'letter-C', label: 'C' },
          { id: 'opt-3', image: 'letter-B', label: 'B', isCorrect: true },
          { id: 'opt-4', image: 'letter-D', label: 'D' },
          { id: 'opt-5', image: 'letter-E', label: 'E' },
          { id: 'opt-6', image: 'letter-A', label: 'A', isCorrect: true },
          { id: 'opt-7', image: 'letter-F', label: 'F' },
          { id: 'opt-8', image: 'letter-B', label: 'B', isCorrect: true },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnB;
