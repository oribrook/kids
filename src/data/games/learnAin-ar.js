// Game: Learn the Letter Ain (ع) - Arabic
// Category: Arabic Letters (طظعغف)
// Type: Standard selection - introduction to the letter ع
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: عين (eye), عنب (grapes), عسل (honey), عصفور (bird), عجلة (wheel),
//        عنكبوت (spider), عربة (cart), عظم (bone), عقرب (scorpion)

import { generateCumulativeReview, arabicLetterOrder } from '../arabicWordBank';

const learnAinAr = {
  id: 'learn-ain-ar',
  categoryId: 'arabic-ta-fa',
  name: 'ع',
  description: 'למדו את האות ع',
  icon: 'ع',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'la-ar-e1',
        instruction: 'זוהי האות ع. המילים הבאות מתחילות באות ע',
        instructionAudio: '/audio/ar/intro-ain.mp3',
        questionImage: 'letter-ain-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-ayin-eye', label: 'عين', isCorrect: true, optionAudio: '/audio/ar/word-ayn.mp3' },
          { id: 'opt-2', image: 'word-inab', label: 'عنب', isCorrect: true, optionAudio: '/audio/ar/word-inab.mp3' },
          { id: 'opt-3', image: 'word-asal', label: 'عسل', isCorrect: true, optionAudio: '/audio/ar/word-asal.mp3' },
          { id: 'opt-4', image: 'word-tsipor', label: 'عصفور', isCorrect: true, optionAudio: '/audio/ar/word-usfur.mp3' },
          { id: 'opt-5', image: 'word-ajala', label: 'عجلة', isCorrect: true, optionAudio: '/audio/ar/word-ajala.mp3' },
          { id: 'opt-6', image: 'word-akavish', label: 'عنكبوت', isCorrect: true, optionAudio: '/audio/ar/word-ankabut.mp3' },
          { id: 'opt-7', image: 'word-araba', label: 'عربة', isCorrect: true, optionAudio: '/audio/ar/word-araba.mp3' },
          { id: 'opt-8', image: 'word-adhm', label: 'عظم', isCorrect: true, optionAudio: '/audio/ar/word-adhm.mp3' },
          { id: 'opt-9', image: 'word-aqrab', label: 'عقرب', isCorrect: true, optionAudio: '/audio/ar/word-aqrab.mp3' },
        ],
      },
      // Question 2: Select all ع letters from 3x3 grid
      {
        id: 'la-ar-e2',
        instruction: 'בחרו את כל האותיות ע',
        instructionAudio: '/audio/ar/select-all-ain.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-2', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-3', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-4', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-5', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-6', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-7', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-8', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-9', image: 'letter-ra-ar', label: 'ر' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ع among 6 letters
      {
        id: 'la-ar-e3',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/ar/find-ain.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-2', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-3', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-4', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with ع
      {
        id: 'la-ar-e4',
        instruction: 'איזו מילה מתחילה באות ע?',
        instructionAudio: '/audio/ar/word-starts-ain.mp3',
        options: [
          { id: 'opt-1', image: 'word-ayin-eye', label: 'عين', isCorrect: true, optionAudio: '/audio/ar/word-ayn.mp3' },
          { id: 'opt-2', image: 'word-dharf', label: 'ظرف', optionAudio: '/audio/ar/word-dharf.mp3' },
          { id: 'opt-3', image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
          { id: 'opt-4', image: 'word-tsfardea', label: 'ضفدع', optionAudio: '/audio/ar/word-difda.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ظ
      {
        id: 'la-ar-e5',
        instruction: 'מצאו את האות ظ',
        instructionAudio: '/audio/ar/find-dha2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-6', image: 'letter-dal-ar', label: 'د' },
        ],
      },
      // Question 6: Multi-select marking ط, ظ, ع
      {
        id: 'la-ar-e6',
        instruction: 'סמנו את כל האותיות ط, ظ ו-ع',
        instructionAudio: '/audio/ar/mark-all-ta2-ain.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-7', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-8', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-9', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-10', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-11', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(17, 'la-ar', 7),
    ],
  },
};

export default learnAinAr;
