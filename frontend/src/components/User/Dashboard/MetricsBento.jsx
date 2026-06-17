import React from 'react';

export default function MetricsBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Habits Card */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between min-h-[140px] relative overflow-hidden group tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>
        
        <div className="flex justify-between items-start z-10">
          <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase font-mono">
            Total Habits
          </span>
          <span className="material-symbols-outlined text-[#4be277] text-lg">checklist</span>
        </div>
        <div className="mt-4 z-10">
          <span className="text-3xl font-black text-white font-display">12</span>
          <div className="mt-1 text-[#4be277] text-[10px] font-mono font-bold flex items-center gap-1 uppercase tracking-wider">
            <span className="material-symbols-outlined text-xs">trending_up</span>
            +2 from last month
          </div>
        </div>
      </div>

      {/* Current Streak Card */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between min-h-[140px] relative overflow-hidden group tech-corners border-b-2 border-b-[#4be277]/30">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <div className="flex justify-between items-start z-10">
          <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase font-mono">
            Current Streak
          </span>
          <span className="material-symbols-outlined text-[#4be277] text-lg font-fill" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_fire_department
          </span>
        </div>
        <div className="mt-4 z-10">
          <span className="text-3xl font-black text-white font-display">18 Days</span>
          <p className="text-white/40 text-[10px] font-mono mt-1 uppercase tracking-wider">
            Personal record: 24 days
          </p>
        </div>
      </div>

      {/* Focus Score Card */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl flex flex-col justify-between min-h-[140px] relative overflow-hidden group tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <div className="flex justify-between items-start z-10">
          <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase font-mono">
            Focus Score
          </span>
          <span className="material-symbols-outlined text-[#4be277] text-lg">bolt</span>
        </div>
        <div className="mt-4 z-10">
          <span className="text-3xl font-black text-white font-display">94%</span>
          <p className="text-white/40 text-[10px] font-mono mt-1 uppercase tracking-wider">
            Top 5% of users this week
          </p>
        </div>
      </div>
    </div>
  );
}
