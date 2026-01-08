import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import MainPage from './MainPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';
import TermsOfUse from './components/TermsOfUse';
// ...
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms'>('home');

  const handleNavigateToPrivacy = () => {
    setCurrentView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTerms = () => {
    setCurrentView('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      {currentView === 'home' && (
        <MainPage
          onNavigateToPrivacy={handleNavigateToPrivacy}
          onNavigateToTerms={handleNavigateToTerms}
        />
      )}
      {currentView === 'privacy' && (
        <PrivacyPolicy onBack={handleNavigateHome} />
      )}
      {currentView === 'terms' && (
        <TermsOfUse onBack={handleNavigateHome} />
      )}

      {/* Global Cookie Consent Banner */}
      <CookieConsent onPrivacyClick={handleNavigateToPrivacy} />
    </ErrorBoundary>
  );
};

export default App;
