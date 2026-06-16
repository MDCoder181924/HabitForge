import React, { useRef, useEffect } from 'react';
import Header from '../components/Home/Header';
import HeroSection from '../components/Home/HeroSection';
import FeaturesGrid from '../components/Home/FeaturesGrid';
import CreatorNote from '../components/Home/CreatorNote';
import FAQSection from '../components/Home/FAQSection';
import Testimonials from '../components/Home/Testimonials';
import CTASection from '../components/Home/CTASection';
import Footer from '../components/Home/Footer';
import InteractiveTerminal from '../components/Home/InteractiveTerminal';
import InteractiveHeatmap from '../components/Home/InteractiveHeatmap';
import HabitSimulator from '../components/Home/HabitSimulator';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const navigate = useNavigate();
  const onLogin=()=>{
    navigate('/login')
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans selection:bg-primary/30 relative overflow-x-hidden">
      
      {/* Dynamic interactive mouse follow glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(75, 226, 119, 0.05), transparent 80%)`
        }}
      />

      <Header onLogin={onLogin} />
      
      <main className="flex-grow">
        <HeroSection onLogin={onLogin} />
        
        <InteractiveTerminal />
        
        <FeaturesGrid />

        <InteractiveHeatmap />
        
        <CreatorNote />

        <HabitSimulator />
        
        <FAQSection />
        
        <Testimonials />
        
        <CTASection onLogin={onLogin} />
      </main>
      
      <Footer />
      
    </div>
  );
}
