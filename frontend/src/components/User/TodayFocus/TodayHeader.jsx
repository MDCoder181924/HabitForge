import React from 'react';

export default function TodayHeader({ completedCount, totalCount }) {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-4">
      <div>
        <span className="text-[10px] font-bold text-[#4be277] uppercase tracking-widest font-mono">
          Current Session
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white font-display mt-1">Today's Focus</h2>
        <p className="text-xs text-white/40 font-mono tracking-wider mt-1.5 uppercase max-w-md">
          You're making great progress. Finish your last habits to hit your daily goal.
        </p>
      </div>
      
      <div className="flex items-center gap-6 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl font-mono text-center shrink-0">
        <div>
          <span className="text-2xl font-black text-[#4be277] block leading-none">12</span>
          <span className="text-[9px] uppercase tracking-wider text-white/30 block mt-1">Day Streak</span>
        </div>
        <div className="h-8 w-[1px] bg-white/10"></div>
        <div>
          <span className="text-2xl font-black text-white block leading-none">{completedCount}/{totalCount}</span>
          <span className="text-[9px] uppercase tracking-wider text-white/30 block mt-1">Habits</span>
        </div>
      </div>
    </header>
  );
}
