// Game: Learn the Letter Nun (ن) - Arabic
// Category: Arabic Letters (قكلمن)
// Type: Standard selection - introduction to the letter ن
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: نجمة (star), نحلة (bee), نمر (tiger), نار (fire), نظارات (glasses),
//        نملة (ant), نهر (river), نخلة (palm tree), نعل (shoe)

import { generateCumulativeReview } from '../arabicWordBank';

const learnNunAr = {
  id: 'learn-nun-ar',
  categoryId: 'arabic-qaf-nun',
  name: 'ن',
  description: 'למדו את האות ن',
  icon: 'ن',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ln-ar-e1',
        instruction: 'זוהי האות ن. המילים הבאות מתחילות באות ن',
        instructionAudio: '/audio/ar/intro-nun-ar.mp3',
        questionImage: 'letter-nun-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'نجمة', isCorrect: true, optionAudio: '/audio/ar/word-najma.mp3' },
          { id: 'opt-2', image: 'word-dvora', label: 'نحلة', isCorrect: true, optionAudio: '/audio/ar/word-nahla.mp3' },
          { id: 'opt-3', image: 'word-namer', label: 'نمر', isCorrect: true, optionAudio: '/audio/ar/word-namir.mp3' },
          { id: 'opt-4', image: 'word-esh', label: 'نار', isCorrect: true, optionAudio: '/audio/ar/word-nar.mp3' },
          { id: 'opt-5', image: 'word-nadharat', label: 'نظارات', isCorrect: true, optionAudio: '/audio/ar/word-nadharat.mp3' },
          { id: 'opt-6', image: 'word-nemala', label: 'نملة', isCorrect: true, optionAudio: '/audio/ar/word-namla.mp3' },
          { id: 'opt-7', image: 'word-nahr', label: 'نهر', isCorrect: true, optionAudio: '/audio/ar/word-nahr.mp3' },
          { id: 'opt-8', image: 'word-nakhla', label: 'نخلة', isCorrect: true, optionAudio: '/audio/ar/word-nakhla.mp3' },
          { id: 'opt-9', image: 'word-naal', label: 'نعل', isCorrect: true, optionAudio: '/audio/ar/word-naal.mp3' },
        ],
      },
      // Question 2: Select all ن letters from 3x3 grid
      {
        id: 'ln-ar-e2',
        instruction: 'בחרו את כל האותיות ن',
        instructionAudio: '/audio/ar/select-all-nun-ar.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-2', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-3', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-4', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-5', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-6', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-7', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-fa-ar', label: 'ف' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ن among 6 letters
      {
        id: 'ln-ar-e3',
        instruction: 'מצאו את האות ن',
        instructionAudio: '/audio/ar/find-nun-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-2', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-3', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-4', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-5', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-6', image: 'letter-fa-ar', label: 'ف' },
        ],
      },
      // Question 4: Which word starts with ن
      {
        id: 'ln-ar-e4',
        instruction: 'איזו מילה מתחילה באות ن?',
        instructionAudio: '/audio/ar/word-starts-nun-ar.mp3',
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'نجمة', isCorrect: true, optionAudio: '/audio/ar/word-najma.mp3' },
          { id: 'opt-2', image: 'word-banana', label: 'موز', optionAudio: '/audio/ar/word-mawz.mp3' },
          { id: 'opt-3', image: 'word-limon', label: 'ليمون', optionAudio: '/audio/ar/word-leimun.mp3' },
          { id: 'opt-4', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
        ],
      },
      // Question 5: Find letter ن among different letters
      {
        id: 'ln-ar-e5',
        instruction: 'מצאו את האות ن',
        instructionAudio: '/audio/ar/find-nun-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-4', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
        ],
      },
      // Question 6: Which word starts with ن (different word)
      {
        id: 'ln-ar-e6',
        instruction: 'איזו מילה מתחילה באות ن?',
        instructionAudio: '/audio/ar/word-starts-nun-ar.mp3',
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
          { id: 'opt-2', image: 'word-dvora', label: 'نحلة', isCorrect: true, optionAudio: '/audio/ar/word-nahla.mp3' },
          { id: 'opt-3', image: 'word-key', label: 'مفتاح', optionAudio: '/audio/ar/word-miftah.mp3' },
          { id: 'opt-4', image: 'word-sefer', label: 'كتاب', optionAudio: '/audio/ar/word-kitab.mp3' },
        ],
      },
      // Question 7: Multi-select marking ك, ل, م, ن (last 4 letters)
      {
        id: 'ln-ar-e7',
        instruction: 'סמנו את כל האותיות ك, ل, م ו-ن',
        instructionAudio: '/audio/ar/mark-all-kaf-nun.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-nun-ar', label: 'ن', isCorrect: true },
          { id: 'opt-8', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-9', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-10', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-11', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-12', image: 'letter-ta2-ar', label: 'ط' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(24, 'ln-ar', 8),
    ],
  },
};

export default learnNunAr;
