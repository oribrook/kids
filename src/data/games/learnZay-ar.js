// Game: Learn the Letter Zay (ز) - Arabic
// Category: Arabic Letters (زسشصض)
// Type: Standard selection - introduction to the letter ز
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: زرافة (giraffe), زيتون (olive), زهرة (flower), زبدة (butter), زجاجة (bottle),
//        زيبرا (zebra), زر (button), زنبور (wasp), زلاجة (sled)

const learnZayAr = {
  id: 'learn-zay-ar',
  categoryId: 'arabic-zay-dad',
  name: 'ز',
  description: 'למדו את האות ز',
  icon: 'ز',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lz-ar-e1',
        instruction: 'זוהי האות ز. המילים הבאות מתחילות באות ز',
        instructionAudio: '/audio/ar/intro-zay.mp3',
        questionImage: 'letter-zay-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-zarafa', label: 'زرافة', isCorrect: true, optionAudio: '/audio/ar/word-zarafa.mp3' },
          { id: 'opt-2', image: 'word-zeitoun', label: 'زيتون', isCorrect: true, optionAudio: '/audio/ar/word-zeitoun.mp3' },
          { id: 'opt-3', image: 'word-zahra', label: 'زهرة', isCorrect: true, optionAudio: '/audio/ar/word-zahra.mp3' },
          { id: 'opt-4', image: 'word-zubda', label: 'زبدة', isCorrect: true, optionAudio: '/audio/ar/word-zubda.mp3' },
          { id: 'opt-5', image: 'word-zchuchit', label: 'زجاجة', isCorrect: true, optionAudio: '/audio/ar/word-zujaja.mp3' },
          { id: 'opt-6', image: 'word-zebra', label: 'زيبرا', isCorrect: true, optionAudio: '/audio/ar/word-zebra-ar.mp3' },
          { id: 'opt-7', image: 'word-zirr', label: 'زر', isCorrect: true, optionAudio: '/audio/ar/word-zirr.mp3' },
          { id: 'opt-8', image: 'word-zunbur', label: 'زنبور', isCorrect: true, optionAudio: '/audio/ar/word-zunbur.mp3' },
          { id: 'opt-9', image: 'word-zalaja', label: 'زلاجة', isCorrect: true, optionAudio: '/audio/ar/word-zalaja.mp3' },
        ],
      },
      // Question 2: Select all ز letters from 3x3 grid
      {
        id: 'lz-ar-e2',
        instruction: 'בחרו את כל האותיות ز',
        instructionAudio: '/audio/ar/select-all-zay.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-2', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-3', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-6', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-7', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-8', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-9', image: 'letter-ba-ar', label: 'ب' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ز among 6 letters
      {
        id: 'lz-ar-e3',
        instruction: 'מצאו את האות ز',
        instructionAudio: '/audio/ar/find-zay.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-2', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-3', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-6', image: 'letter-dhal-ar', label: 'ذ' },
        ],
      },
      // Question 4: Which word starts with ز
      {
        id: 'lz-ar-e4',
        instruction: 'איזו מילה מתחילה באות ز?',
        instructionAudio: '/audio/ar/word-starts-zay.mp3',
        options: [
          { id: 'opt-1', image: 'word-zarafa', label: 'زرافة', isCorrect: true, optionAudio: '/audio/ar/word-zarafa.mp3' },
          { id: 'opt-2', image: 'word-rumman', label: 'رمان' },
          { id: 'opt-3', image: 'word-dub', label: 'دب' },
          { id: 'opt-4', image: 'word-sus', label: 'حصان' },
        ],
      },
      // Question 5: Find letter ز among different letters
      {
        id: 'lz-ar-e5',
        instruction: 'מצאו את האות ز',
        instructionAudio: '/audio/ar/find-zay.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 6: Which word starts with ز (different word)
      {
        id: 'lz-ar-e6',
        instruction: 'איזו מילה מתחילה באות ز?',
        instructionAudio: '/audio/ar/word-starts-zay.mp3',
        options: [
          { id: 'opt-1', image: 'word-lechem', label: 'خبز' },
          { id: 'opt-2', image: 'word-zeitoun', label: 'زيتون', isCorrect: true, optionAudio: '/audio/ar/word-zeitoun.mp3' },
          { id: 'opt-3', image: 'word-dhura', label: 'ذرة' },
          { id: 'opt-4', image: 'word-regel', label: 'رجل' },
        ],
      },
    ],
  },
};

export default learnZayAr;
