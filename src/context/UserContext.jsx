import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const STORAGE_KEY = 'kidsGameUser';

// Cap play-history size. Without a cap gamesPlayed grows forever and the
// localStorage write can eventually throw (quota) - an uncaught throw inside
// the save effect unmounts the whole app (blank screen).
const MAX_GAME_RECORDS = 200;

const defaultUser = {
  name: '',
  hasCompletedOnboarding: false,
  totalScore: 0,
  gamesPlayed: [],
  achievements: [],
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultUser, ...JSON.parse(saved) } : defaultUser;
    } catch {
      // Corrupt JSON / storage unavailable (e.g. private mode) - start fresh
      return defaultUser;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      // Storage full or unavailable - never crash the app over persistence
      console.warn('Failed to persist user data:', e);
    }
  }, [user]);

  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const setName = (name) => {
    updateUser({ name });
  };

  const completeOnboarding = () => {
    updateUser({ hasCompletedOnboarding: true });
  };

  const addScore = (points) => {
    // Functional update - avoids stale-closure double-count bugs
    setUser(prev => ({ ...prev, totalScore: prev.totalScore + points }));
  };

  const recordGamePlayed = (gameId, score, stars) => {
    const gameRecord = {
      gameId,
      score,
      stars,
      playedAt: new Date().toISOString(),
    };
    setUser(prev => ({
      ...prev,
      gamesPlayed: [...prev.gamesPlayed, gameRecord].slice(-MAX_GAME_RECORDS),
    }));
  };

  const resetUser = () => {
    setUser(defaultUser);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = {
    user,
    setName,
    completeOnboarding,
    addScore,
    recordGamePlayed,
    resetUser,
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
