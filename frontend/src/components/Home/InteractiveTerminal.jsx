import React, { useState } from 'react';

export default function InteractiveDashboard() {
  const initialHabits = [
    { id: 1, name: 'Morning Cardio', category: 'Health', current: 0, target: 1, unit: 'Session', streak: 12, icon: '🏃', color: 'text-primary border-primary/20 bg-primary/5' },
    { id: 2, name: 'Read 15 Pages', category: 'Mind', current: 8, target: 15, unit: 'Pages', streak: 8, icon: '📚', color: 'text-blue-400 border-blue-400/20 bg-blue-400/5' },
    { id: 3, name: 'Drink Water', category: 'Health', current: 2, target: 3, unit: 'Liters', streak: 21, icon: '💧', color: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5' },
  ];

  const [habits, setHabits] = useState(initialHabits);

  const presets = [
    { name: 'Meditate 10m', category: 'Mind', target: 10, unit: 'Mins', icon: '🧘', color: 'text-purple-400 border-purple-400/20 bg-purple-400/5' },
    { name: 'Write Journal', category: 'Mind', target: 1, unit: 'Entry', icon: '📓', color: 'text-amber-400 border-amber-400/20 bg-amber-400/5' },
    { name: 'Bed by 10 PM', category: 'Sleep', target: 1, unit: 'Times', icon: '🌙', color: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5' }
  ];

  const incrementProgress = (id) => {
    setHabits(prev => prev.map(habit => {
      if (habit.id === id) {
        const nextVal = Math.min(habit.current + 1, habit.target);
        const streakAdded = nextVal === habit.target && habit.current < habit.target;
        return {
          ...habit,
          current: nextVal,
          streak: streakAdded ? habit.streak + 1 : habit.streak
        };
      }
      return habit;
    }));
  };

  const addPreset = (preset) => {
    if (habits.some(h => h.name === preset.name)) return;
    setHabits(prev => [
      ...prev,
      {
        id: Date.now(),
        ...preset,
        current: 0,
        streak: 0
      }
    ]);
  };

  const resetHabits = () => {
    setHabits(initialHabits);
  };

  const completedCount = habits.filter(h => h.current === h.target).length;
  const isAllCompleted = habits.length > 0 && completedCount === habits.length;

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Interactive Dashboard Mockup */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="w-full glass-card p-6 rounded-2xl flex flex-col shadow-2xl glass-card-stroke relative tech-corners">
            <div className="tech-corner-tl"></div>
            <div className="tech-corner-tr"></div>
            <div className="tech-corner-bl"></div>
            <div className="tech-corner-br"></div>
            
            {/* Dashboard Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6 shrink-0">
              <div>
                <h3 className="text-xs font-bold text-on-surface font-mono uppercase tracking-wider">Daily Habits</h3>
                <p className="text-[10px] text-on-surface-variant font-mono">
                  {isAllCompleted ? '🎉 All goals checked off today!' : `${completedCount} of ${habits.length} completed`}
                </p>
              </div>
              <button 
                onClick={resetHabits}
                className="text-[9px] font-mono font-bold uppercase text-neutral-500 hover:text-primary transition-colors cursor-pointer border border-white/5 bg-white/2 hover:bg-white/5 px-2.5 py-1 rounded"
              >
                Reset
              </button>
            </div>

            {/* Habit Stack List */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
              {habits.map((habit) => {
                const isCompleted = habit.current === habit.target;
                const percent = Math.round((habit.current / habit.target) * 100);

                return (
                  <div 
                    key={habit.id}
                    className="bg-[#070707] border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-white/10"
                  >
                    {/* Habit Info & Icon */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-lg ${habit.color}`}>
                        {habit.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">{habit.name}</h4>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">
                          {habit.category} • {habit.current}/{habit.target} {habit.unit}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar & Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      {/* Progress bar */}
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-neutral-900 h-1 rounded-full overflow-hidden">
                          <div 
                            className="bg-primary h-full transition-all duration-300"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className="text-[9px] font-mono text-neutral-500">{percent}%</span>
                      </div>

                      {/* Streak Badge */}
                      <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                        <span>🔥</span>
                        <span>{habit.streak}d</span>
                      </div>

                      {/* Complete/Plus Trigger Button */}
                      {isCompleted ? (
                        <span className="bg-primary/15 text-primary border border-primary/25 text-[10px] font-bold font-mono px-3 py-1.5 rounded-lg select-none">
                          ✓ Done
                        </span>
                      ) : (
                        <button
                          onClick={() => incrementProgress(habit.id)}
                          className="bg-neutral-900 border border-white/10 hover:border-primary/50 hover:text-primary transition-all duration-200 text-[10px] font-bold font-mono px-3.5 py-1.5 rounded-lg cursor-pointer"
                        >
                          + Add
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {habits.length === 0 && (
                <div className="text-center py-8 text-neutral-500 font-mono text-xs">
                  No habits added. Select a preset on the right to start tracking.
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Right Side: Copy & Quick Presets */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="font-mono text-[9px] font-bold text-on-surface-variant tracking-widest uppercase">
              Frictionless Routine Stacking
            </span>
          </div>
          
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            Build habits that <span className="text-primary underline decoration-white/20">shape your day.</span>
          </h2>
          
          <p className="text-sm text-on-surface-variant leading-relaxed">
            HabitForge helps you stay consistent with a calm, clutter-free dashboard. Track daily habits, manage streaks, and build compounding momentum without stressful level-ups or corporate notifications.
          </p>

          {/* Preset buttons */}
          <div className="space-y-3 pt-2">
            <p className="text-[10px] font-mono font-bold uppercase text-neutral-500">Quick add habit to test:</p>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => addPreset(preset)}
                  className="bg-neutral-900 border border-white/5 text-[11px] font-semibold font-mono text-on-surface hover:border-white/20 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                >
                  {preset.icon} {preset.name}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
