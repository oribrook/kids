import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import { GameProvider } from './context/GameContext';
import { BackgroundMusicProvider } from './context/BackgroundMusicContext';
import { Onboarding, Home, Language, Topic, Category, Game } from './pages';
import { MusicToggle } from './components/common';
import './index.css';

// Protected route wrapper - redirects to onboarding if not completed
function ProtectedRoute({ children }) {
  const { user } = useUser();

  if (!user.hasCompletedOnboarding) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// Redirect from onboarding if already completed
function OnboardingRoute() {
  const { user } = useUser();

  if (user.hasCompletedOnboarding) {
    return <Navigate to="/home" replace />;
  }

  return <Onboarding />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingRoute />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/language/:languageId"
        element={
          <ProtectedRoute>
            <Language />
          </ProtectedRoute>
        }
      />
      <Route
        path="/topic/:topicId"
        element={
          <ProtectedRoute>
            <Topic />
          </ProtectedRoute>
        }
      />
      <Route
        path="/category/:categoryId"
        element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game/:gameId"
        element={
          <ProtectedRoute>
            <Game />
          </ProtectedRoute>
        }
      />
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BackgroundMusicProvider>
        <UserProvider>
          <GameProvider>
            <MusicToggle />
            <AppRoutes />
          </GameProvider>
        </UserProvider>
      </BackgroundMusicProvider>
    </BrowserRouter>
  );
}

export default App;
