// Audio Objects Game 4 - לגיל הרך
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjects4 = {
  id: 'audio-objects-4',
  categoryId: 'toddler-audio',
  name: 'מה שומעים? 4',
  description: 'הקשיבו לצליל ובחרו - עם רמז של אות ראשונה',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - מיטה (מ)
      {
        id: 'q1',
        instruction: 'האות הראשונה: מ',
        instructionAudio: '/audio/word-mita.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-shulchan', label: 'שולחן' },
          { id: 'opt-2', image: 'word-delet', label: 'דלת' },
          { id: 'opt-3', image: 'word-mita', label: 'מיטה', isCorrect: true },
          { id: 'opt-4', image: 'word-sefer', label: 'ספר' },
        ],
      },
      // Question 2 - 4 options - דבורה (ד)
      {
        id: 'q2',
        instruction: 'האות הראשונה: ד',
        instructionAudio: '/audio/word-dvora.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-2', image: 'word-dvora', label: 'דבורה', isCorrect: true },
          { id: 'opt-3', image: 'word-nemala', label: 'נמלה' },
          { id: 'opt-4', image: 'word-chipooshit', label: 'חיפושית' },
        ],
      },
      // Question 3 - 9 options - כדור (כ)
      {
        id: 'q3',
        instruction: 'האות הראשונה: כ',
        instructionAudio: '/audio/word-kadur.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-2', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-3', image: 'word-yareach', label: 'ירח' },
          { id: 'opt-4', image: 'word-kadur', label: 'כדור', isCorrect: true },
          { id: 'opt-5', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-6', image: 'word-bayit', label: 'בית' },
          { id: 'opt-7', image: 'word-lev', label: 'לב' },
          { id: 'opt-8', image: 'word-etz', label: 'עץ' },
          { id: 'opt-9', image: 'word-vered', label: 'ורד' },
        ],
      },
      // Question 4 - 4 options - ציפור (צ)
      {
        id: 'q4',
        instruction: 'האות הראשונה: צ',
        instructionAudio: '/audio/word-tsipor.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tsipor', label: 'ציפור', isCorrect: true },
          { id: 'opt-2', image: 'word-dvora', label: 'דבורה' },
          { id: 'opt-3', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-4', image: 'word-dag', label: 'דג' },
        ],
      },
      // Question 5 - 9 options - נר (נ)
      {
        id: 'q5',
        instruction: 'האות הראשונה: נ',
        instructionAudio: '/audio/word-ner.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-2', image: 'word-ner', label: 'נר', isCorrect: true },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-4', image: 'word-esh', label: 'אש' },
          { id: 'opt-5', image: 'word-degel', label: 'דגל' },
          { id: 'opt-6', image: 'word-bayit', label: 'בית' },
          { id: 'opt-7', image: 'word-tik', label: 'תיק' },
          { id: 'opt-8', image: 'word-tabaat', label: 'טבעת' },
          { id: 'opt-9', image: 'word-sefer', label: 'ספר' },
        ],
      },
      // Question 6 - 4 options - תות (ת)
      {
        id: 'q6',
        instruction: 'האות הראשונה: ת',
        instructionAudio: '/audio/word-tut.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-banana', label: 'בננה' },
          { id: 'opt-2', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-3', image: 'word-tut', label: 'תות', isCorrect: true },
          { id: 'opt-4', image: 'word-avatiach', label: 'אבטיח' },
        ],
      },
      // Question 7 - 9 options - בלון (ב)
      {
        id: 'q7',
        instruction: 'האות הראשונה: ב',
        instructionAudio: '/audio/word-balon.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'כדור' },
          { id: 'opt-2', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-3', image: 'word-balon', label: 'בלון', isCorrect: true },
          { id: 'opt-4', image: 'word-lev', label: 'לב' },
          { id: 'opt-5', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-6', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-7', image: 'word-yareach', label: 'ירח' },
          { id: 'opt-8', image: 'word-etz', label: 'עץ' },
          { id: 'opt-9', image: 'word-degel', label: 'דגל' },
        ],
      },
      // Question 8 - 4 options - עץ (ע)
      {
        id: 'q8',
        instruction: 'האות הראשונה: ע',
        instructionAudio: '/audio/word-etz.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-vered', label: 'ורד' },
          { id: 'opt-2', image: 'word-deshe', label: 'דשא' },
          { id: 'opt-3', image: 'word-har', label: 'הר' },
          { id: 'opt-4', image: 'word-etz', label: 'עץ', isCorrect: true },
        ],
      },
      // Question 9 - 9 options - טבעת (ט)
      {
        id: 'q9',
        instruction: 'האות הראשונה: ט',
        instructionAudio: '/audio/word-tabaat.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kova', label: 'כובע' },
          { id: 'opt-2', image: 'word-sandal', label: 'סנדל' },
          { id: 'opt-3', image: 'word-naal', label: 'נעל' },
          { id: 'opt-4', image: 'word-tabaat', label: 'טבעת', isCorrect: true },
          { id: 'opt-5', image: 'word-garbayim', label: 'גרביים' },
          { id: 'opt-6', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-7', image: 'word-tik', label: 'תיק' },
          { id: 'opt-8', image: 'word-delet', label: 'דלת' },
          { id: 'opt-9', image: 'word-shulchan', label: 'שולחן' },
        ],
      },
      // Question 10 - 4 options - גשם (ג)
      {
        id: 'q10',
        instruction: 'האות הראשונה: ג',
        instructionAudio: '/audio/word-geshem.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-2', image: 'word-geshem', label: 'גשם', isCorrect: true },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-4', image: 'word-yareach', label: 'ירח' },
        ],
      },
    ],
  },
};

export default audioObjects4;
