import React from 'react';

export default function SynergyInsights() {
  const stacks = [
    {
      icon1: 'fitness_center',
      icon2: 'shower',
      name: 'Exercise → Cold Shower',
      desc: 'Stacked 98% of the time',
      strength: 'Strong Stack'
    },
    {
      icon1: 'menu_book',
      icon2: 'self_improvement',
      name: 'Reading → Meditation',
      desc: 'Stacked 84% of the time',
      strength: 'Solid Stack'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="bg-[#4be277]/5 border border-[#4be277]/10 p-6 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-sm font-bold text-[#4be277] uppercase tracking-wider font-mono mb-2">
            Morning Routine is Key
          </h4>
          <p className="text-xs leading-relaxed text-white/60 font-mono tracking-wide uppercase">
            Our analysis shows that habits completed before 10:00 AM have a <span className="font-bold text-[#4be277]">92% higher completion rate</span> than those scheduled for the evening. Consider shifting "Reading" to an earlier slot to improve consistency.
          </p>
        </div>
        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-[0.02] text-[#4be277] pointer-events-none select-none">
          lightbulb
        </span>
      </div>

      <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
          Top Habit Synergy
        </h4>
        
        <div className="space-y-4">
          {stacks.map((stack, idx) => (
            <div key={idx} className="flex items-center gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0 font-mono">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-black text-[#4be277]">
                  <span className="material-symbols-outlined text-sm">{stack.icon1}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-black text-[#4be277]">
                  <span className="material-symbols-outlined text-sm">{stack.icon2}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{stack.name}</p>
                <p className="text-[9px] text-white/40 mt-0.5">{stack.desc}</p>
              </div>
              <div className="text-[#4be277] font-bold text-[9px] tracking-wider uppercase shrink-0">
                {stack.strength}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
