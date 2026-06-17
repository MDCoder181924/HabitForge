import React from 'react';

export default function ConsistencyHeatmap() {
  const weeks = 52;
  const daysPerWeek = 7;
  
  // Generate a mock dataset that looks realistic with some streak structures
  const columns = Array.from({ length: weeks }, (_, wIndex) => {
    return Array.from({ length: daysPerWeek }, (_, dIndex) => {
      // Use trigonometric functions mixed with pseudo-randomness for organic-looking streaks
      const seed = Math.sin(wIndex * 0.15) * Math.cos(dIndex * 0.3) + Math.sin((wIndex + dIndex) * 0.05);
      const intensity = Math.abs(seed) * 0.8 + Math.random() * 0.2;
      
      let bgClass = 'bg-[#333333]'; // default empty
      let titleMsg = 'No habits completed';
      
      if (intensity > 0.75) {
        bgClass = 'bg-[#4be277]';
        titleMsg = '100% completed';
      } else if (intensity > 0.45) {
        bgClass = 'bg-[#4be277] opacity-70';
        titleMsg = '70% completed';
      } else if (intensity > 0.25) {
        bgClass = 'bg-[#4be277] opacity-40';
        titleMsg = '30% completed';
      }
      
      return { bgClass, titleMsg };
    });
  });

  // Calculate month names matching the first week of their respective month
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
    <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners w-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      {/* Header and Legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
          Weekly Consistency
        </h3>
        
        {/* Heatmap Legend */}
        <div className="flex gap-2 items-center text-white/40 font-mono text-[9px] uppercase tracking-widest">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-[#333333]" title="No activity"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-[#4be277] opacity-40" title="Low activity"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-[#4be277] opacity-70" title="Medium activity"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-[#4be277]" title="High activity"></div>
          <span>More</span>
        </div>
      </div>

      {/* Grid Container & Labels Wrapper */}
      <div className="overflow-x-auto hide-scrollbar pb-2">
        <div className="flex flex-col gap-3 w-full min-w-[760px]">
          {/* Grid columns using custom 52-column grid styling */}
          <div className="grid grid-cols-52 gap-[3px] md:gap-[4px] w-full">
            {columns.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px] md:gap-[4px] w-full">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    className={`aspect-square w-full rounded-[2px] cursor-pointer transition-all duration-150 hover:scale-125 hover:shadow-[0_0_8px_rgba(75,226,119,0.5)] ${day.bgClass}`}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${day.titleMsg}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Month Labels aligned to the grid-cols-52 layout */}
          <div className="grid grid-cols-52 gap-[3px] md:gap-[4px] text-white/30 font-mono text-[9px] uppercase tracking-widest pointer-events-none select-none">
            {monthLabels.map((label, idx) => (
              <span key={idx} className="text-left overflow-visible whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
