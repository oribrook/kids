// Game: Learn the Letter Ra (ر) - Arabic
// Category: Arabic Letters (حخدذر)
// Type: Standard selection - introduction to the letter ر
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: رمان (pomegranate), رجل (foot), رضاعة (bottle), رسالة (letter/mail),
//        رمل (sand), رأس (head), ركبة (knee), ربيع (spring), رنين (ringing)

const learnRaAr = {
  id: 'learn-ra-ar',
  categoryId: 'arabic-ha-ra',
  name: 'ر',
  description: 'למדו את האות ر',
  icon: 'ر',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lr-ar-e1',
        instruction: 'זוהי האות ر. המילים הבאות מתחילות באות ر',
        instructionAudio: '/audio/ar/intro-ra.mp3',
        questionImage: 'letter-ra-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-rumman', label: 'رمان', isCorrect: true, optionAudio: '/audio/ar/word-rumman.mp3' },
          { id: 'opt-2', image: 'word-regel', label: 'رجل', isCorrect: true, optionAudio: '/audio/ar/word-rijl.mp3' },
          { id: 'opt-3', image: 'word-radaa', label: 'رضاعة', isCorrect: true, optionAudio: '/audio/ar/word-radaa.mp3' },
          { id: 'opt-4', image: 'word-risala', label: 'رسالة', isCorrect: true, optionAudio: '/audio/ar/word-risala.mp3' },
          { id: 'opt-5', image: 'word-raml', label: 'رمل', isCorrect: true, optionAudio: '/audio/ar/word-raml.mp3' },
          { id: 'opt-6', image: 'word-ras', label: 'رأس', isCorrect: true, optionAudio: '/audio/ar/word-ras.mp3' },
          { id: 'opt-7', image: 'word-rukba', label: 'ركبة', isCorrect: true, optionAudio: '/audio/ar/word-rukba.mp3' },
          { id: 'opt-8', image: 'word-rainbow', label: 'قوس قزح', isCorrect: true, optionAudio: '/audio/ar/word-rabi.mp3' },
          { id: 'opt-9', image: 'word-rocket', label: 'صاروخ', isCorrect: true, optionAudio: '/audio/ar/word-sarookh.mp3' },
        ],
      },
      // Question 2: Select all ر letters from 3x3 grid
      {
        id: 'lr-ar-e2',
        instruction: 'בחרו את כל האותיות ر',
        instructionAudio: '/audio/ar/select-all-ra.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-2', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-3', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-6', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-7', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-8', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-9', image: 'letter-dhal-ar', label: 'ذ' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ر among 6 letters
      {
        id: 'lr-ar-e3',
        instruction: 'מצאו את האות ر',
        instructionAudio: '/audio/ar/find-ra.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-2', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with ر
      {
        id: 'lr-ar-e4',
        instruction: 'איזו מילה מתחילה באות ر?',
        instructionAudio: '/audio/ar/word-starts-ra.mp3',
        options: [
          { id: 'opt-1', image: 'word-rumman', label: 'رمان', isCorrect: true, optionAudio: '/audio/ar/word-rumman.mp3' },
          { id: 'opt-2', image: 'word-dhura', label: 'ذرة', optionAudio: '/audio/ar/word-dhura.mp3' },
          { id: 'opt-3', image: 'word-dub', label: 'دب', optionAudio: '/audio/ar/word-dub.mp3' },
          { id: 'opt-4', image: 'word-lechem', label: 'خبز', optionAudio: '/audio/ar/word-khubz.mp3' },
        ],
      },
      // Question 5: Find letter ر among different letters
      {
        id: 'lr-ar-e5',
        instruction: 'מצאו את האות ر',
        instructionAudio: '/audio/ar/find-ra.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-dhal-ar', label: 'ذ' },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-5', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-6', image: 'letter-kha-ar', label: 'خ' },
        ],
      },
      // Question 6: Which word starts with ر (different word)
      {
        id: 'lr-ar-e6',
        instruction: 'איזו מילה מתחילה באות ر?',
        instructionAudio: '/audio/ar/word-starts-ra.mp3',
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'حصان', optionAudio: '/audio/ar/word-hisan.mp3' },
          { id: 'opt-2', image: 'word-regel', label: 'رجل', isCorrect: true, optionAudio: '/audio/ar/word-rijl.mp3' },
          { id: 'opt-3', image: 'word-melafafon', label: 'خيار', optionAudio: '/audio/ar/word-khiyar.mp3' },
          { id: 'opt-4', image: 'word-zeev', label: 'ذئب', optionAudio: '/audio/ar/word-dhiib.mp3' },
        ],
      },
      // Question 7: MULTI-SELECT - Mark last 4 letters خ, د, ذ, ر
      {
        id: 'lr-ar-e7',
        instruction: 'סמנו את כל האותיות خ, د, ذ ו-ر',
        instructionAudio: '/audio/ar/mark-all-kha-ra.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-dhal-ar', label: 'ذ', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-ra-ar', label: 'ر', isCorrect: true },
          { id: 'opt-8', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-9', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-10', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-11', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-12', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnRaAr;
