// Game: Learn the Letter Ha (ه) - Arabic
// Category: Arabic Letters (هوي)
// Type: Standard selection - introduction to the letter ه
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: هاتف (phone), هرم (pyramid), هدية (gift), هلال (crescent),
//        هواء (air), هليكوبتر (helicopter), هدهد (hoopoe), هريسة (harissa), هرة (cat)

import { generateCumulativeReview } from '../arabicWordBank';

const learnHa2Ar = {
  id: 'learn-ha2-ar',
  categoryId: 'arabic-ha-ya',
  name: 'ه',
  description: 'למדו את האות ه',
  icon: 'ه',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lh2-ar-e1',
        instruction: 'זוהי האות ه. המילים הבאות מתחילות באות ه',
        instructionAudio: '/audio/ar/intro-ha2.mp3',
        questionImage: 'letter-ha2-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-telephone', label: 'هاتف', isCorrect: true, optionAudio: '/audio/ar/word-hatif.mp3' },
          { id: 'opt-2', image: 'word-haram', label: 'هرم', isCorrect: true, optionAudio: '/audio/ar/word-haram.mp3' },
          { id: 'opt-3', image: 'word-hadiya', label: 'هدية', isCorrect: true, optionAudio: '/audio/ar/word-hadiya.mp3' },
          { id: 'opt-4', image: 'word-hilal', label: 'هلال', isCorrect: true, optionAudio: '/audio/ar/word-hilal.mp3' },
          { id: 'opt-5', image: 'word-hawaa', label: 'هواء', isCorrect: true, optionAudio: '/audio/ar/word-hawaa.mp3' },
          { id: 'opt-6', image: 'word-helicopter', label: 'هليكوبتر', isCorrect: true, optionAudio: '/audio/ar/word-helicopter.mp3' },
          { id: 'opt-7', image: 'word-hudhud', label: 'هدهد', isCorrect: true, optionAudio: '/audio/ar/word-hudhud.mp3' },
          { id: 'opt-8', image: 'word-harisa', label: 'هريسة', isCorrect: true, optionAudio: '/audio/ar/word-harisa.mp3' },
          { id: 'opt-9', image: 'word-chatul', label: 'هرة', isCorrect: true, optionAudio: '/audio/ar/word-hirra.mp3' },
        ],
      },
      // Question 2: Select all ه letters from 3x3 grid
      {
        id: 'lh2-ar-e2',
        instruction: 'בחרו את כל האותיות ه',
        instructionAudio: '/audio/ar/select-all-ha2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-2', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-3', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-4', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-5', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-6', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-7', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-lam-ar', label: 'ل' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ه among 6 letters
      {
        id: 'lh2-ar-e3',
        instruction: 'מצאו את האות ه',
        instructionAudio: '/audio/ar/find-ha2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-2', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-3', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-4', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-5', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-6', image: 'letter-fa-ar', label: 'ف' },
        ],
      },
      // Question 4: Which word starts with ه
      {
        id: 'lh2-ar-e4',
        instruction: 'איזו מילה מתחילה באות ه?',
        instructionAudio: '/audio/ar/word-starts-ha2.mp3',
        options: [
          { id: 'opt-1', image: 'word-telephone', label: 'هاتف', isCorrect: true, optionAudio: '/audio/ar/word-hatif.mp3' },
          { id: 'opt-2', image: 'word-banana', label: 'موز', optionAudio: '/audio/ar/word-mawz.mp3' },
          { id: 'opt-3', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-4', image: 'word-kochav', label: 'نجمة', optionAudio: '/audio/ar/word-najma.mp3' },
        ],
      },
      // Question 5: Find letter ه among different letters
      {
        id: 'lh2-ar-e5',
        instruction: 'מצאו את האות ه',
        instructionAudio: '/audio/ar/find-ha2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-4', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
        ],
      },
      // Question 6: Multi-select marking أ and ه
      {
        id: 'lh2-ar-e6',
        instruction: 'סמנו את כל האותיות أ ו-ه',
        instructionAudio: '/audio/ar/mark-all-alef-ha2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-10', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-11', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-12', image: 'letter-mim-ar', label: 'م' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(25, 'lh2-ar', 7),
    ],
  },
};

export default learnHa2Ar;
