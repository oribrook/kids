// Audio Objects Game 2 - לגיל הרך
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjects2 = {
  id: 'audio-objects-2',
  categoryId: 'toddler-audio',
  name: 'מה שומעים? 2',
  description: 'הקשיבו לצליל ובחרו - עם רמז של אות ראשונה',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - בננה (ב)
      {
        id: 'q1',
        instruction: 'האות הראשונה: ב',
        instructionAudio: '/audio/word-banana.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-2', image: 'word-banana', label: 'בננה', isCorrect: true },
          { id: 'opt-3', image: 'word-limon', label: 'לימון' },
          { id: 'opt-4', image: 'word-gezer', label: 'גזר' },
        ],
      },
      // Question 2 - 4 options - ארנב (א) - using word-rabbit
      {
        id: 'q2',
        instruction: 'האות הראשונה: א',
        instructionAudio: '/audio/word-arye.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'זברה' },
          { id: 'opt-2', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-3', image: 'word-arye', label: 'אריה', isCorrect: true },
          { id: 'opt-4', image: 'word-namer', label: 'נמר' },
        ],
      },
      // Question 3 - 9 options - שמש (ש)
      {
        id: 'q3',
        instruction: 'האות הראשונה: ש',
        instructionAudio: '/audio/word-shemesh.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-yareach', label: 'ירח' },
          { id: 'opt-2', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-3', image: 'word-shemesh', label: 'שמש', isCorrect: true },
          { id: 'opt-4', image: 'word-geshem', label: 'גשם' },
          { id: 'opt-5', image: 'word-etz', label: 'עץ' },
          { id: 'opt-6', image: 'word-har', label: 'הר' },
          { id: 'opt-7', image: 'word-vered', label: 'ורד' },
          { id: 'opt-8', image: 'word-deshe', label: 'דשא' },
          { id: 'opt-9', image: 'word-bayit', label: 'בית' },
        ],
      },
      // Question 4 - 4 options - דלת (ד)
      {
        id: 'q4',
        instruction: 'האות הראשונה: ד',
        instructionAudio: '/audio/word-delet.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-bayit', label: 'בית' },
          { id: 'opt-2', image: 'word-delet', label: 'דלת', isCorrect: true },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-mita', label: 'מיטה' },
        ],
      },
      // Question 5 - 9 options - גזר (ג)
      {
        id: 'q5',
        instruction: 'האות הראשונה: ג',
        instructionAudio: '/audio/word-gezer.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-limon', label: 'לימון' },
          { id: 'opt-4', image: 'word-avatiach', label: 'אבטיח' },
          { id: 'opt-5', image: 'word-gezer', label: 'גזר', isCorrect: true },
          { id: 'opt-6', image: 'word-tut', label: 'תות' },
          { id: 'opt-7', image: 'word-melafafon', label: 'מלפפון' },
          { id: 'opt-8', image: 'word-uga', label: 'עוגה' },
          { id: 'opt-9', image: 'word-lechem', label: 'לחם' },
        ],
      },
      // Question 6 - 4 options - ורד (ו)
      {
        id: 'q6',
        instruction: 'האות הראשונה: ו',
        instructionAudio: '/audio/word-vered.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'עץ' },
          { id: 'opt-2', image: 'word-deshe', label: 'דשא' },
          { id: 'opt-3', image: 'word-vered', label: 'ורד', isCorrect: true },
          { id: 'opt-4', image: 'word-gina', label: 'גינה' },
        ],
      },
      // Question 7 - 9 options - זברה (ז)
      {
        id: 'q7',
        instruction: 'האות הראשונה: ז',
        instructionAudio: '/audio/word-zebra.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-5', image: 'word-arye', label: 'אריה' },
          { id: 'opt-6', image: 'word-zebra', label: 'זברה', isCorrect: true },
          { id: 'opt-7', image: 'word-pil', label: 'פיל' },
          { id: 'opt-8', image: 'word-namer', label: 'נמר' },
          { id: 'opt-9', image: 'word-dag', label: 'דג' },
        ],
      },
      // Question 8 - 4 options - עוגה (ע)
      {
        id: 'q8',
        instruction: 'האות הראשונה: ע',
        instructionAudio: '/audio/word-uga.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-lechem', label: 'לחם' },
          { id: 'opt-2', image: 'word-uga', label: 'עוגה', isCorrect: true },
          { id: 'opt-3', image: 'word-pita', label: 'פיתה' },
          { id: 'opt-4', image: 'word-waffle', label: 'וופל' },
        ],
      },
      // Question 9 - 9 options - נחש (נ)
      {
        id: 'q9',
        instruction: 'האות הראשונה: נ',
        instructionAudio: '/audio/word-nachash.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-3', image: 'word-dag', label: 'דג' },
          { id: 'opt-4', image: 'word-tsfardea', label: 'צפרדע' },
          { id: 'opt-5', image: 'word-nachash', label: 'נחש', isCorrect: true },
          { id: 'opt-6', image: 'word-tsipor', label: 'ציפור' },
          { id: 'opt-7', image: 'word-dvora', label: 'דבורה' },
          { id: 'opt-8', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-9', image: 'word-nemala', label: 'נמלה' },
        ],
      },
      // Question 10 - 4 options - ירח (י)
      {
        id: 'q10',
        instruction: 'האות הראשונה: י',
        instructionAudio: '/audio/word-yareach.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-2', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-3', image: 'word-yareach', label: 'ירח', isCorrect: true },
          { id: 'opt-4', image: 'word-geshem', label: 'גשם' },
        ],
      },
    ],
  },
};

export default audioObjects2;
