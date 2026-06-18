import React from 'react';

export default function InsightCard() {
  return (
    <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between relative group cursor-pointer overflow-hidden h-full">
      <div className="z-10">
        <span className="material-symbols-outlined text-primary text-2xl mb-4" data-icon="bolt">bolt</span>
        <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2">
          Stay Sharp
        </h4>
        <p className="text-xs text-on-surface-variant/70 leading-relaxed">
          "Discipline is doing what needs to be done, even if you don't want to do it."
        </p>
      </div>
      
      <div className="mt-6 z-10">
        <button className="text-[10px] font-mono tracking-widest uppercase text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
          READ_INSIGHTS 
          <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
        </button>
      </div>

      <div className="absolute -right-4 -bottom-4 opacity-[0.03] transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <span className="material-symbols-outlined text-[100px] text-on-surface" data-icon="psychology">
          psychology
        </span>
      </div>
    </div>
  );
}
