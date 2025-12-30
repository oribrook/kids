import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const STORAGE_KEY = 'kidsGameUser';

const defaultUser = {
  name: '',
  age: null,
  hasCompletedOnboarding: false,
  totalScore: 0,
  gamesPlayed: [],
  achievements: [],
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

  const value = {
    user,
    setName,
    setAge,
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
