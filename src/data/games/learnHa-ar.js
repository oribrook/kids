// Game: Learn the Letter Ha (ح) - Arabic
// Category: Arabic Letters (حخدذر)
// Type: Standard selection - introduction to the letter ح
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: حصان (horse), حليب (milk), حمار (donkey), حوت (whale), حمامة (pigeon),
//        حبل (rope), حذاء (shoe), حلزون (snail), حقيبة (bag)

const learnHaAr = {
  id: 'learn-ha-ar',
  categoryId: 'arabic-ha-ra',
  name: 'ح',
  description: 'למדו את האות ح',
  icon: 'ح',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lh-ar-e1',
        instruction: 'זוהי האות ح. המילים הבאות מתחילות באות ح',
        instructionAudio: '/audio/ar/intro-ha.mp3',
        questionImage: 'letter-ha-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'حصان', isCorrect: true, optionAudio: '/audio/ar/word-hisan.mp3' },
          { id: 'opt-2', image: 'word-halib', label: 'حليب', isCorrect: true, optionAudio: '/audio/ar/word-halib.mp3' },
          { id: 'opt-3', image: 'word-himar', label: 'حمار', isCorrect: true, optionAudio: '/audio/ar/word-himar.mp3' },
          { id: 'opt-4', image: 'word-whale', label: 'حوت', isCorrect: true, optionAudio: '/audio/ar/word-hoot.mp3' },
          { id: 'opt-5', image: 'word-hamama', label: 'حمامة', isCorrect: true, optionAudio: '/audio/ar/word-hamama.mp3' },
          { id: 'opt-6', image: 'word-chevel', label: 'حبل', isCorrect: true, optionAudio: '/audio/ar/word-habl.mp3' },
          { id: 'opt-7', image: 'word-naal', label: 'حذاء', isCorrect: true, optionAudio: '/audio/ar/word-hitha.mp3' },
          { id: 'opt-8', image: 'word-shablul', label: 'حلزون', isCorrect: true, optionAudio: '/audio/ar/word-halazoon.mp3' },
          { id: 'opt-9', image: 'word-hakiba', label: 'حقيبة', isCorrect: true, optionAudio: '/audio/ar/word-hakiba.mp3' },
        ],
      },
      // Question 2: Select all ح letters from 3x3 grid
      {
        id: 'lh-ar-e2',
        instruction: 'בחרו את כל האותיות ح',
        instructionAudio: '/audio/ar/select-all-ha.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-7', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ح among 6 letters
      {
        id: 'lh-ar-e3',
        instruction: 'מצאו את האות ح',
        instructionAudio: '/audio/ar/find-ha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 4: Which word starts with ح
      {
        id: 'lh-ar-e4',
        instruction: 'איזו מילה מתחילה באות ح?',
        instructionAudio: '/audio/ar/word-starts-ha.mp3',
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'حصان', isCorrect: true, optionAudio: '/audio/ar/word-hisan.mp3' },
          { id: 'opt-2', image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-3', image: 'word-barvaz', label: 'بطة', optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-4', image: 'word-gamal', label: 'جمل', optionAudio: '/audio/ar/word-jamal.mp3' },
        ],
      },
      // Question 5: Find letter ح among different letters
      {
        id: 'lh-ar-e5',
        instruction: 'מצאו את האות ح',
        instructionAudio: '/audio/ar/find-ha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 6: Which word starts with ح (different word)
      {
        id: 'lh-ar-e6',
        instruction: 'איזו מילה מתחילה באות ح?',
        instructionAudio: '/audio/ar/word-starts-ha.mp3',
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'أسد', optionAudio: '/audio/ar/word-asad.mp3' },
          { id: 'opt-2', image: 'word-halib', label: 'حليب', isCorrect: true, optionAudio: '/audio/ar/word-halib.mp3' },
          { id: 'opt-3', image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
          { id: 'opt-4', image: 'word-gezer', label: 'جزر', optionAudio: '/audio/ar/word-jazar.mp3' },
        ],
      },
    ],
  },
};

export default learnHaAr;
