// Hebrew Letter Bank - Centralized mapping of all 22 Hebrew letters + 5 final forms (sofit)
// with their display character, name (with nikud), and audio file path.
// Reusable across memory games, quizzes, instructions, and any future features.

export const hebrewLetters = [
  { id: 'alef',   char: 'א', name: 'אָלֶף',   audio: '/audio/letters/he/alef.mp3' },
  { id: 'bet',    char: 'ב', name: 'בֵּת',     audio: '/audio/letters/he/bet.mp3' },
  { id: 'gimel',  char: 'ג', name: 'גִּימֶל',  audio: '/audio/letters/he/gimel.mp3' },
  { id: 'dalet',  char: 'ד', name: 'דָּלֶת',   audio: '/audio/letters/he/dalet.mp3' },
  { id: 'he',     char: 'ה', name: 'הֵי',      audio: '/audio/letters/he/he.mp3' },
  { id: 'vav',    char: 'ו', name: 'וָו',      audio: '/audio/letters/he/vav.mp3' },
  { id: 'zayin',  char: 'ז', name: 'זָאִין',   audio: '/audio/letters/he/zayin.mp3' },
  { id: 'chet',   char: 'ח', name: 'חֵת',      audio: '/audio/letters/he/chet.mp3' },
  { id: 'tet',    char: 'ט', name: 'טֶת',      audio: '/audio/letters/he/tet.mp3' },
  { id: 'yod',    char: 'י', name: 'יוּד',     audio: '/audio/letters/he/yod.mp3' },
  { id: 'kaf',    char: 'כ', name: 'כָּף',     audio: '/audio/letters/he/kaf.mp3' },
  { id: 'lamed',  char: 'ל', name: 'לָמֶד',    audio: '/audio/letters/he/lamed.mp3' },
  { id: 'mem',    char: 'מ', name: 'מֵם',      audio: '/audio/letters/he/mem.mp3' },
  { id: 'nun',    char: 'נ', name: 'נוּן',     audio: '/audio/letters/he/nun.mp3' },
  { id: 'samech', char: 'ס', name: 'סָמֶךְ',   audio: '/audio/letters/he/samech.mp3' },
  { id: 'ayin',   char: 'ע', name: 'עַיִן',    audio: '/audio/letters/he/ayin.mp3' },
  { id: 'peh',    char: 'פ', name: 'פֵּי',     audio: '/audio/letters/he/peh.mp3' },
  { id: 'tsade',  char: 'צ', name: 'צָדִיק',   audio: '/audio/letters/he/tsade.mp3' },
  { id: 'kof',    char: 'ק', name: 'קוּף',     audio: '/audio/letters/he/kof.mp3' },
  { id: 'resh',   char: 'ר', name: 'רֵישׁ',    audio: '/audio/letters/he/resh.mp3' },
  { id: 'shin',   char: 'ש', name: 'שִׁן',     audio: '/audio/letters/he/shin.mp3' },
  { id: 'tav',    char: 'ת', name: 'תָּף',     audio: '/audio/letters/he/tav.mp3' },
];

// Final forms (sofit) - letters that look different at the end of a word
export const hebrewLettersSofit = [
  { id: 'mem-sofit',   char: 'ם', name: 'מֵם סוֹפִית',    audio: '/audio/letters/he/mem-sofit.mp3' },
  { id: 'nun-sofit',   char: 'ן', name: 'נוּן סוֹפִית',   audio: '/audio/letters/he/nun-sofit.mp3' },
  { id: 'tsade-sofit', char: 'ץ', name: 'צָדִיק סוֹפִית', audio: '/audio/letters/he/tsade-sofit.mp3' },
  { id: 'peh-sofit',   char: 'ף', name: 'פֵּי סוֹפִית',   audio: '/audio/letters/he/peh-sofit.mp3' },
  { id: 'kaf-sofit',   char: 'ך', name: 'כָּף סוֹפִית',   audio: '/audio/letters/he/kaf-sofit.mp3' },
];

// All Hebrew letters including final forms
export const hebrewLettersAll = [...hebrewLetters, ...hebrewLettersSofit];

// Quick lookup: 'א' -> '/audio/letters/he/alef.mp3'
export const letterAudioByChar = Object.fromEntries(
  hebrewLettersAll.map(l => [l.char, l.audio])
);

export default hebrewLetters;
