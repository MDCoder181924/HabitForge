import React from 'react';

export default function AnalyticsBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Best Streak */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between relative tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>
        
        <div className="flex justify-between items-start">
          <span className="text-[9px] font-bold text-white/30 font-mono tracking-widest uppercase">Best Streak</span>
          <span className="material-symbols-outlined text-[#4be277] text-lg font-fill">local_fire_department</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-white font-display">42</span>
          <span className="text-xs text-white/40 font-mono tracking-widest uppercase ml-1">days</span>
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-[#4be277] font-mono text-[9px] tracking-wider uppercase">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span>Top 5% of users</span>
        </div>
      </div>

      {/* Total Completions */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between relative tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <div className="flex justify-between items-start">
          <span className="text-[9px] font-bold text-white/30 font-mono tracking-widest uppercase">Total Completions</span>
          <span className="material-symbols-outlined text-white/40 text-lg">check_circle</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-white font-display">1,284</span>
        </div>
        <div className="mt-4 text-white/40 font-mono text-[9px] tracking-wider uppercase">
          <span>+128 this month</span>
        </div>
      </div>

      {/* Consistency Score */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between md:col-span-2 relative tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <div className="flex justify-between items-start">
          <span className="text-[9px] font-bold text-white/30 font-mono tracking-widest uppercase">Consistency Score</span>
          <span className="material-symbols-outlined text-[#4be277] text-lg">bolt</span>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle 
                className="text-white/5" 
                cx="18" 
                cy="18" 
                fill="transparent" 
                r="15.9155" 
                stroke="currentColor" 
                strokeWidth="3"
              />
              <circle 
                className="text-[#4be277]" 
                cx="18" 
                cy="18" 
                fill="transparent" 
                r="15.9155" 
                stroke="currentColor" 
                strokeWidth="3"
                strokeDasharray="88, 100"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-white font-mono">88%</div>
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase font-mono tracking-wider">Exceptional Momentum</p>
            <p className="text-[11px] text-white/40 font-mono tracking-wider uppercase mt-1">
              Your completion rate has increased by 12% compared to last quarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
