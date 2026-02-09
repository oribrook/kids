// Game: Quiz Numbers 10 to 20 (בוחן מספרים 10-20)
// Category: Numbers 10-20 (numbers-10-20)
// Tests knowledge of numbers 10 through 20
// Mix of: find number, what comes after, what comes before

const quizTenTwenty = {
  id: 'quiz-ten-twenty',
  categoryId: 'numbers-10-20',
  name: 'בוחן 10-20',
  description: 'בוחן מספרים 10 עד 20',
  icon: '🎯',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find 11
      {
        id: 'q1020-e1',
        instruction: 'מצאו את המספר 11',
        instructionAudio: '/audio/numbers/find-11.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-11', label: '11', isCorrect: true },
          { id: 'opt-3', image: 'number-12', label: '12' },
          { id: 'opt-4', image: 'number-13', label: '13' },
          { id: 'opt-5', image: 'number-14', label: '14' },
          { id: 'opt-6', image: 'number-15', label: '15' },
          { id: 'opt-7', image: 'number-16', label: '16' },
          { id: 'opt-8', image: 'number-17', label: '17' },
          { id: 'opt-9', image: 'number-18', label: '18' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q2: What comes after 13?
      {
        id: 'q1020-e2',
        instruction: 'איזה מספר בא אחרי 13?',
        instructionAudio: '/audio/numbers/what-after-13.mp3',
        questionImage: 'number-13',
        options: [
          { id: 'opt-1', image: 'number-12', label: '12' },
          { id: 'opt-2', image: 'number-14', label: '14', isCorrect: true },
          { id: 'opt-3', image: 'number-15', label: '15' },
          { id: 'opt-4', image: 'number-11', label: '11' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q3: Find 15
      {
        id: 'q1020-e3',
        instruction: 'איפה המספר 15?',
        instructionAudio: '/audio/numbers/find-15.mp3',
        options: [
          { id: 'opt-1', image: 'number-12', label: '12' },
          { id: 'opt-2', image: 'number-13', label: '13' },
          { id: 'opt-3', image: 'number-14', label: '14' },
          { id: 'opt-4', image: 'number-15', label: '15', isCorrect: true },
          { id: 'opt-5', image: 'number-16', label: '16' },
          { id: 'opt-6', image: 'number-17', label: '17' },
          { id: 'opt-7', image: 'number-18', label: '18' },
          { id: 'opt-8', image: 'number-19', label: '19' },
          { id: 'opt-9', image: 'number-20', label: '20' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Q4: What comes after 16?
      {
        id: 'q1020-e4',
        instruction: 'איזה מספר בא אחרי 16?',
        instructionAudio: '/audio/numbers/what-after-16.mp3',
        questionImage: 'number-16',
        options: [
          { id: 'opt-1', image: 'number-15', label: '15' },
          { id: 'opt-2', image: 'number-17', label: '17', isCorrect: true },
          { id: 'opt-3', image: 'number-18', label: '18' },
          { id: 'opt-4', image: 'number-14', label: '14' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q5: Find 18
      {
        id: 'q1020-e5',
        instruction: 'מצאו את המספר 18',
        instructionAudio: '/audio/numbers/find-18.mp3',
        options: [
          { id: 'opt-1', image: 'number-15', label: '15' },
          { id: 'opt-2', image: 'number-16', label: '16' },
          { id: 'opt-3', image: 'number-18', label: '18', isCorrect: true },
          { id: 'opt-4', image: 'number-17', label: '17' },
          { id: 'opt-5', image: 'number-19', label: '19' },
          { id: 'opt-6', image: 'number-20', label: '20' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Q6: What comes after 19?
      {
        id: 'q1020-e6',
        instruction: 'איזה מספר בא אחרי 19?',
        instructionAudio: '/audio/numbers/what-after-19.mp3',
        questionImage: 'number-19',
        options: [
          { id: 'opt-1', image: 'number-18', label: '18' },
          { id: 'opt-2', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-3', image: 'number-11', label: '11' },
          { id: 'opt-4', image: 'number-17', label: '17' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q7: Find 12
      {
        id: 'q1020-e7',
        instruction: 'מצאו את המספר 12',
        instructionAudio: '/audio/numbers/find-12.mp3',
        options: [
          { id: 'opt-1', image: 'number-10', label: '10' },
          { id: 'opt-2', image: 'number-11', label: '11' },
          { id: 'opt-3', image: 'number-12', label: '12', isCorrect: true },
          { id: 'opt-4', image: 'number-20', label: '20' },
          { id: 'opt-5', image: 'number-14', label: '14' },
          { id: 'opt-6', image: 'number-16', label: '16' },
          { id: 'opt-7', image: 'number-18', label: '18' },
          { id: 'opt-8', image: 'number-13', label: '13' },
          { id: 'opt-9', image: 'number-19', label: '19' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Q8: What comes before 20?
      {
        id: 'q1020-e8',
        instruction: 'איזה מספר בא לפני 20?',
        instructionAudio: '/audio/numbers/what-before-20.mp3',
        questionImage: 'number-20',
        options: [
          { id: 'opt-1', image: 'number-18', label: '18' },
          { id: 'opt-2', image: 'number-19', label: '19', isCorrect: true },
          { id: 'opt-3', image: 'number-17', label: '17' },
          { id: 'opt-4', image: 'number-10', label: '10' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Q9: Find 17
      {
        id: 'q1020-e9',
        instruction: 'איפה המספר 17?',
        instructionAudio: '/audio/numbers/find-17.mp3',
        options: [
          { id: 'opt-1', image: 'number-11', label: '11' },
          { id: 'opt-2', image: 'number-13', label: '13' },
          { id: 'opt-3', image: 'number-15', label: '15' },
          { id: 'opt-4', image: 'number-17', label: '17', isCorrect: true },
          { id: 'opt-5', image: 'number-19', label: '19' },
          { id: 'opt-6', image: 'number-12', label: '12' },
          { id: 'opt-7', image: 'number-14', label: '14' },
          { id: 'opt-8', image: 'number-16', label: '16' },
          { id: 'opt-9', image: 'number-18', label: '18' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Q10: Multi-select - all even numbers 10-20
      {
        id: 'q1020-e10',
        instruction: 'בחרו את כל המספרים 10, 14 ו-20',
        instructionAudio: '/audio/numbers/select-all-10-14-20.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'number-10', label: '10', isCorrect: true },
          { id: 'opt-2', image: 'number-11', label: '11' },
          { id: 'opt-3', image: 'number-14', label: '14', isCorrect: true },
          { id: 'opt-4', image: 'number-15', label: '15' },
          { id: 'opt-5', image: 'number-20', label: '20', isCorrect: true },
          { id: 'opt-6', image: 'number-17', label: '17' },
          { id: 'opt-7', image: 'number-13', label: '13' },
          { id: 'opt-8', image: 'number-19', label: '19' },
          { id: 'opt-9', image: 'number-16', label: '16' },
        ],
        correctCount: 3,
      },
    ],
  },
};

export default quizTenTwenty;
