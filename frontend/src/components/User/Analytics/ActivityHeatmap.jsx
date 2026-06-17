import React from 'react';

export default function ActivityHeatmap({ intensities }) {
  const intensityColors = [
    'rgba(255, 255, 255, 0.02)', // 0: None
    '#064e3b',                  // 1: Low
    '#065f46',                  // 2: Medium-Low
    '#059669',                  // 3: Medium-High
    '#4be277'                   // 4: High
  ];

  return (
    <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Activity Heatmap
          </h3>
          <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider mt-0.5">
            428 contributions in the last year
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-[9px] font-mono tracking-wider uppercase text-white/30 shrink-0">
          <span>Less</span>
          <div className="flex gap-1.5">
            {intensityColors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-3.5 h-3.5 rounded-sm border border-white/5" 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Grid container */}
      <div className="overflow-x-auto custom-scrollbar pb-2">
        <div className="min-w-[800px] grid grid-flow-col grid-rows-7 gap-1">
          {intensities.map((intensity, index) => (
            <div 
              key={index}
              className="w-3 h-3 rounded-sm hover:ring-2 hover:ring-[#4be277] cursor-pointer transition-all duration-150"
              style={{ backgroundColor: intensityColors[intensity] }}
              title={`Day ${index + 1}: ${intensity * 2} habits completed`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-3 text-[9px] font-mono text-white/30 uppercase tracking-widest">
        <span>Oct 2023</span>
        <span>Jan 2024</span>
        <span>Apr 2024</span>
        <span>Jul 2024</span>
        <span>Oct 2024</span>
      </div>
    </div>
  );
}
