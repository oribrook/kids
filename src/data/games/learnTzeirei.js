// Game: Learn Tzeirei Nikud (צֵירֵי)
// Category: Nikud - בואו נתחיל
// Type: Standard selection - introduction to the Tzeirei vowel mark
// Teaches children to recognize the Tzeirei nikud and its sound

const learnTzeirei = {
  id: 'learn-tzeirei',
  categoryId: 'nikud-start',
  name: 'צֵירֵי',
  description: 'למדו את הניקוד צֵירֵי',
  icon: 'צֵ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letters with Tzeirei
      {
        id: 'tz-e1',
        instruction: 'הניקוד שנכיר עכשיו נקרא צֵירֵי, הנה אותיות שונות עם הניקוד צֵירֵי',
        instructionAudio: '/audio/intro-tzeirei.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-gimel-tzeirei', label: 'גֵ', isCorrect: true, optionAudio: '/audio/ge-tzeirei.mp3' },
          { id: 'opt-2', image: 'letter-chet-tzeirei', label: 'חֵ', isCorrect: true, optionAudio: '/audio/che-tzeirei.mp3' },
          { id: 'opt-3', image: 'letter-lamed-tzeirei', label: 'לֵ', isCorrect: true, optionAudio: '/audio/le-tzeirei.mp3' },
          { id: 'opt-4', image: 'letter-kof-tzeirei', label: 'קֵ', isCorrect: true, optionAudio: '/audio/ke-tzeirei.mp3' },
          { id: 'opt-5', image: 'letter-mem-tzeirei', label: 'מֵ', isCorrect: true, optionAudio: '/audio/me-tzeirei.mp3' },
          { id: 'opt-6', image: 'letter-samech-tzeirei', label: 'סֵ', isCorrect: true, optionAudio: '/audio/se-tzeirei.mp3' },
          { id: 'opt-7', image: 'letter-resh-tzeirei', label: 'רֵ', isCorrect: true, optionAudio: '/audio/re-tzeirei.mp3' },
        ],
      },
      // Question 2: Select the object that starts with Tzeirei sound (Beigale)
      {
        id: 'tz-e2',
        instruction: 'איזו מילה מתחילה בצליל צֵירֵי?',
        instructionAudio: '/audio/word-starts-tzeirei.mp3',
        options: [
          { id: 'opt-1', image: 'word-beigale', label: 'בֵּייגֶלֶה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: Select the correct nikud (Tzeirei) from different nikuds on letter א
      {
        id: 'tz-e3',
        instruction: 'בחרו את האות עם הניקוד צֵירֵי',
        instructionAudio: '/audio/select-tzeirei.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-kamatz', label: 'אָ' },
          { id: 'opt-2', image: 'letter-alef-patach', label: 'אַ' },
          { id: 'opt-3', image: 'letter-alef-chirik', label: 'אִ' },
          { id: 'opt-4', image: 'letter-alef-tzeirei', label: 'אֵ', isCorrect: true },
        ],
        correctAnswerId: 'opt-4',
      },
    ],
  },
};

export default learnTzeirei;
