import React from 'react';

export default function HeroSection({ onLogin }) {
  return (
    <section className="relative pt-24 pb-28 px-8 overflow-hidden text-center w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Brand Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
          <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">
            Built because spreadsheets suck
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-6xl font-black text-on-surface leading-[1.1] tracking-tight mb-6 max-w-3xl">
          A calm workspace for <span className="text-primary">daily discipline.</span>
        </h1>
        
        {/* Description */}
        <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-10">
          No level-ups. No badges. No nagging AI coaches. Just a beautiful glass grid, your daily routines, and absolute focus. Made by developers, for developers.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={onLogin}
            className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-primary/25 hover:opacity-95 transition-all active:scale-95 cursor-pointer"
          >
            Start Your Grid Free
          </button>
          <button 
            onClick={onLogin}
            className="bg-white/5 border border-white/10 text-on-surface px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 transition-all cursor-pointer"
          >
            Explore Demo
          </button>
        </div>
      </div>
      
      {/* Background ambient glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
    </section>
  );
}
