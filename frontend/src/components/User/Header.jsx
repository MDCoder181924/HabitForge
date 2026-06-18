import React from 'react';

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant shrink-0">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Mobile hamburger & title */}
          <button 
            onClick={onMenuClick}
            className="md:hidden text-on-surface-variant hover:text-primary p-1 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <span className="text-headline-md font-headline-md font-bold text-primary md:hidden">HabitForge</span>
          
          <nav className="hidden lg:flex gap-6">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Features</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">About</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Pricing</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input 
              className="bg-surface-container border border-outline-variant rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all w-64 text-on-surface placeholder:text-on-surface-variant/40" 
              placeholder="Search habits..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 ml-4 border-l border-outline-variant pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">Alex Rivers</p>
              <p className="text-xs text-primary">Pro Member</p>
            </div>
            <img 
              alt="User Profile" 
              className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa2tRz2Qk8Ix8vzw8TgbJRhEAqRTC_UEj9Dslj3ZUj8q2MKHT7zwRL6ZYxkVUHvrXJXyE9FcUPCU3njeQz1qTuC32ZLCo6OTDZkYGM7eFzCDeq4e7BQNJvnN0fne7JBM1QdrA9mPwruE9qsHQYjov9DwMqzIxzEG9Yw1atzTygGPOrKKqKgVbG8DEfn0ulGj15W_PgdF4d-TyE_6qvMe_uR_E6Lz80q3LKAj-nBKOkxKr7CkBggGSJgCbqrhA1mpMhE9_IN8ZObiU"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
