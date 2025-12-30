// Game: Find the Color
// Category: Colors
// Type: Selection - choose the item with the correct color

const findColor = {
  id: 'find-color',
  categoryId: 'colors',
  name: 'מצאו את הצבע',
  description: 'בחרו את הפריט בצבע הנכון',
  icon: '🎨',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'fc-1',
      instruction: 'מצאו את התפוח האדום',
      instructionAudio: '/audio/find-red-apple.mp3',
      options: [
        { id: 'opt-1', image: 'apple-green', color: 'green', label: 'תפוח ירוק' },
        { id: 'opt-2', image: 'apple-red', color: 'red', label: 'תפוח אדום', isCorrect: true },
        { id: 'opt-3', image: 'apple-yellow', color: 'yellow', label: 'תפוח צהוב' },
        { id: 'opt-4', image: 'banana', color: 'yellow', label: 'בננה' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'fc-2',
      instruction: 'מצאו את הבננה הצהובה',
      instructionAudio: '/audio/find-yellow-banana.mp3',
      options: [
        { id: 'opt-1', image: 'strawberry', color: 'red', label: 'תות' },
        { id: 'opt-2', image: 'grapes', color: 'purple', label: 'ענבים' },
        { id: 'opt-3', image: 'banana', color: 'yellow', label: 'בננה', isCorrect: true },
        { id: 'opt-4', image: 'orange', color: 'orange', label: 'תפוז' },
      ],
      correctAnswerId: 'opt-3',
    },
    {
      id: 'fc-3',
      instruction: 'מצאו את הכדור הכחול',
      instructionAudio: '/audio/find-blue-ball.mp3',
      options: [
        { id: 'opt-1', image: 'ball-red', color: 'red', label: 'כדור אדום' },
        { id: 'opt-2', image: 'ball-blue', color: 'blue', label: 'כדור כחול', isCorrect: true },
        { id: 'opt-3', image: 'ball-green', color: 'green', label: 'כדור ירוק' },
        { id: 'opt-4', image: 'ball-yellow', color: 'yellow', label: 'כדור צהוב' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'fc-4',
      instruction: 'מצאו את הפרח הוורוד',
      instructionAudio: '/audio/find-pink-flower.mp3',
      options: [
        { id: 'opt-1', image: 'flower-pink', color: 'pink', label: 'פרח ורוד', isCorrect: true },
        { id: 'opt-2', image: 'flower-yellow', color: 'yellow', label: 'פרח צהוב' },
        { id: 'opt-3', image: 'flower-red', color: 'red', label: 'פרח אדום' },
        { id: 'opt-4', image: 'flower-purple', color: 'purple', label: 'פרח סגול' },
      ],
      correctAnswerId: 'opt-1',
    },
    {
      id: 'fc-5',
      instruction: 'מצאו את הירוק',
      instructionAudio: '/audio/find-green.mp3',
      options: [
        { id: 'opt-1', image: 'sun', color: 'yellow', label: 'שמש' },
        { id: 'opt-2', image: 'tree', color: 'green', label: 'עץ', isCorrect: true },
        { id: 'opt-3', image: 'heart', color: 'red', label: 'לב' },
        { id: 'opt-4', image: 'cloud', color: 'white', label: 'ענן' },
      ],
      correctAnswerId: 'opt-2',
    },
  ],
};

export default findColor;
