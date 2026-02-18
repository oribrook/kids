// Game: Learn the Letter Fa (ف) - Arabic
// Category: Arabic Letters (طظعغف)
// Type: Standard selection - introduction to the letter ف
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: فيل (elephant), فراشة (butterfly), فأر (mouse), فراولة (strawberry),
//        فستان (dress), فم (mouth), فلفل (pepper), فانوس (lantern), فنجان (cup)

import { generateCumulativeReview, arabicLetterOrder } from '../arabicWordBank';

const learnFaAr = {
  id: 'learn-fa-ar',
  categoryId: 'arabic-ta-fa',
  name: 'ف',
  description: 'למדו את האות ف',
  icon: 'ف',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lf-ar-e1',
        instruction: 'זוהי האות ف. המילים הבאות מתחילות באות ف',
        instructionAudio: '/audio/ar/intro-fa.mp3',
        questionImage: 'letter-fa-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-pil', label: 'فيل', isCorrect: true, optionAudio: '/audio/ar/word-fil.mp3' },
          { id: 'opt-2', image: 'word-parpar', label: 'فراشة', isCorrect: true, optionAudio: '/audio/ar/word-farasha.mp3' },
          { id: 'opt-3', image: 'word-achbar', label: 'فأر', isCorrect: true, optionAudio: '/audio/ar/word-faar.mp3' },
          { id: 'opt-4', image: 'word-farawla', label: 'فراولة', isCorrect: true, optionAudio: '/audio/ar/word-farawla.mp3' },
          { id: 'opt-5', image: 'word-fustan', label: 'فستان', isCorrect: true, optionAudio: '/audio/ar/word-fustan.mp3' },
          { id: 'opt-6', image: 'word-fam', label: 'فم', isCorrect: true, optionAudio: '/audio/ar/word-fam.mp3' },
          { id: 'opt-7', image: 'word-pilpel', label: 'فلفل', isCorrect: true, optionAudio: '/audio/ar/word-filfil.mp3' },
          { id: 'opt-8', image: 'word-fanus', label: 'فانوس', isCorrect: true, optionAudio: '/audio/ar/word-fanus.mp3' },
          { id: 'opt-9', image: 'word-finjan', label: 'فنجان', isCorrect: true, optionAudio: '/audio/ar/word-finjan.mp3' },
        ],
      },
      // Question 2: Select all ف letters from 3x3 grid
      {
        id: 'lf-ar-e2',
        instruction: 'בחרו את כל האותיות ف',
        instructionAudio: '/audio/ar/select-all-fa.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-2', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-3', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-4', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-5', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-6', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-7', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ف among 6 letters
      {
        id: 'lf-ar-e3',
        instruction: 'מצאו את האות ف',
        instructionAudio: '/audio/ar/find-fa.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-2', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-3', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-4', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-5', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-6', image: 'letter-kha-ar', label: 'خ' },
        ],
      },
      // Question 4: Which word starts with ف
      {
        id: 'lf-ar-e4',
        instruction: 'איזו מילה מתחילה באות ف?',
        instructionAudio: '/audio/ar/word-starts-fa.mp3',
        options: [
          { id: 'opt-1', image: 'word-pil', label: 'فيل', isCorrect: true, optionAudio: '/audio/ar/word-fil.mp3' },
          { id: 'opt-2', image: 'word-ghazal', label: 'غزال', optionAudio: '/audio/ar/word-ghazal.mp3' },
          { id: 'opt-3', image: 'word-ayin-eye', label: 'عين', optionAudio: '/audio/ar/word-ayn.mp3' },
          { id: 'opt-4', image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
        ],
      },
      // Question 5: Find letter ف among different letters
      {
        id: 'lf-ar-e5',
        instruction: 'מצאו את האות ف',
        instructionAudio: '/audio/ar/find-fa.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
        ],
      },
      // Question 6: Which word starts with ف (different word)
      {
        id: 'lf-ar-e6',
        instruction: 'איזו מילה מתחילה באות ف?',
        instructionAudio: '/audio/ar/word-starts-fa.mp3',
        options: [
          { id: 'opt-1', image: 'word-ghayma', label: 'غيمة', optionAudio: '/audio/ar/word-ghayma.mp3' },
          { id: 'opt-2', image: 'word-parpar', label: 'فراشة', isCorrect: true, optionAudio: '/audio/ar/word-farasha.mp3' },
          { id: 'opt-3', image: 'word-dharf', label: 'ظرف', optionAudio: '/audio/ar/word-dharf.mp3' },
          { id: 'opt-4', image: 'word-akavish', label: 'عنكبوت', optionAudio: '/audio/ar/word-ankabut.mp3' },
        ],
      },
      // Question 7: Multi-select marking ظ, ع, غ, ف (last 4 letters)
      {
        id: 'lf-ar-e7',
        instruction: 'סמנו את כל האותיות ظ, ع, غ ו-ف',
        instructionAudio: '/audio/ar/mark-all-dha2-fa.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-6', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-7', image: 'letter-fa-ar', label: 'ف', isCorrect: true },
          { id: 'opt-8', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-9', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-10', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-11', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-12', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(19, 'lf-ar', 8),
    ],
  },
};

export default learnFaAr;
