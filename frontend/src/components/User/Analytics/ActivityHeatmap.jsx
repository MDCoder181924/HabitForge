import React from 'react';

export default function ActivityHeatmap({ intensities }) {
  const intensityClasses = [
    'bg-surface-container-highest',
    'bg-primary/30',
    'bg-primary/50',
    'bg-primary/70',
    'bg-primary'
  ];

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
            Activity Heatmap
          </h3>
          <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-0.5">
            428 contributions in the last year
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-[9px] tracking-wider uppercase text-on-surface-variant/40 shrink-0">
          <span>Less</span>
          <div className="flex gap-1.5">
            {intensityClasses.map((cls, idx) => (
              <div 
                key={idx} 
                className={`w-3.5 h-3.5 rounded-sm border border-outline-variant/30 ${cls}`} 
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Grid container */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[800px] grid grid-flow-col grid-rows-7 gap-1">
          {intensities.map((intensity, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-sm hover:scale-125 cursor-pointer transition-all duration-150 ${intensityClasses[intensity]}`}
              title={`Day ${index + 1}: ${intensity * 2} habits completed`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-3 text-[9px] font-mono text-on-surface-variant/40 uppercase tracking-wider">
        <span>Oct 2023</span>
        <span>Jan 2024</span>
        <span>Apr 2024</span>
        <span>Jul 2024</span>
        <span>Oct 2024</span>
      </div>
    </div>
  );
}
