import React from 'react';

export default function TodayHabitList({ habits, toggleHabit }) {
  const getTheme = (category = 'Focus', id) => {
    const cat = category.toLowerCase();
    if (cat === 'health' || cat === 'wellness') {
      return {
        icon: cat === 'health' ? 'water_drop' : 'self_improvement',
        colors: 'bg-primary/10 border-primary/20 text-primary',
        label: 'text-primary'
      };
    }
    if (cat === 'fitness' || cat === 'physical') {
      return {
        icon: 'fitness_center',
        colors: 'bg-tertiary/10 border-tertiary/20 text-tertiary',
        label: 'text-tertiary'
      };
    }
    return {
      icon: cat === 'learning' || cat === 'growth' ? 'menu_book' : 'terminal',
      colors: 'bg-secondary/10 border-secondary/20 text-secondary',
      label: 'text-secondary'
    };
  };

  return (
    <section className="space-y-4">
      {habits.map((habit) => {
        const theme = getTheme(habit.category, habit.id);
        return (
          <div 
            key={habit.id}
            className={`glass-panel p-6 rounded-xl flex items-center justify-between group transition-all duration-300 ${
              habit.completed ? 'completed-glow opacity-75' : ''
            }`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${theme.colors}`}>
                <span className="material-symbols-outlined" data-icon={theme.icon}>{theme.icon}</span>
              </div>
              <div>
                <h3 className={`text-lg font-bold text-on-surface transition-all ${
                  habit.completed ? 'line-through opacity-50' : ''
                }`}>
                  {habit.name}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-surface-variant px-2 py-0.5 rounded text-on-surface-variant">
                    {habit.category}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.label} flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[14px]" data-icon="local_fire_department" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                    12 Day Streak
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => toggleHabit(habit.id)}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                  habit.completed 
                    ? 'border-primary bg-primary text-on-primary' 
                    : 'border-outline-variant text-on-surface-variant hover:border-primary/50 hover:bg-primary/5 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-2xl" data-icon="check" style={habit.completed ? { fontVariationSettings: "'FILL' 1" } : {}}>
                  check
                </span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-tertiary-container transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
                <span className="material-symbols-outlined" data-icon="block">block</span>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
