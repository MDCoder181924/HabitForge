import React, { useState, useEffect } from 'react';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import FeaturesGrid from '../components/Home/FeaturesGrid';
import HowItWorks from '../components/Home/HowItWorks';
import InteractiveDemo from '../components/Home/InteractiveDemo';
import StatsSection from '../components/Home/StatsSection';
import CreatorNote from '../components/Home/CreatorNote';
import FAQSection from '../components/Home/FAQSection';
import Testimonials from '../components/Home/Testimonials';
import CTASection from '../components/Home/CTASection';
import Footer from '../components/Home/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/login');
  };

  // Manage theme state
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  // Track if theme changes outside (e.g. by another page component)
  useEffect(() => {
    const handleClassChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    // Simple polling or event listener could go here, but a basic check on mount is usually fine.
    // Also, we set the theme classes manually in toggleTheme.
    handleClassChange();
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans selection:bg-primary/30 relative overflow-x-hidden transition-colors duration-300">
      
      <Header onLogin={onLogin} isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <HeroSection onLogin={onLogin} />
        
        <FeaturesGrid />

        <HowItWorks />

        <InteractiveDemo />

        <StatsSection />
        
        <CreatorNote />
        
        <FAQSection />
        
        <Testimonials />
        
        <CTASection onLogin={onLogin} />
      </main>
      
      <Footer />
      
    </div>
  );
}
