import React from 'react';

export default function StreakBreakdown() {
  const habits = [
    { name: 'Deep Work', streak: '14d', pct: 85 },
    { name: 'Morning Meditate', streak: '28d', pct: 100 },
    { name: 'Daily Run', streak: '3d', pct: 15 },
    { name: 'Cold Shower', streak: '9d', pct: 45 },
    { name: 'Reading', streak: '21d', pct: 70 }
  ];

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between h-full">
      <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">
        Streak Breakdown
      </h3>
      
      <div className="space-y-4 text-xs my-auto">
        {habits.map((habit) => (
          <div key={habit.name} className="space-y-1.5">
            <div className="flex justify-between text-[11px] uppercase tracking-wider">
              <span className="text-on-surface-variant">{habit.name}</span>
              <span className="font-bold text-on-surface font-mono">{habit.streak}</span>
            </div>
            <div className="h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000" 
                style={{ width: `${habit.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-primary font-mono text-[9px] tracking-widest uppercase text-center py-2 hover:underline transition-all cursor-pointer">
        VIEW_ALL_HABITS
      </button>
    </div>
  );
}
