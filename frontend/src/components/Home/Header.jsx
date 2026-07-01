import React from 'react';

export default function Header({ onLogin, isDark, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 w-full transition-colors duration-300">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <a className="text-xl font-bold text-primary font-display flex items-center gap-2" href="#">
            <span className="w-3.5 h-3.5 bg-primary rounded-full inline-block animate-pulse"></span>
            HabitForge
          </a>
          <div className="hidden md:flex gap-8">
            <a className="text-on-surface-variant text-xs font-semibold hover:text-primary transition-colors tracking-widest font-mono uppercase" href="#features">Features</a>
            <a className="text-on-surface-variant text-xs font-semibold hover:text-primary transition-colors tracking-widest font-mono uppercase" href="#creators-note">Creator's Note</a>
            <a className="text-on-surface-variant text-xs font-semibold hover:text-primary transition-colors tracking-widest font-mono uppercase" href="#faq">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl border border-outline-variant/35 text-on-surface hover:text-primary hover:border-primary/45 flex items-center justify-center transition-all bg-surface-container-low hover:bg-surface-container-high cursor-pointer shadow-sm relative group overflow-hidden"
            aria-label="Toggle dark mode"
          >
            <span className="material-symbols-outlined text-lg select-none transition-transform duration-500 group-hover:rotate-[30deg]">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            onClick={onLogin} 
            className="text-on-surface-variant font-bold hover:text-primary text-sm transition-colors cursor-pointer"
          >
            Login
          </button>
          
          <button 
            onClick={onLogin} 
            className="bg-primary text-on-primary px-5 py-2 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20 text-sm"
          >
            Enter App
          </button>
        </div>
      </nav>
    </header>
  );
}
