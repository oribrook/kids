// Categories configuration for the kids game platform
// 3-level hierarchy: Language → Topic → Category → Games

// =============================================================================
// LEVEL 1: LANGUAGES
// =============================================================================
export const languages = [
  {
    id: 'hebrew',
    name: 'עברית',
    description: 'למידת עברית',
    icon: 'א',
    color: '#00CEC9',
    backgroundColor: '#E0F7FA',
  },
  {
    id: 'english',
    name: 'English',
    description: 'Learn English',
    icon: 'A',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
  },
  {
    id: 'arabic',
    name: 'عربية',
    description: 'לימוד ערבית',
    icon: 'أ',
    color: '#2ECC71',
    backgroundColor: '#E8F8F5',
  },
  {
    id: 'numbers',
    name: 'מספרים',
    description: 'לימוד מספרים',
    icon: '123',
    color: '#F39C12',
    backgroundColor: '#FEF9E7',
  },
];

// =============================================================================
// LEVEL 2: TOPICS (per language)
// =============================================================================
export const topics = [
  // Hebrew topics
  {
    id: 'hebrew-letters',
    languageId: 'hebrew',
    name: 'אותיות',
    description: 'לימוד אותיות הא"ב',
    icon: 'אב',
    color: '#00CEC9',
    backgroundColor: '#E0F7FA',
  },
  {
    id: 'hebrew-nikud',
    languageId: 'hebrew',
    name: 'ניקוד',
    description: 'לימוד סימני הניקוד',
    icon: 'בָּ',
    color: '#E17055',
    backgroundColor: '#FFEAA7',
  },
  {
    id: 'hebrew-toddler',
    languageId: 'hebrew',
    name: 'לגיל הרך',
    description: 'משחקים לגילאי 3-5',
    icon: '🎒',
    color: '#FF6B9D',
    backgroundColor: '#FFE4EC',
  },
  {
    id: 'hebrew-memory',
    languageId: 'hebrew',
    name: 'משחקי זיכרון',
    description: 'משחקי זיכרון לתרגול',
    icon: '🧠',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
  },
  // Arabic topics
  {
    id: 'arabic-letters',
    languageId: 'arabic',
    name: 'אותיות',
    description: 'לימוד אותיות בערבית',
    icon: 'أب',
    color: '#2ECC71',
    backgroundColor: '#E8F8F5',
  },
  // English topics (for future)
  {
    id: 'english-letters',
    languageId: 'english',
    name: 'Letters',
    description: 'Learn the alphabet',
    icon: 'AB',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
  },
  {
    id: 'english-toddler',
    languageId: 'english',
    name: 'For Toddlers',
    description: 'Games for ages 3-5',
    icon: '🎒',
    color: '#FF6B9D',
    backgroundColor: '#FFE4EC',
  },
  // Numbers topics (מספרים)
  {
    id: 'numbers-intro',
    languageId: 'numbers',
    name: 'הכרת המספרים',
    description: 'לימוד והכרת המספרים',
    icon: '🔢',
    color: '#F39C12',
    backgroundColor: '#FEF9E7',
  },
  {
    id: 'numbers-counting',
    languageId: 'numbers',
    name: 'משחקי ספירה',
    description: 'תרגול ספירה',
    icon: '🧮',
    color: '#27AE60',
    backgroundColor: '#D5F5E3',
  },
  {
    id: 'numbers-math',
    languageId: 'numbers',
    name: 'משחקי חשבון',
    description: 'חיבור וחיסור',
    icon: '➕',
    color: '#3498DB',
    backgroundColor: '#EBF5FB',
  },
];

