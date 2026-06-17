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
    <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners flex flex-col justify-between h-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-6">
        Streak Breakdown
      </h3>
      
      <div className="space-y-4 font-mono text-xs my-auto">
        {habits.map((habit) => (
          <div key={habit.name} className="space-y-1.5">
            <div className="flex justify-between text-[10px] uppercase tracking-wider">
              <span className="text-white/70">{habit.name}</span>
              <span className="font-bold text-white">{habit.streak}</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#4be277] rounded-full transition-all duration-1000 shadow-[0_0_6px_rgba(75,226,119,0.3)]" 
                style={{ width: `${habit.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-[#4be277] font-mono text-[9px] tracking-widest uppercase text-center py-2 hover:underline transition-all">
        VIEW_ALL_HABITS
      </button>
    </div>
  );
}
