import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-background">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <span className="text-headline-md font-headline-md text-primary font-bold">HabitForge</span>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">© 2024 HabitForge. Built for peak performance.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface-variant text-label-caps font-label-caps hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-on-surface-variant text-label-caps font-label-caps hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-on-surface-variant text-label-caps font-label-caps hover:text-primary transition-colors" href="#">Support</a>
          <a className="text-on-surface-variant text-label-caps font-label-caps hover:text-primary transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