// =============================================================================
// LEVEL 3: CATEGORIES (letter groups, etc.)
// =============================================================================
export const categories = [
  // Hebrew Letters categories
  {
    id: 'letters-alef-he',
    topicId: 'hebrew-letters',
    name: 'אבגדה',
    description: 'אותיות א עד ה',
    icon: 'א',
    color: '#00CEC9',
    backgroundColor: '#E0F7FA',
    games: ['learn-alef', 'learn-bet', 'learn-gimel', 'learn-dalet', 'learn-he', 'quiz-alef-he'],
  },
  {
    id: 'letters-vav-yod',
    topicId: 'hebrew-letters',
    name: 'וזחטי',
    description: 'אותיות ו עד י',
    icon: 'ו',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
    games: ['learn-vav', 'learn-zayin', 'learn-chet', 'learn-tet', 'learn-yod', 'quiz-vav-yod'],
  },
  {
    id: 'letters-kaf-samech',
    topicId: 'hebrew-letters',
    name: 'כלמנס',
    description: 'אותיות כ עד ס',
    icon: 'כ',
    color: '#E17055',
    backgroundColor: '#FFEAA7',
    games: ['learn-kaf', 'learn-lamed', 'learn-mem', 'learn-nun', 'learn-samech', 'quiz-kaf-samech'],
  },
  {
    id: 'letters-ayin-resh',
    topicId: 'hebrew-letters',
    name: 'עפצקר',
    description: 'אותיות ע עד ר',
    icon: 'ע',
    color: '#00B894',
    backgroundColor: '#D5F5E3',
    games: ['learn-ayin', 'learn-peh', 'learn-tsade', 'learn-kof', 'learn-resh', 'quiz-ayin-resh'],
  },
  {
    id: 'letters-shin-tav',
    topicId: 'hebrew-letters',
    name: 'שת',
    description: 'אותיות ש ות',
    icon: 'ש',
    color: '#E84393',
    backgroundColor: '#FADBD8',
    games: ['learn-shin', 'learn-tav', 'quiz-shin-tav'],
  },
  // Hebrew Nikud categories
  {
    id: 'nikud-start',
    topicId: 'hebrew-nikud',
    name: 'בואו נתחיל',
    description: 'לימוד סימני הניקוד',
    icon: 'בֵּ',
    color: '#E17055',
    backgroundColor: '#FFEAA7',
    games: ['learn-tzeirei'],
  },
  // Hebrew Toddler categories (לגיל הרך)
  {
    id: 'toddler-audio',
    topicId: 'hebrew-toddler',
    name: 'מה שומעים?',
    description: 'זיהוי חפצים לפי צליל',
    icon: '🔊',
    color: '#FF6B9D',
    backgroundColor: '#FFE4EC',
    games: ['audio-objects', 'audio-objects-2', 'audio-objects-3', 'audio-objects-4'],
  },

  // Hebrew Toddler - Drawing (לוח ציור)
  {
    id: 'toddler-drawing',
    topicId: 'hebrew-toddler',
    name: 'לוח ציור',
    description: 'ציירו חופשי!',
    icon: '🎨',
    color: '#FF9F43',
    backgroundColor: '#FFF3E0',
    games: ['drawing-board'],
  },

  // Hebrew Toddler - Maze (מבוך)
  {
    id: 'toddler-maze',
    topicId: 'hebrew-toddler',
    name: 'מבוך',
    description: 'מצאו את הדרך!',
    icon: '🧩',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
    games: ['maze-game', 'maze-game-2', 'maze-game-3'],
  },

  // Hebrew Toddler - Brick Breaker (שבירת לבנים)
  {
    id: 'brick-breaker',
    topicId: 'hebrew-toddler',
    name: 'שבירת לבנים',
    description: 'שברו את כל הלבנים!',
    icon: '🧱',
    color: '#E74C3C',
    backgroundColor: '#FADBD8',
    games: ['brick-breaker'],
  },

  // Hebrew Toddler - Temple Run (רוץ שפנפן!)
  {
    id: 'temple-run',
    topicId: 'hebrew-toddler',
    name: 'רוץ שפנפן!',
    description: 'אספו יהלומים והימנעו ממכשולים!',
    icon: '🐰',
    color: '#27AE60',
    backgroundColor: '#D5F5E3',
    games: ['temple-run'],
  },

  // Hebrew Memory Games categories
  {
    id: 'memory-hebrew-letters',
    topicId: 'hebrew-memory',
    name: 'אותיות',
    description: 'משחק זיכרון - אותיות עברית',
    icon: '🧠',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
    games: ['memory-hebrew-letters'],
  },
  {
    id: 'memory-objects',
    topicId: 'hebrew-memory',
    name: 'מילים',
    description: 'משחק זיכרון - חפצים חמודים',
    icon: '🎀',
    color: '#E84393',
    backgroundColor: '#FDEEF4',
    games: ['memory-objects'],
  },

  // Arabic Letters categories
  {
    id: 'arabic-alef-jim',
    topicId: 'arabic-letters',
    name: 'أبتثج',
    description: 'אותיות أ עד ج',
    icon: 'أ',
    color: '#2ECC71',
    backgroundColor: '#E8F8F5',
    games: ['learn-alef-ar', 'learn-ba-ar', 'learn-ta-ar', 'learn-tha-ar', 'learn-jim-ar'],
  },
  {
    id: 'arabic-ha-ra',
    topicId: 'arabic-letters',
    name: 'حخدذر',
    description: 'אותיות ح עד ر',
    icon: 'ح',
    color: '#27AE60',
    backgroundColor: '#D5F5E3',
    games: ['learn-ha-ar', 'learn-kha-ar', 'learn-dal-ar', 'learn-dhal-ar', 'learn-ra-ar'],
  },
  {
    id: 'arabic-zay-dad',
    topicId: 'arabic-letters',
    name: 'زسشصض',
    description: 'אותיות ز עד ض',
    icon: 'ز',
    color: '#E74C3C',
    backgroundColor: '#FADBD8',
    games: ['learn-zay-ar', 'learn-sin-ar', 'learn-shin-ar', 'learn-sad-ar', 'learn-dad-ar'],
  },
  {
    id: 'arabic-ta-fa',
    topicId: 'arabic-letters',
    name: 'طظعغف',
    description: 'אותיות ط עד ف',
    icon: 'ط',
    color: '#9B59B6',
    backgroundColor: '#F5EEF8',
    games: ['learn-ta2-ar', 'learn-dha2-ar', 'learn-ain-ar', 'learn-ghain-ar', 'learn-fa-ar'],
  },
  {
    id: 'arabic-qaf-nun',
    topicId: 'arabic-letters',
    name: 'قكلمن',
    description: 'אותיות ق עד ن',
    icon: 'ق',
    color: '#E67E22',
    backgroundColor: '#FDF2E9',
    games: ['learn-qaf-ar', 'learn-kaf-ar', 'learn-lam-ar', 'learn-mim-ar', 'learn-nun-ar'],
  },
  {
    id: 'arabic-ha-ya',
    topicId: 'arabic-letters',
    name: 'هوي',
    description: 'אותיות ه עד ي',
    icon: 'ه',
    color: '#1ABC9C',
    backgroundColor: '#E8F8F5',
    games: ['learn-ha2-ar', 'learn-waw-ar', 'learn-ya-ar'],
  },
  // English Letters categories
  {
    id: 'letters-abcd',
    topicId: 'english-letters',
    name: 'ABCD',
    description: 'Letters A to D',
    icon: 'A',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
    games: ['learn-a', 'learn-b', 'learn-c', 'learn-d'],
  },
  {
    id: 'letters-efg',
    topicId: 'english-letters',
    name: 'EFG',
    description: 'Letters E to G',
    icon: 'E',
    color: '#00B894',
    backgroundColor: '#D5F5E3',
    games: ['learn-e', 'learn-f', 'learn-g'],
  },
  {
    id: 'letters-hijk',
    topicId: 'english-letters',
    name: 'HIJK',
    description: 'Letters H to K',
    icon: 'H',
    color: '#E17055',
    backgroundColor: '#FFEAA7',
    games: ['learn-h', 'learn-i', 'learn-j', 'learn-k'],
  },
  {
    id: 'letters-lmnop',
    topicId: 'english-letters',
    name: 'LMNOP',
    description: 'Letters L to P',
    icon: 'L',
    color: '#00B894',
    backgroundColor: '#D5F5E3',
    games: ['learn-l', 'learn-m', 'learn-n', 'learn-o', 'learn-p'],
  },
  {
    id: 'letters-qrst',
    topicId: 'english-letters',
    name: 'QRST',
    description: 'Letters Q to T',
    icon: 'Q',
    color: '#E17055',
    backgroundColor: '#FFEAA7',
    games: ['learn-q', 'learn-r', 'learn-s', 'learn-t-en'],
  },
  {
    id: 'letters-uv',
    topicId: 'english-letters',
    name: 'UV',
    description: 'Letters U and V',
    icon: 'U',
    color: '#9B59B6',
    backgroundColor: '#E8DAEF',
    games: ['learn-u', 'learn-v'],
  },
  {
    id: 'letters-wxyz',
    topicId: 'english-letters',
    name: 'WXYZ',
    description: 'Letters W to Z',
    icon: 'W',
    color: '#1ABC9C',
    backgroundColor: '#D5F5E3',
    games: ['learn-w', 'learn-x', 'learn-y', 'learn-z'],
  },
  // English Toddler categories (For Toddlers)
  {
    id: 'toddler-audio-en',
    topicId: 'english-toddler',
    name: 'What do we hear?',
    description: 'Identify objects by sound',
    icon: '🔊',
    color: '#FF6B9D',
    backgroundColor: '#FFE4EC',
    games: ['audio-objects-en', 'audio-objects-en-2', 'audio-objects-en-3', 'audio-objects-en-4'],
  },
  // Numbers - הכרת המספרים categories
  {
    id: 'numbers-12345',
    topicId: 'numbers-intro',
    name: '12345',
    description: 'מספרים 1 עד 5',
    icon: '1',
    color: '#F39C12',
    backgroundColor: '#FEF9E7',
    games: ['learn-one', 'learn-two', 'learn-three', 'learn-four', 'learn-five'],
  },
  {
    id: 'numbers-67890',
    topicId: 'numbers-intro',
    name: '67890',
    description: 'מספרים 6 עד 10',
    icon: '6',
    color: '#E74C3C',
    backgroundColor: '#FDEDEC',
    games: ['learn-six', 'learn-seven', 'learn-eight', 'learn-nine', 'learn-ten'],
  },
  {
    id: 'numbers-10-20',
    topicId: 'numbers-intro',
    name: '10-20',
    description: 'מספרים 10 עד 20',
    icon: '10',
    color: '#9B59B6',
    backgroundColor: '#F5EEF8',
    games: ['learn-eleven-twelve', 'learn-thirteen-fifteen', 'learn-sixteen-eighteen', 'learn-nineteen-twenty', 'quiz-ten-twenty'],
  },
  {
    id: 'numbers-20-100',
    topicId: 'numbers-intro',
    name: '20-100',
    description: 'מספרים 20 עד 100',
    icon: '20',
    color: '#1ABC9C',
    backgroundColor: '#E8F8F5',
    games: ['learn-twenty-thirty', 'learn-forty-fifty', 'learn-sixty-seventy', 'learn-eighty-ninety', 'learn-hundred', 'quiz-twenty-hundred'],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// Language helpers
export const getLanguageById = (id) => {
  return languages.find(lang => lang.id === id);
};

// Topic helpers
export const getTopicById = (id) => {
  return topics.find(topic => topic.id === id);
};

export const getTopicsByLanguage = (languageId) => {
  return topics.filter(topic => topic.languageId === languageId);
};

// Category helpers
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getCategoriesByTopic = (topicId) => {
  return categories.filter(cat => cat.topicId === topicId);
};

export const getCategoryGames = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.games : [];
};

// Get parent helpers (for back navigation)
export const getTopicForCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  return getTopicById(category.topicId);
};

export const getLanguageForTopic = (topicId) => {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  return getLanguageById(topic.languageId);
};

export default categories;
