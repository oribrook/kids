// Word-Letters question bank ("אילו אותיות מופיעות במילה?")
//
// The closing question of every letter game from ל onwards: a word image is
// shown (no written word - the kid hears it), and the kid must find the 3
// letters that appear in the word, out of 9 letters (any order).
//
// Rules used when picking words:
// - The target letter appears SOMEWHERE in the word (not necessarily first)
// - The 3 correct letters are the "easiest" letters of the word
// - Distractor letters never appear anywhere in the word (so a kid is never
//   marked wrong for picking a letter that IS actually in the word)

const LETTER_ICON = {
  'א': 'letter-alef', 'ב': 'letter-bet', 'ג': 'letter-gimel', 'ד': 'letter-dalet',
  'ה': 'letter-he', 'ו': 'letter-vav', 'ז': 'letter-zayin', 'ח': 'letter-chet',
  'ט': 'letter-tet', 'י': 'letter-yod', 'כ': 'letter-kaf', 'ל': 'letter-lamed',
  'מ': 'letter-mem', 'נ': 'letter-nun', 'ס': 'letter-samech', 'ע': 'letter-ayin',
  'פ': 'letter-peh', 'צ': 'letter-tsade', 'ק': 'letter-kof', 'ר': 'letter-resh',
  'ש': 'letter-shin', 'ת': 'letter-tav',
};

/**
 * Build a "which letters appear in the word" multi-select question.
 * Reuses the existing engine: multiSelect + questionImage + 9-option grid.
 *
 * @param {object} cfg
 * @param {string} cfg.id - question id (e.g. 'll-e11')
 * @param {string} cfg.word - the Hebrew word (for labels/debugging)
 * @param {string} cfg.image - ItemIcons key of the word image (e.g. 'word-kelev')
 * @param {string} cfg.audio - instruction audio path (says the word out loud)
 * @param {string[]} cfg.letters - the 3 correct letters
 * @param {string[]} cfg.distractors - 6 letters that do NOT appear in the word
 */
export function buildWordLettersQuestion({ id, word, image, audio, letters, distractors }) {
  const options = [
    ...letters.map((letter, i) => ({
      id: `opt-c${i + 1}`,
      image: LETTER_ICON[letter],
      label: letter,
      isCorrect: true,
    })),
    ...distractors.map((letter, i) => ({
      id: `opt-d${i + 1}`,
      image: LETTER_ICON[letter],
      label: letter,
    })),
  ];

  return {
    id,
    instruction: `אילו אותיות מופיעות במילה? (${word})`,
    instructionAudio: audio,
    questionImage: image,
    multiSelect: true,
    options,
    correctCount: letters.length,
  };
}

// Per-letter word definitions (letter games from ל to ת).
// key = target letter, value = builder config (without id)
export const WORD_LETTERS = {
  'ל': { word: 'כלב', image: 'word-kelev', audio: '/audio/which-letters-kelev.mp3', letters: ['כ', 'ל', 'ב'], distractors: ['ד', 'ג', 'מ', 'ר', 'ט', 'ס'] },
  'מ': { word: 'גמל', image: 'word-gamal', audio: '/audio/which-letters-gamal.mp3', letters: ['ג', 'מ', 'ל'], distractors: ['ד', 'ה', 'ט', 'נ', 'ס', 'ר'] },
  'נ': { word: 'בננה', image: 'word-banana', audio: '/audio/which-letters-banana.mp3', letters: ['ב', 'נ', 'ה'], distractors: ['ג', 'ד', 'ל', 'ס', 'ט', 'ר'] },
  'ס': { word: 'סלט', image: 'word-salat', audio: '/audio/which-letters-salat.mp3', letters: ['ס', 'ל', 'ט'], distractors: ['ב', 'ג', 'מ', 'נ', 'פ', 'ק'] },
  'ע': { word: 'עכביש', image: 'word-akavish', audio: '/audio/which-letters-akavish.mp3', letters: ['ע', 'כ', 'ב'], distractors: ['ד', 'ה', 'ט', 'מ', 'נ', 'ר'] },
  'פ': { word: 'פיל', image: 'word-pil', audio: '/audio/which-letters-pil.mp3', letters: ['פ', 'י', 'ל'], distractors: ['ב', 'ג', 'ד', 'ס', 'ק', 'ר'] },
  'צ': { word: 'ציפור', image: 'word-tsipor', audio: '/audio/which-letters-tsipor.mp3', letters: ['צ', 'י', 'פ'], distractors: ['ב', 'ג', 'ד', 'ל', 'מ', 'ס'] },
  'ק': { word: 'קפה', image: 'word-kafe', audio: '/audio/which-letters-kafe.mp3', letters: ['ק', 'פ', 'ה'], distractors: ['ב', 'ג', 'ל', 'מ', 'נ', 'ס'] },
  'ר': { word: 'דבורה', image: 'word-dvora', audio: '/audio/which-letters-dvora.mp3', letters: ['ד', 'ב', 'ר'], distractors: ['ג', 'ט', 'ל', 'מ', 'נ', 'ש'] },
  'ש': { word: 'שולחן', image: 'word-shulchan', audio: '/audio/which-letters-shulchan.mp3', letters: ['ש', 'ל', 'ח'], distractors: ['ב', 'ג', 'ד', 'מ', 'ק', 'ת'] },
  'ת': { word: 'תפוח', image: 'word-tapuach', audio: '/audio/which-letters-tapuach.mp3', letters: ['ת', 'פ', 'ו'], distractors: ['ב', 'ג', 'ל', 'מ', 'נ', 'ר'] },
};

/**
 * Convenience: build the closing word-letters question for a target letter.
 * @param {string} letter - the Hebrew letter the game teaches
 * @param {string} id - question id to assign
 */
export function wordLettersQuestionFor(letter, id) {
  const cfg = WORD_LETTERS[letter];
  if (!cfg) return null;
  return buildWordLettersQuestion({ id, ...cfg });
}
