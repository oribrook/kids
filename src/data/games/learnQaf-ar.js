// Game: Learn the Letter Qaf (ق) - Arabic
// Category: Arabic Letters (قكلمن)
// Type: Standard selection - introduction to the letter ق
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: قطة (cat), قمر (moon), قرد (monkey), قلم (pen), قلب (heart),
//        قارب (boat), قفل (lock), قبعة (hat), قوس قزح (rainbow)

import { generateCumulativeReview } from '../arabicWordBank';

const learnQafAr = {
  id: 'learn-qaf-ar',
  categoryId: 'arabic-qaf-nun',
  name: 'ق',
  description: 'למדו את האות ق',
  icon: 'ق',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lq-ar-e1',
        instruction: 'זוהי האות ق. המילים הבאות מתחילות באות ق',
        instructionAudio: '/audio/ar/intro-qaf.mp3',
        questionImage: 'letter-qaf-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'قطة', isCorrect: true, optionAudio: '/audio/ar/word-qitta.mp3' },
          { id: 'opt-2', image: 'word-yareach', label: 'قمر', isCorrect: true, optionAudio: '/audio/ar/word-qamar.mp3' },
          { id: 'opt-3', image: 'word-kof', label: 'قرد', isCorrect: true, optionAudio: '/audio/ar/word-qird.mp3' },
          { id: 'opt-4', image: 'word-et', label: 'قلم', isCorrect: true, optionAudio: '/audio/ar/word-qalam.mp3' },
          { id: 'opt-5', image: 'word-lev', label: 'قلب', isCorrect: true, optionAudio: '/audio/ar/word-qalb.mp3' },
          { id: 'opt-6', image: 'word-sira', label: 'قارب', isCorrect: true, optionAudio: '/audio/ar/word-qarib.mp3' },
          { id: 'opt-7', image: 'word-qufl', label: 'قفل', isCorrect: true, optionAudio: '/audio/ar/word-qufl.mp3' },
          { id: 'opt-8', image: 'word-kova', label: 'قبعة', isCorrect: true, optionAudio: '/audio/ar/word-qubaa.mp3' },
          { id: 'opt-9', image: 'word-rainbow', label: 'قوس قزح', isCorrect: true, optionAudio: '/audio/ar/word-qaws-quzah.mp3' },
        ],
      },
      // Question 2: Select all ق letters from 3x3 grid
      {
        id: 'lq-ar-e2',
        instruction: 'בחרו את כל האותיות ق',
        instructionAudio: '/audio/ar/select-all-qaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-2', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-3', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-4', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-5', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-8', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-9', image: 'letter-ta2-ar', label: 'ط' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ق among 6 letters
      {
        id: 'lq-ar-e3',
        instruction: 'מצאו את האות ق',
        instructionAudio: '/audio/ar/find-qaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-2', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-3', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-4', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-5', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-6', image: 'letter-ra-ar', label: 'ر' },
        ],
      },
      // Question 4: Which word starts with ق
      {
        id: 'lq-ar-e4',
        instruction: 'איזו מילה מתחילה באות ق?',
        instructionAudio: '/audio/ar/word-starts-qaf.mp3',
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'قطة', isCorrect: true, optionAudio: '/audio/ar/word-qitta.mp3' },
          { id: 'opt-2', image: 'word-pil', label: 'فيل', optionAudio: '/audio/ar/word-fil.mp3' },
          { id: 'opt-3', image: 'word-ghazal', label: 'غزال', optionAudio: '/audio/ar/word-ghazal.mp3' },
          { id: 'opt-4', image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
        ],
      },
      // Question 5: Find letter ق among different letters
      {
        id: 'lq-ar-e5',
        instruction: 'מצאו את האות ق',
        instructionAudio: '/audio/ar/find-qaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-4', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-5', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-6', image: 'letter-dhal-ar', label: 'ذ' },
        ],
      },
      // Question 6: Multi-select marking أ and ق
      {
        id: 'lq-ar-e6',
        instruction: 'סמנו את כל האותיות أ ו-ق',
        instructionAudio: '/audio/ar/mark-all-alef-qaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-10', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-11', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-12', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(20, 'lq-ar', 7),
    ],
  },
};

export default learnQafAr;
