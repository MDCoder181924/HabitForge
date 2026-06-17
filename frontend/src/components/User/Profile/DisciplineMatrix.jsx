import React from 'react';

export default function DisciplineMatrix({ matrixIntensities }) {
  return (
    <div className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners flex flex-col h-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="px-6 py-4 border-b border-white/5 flex flex-wrap justify-between items-center bg-white/[0.01] gap-2 font-mono">
        <h3 className="text-[10px] font-bold text-white tracking-widest uppercase">
          DISCIPLINE_MATRIX.LOG
        </h3>
        <div className="flex gap-1.5 items-center text-[9px] text-white/30 tracking-widest uppercase shrink-0">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#064e3b]/50" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#059669]/70" />
          <div className="w-2.5 h-2.5 rounded-sm bg-[#4be277]" />
          <span>More</span>
        </div>
      </div>
      
      <div className="p-6 overflow-x-auto custom-scrollbar flex-grow">
        <div className="min-w-[760px] grid grid-flow-col grid-rows-7 gap-1">
          {matrixIntensities.map((rand, idx) => {
            let color = 'bg-white/5';
            if (rand > 0.9) color = 'bg-[#4be277]';
            else if (rand > 0.7) color = 'bg-[#059669]/70';
            else if (rand > 0.5) color = 'bg-[#064e3b]/40';
            return (
              <div 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-sm border border-white/5 ${color} hover:ring-2 hover:ring-[#4be277] cursor-pointer transition-all`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
