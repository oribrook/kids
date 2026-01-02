// Game: Double Letter
// Category: Letters
// Type: Standard selection - find which letter appears twice in a word
// Shows word image, child identifies the letter that appears twice

const doubleLetter = {
  id: 'double-letter',
  categoryId: 'letters',
  name: 'אות כפולה',
  description: 'מצאו איזו אות מופיעה פעמיים',
  icon: '🔁',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['hard'],

  questions: {
    hard: [
      {
        id: 'dl-h1',
        instruction: 'איזו אות מופיעה פעמיים במילה?',
        instructionAudio: '/audio/double-letter-banana.mp3',
        questionImage: 'word-banana', // Shows banana image - בננה has נ twice
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-alef', label: 'א' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'dl-h2',
        instruction: 'איזו אות מופיעה פעמיים במילה?',
        instructionAudio: '/audio/double-letter-aba.mp3',
        questionImage: 'word-aba', // Shows dad image - אבא has א twice
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'dl-h3',
        instruction: 'איזו אות מופיעה פעמיים במילה?',
        instructionAudio: '/audio/double-letter-ima.mp3',
        questionImage: 'word-ima', // Shows mom image - אמא has א twice
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-tav', label: 'ת' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'dl-h4',
        instruction: 'איזו אות מופיעה פעמיים במילה?',
        instructionAudio: '/audio/double-letter-mamtak.mp3',
        questionImage: 'word-mamtak', // Shows candy image - ממתק has מ twice
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-2', image: 'letter-tav', label: 'ת' },
          { id: 'opt-3', image: 'letter-qof', label: 'ק' },
          { id: 'opt-4', image: 'letter-alef', label: 'א' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'dl-h5',
        instruction: 'איזו אות מופיעה פעמיים במילה?',
        instructionAudio: '/audio/double-letter-sababa.mp3',
        questionImage: 'word-sababa', // Shows thumbs up - סבבה has ב twice
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-alef', label: 'א' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ' },
          { id: 'opt-6', image: 'letter-gimel', label: 'ג' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default doubleLetter;
