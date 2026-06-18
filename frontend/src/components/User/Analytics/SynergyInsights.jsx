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
      <div className="bg-primary-container/10 border border-primary/20 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Morning Routine is Key
          </h4>
          <p className="text-xs leading-relaxed text-on-surface-variant">
            Our analysis shows that habits completed before 10:00 AM have a <span className="font-bold text-primary">92% higher completion rate</span> than those scheduled for the evening. Consider shifting "Reading" to an earlier slot to improve consistency.
          </p>
        </div>
        <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[120px] opacity-[0.05] text-primary pointer-events-none select-none" data-icon="lightbulb">
          lightbulb
        </span>
      </div>

      <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between">
        <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-4">
          Top Habit Synergy
        </h4>
        
        <div className="space-y-4">
          {stacks.map((stack, idx) => (
            <div key={idx} className="flex items-center gap-4 border-b border-outline-variant/30 pb-3 last:border-0 last:pb-0">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-surface-container-highest/20 flex items-center justify-center border border-background text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon={stack.icon1}>{stack.icon1}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-container-highest/20 flex items-center justify-center border border-background text-primary">
                  <span className="material-symbols-outlined text-sm" data-icon={stack.icon2}>{stack.icon2}</span>
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs font-bold text-on-surface truncate">{stack.name}</p>
                <p className="text-[10px] text-on-surface-variant/70 mt-0.5">{stack.desc}</p>
              </div>
              <div className="text-primary font-bold text-[10px] uppercase shrink-0 font-mono">
                {stack.strength}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
