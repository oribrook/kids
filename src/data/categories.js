// Categories configuration for the kids game platform

export const categories = [
  {
    id: 'counting',
    name: 'ספירה',
    description: 'לומדים לספור מ-1 עד 10',
    icon: '🔢',
    color: '#74B9FF',
    backgroundColor: '#E3F2FD',
    games: ['count-animals'],
  },
  {
    id: 'colors',
    name: 'צבעים',
    description: 'מזהים ומתאימים צבעים',
    icon: '🎨',
    color: '#FD79A8',
    backgroundColor: '#FCE4EC',
    games: ['find-color'],
  },
  {
    id: 'logic',
    name: 'חשיבה',
    description: 'משחקי היגיון והתאמה',
    icon: '🧩',
    color: '#FDCB6E',
    backgroundColor: '#FFF8E1',
    games: ['shadow-match'],
  },
  {
    id: 'letters',
    name: 'אותיות',
    description: 'לומדים להכיר אותיות',
    icon: '🔤',
    color: '#00CEC9',
    backgroundColor: '#E0F7FA',
    games: ['select-letter', 'first-letter', 'double-letter'],
  },
];

export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getCategoryGames = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.games : [];
};

export default categories;
