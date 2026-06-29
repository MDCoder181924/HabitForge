import React from 'react';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import FeaturesGrid from '../components/Home/FeaturesGrid';
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

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans selection:bg-primary/30 relative overflow-x-hidden">
      
      <Header onLogin={onLogin} />
      
      <main className="flex-grow">
        <HeroSection onLogin={onLogin} />
        
        <FeaturesGrid />
        
        <CreatorNote />
        
        <FAQSection />
        
        <Testimonials />
        
        <CTASection onLogin={onLogin} />
      </main>
      
      <Footer />
      
    </div>
  );
}

