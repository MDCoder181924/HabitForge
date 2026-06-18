import React from 'react';

export default function DisciplineMatrix({ matrixIntensities }) {
  const intensityClasses = [
    'bg-surface-container-highest',
    'bg-primary/30',
    'bg-primary/50',
    'bg-primary/70',
    'bg-primary'
  ];

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col h-full justify-between">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Discipline Matrix
        </h3>
        <div className="flex items-center gap-2 text-[9px] text-on-surface-variant/50 uppercase tracking-wider shrink-0">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-surface-container-highest" />
          <div className="w-3 h-3 rounded-sm bg-primary/30" />
          <div className="w-3 h-3 rounded-sm bg-primary/70" />
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span>More</span>
        </div>
      </div>
      
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[760px] grid grid-flow-col grid-rows-7 gap-1">
          {matrixIntensities.map((rand, idx) => {
            let intensityIdx = 0;
            if (rand > 0.8) intensityIdx = 4;
            else if (rand > 0.6) intensityIdx = 3;
            else if (rand > 0.4) intensityIdx = 2;
            else if (rand > 0.2) intensityIdx = 1;

            const cls = intensityClasses[intensityIdx];

            return (
              <div 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-sm border border-outline-variant/20 ${cls} hover:scale-125 cursor-pointer transition-all`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
