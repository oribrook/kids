// Game: Learn Patach Nikud (פַּתָּח)
// Category: Nikud - בואו נתחיל
// Type: Standard selection - introduction to the Patach vowel mark
// Teaches children to recognize the Patach nikud and its sound

const learnPatach = {
  id: 'learn-patach',
  categoryId: 'nikud-start',
  name: 'פַּתָּח',
  description: 'למדו את הניקוד פַּתָּח',
  icon: 'פַּ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letters with Patach
      {
        id: 'pa-e1',
        instruction: 'הניקוד שנכיר עכשיו נקרא פַּתָּח, הנה אותיות שונות עם הניקוד פַּתָּח',
        instructionAudio: '/audio/intro-patach.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-gimel-patach', label: 'גַ', isCorrect: true, optionAudio: '/audio/ga-patach.mp3' },
          { id: 'opt-2', image: 'letter-chet-patach', label: 'חַ', isCorrect: true, optionAudio: '/audio/cha-patach.mp3' },
          { id: 'opt-3', image: 'letter-lamed-patach', label: 'לַ', isCorrect: true, optionAudio: '/audio/la-patach.mp3' },
          { id: 'opt-4', image: 'letter-kof-patach', label: 'קַ', isCorrect: true, optionAudio: '/audio/ka-patach.mp3' },
          { id: 'opt-5', image: 'letter-mem-patach', label: 'מַ', isCorrect: true, optionAudio: '/audio/ma-patach.mp3' },
          { id: 'opt-6', image: 'letter-samech-patach', label: 'סַ', isCorrect: true, optionAudio: '/audio/sa-patach.mp3' },
          { id: 'opt-7', image: 'letter-resh-patach', label: 'רַ', isCorrect: true, optionAudio: '/audio/ra-patach.mp3' },
        ],
      },
      // Question 2: Select the object that starts with Patach sound (Arye - lion)
      {
        id: 'pa-e2',
        instruction: 'איזו מילה מתחילה בצליל פַּתָּח?',
        instructionAudio: '/audio/word-starts-patach.mp3',
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'אַרְיֵה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: Select the correct nikud (Patach) from different nikuds on letter א
      {
        id: 'pa-e3',
        instruction: 'בחרו את האות עם הניקוד פַּתָּח',
        instructionAudio: '/audio/select-patach.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-kamatz', label: 'אָ' },
          { id: 'opt-2', image: 'letter-alef-patach', label: 'אַ', isCorrect: true },
          { id: 'opt-3', image: 'letter-alef-chirik', label: 'אִ' },
          { id: 'opt-4', image: 'letter-alef-tzeirei', label: 'אֵ' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default learnPatach;
