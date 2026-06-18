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
    <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-6 p-6 glass-panel inner-glow rounded-xl h-fit">
      {/* Date Header */}
      <div className="flex flex-col border-b border-outline-variant/30 pb-4">
        <span className="font-bold text-[10px] text-primary tracking-wider uppercase">
          WEDNESDAY
        </span>
        <h3 className="text-xl font-bold tracking-tight text-on-surface font-display mt-0.5">
          September {currentDayData.day < 10 ? `0${currentDayData.day}` : currentDayData.day}
        </h3>
      </div>

      {/* Performance Ring */}
      <div className="bg-surface-container-highest/20 border border-outline-variant/30 rounded-xl p-4 flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              className="text-outline-variant/30" 
              cx="32" 
              cy="32" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth={strokeWidth}
            />
            <circle 
              className="text-primary transition-all duration-300" 
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
            <span className="font-mono text-xs text-on-surface font-bold">{percentage}%</span>
          </div>
        </div>
        <div>
          <p className="text-[9px] font-bold tracking-wider text-on-surface-variant/50 uppercase">
            DAILY COMPLETION
          </p>
          <p className="text-sm font-bold text-primary mt-0.5">
            {percentage >= 80 ? 'High Efficiency' : percentage >= 40 ? 'Moderate Sync' : 'Low Efficiency'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-3 rounded-xl">
          <p className="text-[9px] font-bold text-on-surface-variant/50 uppercase tracking-wider">STREAK</p>
          <div className="flex items-center gap-1 mt-1 text-on-surface">
            <span className="material-symbols-outlined text-tertiary text-base" data-icon="local_fire_department" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="text-xs font-bold font-mono">12 Days</span>
          </div>
        </div>
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-3 rounded-xl">
          <p className="text-[9px] font-bold text-on-surface-variant/50 uppercase tracking-wider">TOTAL WORK</p>
          <div className="flex items-center gap-1 mt-1 text-on-surface">
            <span className="material-symbols-outlined text-primary text-base" data-icon="schedule">schedule</span>
            <span className="text-xs font-bold font-mono">4.5h</span>
          </div>
        </div>
      </div>

      {/* Daily Objectives */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[10px] font-bold tracking-wider uppercase">
          <p className="text-on-surface-variant/50">DAILY OBJECTIVES</p>
          <span className="text-on-surface-variant/70">{currentDayData.completed}/{currentDayData.total} DONE</span>
        </div>
        
        <div className="flex flex-col gap-2">
          {currentDayData.habits && currentDayData.habits.length > 0 ? (
            currentDayData.habits.map((hName, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-surface-container-highest/10 rounded-xl border border-outline-variant/30">
                <div className="w-5 h-5 rounded border border-primary bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm font-bold" data-icon="check">check</span>
                </div>
                <span className="text-xs text-on-surface/90">{hName}</span>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-xs font-mono text-on-surface-variant/30 uppercase tracking-widest">
              NO_RECORDS
            </p>
          )}
        </div>
      </div>

      {/* Journal Preview */}
      {currentDayData.journal && (
        <div className="mt-auto pt-4 border-t border-outline-variant/30">
          <div className="bg-surface-container-highest/20 border border-outline-variant/30 rounded-xl p-4 relative overflow-hidden">
            <p className="font-mono text-[9px] text-primary tracking-wider uppercase mb-1">
              LOG_ENTRY_14:32
            </p>
            <p className="text-[11px] leading-relaxed text-on-surface-variant/70 italic font-mono">
              {currentDayData.journal}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
