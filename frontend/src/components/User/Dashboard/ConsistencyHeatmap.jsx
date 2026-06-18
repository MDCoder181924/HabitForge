import React from 'react';

export default function ConsistencyHeatmap() {
  const weeks = 52;
  const daysPerWeek = 7;
  
  const columns = Array.from({ length: weeks }, (_, wIndex) => {
    return Array.from({ length: daysPerWeek }, (_, dIndex) => {
      const seed = Math.sin(wIndex * 0.15) * Math.cos(dIndex * 0.3) + Math.sin((wIndex + dIndex) * 0.05);
      const intensity = Math.abs(seed) * 0.8 + Math.random() * 0.2;
      
      let bgClass = 'bg-surface-container-highest';
      let titleMsg = 'No habits completed';
      
      if (intensity > 0.75) {
        bgClass = 'bg-primary';
        titleMsg = '100% completed';
      } else if (intensity > 0.45) {
        bgClass = 'bg-primary/70';
        titleMsg = '70% completed';
      } else if (intensity > 0.25) {
        bgClass = 'bg-primary/30';
        titleMsg = '30% completed';
      }
      
      return { bgClass, titleMsg };
    });
  });

  const monthLabels = Array.from({ length: weeks }, (_, i) => {
    if (i === 1) return 'Jan';
    if (i === 5) return 'Feb';
    if (i === 9) return 'Mar';
    if (i === 13) return 'Apr';
    if (i === 18) return 'May';
    if (i === 22) return 'Jun';
    if (i === 26) return 'Jul';
    if (i === 31) return 'Aug';
    if (i === 35) return 'Sep';
    if (i === 40) return 'Oct';
    if (i === 44) return 'Nov';
    if (i === 48) return 'Dec';
    return '';
  });

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl relative w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-sm font-bold text-on-surface">
          Consistency Heatmap
        </h3>
        
        {/* Heatmap Legend */}
        <div className="flex gap-2 items-center text-on-surface-variant/50 font-label-caps text-[10px] uppercase tracking-wider">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-surface-container-highest" title="No activity"></div>
          <div className="w-3 h-3 rounded-sm bg-primary/30" title="Low activity"></div>
          <div className="w-3 h-3 rounded-sm bg-primary/70" title="Medium activity"></div>
          <div className="w-3 h-3 rounded-sm bg-primary" title="High activity"></div>
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-2">
        <div className="flex flex-col gap-3 w-full min-w-[760px]">
          <div className="grid grid-cols-52 gap-[4px] w-full">
            {columns.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[4px] w-full">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    className={`aspect-square w-full rounded-[2px] cursor-pointer transition-all duration-150 hover:scale-125 ${day.bgClass}`}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${day.titleMsg}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-52 gap-[4px] text-on-surface-variant opacity-40 font-label-caps text-[10px] uppercase tracking-wider pointer-events-none select-none">
            {monthLabels.map((label, idx) => (
              <span key={idx} className="text-left overflow-visible whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-[11px] text-on-surface-variant mt-4 leading-relaxed">
        Your consistency has improved by 12% since last month. Keep it up!
      </p>
    </div>
  );
}
