// Game: Learn Cholam Nikud (חוֹלָם)
// Category: Nikud - בואו נתחיל
// Type: Standard selection - introduction to the Cholam vowel mark
// Teaches children to recognize the Cholam nikud and its sound

const learnCholam = {
  id: 'learn-cholam',
  categoryId: 'nikud-start',
  name: 'חוֹלָם',
  description: 'למדו את הניקוד חוֹלָם',
  icon: 'חוֹ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letters with Cholam
      {
        id: 'cho-e1',
        instruction: 'הניקוד שנכיר עכשיו נקרא חוֹלָם, הנה אותיות שונות עם הניקוד חוֹלָם',
        instructionAudio: '/audio/intro-cholam.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-chet-cholam', label: 'חֹ', isCorrect: true, optionAudio: '/audio/cho-cholam.mp3' },
          { id: 'opt-2', image: 'letter-lamed-cholam', label: 'לֹ', isCorrect: true, optionAudio: '/audio/lo-cholam.mp3' },
          { id: 'opt-3', image: 'letter-kof-cholam', label: 'קֹ', isCorrect: true, optionAudio: '/audio/ko-cholam.mp3' },
          { id: 'opt-4', image: 'letter-mem-cholam', label: 'מֹ', isCorrect: true, optionAudio: '/audio/mo-cholam.mp3' },
          { id: 'opt-5', image: 'letter-samech-cholam', label: 'סֹ', isCorrect: true, optionAudio: '/audio/so-cholam.mp3' },
          { id: 'opt-6', image: 'letter-resh-cholam', label: 'רֹ', isCorrect: true, optionAudio: '/audio/ro-cholam.mp3' },
        ],
      },
      // Question 2: Select the object that starts with Cholam sound (Ochel - food)
      {
        id: 'cho-e2',
        instruction: 'איזו מילה מתחילה בצליל חוֹלָם?',
        instructionAudio: '/audio/word-starts-cholam.mp3',
        options: [
          { id: 'opt-1', image: 'word-ochel', label: 'אֹכֶל', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 3: Select the correct nikud (Cholam) from different nikuds on letter א
      {
        id: 'cho-e3',
        instruction: 'בחרו את האות עם הניקוד חוֹלָם',
        instructionAudio: '/audio/select-cholam.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-kamatz', label: 'אָ' },
          { id: 'opt-2', image: 'letter-alef-patach', label: 'אַ' },
          { id: 'opt-3', image: 'letter-alef-cholam', label: 'אֹ', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-tzeirei', label: 'אֵ' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],
  },
};

export default learnCholam;
