// Game: Shadow Match
// Category: Logic
// Type: Standard selection - match the object to its shadow

const shadowMatch = {
  id: 'shadow-match',
  categoryId: 'logic',
  name: 'התאמת צלליות',
  description: 'מצאו את הצללית המתאימה',
  icon: '🔮',
  type: 'shadow',
  gameType: 'standard',
  availableIn: ['easy', 'medium', 'hard'],

  questions: {
    // Easy: 3 very different shadows
    easy: [
      {
        id: 'sm-e1',
        instruction: 'מצאו את הצללית של החתול',
        instructionAudio: '/audio/shadow-cat.mp3',
        mainImage: 'cat-color',
        options: [
          { id: 'opt-1', image: 'shadow-dog', label: 'צללית כלב' },
          { id: 'opt-2', image: 'shadow-cat', label: 'צללית חתול', isCorrect: true },
          { id: 'opt-3', image: 'shadow-rabbit', label: 'צללית ארנב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-e2',
        instruction: 'מצאו את הצללית של הפיל',
        instructionAudio: '/audio/shadow-elephant.mp3',
        mainImage: 'elephant-color',
        options: [
          { id: 'opt-1', image: 'shadow-elephant', label: 'צללית פיל', isCorrect: true },
          { id: 'opt-2', image: 'shadow-giraffe', label: 'צללית ג׳ירפה' },
          { id: 'opt-3', image: 'shadow-lion', label: 'צללית אריה' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sm-e3',
        instruction: 'מצאו את הצללית של הכוכב',
        instructionAudio: '/audio/shadow-star.mp3',
        mainImage: 'star-color',
        options: [
          { id: 'opt-1', image: 'shadow-circle', label: 'צללית עיגול' },
          { id: 'opt-2', image: 'shadow-heart', label: 'צללית לב' },
          { id: 'opt-3', image: 'shadow-star', label: 'צללית כוכב', isCorrect: true },
        ],
        correctAnswerId: 'opt-3',
      },
      {
        id: 'sm-e4',
        instruction: 'מצאו את הצללית של המכונית',
        instructionAudio: '/audio/shadow-car.mp3',
        mainImage: 'car-color',
        options: [
          { id: 'opt-1', image: 'shadow-plane', label: 'צללית מטוס' },
          { id: 'opt-2', image: 'shadow-car', label: 'צללית מכונית', isCorrect: true },
          { id: 'opt-3', image: 'shadow-boat', label: 'צללית סירה' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-e5',
        instruction: 'מצאו את הצללית של הפרח',
        instructionAudio: '/audio/shadow-flower.mp3',
        mainImage: 'flower-color',
        options: [
          { id: 'opt-1', image: 'shadow-tree', label: 'צללית עץ' },
          { id: 'opt-2', image: 'shadow-flower', label: 'צללית פרח', isCorrect: true },
          { id: 'opt-3', image: 'shadow-leaf', label: 'צללית עלה' },
        ],
        correctAnswerId: 'opt-2',
      },
    ],

    // Medium: 4 options, some similar shapes
    medium: [
      {
        id: 'sm-m1',
        instruction: 'מצאו את הצללית של הכלב',
        instructionAudio: '/audio/shadow-dog.mp3',
        mainImage: 'dog-color',
        options: [
          { id: 'opt-1', image: 'shadow-dog', label: 'צללית כלב', isCorrect: true },
          { id: 'opt-2', image: 'shadow-cat', label: 'צללית חתול' },
          { id: 'opt-3', image: 'shadow-rabbit', label: 'צללית ארנב' },
          { id: 'opt-4', image: 'shadow-fox', label: 'צללית שועל' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sm-m2',
        instruction: 'מצאו את הצללית של הג׳ירפה',
        instructionAudio: '/audio/shadow-giraffe.mp3',
        mainImage: 'giraffe-color',
        options: [
          { id: 'opt-1', image: 'shadow-elephant', label: 'צללית פיל' },
          { id: 'opt-2', image: 'shadow-giraffe', label: 'צללית ג׳ירפה', isCorrect: true },
          { id: 'opt-3', image: 'shadow-horse', label: 'צללית סוס' },
          { id: 'opt-4', image: 'shadow-camel', label: 'צללית גמל' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-m3',
        instruction: 'מצאו את הצללית של הלב',
        instructionAudio: '/audio/shadow-heart.mp3',
        mainImage: 'heart-color',
        options: [
          { id: 'opt-1', image: 'shadow-circle', label: 'צללית עיגול' },
          { id: 'opt-2', image: 'shadow-heart', label: 'צללית לב', isCorrect: true },
          { id: 'opt-3', image: 'shadow-star', label: 'צללית כוכב' },
          { id: 'opt-4', image: 'shadow-diamond', label: 'צללית יהלום' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-m4',
        instruction: 'מצאו את הצללית של המטוס',
        instructionAudio: '/audio/shadow-plane.mp3',
        mainImage: 'plane-color',
        options: [
          { id: 'opt-1', image: 'shadow-plane', label: 'צללית מטוס', isCorrect: true },
          { id: 'opt-2', image: 'shadow-car', label: 'צללית מכונית' },
          { id: 'opt-3', image: 'shadow-helicopter', label: 'צללית מסוק' },
          { id: 'opt-4', image: 'shadow-bird', label: 'צללית ציפור' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sm-m5',
        instruction: 'מצאו את הצללית של העץ',
        instructionAudio: '/audio/shadow-tree.mp3',
        mainImage: 'tree-color',
        options: [
          { id: 'opt-1', image: 'shadow-tree', label: 'צללית עץ', isCorrect: true },
          { id: 'opt-2', image: 'shadow-flower', label: 'צללית פרח' },
          { id: 'opt-3', image: 'shadow-bush', label: 'צללית שיח' },
          { id: 'opt-4', image: 'shadow-mushroom', label: 'צללית פטריה' },
        ],
        correctAnswerId: 'opt-1',
      },
    ],

    // Hard: 5 very similar shadows
    hard: [
      {
        id: 'sm-h1',
        instruction: 'מצאו את הצללית של החתול',
        instructionAudio: '/audio/shadow-cat.mp3',
        mainImage: 'cat-color',
        options: [
          { id: 'opt-1', image: 'shadow-dog', label: 'צללית כלב' },
          { id: 'opt-2', image: 'shadow-cat', label: 'צללית חתול', isCorrect: true },
          { id: 'opt-3', image: 'shadow-rabbit', label: 'צללית ארנב' },
          { id: 'opt-4', image: 'shadow-fox', label: 'צללית שועל' },
          { id: 'opt-5', image: 'shadow-wolf', label: 'צללית זאב' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-h2',
        instruction: 'מצאו את הצללית של הסוס',
        instructionAudio: '/audio/shadow-horse.mp3',
        mainImage: 'horse-color',
        options: [
          { id: 'opt-1', image: 'shadow-horse', label: 'צללית סוס', isCorrect: true },
          { id: 'opt-2', image: 'shadow-donkey', label: 'צללית חמור' },
          { id: 'opt-3', image: 'shadow-zebra', label: 'צללית זברה' },
          { id: 'opt-4', image: 'shadow-giraffe', label: 'צללית ג׳ירפה' },
          { id: 'opt-5', image: 'shadow-deer', label: 'צללית צבי' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sm-h3',
        instruction: 'מצאו את הצללית של הכוכב',
        instructionAudio: '/audio/shadow-star.mp3',
        mainImage: 'star-color',
        options: [
          { id: 'opt-1', image: 'shadow-star', label: 'צללית כוכב', isCorrect: true },
          { id: 'opt-2', image: 'shadow-sun', label: 'צללית שמש' },
          { id: 'opt-3', image: 'shadow-flower', label: 'צללית פרח' },
          { id: 'opt-4', image: 'shadow-snowflake', label: 'צללית פתית שלג' },
          { id: 'opt-5', image: 'shadow-asterisk', label: 'צללית כוכבית' },
        ],
        correctAnswerId: 'opt-1',
      },
      {
        id: 'sm-h4',
        instruction: 'מצאו את הצללית של הציפור',
        instructionAudio: '/audio/shadow-bird.mp3',
        mainImage: 'bird-color',
        options: [
          { id: 'opt-1', image: 'shadow-plane', label: 'צללית מטוס' },
          { id: 'opt-2', image: 'shadow-bird', label: 'צללית ציפור', isCorrect: true },
          { id: 'opt-3', image: 'shadow-butterfly', label: 'צללית פרפר' },
          { id: 'opt-4', image: 'shadow-bat', label: 'צללית עטלף' },
          { id: 'opt-5', image: 'shadow-eagle', label: 'צללית נשר' },
        ],
        correctAnswerId: 'opt-2',
      },
      {
        id: 'sm-h5',
        instruction: 'מצאו את הצללית של הבית',
        instructionAudio: '/audio/shadow-house.mp3',
        mainImage: 'house-color',
        options: [
          { id: 'opt-1', image: 'shadow-house', label: 'צללית בית', isCorrect: true },
          { id: 'opt-2', image: 'shadow-castle', label: 'צללית טירה' },
          { id: 'opt-3', image: 'shadow-tent', label: 'צללית אוהל' },
          { id: 'opt-4', image: 'shadow-barn', label: 'צללית אסם' },
          { id: 'opt-5', image: 'shadow-tower', label: 'צללית מגדל' },
        ],
        correctAnswerId: 'opt-1',
      },
    ],
  },
};

export default shadowMatch;
