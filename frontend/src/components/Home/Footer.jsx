import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-outline-variant/20 bg-background py-10 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-lg font-bold text-primary font-display">HabitForge</span>
          <p className="text-xs text-on-surface-variant mt-2 font-mono">
            &copy; 2026 HabitForge. Built for peak performance.
          </p>
        </div>
        
        <div className="flex gap-6 flex-wrap justify-center">
          {['Terms', 'Privacy', 'Support', 'Twitter'].map((link) => (
            <a 
              key={link}
              className="text-[11px] font-semibold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-mono" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
