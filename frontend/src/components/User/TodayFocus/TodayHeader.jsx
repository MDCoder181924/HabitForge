import React from 'react';

export default function TodayHeader({ completedCount, totalCount }) {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const remaining = totalCount - completedCount;

  // Format today's date
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const todayStr = new Date().toLocaleDateString('en-US', options);

  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display">Today's Focus</h2>
        <p className="text-on-surface-variant mt-1">
          {todayStr} — {remaining > 0 ? `You have ${remaining} habits remaining.` : "All habits completed for today!"}
        </p>
      </div>
      <div className="flex gap-3 w-full md:w-auto shrink-0">
        <div className="glass-panel inner-glow px-4 py-2.5 rounded-xl flex items-center gap-3 w-full justify-between md:justify-start">
          <div className="h-2 w-32 bg-surface-variant rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary shadow-[0_0_10px_rgba(75,226,119,0.5)] transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono shrink-0">
            {percentage}% Done
          </span>
        </div>
      </div>
    </header>
  );
}
