import React from 'react';

export default function CalendarSidebar({ currentDayData }) {
  const percentage = currentDayData.total > 0 
    ? Math.round((currentDayData.completed / currentDayData.total) * 100) 
    : 0;

  const radius = 28;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6 p-6 glass-card glass-card-stroke rounded-2xl relative tech-corners h-fit">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      {/* Date Header */}
      <div className="flex flex-col border-b border-white/5 pb-4">
        <span className="font-mono text-[10px] text-[#4be277] tracking-widest uppercase">
          WEDNESDAY
        </span>
        <h3 className="text-xl font-bold tracking-tight text-white font-display mt-0.5">
          September {currentDayData.day < 10 ? `0${currentDayData.day}` : currentDayData.day}
        </h3>
      </div>

      {/* Performance Ring */}
      <div className="bg-[#050505]/40 border border-white/5 rounded-xl p-4 flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              className="text-white/5" 
              cx="32" 
              cy="32" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth={strokeWidth}
            />
            <circle 
              className="text-[#4be277] transition-all duration-300" 
              cx="32" 
              cy="32" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-white font-bold">{percentage}%</span>
          </div>
        </div>
        <div>
          <p className="text-[9px] font-bold font-mono tracking-widest text-white/30 uppercase">
            DAILY COMPLETION
          </p>
          <p className="text-sm font-bold text-[#4be277] mt-0.5">
            {percentage >= 80 ? 'High Efficiency' : percentage >= 40 ? 'Moderate Sync' : 'Low Efficiency'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 font-mono">
        <div className="bg-[#050505]/40 border border-white/5 p-3 rounded-xl">
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">STREAK</p>
          <div className="flex items-center gap-1 mt-1 text-white">
            <span className="material-symbols-outlined text-[#f87171] text-base">local_fire_department</span>
            <span className="text-xs font-bold">12 Days</span>
          </div>
        </div>
        <div className="bg-[#050505]/40 border border-white/5 p-3 rounded-xl">
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">TOTAL WORK</p>
          <div className="flex items-center gap-1 mt-1 text-white">
            <span className="material-symbols-outlined text-[#4be277] text-base">schedule</span>
            <span className="text-xs font-bold">4.5h</span>
          </div>
        </div>
      </div>

      {/* Daily Objectives */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase">
          <p className="text-white/30">DAILY OBJECTIVES</p>
          <span className="text-white/50">{currentDayData.completed}/{currentDayData.total} DONE</span>
        </div>
        
        <div className="flex flex-col gap-2">
          {currentDayData.habits && currentDayData.habits.length > 0 ? (
            currentDayData.habits.map((hName, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/[0.01] rounded-xl border border-white/5">
                <div className="w-5 h-5 rounded border border-[#4be277] bg-[#4be277]/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#4be277] text-sm font-bold">check</span>
                </div>
                <span className="text-xs text-white/80">{hName}</span>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-xs font-mono text-white/20 uppercase tracking-widest">
              NO_RECORDS
            </p>
          )}
        </div>
      </div>

      {/* Journal Preview */}
      {currentDayData.journal && (
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="bg-[#050505]/60 border border-white/5 rounded-xl p-4 relative overflow-hidden">
            <p className="font-mono text-[9px] text-[#4be277] tracking-wider uppercase mb-1">
              LOG_ENTRY_14:32
            </p>
            <p className="text-[11px] leading-relaxed text-white/60 italic font-mono">
              {currentDayData.journal}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
