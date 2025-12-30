// Game: Complete the Pattern
// Category: Logic
// Type: Selection - find what comes next in the pattern

const completePattern = {
  id: 'complete-pattern',
  categoryId: 'logic',
  name: 'השלימו את הדפוס',
  description: 'מצאו מה בא אחרי בסדרה',
  icon: '🔢',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'cp-1',
      instruction: '🔴 🔵 🔴 🔵 🔴 ❓',
      instructionAudio: '/audio/pattern-1.mp3',
      options: [
        { id: 'opt-1', image: 'circle-red', label: 'עיגול אדום' },
        { id: 'opt-2', image: 'circle-blue', label: 'עיגול כחול', isCorrect: true },
        { id: 'opt-3', image: 'circle-green', label: 'עיגול ירוק' },
        { id: 'opt-4', image: 'circle-yellow', label: 'עיגול צהוב' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'cp-2',
      instruction: '⭐ ⭐ ❤️ ⭐ ⭐ ❓',
      instructionAudio: '/audio/pattern-2.mp3',
      options: [
        { id: 'opt-1', image: 'star-yellow', label: 'כוכב' },
        { id: 'opt-2', image: 'circle-blue', label: 'עיגול' },
        { id: 'opt-3', image: 'heart-red', label: 'לב', isCorrect: true },
        { id: 'opt-4', image: 'square-green', label: 'ריבוע' },
      ],
      correctAnswerId: 'opt-3',
    },
    {
      id: 'cp-3',
      instruction: '🟢 🟡 🟢 🟡 🟢 ❓',
      instructionAudio: '/audio/pattern-3.mp3',
      options: [
        { id: 'opt-1', image: 'circle-green', label: 'ירוק' },
        { id: 'opt-2', image: 'circle-yellow', label: 'צהוב', isCorrect: true },
        { id: 'opt-3', image: 'circle-red', label: 'אדום' },
        { id: 'opt-4', image: 'circle-blue', label: 'כחול' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'cp-4',
      instruction: '🔺 🔺 🔺 ⬛ 🔺 🔺 🔺 ❓',
      instructionAudio: '/audio/pattern-4.mp3',
      options: [
        { id: 'opt-1', image: 'triangle-orange', label: 'משולש' },
        { id: 'opt-2', image: 'circle-blue', label: 'עיגול' },
        { id: 'opt-3', image: 'square-black', label: 'ריבוע', isCorrect: true },
        { id: 'opt-4', image: 'star-yellow', label: 'כוכב' },
      ],
      correctAnswerId: 'opt-3',
    },
    {
      id: 'cp-5',
      instruction: '🔵 🔵 🔴 🔵 🔵 ❓',
      instructionAudio: '/audio/pattern-5.mp3',
      options: [
        { id: 'opt-1', image: 'circle-blue', label: 'כחול' },
        { id: 'opt-2', image: 'circle-red', label: 'אדום', isCorrect: true },
        { id: 'opt-3', image: 'circle-green', label: 'ירוק' },
        { id: 'opt-4', image: 'circle-yellow', label: 'צהוב' },
      ],
      correctAnswerId: 'opt-2',
    },
  ],
};

export default completePattern;
