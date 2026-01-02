// Game: Select the Letter
// Category: Letters
// Type: Standard selection - listen to the letter name and select it
// The letter name is spoken in audio only, not displayed in instruction

const selectLetter = {
  id: 'select-letter',
  categoryId: 'letters',
  name: 'בחרו את האות',
  description: 'הקשיבו ובחרו את האות הנכונה',
  icon: '🔤',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      {
        id: 'sl-e1',
        instruction: 'בחרו את האות...',
        instructionAudio: '/audio/select-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sl-e2',
        instruction: 'בחרו את האות...',
        instructionAudio: '/audio/select-mem.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sl-e3',
        instruction: 'בחרו את האות...',
        instructionAudio: '/audio/select-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-resh', label: 'ר' },
          { id: 'opt-2', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-3', image: 'letter-tav', label: 'ת' },
          { id: 'opt-4', image: 'letter-qof', label: 'ק' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sl-e4',
        instruction: 'בחרו את האות...',
        instructionAudio: '/audio/select-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sl-e5',
        instruction: 'בחרו את האות...',
        instructionAudio: '/audio/select-he.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-2', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-3', image: 'letter-vav', label: 'ו' },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default selectLetter;
