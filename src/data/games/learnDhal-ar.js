// Game: Learn the Letter Dhal (ذ) - Arabic
// Category: Arabic Letters (حخدذر)
// Type: Standard selection - introduction to the letter ذ
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: ذرة (corn), ذئب (wolf), ذيل (tail), ذبابة (fly),
//        ذهب (gold), ذكي (smart), ذراع (arm), ذقن (chin), ذخيرة (ammo - replaced with ذاكرة memory)
// Note: ذ has fewer common kids' words in عامية. Using best available options.

const learnDhalAr = {
  id: 'learn-dhal-ar',
  categoryId: 'arabic-ha-ra',
  name: 'ذ',
  description: 'למדו את האות ذ',
  icon: 'ذ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + example words
      // Note: ذ has fewer visual words for kids. Using best available.
      {
        id: 'ldh-ar-e1',
        instruction: 'זוהי האות ذ. המילים הבאות מתחילות באות ذ',
        instructionAudio: '/audio/ar/intro-dhal.mp3',
        questionImage: 'letter-dhal-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-dhura', label: 'ذرة', isCorrect: true, optionAudio: '/audio/ar/word-dhura.mp3' },
          { id: 'opt-2', image: 'word-zeev', label: 'ذئب', isCorrect: true, optionAudio: '/audio/ar/word-dhiib.mp3' },
          { id: 'opt-3', image: 'word-zanav', label: 'ذيل', isCorrect: true, optionAudio: '/audio/ar/word-dheil.mp3' },
          { id: 'opt-4', image: 'word-insect', label: 'ذبابة', isCorrect: true, optionAudio: '/audio/ar/word-dhubaba.mp3' },
          { id: 'opt-5', image: 'word-dhahab', label: 'ذهب', isCorrect: true, optionAudio: '/audio/ar/word-dhahab.mp3' },
          { id: 'opt-6', image: 'word-dhira', label: 'ذراع', isCorrect: true, optionAudio: '/audio/ar/word-dhira.mp3' },
          { id: 'opt-7', image: 'word-dhikra', label: 'ذاكرة', isCorrect: true, optionAudio: '/audio/ar/word-dhikra.mp3' },
          { id: 'opt-8', image: 'word-dhaqn', label: 'ذقن', isCorrect: true, optionAudio: '/audio/ar/word-dhaqn.mp3' },
          { id: 'opt-9', image: 'word-dhaki', label: 'ذكي', isCorrect: true, optionAudio: '/audio/ar/word-dhaki.mp3' },
        ],
      },
      // Question 2: Select all ذ letters from 3x3 grid
      {
        id: 'ldh-ar-e2',
        instruction: 'בחרו את כל האותיות ذ',
        instructionAudio: '/audio/ar/select-all-dhal.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-2', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-4', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-5', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-7', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-8', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-9', image: 'letter-dal-ar', label: 'د' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ذ among 6 letters
      {
        id: 'ldh-ar-e3',
        instruction: 'מצאו את האות ذ',
        instructionAudio: '/audio/ar/find-dhal.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-2', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-3', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-4', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with ذ
      {
        id: 'ldh-ar-e4',
        instruction: 'איזו מילה מתחילה באות ذ?',
        instructionAudio: '/audio/ar/word-starts-dhal.mp3',
        options: [
          { id: 'opt-1', image: 'word-dhura', label: 'ذرة', isCorrect: true, optionAudio: '/audio/ar/word-dhura.mp3' },
          { id: 'opt-2', image: 'word-dub', label: 'دب', optionAudio: '/audio/ar/word-dub.mp3' },
          { id: 'opt-3', image: 'word-lechem', label: 'خبز', optionAudio: '/audio/ar/word-khubz.mp3' },
          { id: 'opt-4', image: 'word-sus', label: 'حصان', optionAudio: '/audio/ar/word-hisan.mp3' },
        ],
      },
      // Question 5: Review previous letter - Find letter د
      {
        id: 'ldh-ar-e5',
        instruction: 'מצאו את האות د',
        instructionAudio: '/audio/ar/find-dal.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-2', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-4', image: 'letter-kha-ar', label: 'خ' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark all ح, خ, د, ذ (last 4 letters)
      {
        id: 'ldh-ar-e6',
        instruction: 'סמנו את כל האותיות ح, خ, د ו-ذ',
        instructionAudio: '/audio/ar/mark-all-ha-dhal.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-7', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-8', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-9', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-10', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-11', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnDhalAr;
