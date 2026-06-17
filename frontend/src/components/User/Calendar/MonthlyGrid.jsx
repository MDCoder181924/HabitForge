import React from 'react';

export default function MonthlyGrid({ viewMode, days, selectedDay, setSelectedDay }) {
  if (viewMode === 'Grid') {
    return (
      <div className="grid grid-cols-7 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
        {/* Day Headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="bg-[#050505] py-3 text-center border-b border-white/5">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono">
              {d}
            </span>
          </div>
        ))}
        
        {/* Empty start slots */}
        {[25, 26, 27, 28, 29, 30, 31].map((prevDay) => (
          <div key={`prev-${prevDay}`} className="bg-black/40 p-4 min-h-[90px] opacity-10 font-mono text-xs">
            {prevDay}
          </div>
        ))}

        {/* Days of Month */}
        {days.map((d) => {
          const isSelected = d.day === selectedDay;
          const completedAll = d.completed === d.total && d.total > 0;
          return (
            <div 
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
              className={`p-4 min-h-[95px] flex flex-col justify-between transition-all duration-150 cursor-pointer group relative ${
                isSelected 
                  ? 'bg-white/[0.03] border border-[#4be277]/50 z-10' 
                  : 'bg-[#050505]/40 hover:bg-white/[0.01]'
              }`}
            >
              <span className={`font-mono text-xs font-bold transition-all ${
                isSelected 
                  ? 'text-[#4be277]' 
                  : 'text-white/40 group-hover:text-[#4be277]'
              }`}>
                {d.day < 10 ? `0${d.day}` : d.day}
              </span>
              
              <div className="flex flex-wrap gap-1 mt-4">
                {[...Array(d.total)].map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx < d.completed 
                        ? 'bg-[#4be277] shadow-[0_0_6px_rgba(75,226,119,0.3)]' 
                        : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>

              {completedAll && (
                <div className="absolute bottom-2 right-2 text-[#4be277]/60">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {days.map((d) => (
        <div 
          key={d.day}
          onClick={() => setSelectedDay(d.day)}
          className={`p-4 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
            d.day === selectedDay 
              ? 'bg-white/[0.03] border-[#4be277]/40' 
              : 'bg-[#050505] border-white/5 hover:border-white/10'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-[#4be277]">
              Day {d.day < 10 ? `0${d.day}` : d.day}
            </span>
            <span className="text-xs text-white/55">
              {d.completed} of {d.total} habits completed
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(d.total)].map((_, idx) => (
              <div 
                key={idx}
                className={`w-1.5 h-1.5 rounded-full ${
                  idx < d.completed ? 'bg-[#4be277]' : 'bg-white/5'
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
