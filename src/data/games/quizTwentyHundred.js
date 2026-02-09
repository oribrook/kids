// Game: Quiz Numbers 20 to 100 (בוחן מספרים 20-100)
// Category: Numbers 20-100 (numbers-20-100)
// Tests knowledge of tens from 20 to 100
// Mix of: find number, what comes after, ordering

const quizTwentyHundred = {
  id: 'quiz-twenty-hundred',
  categoryId: 'numbers-20-100',
  name: 'בוחן 20-100',
  description: 'בוחן מספרים עגולים 20 עד 100',
  icon: '🎯',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find 30
      {
        id: 'q20100-e1',
        instruction: 'מצאו את המספר 30',
        instructionAudio: '/audio/numbers/find-30.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-20', label: '20' },
          { id: 'opt-3', image: 'number-30', label: '30', isCorrect: true },
          { id: 'opt-4', image: 'number-40', label: '40' },
          { id: 'opt-5', image: 'number-50', label: '50' },
          { id: 'opt-6', image: 'number-60', label: '60' },
          { id: 'opt-7', image: 'number-70', label: '70' },
          { id: 'opt-8', image: 'number-80', label: '80' },
          { id: 'opt-9', image: 'number-90', label: '90' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Q2: What comes after 40?
      {
        id: 'q20100-e2',
        instruction: 'איזה מספר עגול בא אחרי 40?',
        instructionAudio: '/audio/numbers/what-tens-after-40.mp3',
        questionImage: 'number-40',
        options: [
          { id: 'opt-1', image: 'number-30', label: '30' },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-60', label: '60' },
          { id: 'opt-4', image: 'number-20', label: '20' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q3: Find 70
      {
        id: 'q20100-e3',
        instruction: 'איפה המספר 70?',
        instructionAudio: '/audio/numbers/find-70.mp3',
        options: [
          { id: 'opt-1', image: 'number-20', label: '20' },
          { id: 'opt-2', image: 'number-30', label: '30' },
          { id: 'opt-3', image: 'number-40', label: '40' },
          { id: 'opt-4', image: 'number-50', label: '50' },
          { id: 'opt-5', image: 'number-60', label: '60' },
          { id: 'opt-6', image: 'number-70', label: '70', isCorrect: true },
          { id: 'opt-7', image: 'number-80', label: '80' },
          { id: 'opt-8', image: 'number-90', label: '90' },
          { id: 'opt-9', image: 'number-100', label: '100' },
        ],
        correctAnswerId: 'opt-6',
      },
      // Q4: What comes after 80?
      {
        id: 'q20100-e4',
        instruction: 'איזה מספר עגול בא אחרי 80?',
        instructionAudio: '/audio/numbers/what-tens-after-80.mp3',
        questionImage: 'number-80',
        options: [
          { id: 'opt-1', image: 'number-70', label: '70' },
          { id: 'opt-2', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-3', image: 'number-100', label: '100' },
          { id: 'opt-4', image: 'number-60', label: '60' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q5: Find 50
      {
        id: 'q20100-e5',
        instruction: 'מצאו את המספר 50',
        instructionAudio: '/audio/numbers/find-50.mp3',
        options: [
          { id: 'opt-1', image: 'number-30', label: '30' },
          { id: 'opt-2', image: 'number-40', label: '40' },
          { id: 'opt-3', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-4', image: 'number-60', label: '60' },
          { id: 'opt-5', image: 'number-15', label: '15' },
          { id: 'opt-6', image: 'number-70', label: '70' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Q6: What comes after 90?
      {
        id: 'q20100-e6',
        instruction: 'איזה מספר עגול בא אחרי 90?',
        instructionAudio: '/audio/numbers/what-tens-after-90.mp3',
        questionImage: 'number-90',
        options: [
          { id: 'opt-1', image: 'number-80', label: '80' },
          { id: 'opt-2', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q7: Find 100
      {
        id: 'q20100-e7',
        instruction: 'מצאו את המספר 100',
        instructionAudio: '/audio/numbers/find-100.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-20', label: '20' },
          { id: 'opt-3', image: 'number-40', label: '40' },
          { id: 'opt-4', image: 'number-60', label: '60' },
          { id: 'opt-5', image: 'number-80', label: '80' },
          { id: 'opt-6', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-7', image: 'number-30', label: '30' },
          { id: 'opt-8', image: 'number-50', label: '50' },
          { id: 'opt-9', image: 'number-70', label: '70' },
        ],
        correctAnswerId: 'opt-6',
      },
      // Q8: What comes before 60?
      {
        id: 'q20100-e8',
        instruction: 'איזה מספר עגול בא לפני 60?',
        instructionAudio: '/audio/numbers/what-before-60.mp3',
        questionImage: 'number-60',
        options: [
          { id: 'opt-1', image: 'number-40', label: '40' },
          { id: 'opt-2', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-3', image: 'number-70', label: '70' },
          { id: 'opt-4', image: 'number-30', label: '30' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q9: Multi-select big numbers
      {
        id: 'q20100-e9',
        instruction: 'בחרו את כל המספרים 80, 90 ו-100',
        instructionAudio: '/audio/numbers/select-all-80-90-100.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-80', label: '80', isCorrect: true },
          { id: 'opt-2', image: 'number-70', label: '70' },
          { id: 'opt-3', image: 'number-90', label: '90', isCorrect: true },
          { id: 'opt-4', image: 'number-60', label: '60' },
          { id: 'opt-5', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-6', image: 'number-50', label: '50' },
          { id: 'opt-7', image: 'number-40', label: '40' },
          { id: 'opt-8', image: 'number-30', label: '30' },
          { id: 'opt-9', image: 'number-20', label: '20' },
        ],
        correctCount: 3,
      },
      // Q10: Grand finale - full tens line
      {
        id: 'q20100-e10',
        instruction: 'בחרו את כל המספרים 20, 50 ו-100',
        instructionAudio: '/audio/numbers/select-all-20-50-100.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-2', image: 'number-30', label: '30' },
          { id: 'opt-3', image: 'number-50', label: '50', isCorrect: true },
          { id: 'opt-4', image: 'number-40', label: '40' },
          { id: 'opt-5', image: 'number-100', label: '100', isCorrect: true },
          { id: 'opt-6', image: 'number-60', label: '60' },
          { id: 'opt-7', image: 'number-70', label: '70' },
          { id: 'opt-8', image: 'number-80', label: '80' },
          { id: 'opt-9', image: 'number-90', label: '90' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default quizTwentyHundred;
