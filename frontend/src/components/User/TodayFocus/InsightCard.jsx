import React from 'react';

export default function InsightCard() {
  return (
    <div className="glass-card glass-card-stroke rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer overflow-hidden tech-corners h-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="z-10">
        <span className="material-symbols-outlined text-[#4be277] text-2xl mb-4">bolt</span>
        <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-1">
          Stay Sharp
        </h4>
        <p className="text-xs text-white/40 font-mono tracking-wider uppercase leading-relaxed">
          "Discipline is doing what needs to be done, even if you don't want to do it."
        </p>
      </div>
      
      <div className="mt-4 z-10">
        <button className="text-[10px] font-mono tracking-widest uppercase text-[#4be277] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          READ_INSIGHTS 
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-5 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <span className="material-symbols-outlined text-[100px] text-white">
          psychology
        </span>
      </div>
    </div>
  );
}
