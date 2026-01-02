import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const UserContext = createContext(null);

const STORAGE_KEY = 'kidsGameUser';

// Difficulty levels
export const DIFFICULTIES = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};

// Get default difficulty based on age
export const getDefaultDifficulty = (age) => {
  if (!age || age <= 4) return DIFFICULTIES.EASY;
  if (age <= 6) return DIFFICULTIES.MEDIUM;
  return DIFFICULTIES.HARD;
};

// Difficulty metadata for UI
export const DIFFICULTY_INFO = {
  [DIFFICULTIES.EASY]: {
    label: 'קל',
    icon: '🐣',
    color: '#4CAF50',
    description: 'למתחילים',
  },
  [DIFFICULTIES.MEDIUM]: {
    label: 'בינוני',
    icon: '🐥',
    color: '#FF9800',
    description: 'אתגר קטן',
  },
  [DIFFICULTIES.HARD]: {
    label: 'קשה',
    icon: '🦅',
    color: '#F44336',
    description: 'למומחים',
  },
};

const defaultUser = {
  name: '',
  age: null,
  hasCompletedOnboarding: false,
  totalScore: 0,
  gamesPlayed: [],
  achievements: [],
  difficultyOverride: null, // null = use age-based default, or 'easy'/'medium'/'hard'
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultUser;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const setName = (name) => {
    updateUser({ name });
  };

  const setAge = (age) => {
    updateUser({ age });
  };

  const completeOnboarding = () => {
    updateUser({ hasCompletedOnboarding: true });
  };

  const addScore = (points) => {
    updateUser({ totalScore: user.totalScore + points });
  };

  const recordGamePlayed = (gameId, score, stars) => {
    const gameRecord = {
      gameId,
      score,
      stars,
      playedAt: new Date().toISOString(),
    };
    updateUser({
      gamesPlayed: [...user.gamesPlayed, gameRecord],
    });
  };

  const resetUser = () => {
    setUser(defaultUser);
    localStorage.removeItem(STORAGE_KEY);
  };

  const setDifficulty = (difficulty) => {
    updateUser({ difficultyOverride: difficulty });
  };

  // Computed current difficulty (override or age-based)
  const currentDifficulty = useMemo(() => {
    if (user.difficultyOverride) return user.difficultyOverride;
    return getDefaultDifficulty(user.age);
  }, [user.difficultyOverride, user.age]);

  // All difficulties are available to everyone (age only affects default)
  const availableDifficulties = useMemo(() => {
    return [DIFFICULTIES.EASY, DIFFICULTIES.MEDIUM, DIFFICULTIES.HARD];
  }, []);

  const value = {
    user,
    setName,
    setAge,
    completeOnboarding,
    addScore,
    recordGamePlayed,
    resetUser,
    setDifficulty,
    currentDifficulty,
    availableDifficulties,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;
