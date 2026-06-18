import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateHabitHeader() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-surface-container/20">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#4be277] text-xl">add_circle</span>
        <h1 className="text-sm font-bold text-on-surface uppercase tracking-wider font-mono">Create New Habit</h1>
      </div>
      <button 
        type="button"
        onClick={() => navigate('/habits')}
        className="p-1 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-base">close</span>
      </button>
    </header>
  );
}
