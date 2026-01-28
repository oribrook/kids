// Game: Learn Chirik Nikud (חִירִיק)
// Category: Nikud - בואו נתחיל
// Type: Standard selection - introduction to the Chirik vowel mark
// Teaches children to recognize the Chirik nikud and its sound

const learnChirik = {
  id: 'learn-chirik',
  categoryId: 'nikud-start',
  name: 'חִירִיק',
  description: 'למדו את הניקוד חִירִיק',
  icon: 'חִ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letters with Chirik
      {
        id: 'ch-e1',
        instruction: 'הניקוד שנכיר עכשיו נקרא חִירִיק, הנה אותיות שונות עם הניקוד חִירִיק',
        instructionAudio: '/audio/intro-chirik.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-gimel-chirik', label: 'גִ', isCorrect: true, optionAudio: '/audio/gi-chirik.mp3' },
          { id: 'opt-2', image: 'letter-chet-chirik', label: 'חִ', isCorrect: true, optionAudio: '/audio/chi-chirik.mp3' },
          { id: 'opt-3', image: 'letter-lamed-chirik', label: 'לִ', isCorrect: true, optionAudio: '/audio/li-chirik.mp3' },
          { id: 'opt-4', image: 'letter-kof-chirik', label: 'קִ', isCorrect: true, optionAudio: '/audio/ki-chirik.mp3' },
          { id: 'opt-5', image: 'letter-mem-chirik', label: 'מִ', isCorrect: true, optionAudio: '/audio/mi-chirik.mp3' },
          { id: 'opt-6', image: 'letter-samech-chirik', label: 'סִ', isCorrect: true, optionAudio: '/audio/si-chirik.mp3' },
          { id: 'opt-7', image: 'letter-resh-chirik', label: 'רִ', isCorrect: true, optionAudio: '/audio/ri-chirik.mp3' },
        ],
      },
      // Question 2: Select the object that starts with Chirik sound (Mita - bed)
      {
        id: 'ch-e2',
        instruction: 'איזו מילה מתחילה בצליל חִירִיק?',
        instructionAudio: '/audio/word-starts-chirik.mp3',
        options: [
          { id: 'opt-1', image: 'word-mita', label: 'מִיטָה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: Select the correct nikud (Chirik) from different nikuds on letter א
      {
        id: 'ch-e3',
        instruction: 'בחרו את האות עם הניקוד חִירִיק',
        instructionAudio: '/audio/select-chirik.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-kamatz', label: 'אָ' },
          { id: 'opt-2', image: 'letter-alef-patach', label: 'אַ' },
          { id: 'opt-3', image: 'letter-alef-chirik', label: 'אִ', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-tzeirei', label: 'אֵ' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],
  },
};

export default learnChirik;
