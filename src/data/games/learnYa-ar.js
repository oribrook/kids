// Game: Learn the Letter Ya (ي) - Arabic
// Category: Arabic Letters (هوي)
// Type: Standard selection - introduction to the letter ي
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: يد (hand), يقطين (pumpkin), يمامة (dove), يخت (yacht),
//        يرقة (caterpillar), ياسمين (jasmine), يعسوب (dragonfly), يوم (day), يانع (ripe)

import { generateCumulativeReview } from '../arabicWordBank';

const learnYaAr = {
  id: 'learn-ya-ar',
  categoryId: 'arabic-ha-ya',
  name: 'ي',
  description: 'למדו את האות ي',
  icon: 'ي',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ly-ar-e1',
        instruction: 'זוהי האות ي. המילים הבאות מתחילות באות ي',
        instructionAudio: '/audio/ar/intro-ya.mp3',
        questionImage: 'letter-ya-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-yadayim', label: 'يد', isCorrect: true, optionAudio: '/audio/ar/word-yad.mp3' },
          { id: 'opt-2', image: 'word-yaqteen', label: 'يقطين', isCorrect: true, optionAudio: '/audio/ar/word-yaqteen.mp3' },
          { id: 'opt-3', image: 'word-hamama', label: 'يمامة', isCorrect: true, optionAudio: '/audio/ar/word-yamama.mp3' },
          { id: 'opt-4', image: 'word-yakht', label: 'يخت', isCorrect: true, optionAudio: '/audio/ar/word-yakht.mp3' },
          { id: 'opt-5', image: 'word-yarqa', label: 'يرقة', isCorrect: true, optionAudio: '/audio/ar/word-yarqa.mp3' },
          { id: 'opt-6', image: 'word-yasmeen', label: 'ياسمين', isCorrect: true, optionAudio: '/audio/ar/word-yasmeen.mp3' },
          { id: 'opt-7', image: 'word-yasoob', label: 'يعسوب', isCorrect: true, optionAudio: '/audio/ar/word-yasoob.mp3' },
          { id: 'opt-8', image: 'word-sun', label: 'يوم', isCorrect: true, optionAudio: '/audio/ar/word-yawm.mp3' },
          { id: 'opt-9', image: 'word-yanii', label: 'يانع', isCorrect: true, optionAudio: '/audio/ar/word-yanii.mp3' },
        ],
      },
      // Question 2: Select all ي letters from 3x3 grid
      {
        id: 'ly-ar-e2',
        instruction: 'בחרו את כל האותיות ي',
        instructionAudio: '/audio/ar/select-all-ya.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-2', image: 'letter-waw-ar', label: 'و' },
          { id: 'opt-3', image: 'letter-ha2-ar', label: 'ه' },
          { id: 'opt-4', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-5', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-6', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-7', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-lam-ar', label: 'ل' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ي among 6 letters
      {
        id: 'ly-ar-e3',
        instruction: 'מצאו את האות ي',
        instructionAudio: '/audio/ar/find-ya.mp3',
        options: [
          { id: 'opt-1', image: 'letter-waw-ar', label: 'و' },
          { id: 'opt-2', image: 'letter-ha2-ar', label: 'ه' },
          { id: 'opt-3', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-4', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-5', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-6', image: 'letter-kaf-ar', label: 'ك' },
        ],
      },
      // Question 4: Which word starts with ي
      {
        id: 'ly-ar-e4',
        instruction: 'איזו מילה מתחילה באות ي?',
        instructionAudio: '/audio/ar/word-starts-ya.mp3',
        options: [
          { id: 'opt-1', image: 'word-yadayim', label: 'يد', isCorrect: true, optionAudio: '/audio/ar/word-yad.mp3' },
          { id: 'opt-2', image: 'word-vered', label: 'وردة', optionAudio: '/audio/ar/word-warda.mp3' },
          { id: 'opt-3', image: 'word-telephone', label: 'هاتف', optionAudio: '/audio/ar/word-hatif.mp3' },
          { id: 'opt-4', image: 'word-banana', label: 'موز', optionAudio: '/audio/ar/word-mawz.mp3' },
        ],
      },
      // Question 5: Find letter ي among different letters
      {
        id: 'ly-ar-e5',
        instruction: 'מצאו את האות ي',
        instructionAudio: '/audio/ar/find-ya.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-4', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
        ],
      },
      // Question 6: Which word starts with ي (different word)
      {
        id: 'ly-ar-e6',
        instruction: 'איזו מילה מתחילה באות ي?',
        instructionAudio: '/audio/ar/word-starts-ya.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-2', image: 'word-yaqteen', label: 'يقطين', isCorrect: true, optionAudio: '/audio/ar/word-yaqteen.mp3' },
          { id: 'opt-3', image: 'word-key', label: 'مفتاح', optionAudio: '/audio/ar/word-miftah.mp3' },
          { id: 'opt-4', image: 'word-sefer', label: 'كتاب', optionAudio: '/audio/ar/word-kitab.mp3' },
        ],
      },
      // Question 7: Multi-select marking ه, و, ي (last 3 letters of the alphabet!)
      {
        id: 'ly-ar-e7',
        instruction: 'סמנו את כל האותיות ه, و ו-ي',
        instructionAudio: '/audio/ar/mark-all-ha2-ya.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-ya-ar', label: 'ي', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-8', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-9', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-10', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-11', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-12', image: 'letter-kaf-ar', label: 'ك' },
        ],
        correctCount: 3,
      },
      generateCumulativeReview(27, 'ly-ar', 8),
    ],
  },
};

export default learnYaAr;
