import React from 'react';

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="features">
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
          Designed for quiet productivity
        </h2>
        <p className="text-sm text-on-surface-variant font-mono">No flashing bells or whistles. Just raw consistency.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        
        {/* Card 1: Hand-curated Lists */}
        <div className="md:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between glass-card-stroke group relative overflow-hidden">
          <div className="absolute right-4 top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
            <span className="material-symbols-outlined text-9xl">checklist</span>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">checklist</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface font-display">Minimalist Daily List</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
              Clean interface that displays your habits for the day. Items can be checked off in milliseconds. No loading states, no corporate notifications.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {['Gym', 'Drink Water', '20m Book', 'Meditate', 'Code Commit'].map((h, i) => (
              <span key={i} className="text-[10px] font-bold font-mono uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-lg">
                ✓ {h}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Consistency Grids */}
        <div className="md:col-span-5 glass-card p-8 rounded-2xl flex flex-col justify-between glass-card-stroke relative overflow-hidden">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface font-display">Consistency Grids</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Track your streak history using the classic Github-style grid. Clicking past days opens details to let you edit or back-log missed habits.
            </p>
          </div>

          <div className="grid grid-cols-7 gap-1 mt-8 max-w-[180px]">
            {Array.from({ length: 14 }).map((_, idx) => {
              const colors = ['bg-outline-variant/20', 'bg-primary/40', 'bg-primary'];
              const color = colors[idx % 3];
              return <div key={idx} className={`aspect-square rounded-[2px] ${color}`}></div>;
            })}
          </div>
        </div>

        {/* Card 3: Personal Logs */}
        <div className="md:col-span-5 glass-card p-8 rounded-2xl flex flex-col justify-between glass-card-stroke">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined">local_fire_department</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface font-display">Streaks that matter</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Focus on building momentum, not scores. Longest streaks records are locked, showing you what you are capable of on your best days.
            </p>
          </div>
          <div className="mt-8 bg-surface-container border border-outline-variant/20 rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-on-surface-variant font-mono uppercase block">Record Max</span>
              <span className="text-2xl font-black text-tertiary font-mono">42 Days</span>
            </div>
            <span className="material-symbols-outlined text-tertiary text-3xl">local_fire_department</span>
          </div>
        </div>

        {/* Card 4: Built-in Calendar */}
        <div className="md:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-between glass-card-stroke group">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">calendar_month</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface font-display">Full Month Calendars</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
              Zoom out to review monthly completion summaries. Perfect for inspecting high-level patterns and planning monthly routines.
            </p>
          </div>
          <div className="mt-8 flex gap-1.5 self-end">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, idx) => (
              <div key={idx} className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center text-[10px] text-on-surface-variant/40 font-mono">
                {d}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
