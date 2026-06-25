import React, { useMemo } from 'react';

const getCategoryIcon = (category) => {
  const map = {
    'Productivity': 'speed',
    'Health': 'favorite',
    'Fitness': 'directions_run',
    'Study': 'school',
    'Finance': 'payments',
    'Personal': 'person',
    'other': 'star'
  };
  return map[category] || 'star';
};

export default function SynergyInsights({ habits = [] }) {
  const coCompletions = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < habits.length; i++) {
      for (let j = i + 1; j < habits.length; j++) {
        const h1 = habits[i];
        const h2 = habits[j];
        
        const days1 = h1.completedDays || [];
        const days2 = h2.completedDays || [];
        
        const common = days1.filter(d => days2.includes(d)).length;
        const totalUnique = new Set([...days1, ...days2]).size;
        
        if (totalUnique > 0 && common > 0) {
          const pct = Math.round((common / totalUnique) * 100);
          pairs.push({
            icon1: getCategoryIcon(h1.habitCategory),
            icon2: getCategoryIcon(h2.habitCategory),
            name: `${h1.habitName} + ${h2.habitName}`,
            desc: `Stacked on ${common} day${common > 1 ? 's' : ''} (${pct}%)`,
            strength: pct >= 80 ? 'Strong Synergy' : pct >= 50 ? 'Solid Synergy' : 'Moderate Synergy'
          });
        }
      }
    }
    return pairs.sort((a, b) => b.pct - a.pct).slice(0, 2);
  }, [habits]);

  const displayStacks = useMemo(() => {
    if (coCompletions.length > 0) {
      return coCompletions;
    }
    // Fallback static data if no co-completions exist yet
    return [
      {
        icon1: 'speed',
        icon2: 'directions_run',
        name: 'Productivity + Fitness',
        desc: 'Complete both health & work habits together',
        strength: 'Setup Synergy'
      }
    ];
  }, [coCompletions]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="bg-primary-container/10 border border-primary/20 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Consistency Principle
          </h4>
          <p className="text-xs leading-relaxed text-on-surface-variant">
            Habits stacked together create strong mental chains. Try completing related habits back-to-back to lower mental resistance and accelerate habit formation.
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
          {displayStacks.map((stack, idx) => (
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
