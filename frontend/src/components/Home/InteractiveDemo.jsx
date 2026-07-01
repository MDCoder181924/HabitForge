import React, { useState } from 'react';

export default function InteractiveDemo() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink 3L Water", completed: false, icon: "local_drink", color: "text-blue-500 bg-blue-500/10" },
    { id: 2, name: "Git Push Commit", completed: true, icon: "terminal", color: "text-primary bg-primary/10" },
    { id: 3, name: "20m Tech Reading", completed: false, icon: "menu_book", color: "text-amber-500 bg-amber-500/10" }
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const percentage = Math.round((completedCount / habits.length) * 100);
  
  // Calculate a dynamic streak based on whether they completed everything today
  const baseStreak = 12;
  const currentStreak = completedCount === habits.length ? baseStreak + 1 : baseStreak;

  // Render dummy grid cells for the last 28 days (4 rows of 7 days)
  // We'll make the last cell (index 27) represent "Today" and respond to completion percentage
  const gridCells = Array.from({ length: 28 }).map((_, idx) => {
    if (idx === 27) {
      // Today
      if (completedCount === 0) return 'bg-outline-variant/10 border border-outline-variant/20';
      if (completedCount === 1) return 'bg-primary/30';
      if (completedCount === 2) return 'bg-primary/60';
      return 'bg-primary shadow-[0_0_12px_rgba(75,226,119,0.5)]';
    }
    // Static past days
    const activeStates = [
      true, true, false, true, true, true, true,
      true, false, true, true, true, true, true,
      true, true, true, false, true, true, true,
      true, true, true, true, true, true
    ];
    return activeStates[idx] ? 'bg-primary/70' : 'bg-outline-variant/20';
  });

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="demo">
      <div className="text-center mb-16 space-y-3">
        <span className="font-mono text-xs font-bold text-secondary tracking-widest uppercase bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20">
          Interactive Sandbox
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-on-surface font-display tracking-tight">
          Try HabitForge Live
        </h2>
        <p className="text-sm text-on-surface-variant font-mono max-w-lg mx-auto">
          Click the habits below to complete them and see the dashboard respond in real-time.
        </p>
      </div>

      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-outline-variant/20 max-w-4xl mx-auto glass-card-stroke shadow-xl relative overflow-hidden">
        {/* Background glow lines */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10">
          
          {/* Left Column: Interactive Habit List */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg text-on-surface font-display">Daily Focus</h3>
                  <p className="text-xs text-on-surface-variant font-mono">TODAY • JULY 1, 2026</p>
                </div>
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20">
                  {percentage}% Done
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-outline-variant/10 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* Habit Rows */}
              <div className="space-y-3">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    onClick={() => toggleHabit(habit.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-350 cursor-pointer select-none ${
                      habit.completed
                        ? 'bg-primary/5 border-primary/30 shadow-sm shadow-primary/5'
                        : 'bg-surface border-outline-variant/20 hover:border-outline-variant/40'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${habit.color}`}>
                        <span className="material-symbols-outlined text-xl">{habit.icon}</span>
                      </div>
                      <span className={`text-sm font-bold transition-all duration-300 ${
                        habit.completed ? 'text-on-surface/65 line-through decoration-primary/40' : 'text-on-surface'
                      }`}>
                        {habit.name}
                      </span>
                    </div>

                    {/* Custom Checkbox */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      habit.completed 
                        ? 'bg-primary text-on-primary scale-110 shadow-md shadow-primary/20' 
                        : 'border-2 border-outline-variant/40 hover:border-primary/50'
                    }`}>
                      {habit.completed && (
                        <span className="material-symbols-outlined text-xs font-black">done</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-on-surface-variant font-mono italic">
              * Tap a habit row to toggle its completion. Watch the stats on the right update.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block col-span-1 w-[1px] bg-outline-variant/20 self-stretch justify-self-center"></div>

          {/* Right Column: Reacting Analytics */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Streak Widget */}
            <div className="bg-surface-container-lowest border border-outline-variant/25 rounded-2xl p-5 flex items-center justify-between shadow-sm relative group overflow-hidden">
              <div>
                <span className="text-[10px] text-on-surface-variant font-mono uppercase block mb-1">Consistency Streak</span>
                <span className="text-3xl font-black text-on-surface font-mono transition-all duration-500">
                  {currentStreak} <span className="text-xl font-normal text-on-surface-variant">days</span>
                </span>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                completedCount === habits.length 
                  ? 'bg-orange-500/20 text-orange-500 scale-110 animate-bounce' 
                  : 'bg-tertiary/10 text-tertiary'
              }`}>
                <span className="material-symbols-outlined text-2xl font-fill">local_fire_department</span>
              </div>
            </div>

            {/* Mock Grid Widget */}
            <div className="bg-surface-container-lowest border border-outline-variant/25 rounded-2xl p-5 shadow-sm flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-on-surface-variant font-mono uppercase block">Consistency History</span>
                  <span className="text-[10px] text-primary font-mono font-bold">Today: {completedCount}/3</span>
                </div>
                
                {/* 7x4 Grid representation */}
                <div className="grid grid-cols-7 gap-1.5 max-w-[210px] mx-auto">
                  {gridCells.map((cellClass, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-square rounded-[3px] transition-all duration-500 ${cellClass}`}
                      title={idx === 27 ? "Today (Interactive)" : `Day -${27 - idx}`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between text-[9px] text-on-surface-variant font-mono mt-4 pt-3 border-t border-outline-variant/10">
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-outline-variant/20"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/30"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/60"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-primary"></div>
                </div>
                <span>More</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
