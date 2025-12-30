import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { WelcomeScreen, NameInput, AgeSelector } from '../components/onboarding';

function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { setName, setAge, completeOnboarding } = useUser();

  const handleWelcomeNext = () => {
    setStep(1);
  };

  const handleNameSubmit = (name) => {
    setName(name);
    setStep(2);
  };

  const handleNameSkip = () => {
    setName('חבר');
    setStep(2);
  };

  const handleAgeSelect = (age) => {
    setAge(age);
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
      {step === 2 && (
        <AgeSelector key="age" onSelect={handleAgeSelect} />
      )}
    </AnimatePresence>
  );
}

export default Onboarding;
