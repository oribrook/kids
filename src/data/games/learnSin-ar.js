// Game: Learn the Letter Sin (س) - Arabic
// Category: Arabic Letters (زسشصض)
// Type: Standard selection - introduction to the letter س
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: سمكة (fish), سيارة (car), ساعة (clock), سلحفاة (turtle), سكين (knife),
//        سلم (ladder), سرير (bed), سفينة (ship), سوق (market)

const learnSinAr = {
  id: 'learn-sin-ar',
  categoryId: 'arabic-zay-dad',
  name: 'س',
  description: 'למדו את האות س',
  icon: 'س',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ls-ar-e1',
        instruction: 'זוהי האות س. המילים הבאות מתחילות באות س',
        instructionAudio: '/audio/ar/intro-sin.mp3',
        questionImage: 'letter-sin-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-dag', label: 'سمكة', isCorrect: true, optionAudio: '/audio/ar/word-samaka.mp3' },
          { id: 'opt-2', image: 'word-sayara', label: 'سيارة', isCorrect: true, optionAudio: '/audio/ar/word-sayara.mp3' },
          { id: 'opt-3', image: 'word-saaa', label: 'ساعة', isCorrect: true, optionAudio: '/audio/ar/word-saaa.mp3' },
          { id: 'opt-4', image: 'word-sulhafa', label: 'سلحفاة', isCorrect: true, optionAudio: '/audio/ar/word-sulhafa.mp3' },
          { id: 'opt-5', image: 'word-sikkeen', label: 'سكين', isCorrect: true, optionAudio: '/audio/ar/word-sikkeen.mp3' },
          { id: 'opt-6', image: 'word-sullam', label: 'سلم', isCorrect: true, optionAudio: '/audio/ar/word-sullam.mp3' },
          { id: 'opt-7', image: 'word-mita', label: 'سرير', isCorrect: true, optionAudio: '/audio/ar/word-sareer.mp3' },
          { id: 'opt-8', image: 'word-sira', label: 'سفينة', isCorrect: true, optionAudio: '/audio/ar/word-safeena.mp3' },
          { id: 'opt-9', image: 'word-souq', label: 'سوق', isCorrect: true, optionAudio: '/audio/ar/word-souq.mp3' },
        ],
      },
      // Question 2: Select all س letters from 3x3 grid
      {
        id: 'ls-ar-e2',
        instruction: 'בחרו את כל האותיות س',
        instructionAudio: '/audio/ar/select-all-sin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-2', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-4', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-6', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-7', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-8', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-9', image: 'letter-ba-ar', label: 'ب' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter س among 6 letters
      {
        id: 'ls-ar-e3',
        instruction: 'מצאו את האות س',
        instructionAudio: '/audio/ar/find-sin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-2', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-3', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-4', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-5', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with س
      {
        id: 'ls-ar-e4',
        instruction: 'איזו מילה מתחילה באות س?',
        instructionAudio: '/audio/ar/word-starts-sin.mp3',
        options: [
          { id: 'opt-1', image: 'word-dag', label: 'سمكة', isCorrect: true, optionAudio: '/audio/ar/word-samaka.mp3' },
          { id: 'opt-2', image: 'word-zarafa', label: 'زرافة' },
          { id: 'opt-3', image: 'word-rumman', label: 'رمان' },
          { id: 'opt-4', image: 'word-dub', label: 'دب' },
        ],
      },
      // Question 5: Reviews previous letter ز
      {
        id: 'ls-ar-e5',
        instruction: 'מצאו את האות ز',
        instructionAudio: '/audio/ar/find-zay.mp3',
        options: [
          { id: 'opt-1', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-4', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-kha-ar', label: 'خ' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark letters ر, ز, س
      {
        id: 'ls-ar-e6',
        instruction: 'סמנו את כל האותיות ر, ز ו-س',
        instructionAudio: '/audio/ar/mark-all-ra-sin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-10', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-11', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-12', image: 'letter-kha-ar', label: 'خ' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default learnSinAr;
