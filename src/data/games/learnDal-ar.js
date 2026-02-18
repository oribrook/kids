// Game: Learn the Letter Dal (د) - Arabic
// Category: Arabic Letters (حخدذر)
// Type: Standard selection - introduction to the letter د
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: دب (bear), دجاجة (chicken), دلفين (dolphin), دراجة (bicycle),
//        دمية (doll), دلو (bucket), دودة (worm), ديك (rooster), ديناصور (dinosaur)

const learnDalAr = {
  id: 'learn-dal-ar',
  categoryId: 'arabic-ha-ra',
  name: 'د',
  description: 'למדו את האות د',
  icon: 'د',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ld-ar-e1',
        instruction: 'זוהי האות د. המילים הבאות מתחילות באות د',
        instructionAudio: '/audio/ar/intro-dal.mp3',
        questionImage: 'letter-dal-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-dub', label: 'دب', isCorrect: true, optionAudio: '/audio/ar/word-dub.mp3' },
          { id: 'opt-2', image: 'word-tarnegol', label: 'دجاجة', isCorrect: true, optionAudio: '/audio/ar/word-djaja.mp3' },
          { id: 'opt-3', image: 'word-dolphin', label: 'دلفين', isCorrect: true, optionAudio: '/audio/ar/word-dulfin.mp3' },
          { id: 'opt-4', image: 'word-daraja', label: 'دراجة', isCorrect: true, optionAudio: '/audio/ar/word-daraja.mp3' },
          { id: 'opt-5', image: 'word-dumya', label: 'دمية', isCorrect: true, optionAudio: '/audio/ar/word-dumya.mp3' },
          { id: 'opt-6', image: 'word-dalw', label: 'دلو', isCorrect: true, optionAudio: '/audio/ar/word-dalw.mp3' },
          { id: 'opt-7', image: 'word-dooda', label: 'دودة', isCorrect: true, optionAudio: '/audio/ar/word-dooda.mp3' },
          { id: 'opt-8', image: 'word-deek', label: 'ديك', isCorrect: true, optionAudio: '/audio/ar/word-deek.mp3' },
          { id: 'opt-9', image: 'word-dinozaur', label: 'ديناصور', isCorrect: true, optionAudio: '/audio/ar/word-dinasoor.mp3' },
        ],
      },
      // Question 2: Select all د letters from 3x3 grid
      {
        id: 'ld-ar-e2',
        instruction: 'בחרו את כל האותיות د',
        instructionAudio: '/audio/ar/select-all-dal.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-2', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-7', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-ta-ar', label: 'ت' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter د among 6 letters
      {
        id: 'ld-ar-e3',
        instruction: 'מצאו את האות د',
        instructionAudio: '/audio/ar/find-dal.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-2', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-3', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 4: Which word starts with د
      {
        id: 'ld-ar-e4',
        instruction: 'איזו מילה מתחילה באות د?',
        instructionAudio: '/audio/ar/word-starts-dal.mp3',
        options: [
          { id: 'opt-1', image: 'word-dub', label: 'دب', isCorrect: true, optionAudio: '/audio/ar/word-dub.mp3' },
          { id: 'opt-2', image: 'word-lechem', label: 'خبز', optionAudio: '/audio/ar/word-khubz.mp3' },
          { id: 'opt-3', image: 'word-sus', label: 'حصان', optionAudio: '/audio/ar/word-hisan.mp3' },
          { id: 'opt-4', image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
        ],
      },
      // Question 5: Review previous letter - Find letter خ
      {
        id: 'ld-ar-e5',
        instruction: 'מצאו את האות خ',
        instructionAudio: '/audio/ar/find-kha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-2', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-3', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark all ح, خ, د
      {
        id: 'ld-ar-e6',
        instruction: 'סמנו את כל האותיות ح, خ ו-د',
        instructionAudio: '/audio/ar/mark-all-ha-dal.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-dal-ar', label: 'د', isCorrect: true },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-7', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-8', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-9', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-10', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-11', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnDalAr;
