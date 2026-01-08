import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { WelcomeScreen, NameInput } from '../components/onboarding';

function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { setName, completeOnboarding } = useUser();

  const handleWelcomeNext = () => {
    setStep(1);
  };

  const handleNameSubmit = (name) => {
    setName(name);
    completeOnboarding();
    navigate('/home');
  };

  const handleNameSkip = () => {
    setName('חבר');
    completeOnboarding();
    navigate('/home');
  };

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <WelcomeScreen key="welcome" onNext={handleWelcomeNext} />
      )}
      {step === 1 && (
        <NameInput
          key="name"
          onNext={handleNameSubmit}
          onSkip={handleNameSkip}
        />
      )}
    </AnimatePresence>
  );
}

export default Onboarding;
