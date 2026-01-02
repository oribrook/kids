// Game: Memory Colors
// Category: Colors
// Type: Memory - remember colors then answer
// Only available in hard difficulty

const memoryColors = {
  id: 'memory-colors',
  categoryId: 'colors',
  name: 'זכרו את הצבעים',
  description: 'זכרו את הצבעים וענו על השאלה',
  icon: '🧠',
  type: 'selection',
  gameType: 'memory',
  memoryTime: 4, // seconds to memorize
  availableIn: ['hard'],

  questions: {
    hard: [
      {
        id: 'mc-h1',
        instruction: 'זכרו את הצבעים!',
        instructionAudio: '/audio/memory-colors-1.mp3',
        memoryItems: [
          { id: 'mi-1', emoji: '🔴', label: 'אדום' },
          { id: 'mi-2', emoji: '🔵', label: 'כחול' },
          { id: 'mi-3', emoji: '🟢', label: 'ירוק' },
        ],
        memoryQuestion: 'איזה צבע היה באמצע?',
        options: [
          { id: 'opt-1', emoji: '🔴', label: 'אדום' },
          { id: 'opt-2', emoji: '🔵', label: 'כחול', isCorrect: true },
          { id: 'opt-3', emoji: '🟢', label: 'ירוק' },
          { id: 'opt-4', emoji: '🟡', label: 'צהוב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mc-h2',
        instruction: 'זכרו את הצבעים!',
        instructionAudio: '/audio/memory-colors-2.mp3',
        memoryItems: [
          { id: 'mi-1', emoji: '🟡', label: 'צהוב' },
          { id: 'mi-2', emoji: '🟣', label: 'סגול' },
          { id: 'mi-3', emoji: '🟠', label: 'כתום' },
          { id: 'mi-4', emoji: '🔵', label: 'כחול' },
        ],
        memoryQuestion: 'איזה צבע היה ראשון?',
        options: [
          { id: 'opt-1', emoji: '🟣', label: 'סגול' },
          { id: 'opt-2', emoji: '🟡', label: 'צהוב', isCorrect: true },
          { id: 'opt-3', emoji: '🟠', label: 'כתום' },
          { id: 'opt-4', emoji: '🔵', label: 'כחול' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'mc-h3',
        instruction: 'זכרו את הצבעים!',
        instructionAudio: '/audio/memory-colors-3.mp3',
        memoryItems: [
          { id: 'mi-1', emoji: '🟢', label: 'ירוק' },
          { id: 'mi-2', emoji: '🔴', label: 'אדום' },
          { id: 'mi-3', emoji: '🟡', label: 'צהוב' },
        ],
        memoryQuestion: 'איזה צבע היה אחרון?',
        options: [
          { id: 'opt-1', emoji: '🟢', label: 'ירוק' },
          { id: 'opt-2', emoji: '🔴', label: 'אדום' },
          { id: 'opt-3', emoji: '🟡', label: 'צהוב', isCorrect: true },
          { id: 'opt-4', emoji: '🔵', label: 'כחול' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mc-h4',
        instruction: 'זכרו את הצבעים!',
        instructionAudio: '/audio/memory-colors-4.mp3',
        memoryItems: [
          { id: 'mi-1', emoji: '🔵', label: 'כחול' },
          { id: 'mi-2', emoji: '🟢', label: 'ירוק' },
          { id: 'mi-3', emoji: '🟣', label: 'סגול' },
          { id: 'mi-4', emoji: '🔴', label: 'אדום' },
        ],
        memoryQuestion: 'איזה צבע לא היה?',
        options: [
          { id: 'opt-1', emoji: '🔵', label: 'כחול' },
          { id: 'opt-2', emoji: '🟢', label: 'ירוק' },
          { id: 'opt-3', emoji: '🟡', label: 'צהוב', isCorrect: true },
          { id: 'opt-4', emoji: '🔴', label: 'אדום' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'mc-h5',
        instruction: 'זכרו את הצבעים!',
        instructionAudio: '/audio/memory-colors-5.mp3',
        memoryItems: [
          { id: 'mi-1', emoji: '🟠', label: 'כתום' },
          { id: 'mi-2', emoji: '🔵', label: 'כחול' },
          { id: 'mi-3', emoji: '🟢', label: 'ירוק' },
          { id: 'mi-4', emoji: '🟡', label: 'צהוב' },
          { id: 'mi-5', emoji: '🔴', label: 'אדום' },
        ],
        memoryQuestion: 'כמה צבעים היו?',
        options: [
          { id: 'opt-1', label: '3' },
          { id: 'opt-2', label: '4' },
          { id: 'opt-3', label: '5', isCorrect: true },
          { id: 'opt-4', label: '6' },
        ],
        correctAnswerId: 'opt-3',
      },
    ],
  },
};

export default memoryColors;
