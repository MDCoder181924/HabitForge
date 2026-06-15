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

export default function Home({ onLogin }) {
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

      {/* Repeating fine tech grid lines across entire page */}
      <div className="absolute inset-0 tech-grid pointer-events-none -z-20 opacity-70"></div>

      {/* Repeating micro dot pattern across entire page */}
      <div className="absolute inset-0 tech-dots pointer-events-none -z-20 opacity-80"></div>

      {/* 4 large floating/glowing ambient orbs */}
      <div className="absolute top-[8%] left-[-10%] w-[500px] h-[500px] bg-primary/4 blur-[120px] rounded-full pointer-events-none -z-10 animate-orb-float"></div>
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-primary/3 blur-[140px] rounded-full pointer-events-none -z-10 animate-orb-float" style={{ animationDelay: '-4s' }}></div>
      <div className="absolute top-[65%] left-[-5%] w-[550px] h-[550px] bg-primary/4 blur-[130px] rounded-full pointer-events-none -z-10 animate-orb-float" style={{ animationDelay: '-8s' }}></div>
      <div className="absolute bottom-[8%] right-[-5%] w-[500px] h-[500px] bg-primary/3 blur-[120px] rounded-full pointer-events-none -z-10 animate-orb-float" style={{ animationDelay: '-12s' }}></div>

      {/* Left & Right technical blueprint margin lines with sticky indicator badges */}
      <div className="absolute left-[3%] xl:left-[6%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/10 via-primary/3 to-primary/10 pointer-events-none -z-10 hidden sm:block">
        <div className="sticky top-[10%] left-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none -translate-x-full pr-4 text-right whitespace-nowrap">
          [SYS_STABLE] <span className="text-white/20">LOC.01</span>
        </div>
        <div className="sticky top-[30%] left-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none -translate-x-full pr-4 text-right whitespace-nowrap">
          [GRID_v4.0.2] <span className="text-white/20">L.02</span>
        </div>
        <div className="sticky top-[50%] left-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none -translate-x-full pr-4 text-right whitespace-nowrap">
          [MEM_ALLOC] <span className="text-white/20">L.03</span>
        </div>
        <div className="sticky top-[70%] left-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none -translate-x-full pr-4 text-right whitespace-nowrap">
          [HABIT_DB] <span className="text-white/20">L.04</span>
        </div>
        <div className="sticky top-[90%] left-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none -translate-x-full pr-4 text-right whitespace-nowrap">
          [METRIC_OK] <span className="text-white/20">L.05</span>
        </div>
      </div>

      <div className="absolute right-[3%] xl:right-[6%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/10 via-primary/3 to-primary/10 pointer-events-none -z-10 hidden sm:block">
        <div className="sticky top-[20%] right-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none pl-4 whitespace-nowrap">
          R.01 <span className="text-white/20">COORD:84.11</span>
        </div>
        <div className="sticky top-[40%] right-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none pl-4 whitespace-nowrap">
          R.02 <span className="text-white/20">SEC_FEAT</span>
        </div>
        <div className="sticky top-[60%] right-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none pl-4 whitespace-nowrap">
          R.03 <span className="text-white/20">SYS_HEAT</span>
        </div>
        <div className="sticky top-[80%] right-0 py-1 px-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.2em] select-none pl-4 whitespace-nowrap">
          R.04 <span className="text-white/20">STREAK_SIM</span>
        </div>
      </div>

      {/* Brand Header Navbar */}
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
