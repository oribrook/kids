// Game: First Letter
// Category: Letters
// Type: Standard selection - identify the first letter of a word
// Shows word image, child selects which letter the word starts with

const firstLetter = {
  id: 'first-letter',
  categoryId: 'letters',
  name: 'האות הראשונה',
  description: 'מצאו באיזו אות מתחילה המילה',
  icon: '🅰️',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['medium'],

  questions: {
    medium: [
      {
        id: 'fl-m1',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/first-letter-naalayim.mp3',
        questionImage: 'word-naalayim', // Shows shoes image
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fl-m2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/first-letter-bayit.mp3',
        questionImage: 'word-bayit', // Shows house image
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fl-m3',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/first-letter-shemesh.mp3',
        questionImage: 'word-shemesh', // Shows sun image
        options: [
          { id: 'opt-1', image: 'letter-qof', label: 'ק' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-4', image: 'letter-tav', label: 'ת' },
          { id: 'opt-5', image: 'letter-tsade', label: 'צ' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'fl-m4',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/first-letter-kelev.mp3',
        questionImage: 'word-kelev', // Shows dog image
        options: [
          { id: 'opt-1', image: 'letter-yod', label: 'י' },
          { id: 'opt-2', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-3', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fl-m5',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/first-letter-tapuach.mp3',
        questionImage: 'word-tapuach', // Shows apple image
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-3', image: 'letter-qof', label: 'ק' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default firstLetter;
