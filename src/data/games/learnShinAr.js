// Game: Learn the Letter Shin (ش) - Arabic
// Category: Arabic Letters (زسشصض)
// Type: Standard selection - introduction to the letter ش
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: شمس (sun), شجرة (tree), شوكولاتة (chocolate), شمعة (candle), شنطة (bag),
//        شراب (drink/juice), شاي (tea), شبكة (net), شطيرة (sandwich)

const learnShinAr = {
  id: 'learn-shin-ar',
  categoryId: 'arabic-zay-dad',
  name: 'ش',
  description: 'למדו את האות ش',
  icon: 'ش',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lsh-ar-e1',
        instruction: 'זוהי האות ش. המילים הבאות מתחילות באות ش',
        instructionAudio: '/audio/ar/intro-shin-ar.mp3',
        questionImage: 'letter-shin-ar-icon',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'شمس', isCorrect: true, optionAudio: '/audio/ar/word-shams.mp3' },
          { id: 'opt-2', image: 'word-etz', label: 'شجرة', isCorrect: true, optionAudio: '/audio/ar/word-shajara.mp3' },
          { id: 'opt-3', image: 'word-shokolata', label: 'شوكولاتة', isCorrect: true, optionAudio: '/audio/ar/word-shokolata.mp3' },
          { id: 'opt-4', image: 'word-ner', label: 'شمعة', isCorrect: true, optionAudio: '/audio/ar/word-shamaa.mp3' },
          { id: 'opt-5', image: 'word-hakiba', label: 'شنطة', isCorrect: true, optionAudio: '/audio/ar/word-shanta.mp3' },
          { id: 'opt-6', image: 'word-sharab', label: 'شراب', isCorrect: true, optionAudio: '/audio/ar/word-sharab.mp3' },
          { id: 'opt-7', image: 'word-shai', label: 'شاي', isCorrect: true, optionAudio: '/audio/ar/word-shai.mp3' },
          { id: 'opt-8', image: 'word-reshet', label: 'شبكة', isCorrect: true, optionAudio: '/audio/ar/word-shabaka.mp3' },
          { id: 'opt-9', image: 'word-shateera', label: 'شطيرة', isCorrect: true, optionAudio: '/audio/ar/word-shateera.mp3' },
        ],
      },
      // Question 2: Select all ش letters from 3x3 grid
      {
        id: 'lsh-ar-e2',
        instruction: 'בחרו את כל האותיות ش',
        instructionAudio: '/audio/ar/select-all-shin-ar.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-2', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-3', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-5', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-6', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-7', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-8', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-9', image: 'letter-alef-ar', label: 'أ' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ش among 6 letters
      {
        id: 'lsh-ar-e3',
        instruction: 'מצאו את האות ش',
        instructionAudio: '/audio/ar/find-shin-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-2', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-3', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
        ],
      },
      // Question 4: Which word starts with ش
      {
        id: 'lsh-ar-e4',
        instruction: 'איזו מילה מתחילה באות ش?',
        instructionAudio: '/audio/ar/word-starts-shin-ar.mp3',
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'شمس', isCorrect: true, optionAudio: '/audio/ar/word-shams.mp3' },
          { id: 'opt-2', image: 'word-dag', label: 'سمكة' },
          { id: 'opt-3', image: 'word-zarafa', label: 'زرافة' },
          { id: 'opt-4', image: 'word-rumman', label: 'رمان' },
        ],
      },
      // Question 5: Reviews previous letter س
      {
        id: 'lsh-ar-e5',
        instruction: 'מצאו את האות س',
        instructionAudio: '/audio/ar/find-sin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-2', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-3', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-5', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-6', image: 'letter-dal-ar', label: 'د' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark last 4 letters ز, س, ش
      {
        id: 'lsh-ar-e6',
        instruction: 'סמנו את כל האותיות ز, س ו-ش',
        instructionAudio: '/audio/ar/mark-all-zay-shin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-5', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-10', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-11', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-12', image: 'letter-dhal-ar', label: 'ذ' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default learnShinAr;
