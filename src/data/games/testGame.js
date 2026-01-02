// Simple test game - 1 question, no audio, for debugging
const testGame = {
  id: 'test-game',
  name: 'משחק בדיקה',
  description: 'משחק פשוט לבדיקה',
  categoryId: 'counting',
  icon: '🧪',
  difficulty: 'easy',
  availableIn: ['easy', 'medium', 'hard'],
  questions: [
    {
      id: 'test-q1',
      instruction: 'לחצו על הכפתור',
      // No instructionAudio
      options: [
        { id: 'btn1', label: 'לחץ כאן', icon: 'apple', isCorrect: true },
      ],
      correctAnswerId: 'btn1',
    },
  ],
};

export default testGame;
