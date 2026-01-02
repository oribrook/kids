// Game: Find the Color
// Category: Colors
// Type: Standard selection - choose the item with the correct color

const findColor = {
  id: 'find-color',
  categoryId: 'colors',
  name: 'מצאו את הצבע',
  description: 'בחרו את הפריט בצבע הנכון',
  icon: '🎨',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy', 'medium', 'hard'],

  questions: {
    // Easy: 4 very different options
    easy: [
      {
        id: 'fc-e1',
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
        id: 'fc-e2',
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
        id: 'fc-e3',
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
        id: 'fc-e4',
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
        id: 'fc-e5',
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

    // Medium: 5 options, some similar colors
    medium: [
      {
        id: 'fc-m1',
        instruction: 'מצאו את התפוח האדום',
        instructionAudio: '/audio/find-red-apple.mp3',
        options: [
          { id: 'opt-1', image: 'apple-green', color: 'green', label: 'תפוח ירוק' },
          { id: 'opt-2', image: 'apple-red', color: 'red', label: 'תפוח אדום', isCorrect: true },
          { id: 'opt-3', image: 'strawberry', color: 'red', label: 'תות' },
          { id: 'opt-4', image: 'apple-yellow', color: 'yellow', label: 'תפוח צהוב' },
          { id: 'opt-5', image: 'orange', color: 'orange', label: 'תפוז' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fc-m2',
        instruction: 'מצאו את הכדור הירוק',
        instructionAudio: '/audio/find-green-ball.mp3',
        options: [
          { id: 'opt-1', image: 'ball-red', color: 'red', label: 'כדור אדום' },
          { id: 'opt-2', image: 'ball-blue', color: 'blue', label: 'כדור כחול' },
          { id: 'opt-3', image: 'ball-green', color: 'green', label: 'כדור ירוק', isCorrect: true },
          { id: 'opt-4', image: 'ball-yellow', color: 'yellow', label: 'כדור צהוב' },
          { id: 'opt-5', image: 'apple-green', color: 'green', label: 'תפוח ירוק' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'fc-m3',
        instruction: 'מצאו את הפרח הסגול',
        instructionAudio: '/audio/find-purple-flower.mp3',
        options: [
          { id: 'opt-1', image: 'flower-pink', color: 'pink', label: 'פרח ורוד' },
          { id: 'opt-2', image: 'flower-purple', color: 'purple', label: 'פרח סגול', isCorrect: true },
          { id: 'opt-3', image: 'flower-red', color: 'red', label: 'פרח אדום' },
          { id: 'opt-4', image: 'grapes', color: 'purple', label: 'ענבים' },
          { id: 'opt-5', image: 'flower-yellow', color: 'yellow', label: 'פרח צהוב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fc-m4',
        instruction: 'מצאו את הכתום',
        instructionAudio: '/audio/find-orange.mp3',
        options: [
          { id: 'opt-1', image: 'apple-red', color: 'red', label: 'תפוח אדום' },
          { id: 'opt-2', image: 'banana', color: 'yellow', label: 'בננה' },
          { id: 'opt-3', image: 'orange', color: 'orange', label: 'תפוז', isCorrect: true },
          { id: 'opt-4', image: 'apple-yellow', color: 'yellow', label: 'תפוח צהוב' },
          { id: 'opt-5', image: 'strawberry', color: 'red', label: 'תות' },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'fc-m5',
        instruction: 'מצאו את הלב האדום',
        instructionAudio: '/audio/find-red-heart.mp3',
        options: [
          { id: 'opt-1', image: 'heart-red', color: 'red', label: 'לב אדום', isCorrect: true },
          { id: 'opt-2', image: 'heart-pink', color: 'pink', label: 'לב ורוד' },
          { id: 'opt-3', image: 'star-yellow', color: 'yellow', label: 'כוכב צהוב' },
          { id: 'opt-4', image: 'apple-red', color: 'red', label: 'תפוח אדום' },
          { id: 'opt-5', image: 'circle-red', color: 'red', label: 'עיגול אדום' },
        ],
        correctAnswerId: 'opt-1',
      },
    ],

    // Hard: 6 options, very similar colors/shades
    hard: [
      {
        id: 'fc-h1',
        instruction: 'מצאו את הכדור הכחול הכהה',
        instructionAudio: '/audio/find-dark-blue-ball.mp3',
        options: [
          { id: 'opt-1', image: 'ball-blue', color: 'blue', label: 'כדור כחול כהה', isCorrect: true },
          { id: 'opt-2', image: 'ball-lightblue', color: 'lightblue', label: 'כדור תכלת' },
          { id: 'opt-3', image: 'ball-purple', color: 'purple', label: 'כדור סגול' },
          { id: 'opt-4', image: 'ball-green', color: 'green', label: 'כדור ירוק' },
          { id: 'opt-5', image: 'circle-blue', color: 'blue', label: 'עיגול כחול' },
          { id: 'opt-6', image: 'ball-red', color: 'red', label: 'כדור אדום' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'fc-h2',
        instruction: 'מצאו את הפרח הוורוד',
        instructionAudio: '/audio/find-pink-flower.mp3',
        options: [
          { id: 'opt-1', image: 'flower-red', color: 'red', label: 'פרח אדום' },
          { id: 'opt-2', image: 'flower-pink', color: 'pink', label: 'פרח ורוד', isCorrect: true },
          { id: 'opt-3', image: 'flower-purple', color: 'purple', label: 'פרח סגול' },
          { id: 'opt-4', image: 'heart-pink', color: 'pink', label: 'לב ורוד' },
          { id: 'opt-5', image: 'flower-yellow', color: 'yellow', label: 'פרח צהוב' },
          { id: 'opt-6', image: 'flower-red', color: 'lightred', label: 'פרח אדום בהיר' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fc-h3',
        instruction: 'מצאו את התפוח הירוק',
        instructionAudio: '/audio/find-green-apple.mp3',
        options: [
          { id: 'opt-1', image: 'apple-green', color: 'green', label: 'תפוח ירוק', isCorrect: true },
          { id: 'opt-2', image: 'apple-yellow', color: 'yellow', label: 'תפוח צהוב' },
          { id: 'opt-3', image: 'tree', color: 'green', label: 'עץ' },
          { id: 'opt-4', image: 'ball-green', color: 'green', label: 'כדור ירוק' },
          { id: 'opt-5', image: 'apple-red', color: 'red', label: 'תפוח אדום' },
          { id: 'opt-6', image: 'grapes', color: 'green', label: 'ענבים ירוקים' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'fc-h4',
        instruction: 'מצאו את הכוכב הצהוב',
        instructionAudio: '/audio/find-yellow-star.mp3',
        options: [
          { id: 'opt-1', image: 'sun', color: 'yellow', label: 'שמש' },
          { id: 'opt-2', image: 'star-yellow', color: 'yellow', label: 'כוכב צהוב', isCorrect: true },
          { id: 'opt-3', image: 'banana', color: 'yellow', label: 'בננה' },
          { id: 'opt-4', image: 'star-orange', color: 'orange', label: 'כוכב כתום' },
          { id: 'opt-5', image: 'flower-yellow', color: 'yellow', label: 'פרח צהוב' },
          { id: 'opt-6', image: 'circle-yellow', color: 'yellow', label: 'עיגול צהוב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'fc-h5',
        instruction: 'מצאו את העיגול הכחול',
        instructionAudio: '/audio/find-blue-circle.mp3',
        options: [
          { id: 'opt-1', image: 'ball-blue', color: 'blue', label: 'כדור כחול' },
          { id: 'opt-2', image: 'circle-blue', color: 'blue', label: 'עיגול כחול', isCorrect: true },
          { id: 'opt-3', image: 'circle-purple', color: 'purple', label: 'עיגול סגול' },
          { id: 'opt-4', image: 'square-blue', color: 'blue', label: 'ריבוע כחול' },
          { id: 'opt-5', image: 'circle-green', color: 'green', label: 'עיגול ירוק' },
          { id: 'opt-6', image: 'circle-lightblue', color: 'lightblue', label: 'עיגול תכלת' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],
  },
};

export default findColor;
