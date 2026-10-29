// Game: Learn Shuruk Nikud (שׁוּרֻק)
// Category: Nikud - בואו נתחיל
// Type: Standard selection - introduction to the Shuruk vowel mark
// Teaches children to recognize the Shuruk nikud and its sound (the "u" sound)

const learnShuruk = {
  id: 'learn-shuruk',
  categoryId: 'nikud-start',
  name: 'שֻׁרֻק',
  description: 'למדו את הניקוד שֻׁרֻק',
  icon: 'אֻ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letters with Shuruk
      {
        id: 'shu-e1',
        instruction: 'הניקוד שנכיר עכשיו נקרא שׁוּרֻק, הנה אותיות שונות עם הניקוד שׁוּרֻק',
        instructionAudio: '/audio/intro-shuruk.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-gimel-shuruk', label: 'גֻ', isCorrect: true, optionAudio: '/audio/gu-shuruk.mp3' },
          { id: 'opt-2', image: 'letter-chet-shuruk', label: 'חֻ', isCorrect: true, optionAudio: '/audio/chu-shuruk.mp3' },
          { id: 'opt-3', image: 'letter-lamed-shuruk', label: 'לֻ', isCorrect: true, optionAudio: '/audio/lu-shuruk.mp3' },
          { id: 'opt-4', image: 'letter-kof-shuruk', label: 'קֻ', isCorrect: true, optionAudio: '/audio/ku-shuruk.mp3' },
          { id: 'opt-5', image: 'letter-mem-shuruk', label: 'מֻ', isCorrect: true, optionAudio: '/audio/mu-shuruk.mp3' },
          { id: 'opt-6', image: 'letter-resh-shuruk', label: 'רֻ', isCorrect: true, optionAudio: '/audio/ru-shuruk.mp3' },
        ],
      },
      // Question 2: Select the object that starts with Shuruk sound (Sus - horse)
      {
        id: 'shu-e2',
        instruction: 'איזו מילה מתחילה בצליל שׁוּרֻק?',
        instructionAudio: '/audio/word-starts-shuruk.mp3',
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'סוּס', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: Select the correct nikud (Shuruk) from different nikuds on letter א
      {
        id: 'shu-e3',
        instruction: 'בחרו את האות עם הניקוד שׁוּרֻק',
        instructionAudio: '/audio/select-shuruk.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-kamatz', label: 'אָ' },
          { id: 'opt-2', image: 'letter-alef-patach', label: 'אַ' },
          { id: 'opt-3', image: 'letter-alef-shuruk', label: 'אֻ', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-tzeirei', label: 'אֵ' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],
  },
};

export default learnShuruk;
