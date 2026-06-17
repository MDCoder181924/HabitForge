import React from 'react';

export default function Milestones() {
  return (
    <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between relative tech-corners h-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-[#4be277] text-lg">star</span>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Milestones
        </h3>
      </div>
      
      <div className="space-y-3 font-mono text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-white/60">Completed Today</span>
          <span className="font-bold text-[#4be277]">4 / 6</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-white/60">Perfect Days</span>
          <span className="font-bold text-[#4be277]">14</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <span className="text-white/60">Active Streak</span>
          <span className="font-bold text-[#4be277]">22 Days</span>
        </div>
      </div>
      
      <button className="mt-4 w-full py-2 border border-white/10 rounded-xl text-[10px] font-mono tracking-widest uppercase text-white hover:bg-white/5 transition-all">
        VIEW_ALL_BADGES
      </button>
    </div>
  );
}
