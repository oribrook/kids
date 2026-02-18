// Game: Learn the Letter Mim (م) - Arabic
// Category: Arabic Letters (قكلمن)
// Type: Standard selection - introduction to the letter م
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: موز (banana), مفتاح (key), ماء (water), مدرسة (school), مطر (rain),
//        ملك (king), مكنسة (broom), مرآة (mirror), مقص (scissors)

import { generateCumulativeReview } from '../arabicWordBank';

const learnMimAr = {
  id: 'learn-mim-ar',
  categoryId: 'arabic-qaf-nun',
  name: 'م',
  description: 'למדו את האות م',
  icon: 'م',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lm-ar-e1',
        instruction: 'זוהי האות م. המילים הבאות מתחילות באות م',
        instructionAudio: '/audio/ar/intro-mim.mp3',
        questionImage: 'letter-mim-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-banana', label: 'موز', isCorrect: true, optionAudio: '/audio/ar/word-mawz.mp3' },
          { id: 'opt-2', image: 'word-key', label: 'مفتاح', isCorrect: true, optionAudio: '/audio/ar/word-miftah.mp3' },
          { id: 'opt-3', image: 'word-maa', label: 'ماء', isCorrect: true, optionAudio: '/audio/ar/word-maa.mp3' },
          { id: 'opt-4', image: 'word-madrasa', label: 'مدرسة', isCorrect: true, optionAudio: '/audio/ar/word-madrasa.mp3' },
          { id: 'opt-5', image: 'word-geshem', label: 'مطر', isCorrect: true, optionAudio: '/audio/ar/word-matar.mp3' },
          { id: 'opt-6', image: 'word-malik', label: 'ملك', isCorrect: true, optionAudio: '/audio/ar/word-malik.mp3' },
          { id: 'opt-7', image: 'word-miknasa', label: 'مكنسة', isCorrect: true, optionAudio: '/audio/ar/word-miknasa.mp3' },
          { id: 'opt-8', image: 'word-miraa', label: 'مرآة', isCorrect: true, optionAudio: '/audio/ar/word-miraa.mp3' },
          { id: 'opt-9', image: 'word-miqass', label: 'مقص', isCorrect: true, optionAudio: '/audio/ar/word-miqass.mp3' },
        ],
      },
      // Question 2: Select all م letters from 3x3 grid
      {
        id: 'lm-ar-e2',
        instruction: 'בחרו את כל האותיות م',
        instructionAudio: '/audio/ar/select-all-mim.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-2', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-3', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-4', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-5', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-6', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-7', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-ain-ar', label: 'ع' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter م among 6 letters
      {
        id: 'lm-ar-e3',
        instruction: 'מצאו את האות م',
        instructionAudio: '/audio/ar/find-mim.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-2', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-3', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-4', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-5', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
        ],
      },
      // Question 4: Which word starts with م
      {
        id: 'lm-ar-e4',
        instruction: 'איזו מילה מתחילה באות م?',
        instructionAudio: '/audio/ar/word-starts-mim.mp3',
        options: [
          { id: 'opt-1', image: 'word-banana', label: 'موز', isCorrect: true, optionAudio: '/audio/ar/word-mawz.mp3' },
          { id: 'opt-2', image: 'word-limon', label: 'ليمون', optionAudio: '/audio/ar/word-leimun.mp3' },
          { id: 'opt-3', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-4', image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ل
      {
        id: 'lm-ar-e5',
        instruction: 'מצאו את האות ل',
        instructionAudio: '/audio/ar/find-lam.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-2', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-3', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-4', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-5', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 6: Multi-select marking ق, ك, ل, م (last 4 letters)
      {
        id: 'lm-ar-e6',
        instruction: 'סמנו את כל האותיות ق, ك, ل ו-م',
        instructionAudio: '/audio/ar/mark-all-qaf-mim.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-mim-ar', label: 'م', isCorrect: true },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-10', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-11', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-12', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(23, 'lm-ar', 7),
    ],
  },
};

export default learnMimAr;
