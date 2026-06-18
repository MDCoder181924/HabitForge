import React from 'react';
import { Link } from 'react-router-dom';

export default function HabitsTable({ habits, toggleHabit, toggleTodayCompleted }) {
  const getCategoryTheme = (category = 'Productivity') => {
    switch (category.toLowerCase()) {
      case 'health':
        return {
          icon: 'water_drop',
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'learning':
        return {
          icon: 'menu_book',
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          border: 'border-secondary/20'
        };
      case 'fitness':
        return {
          icon: 'fitness_center',
          bg: 'bg-tertiary/10',
          text: 'text-tertiary',
          border: 'border-tertiary/20'
        };
      default:
        return {
          icon: 'terminal',
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {habits.map((habit) => {
        const theme = getCategoryTheme(habit.category);
        const completedDays = habit.completedDays || 0;
        const totalGoalDays = habit.totalGoalDays || 21;
        const missedDays = habit.missedDays || 0;
        const completionPercentage = Math.min(100, Math.round((completedDays / totalGoalDays) * 100));

        return (
          <div 
            key={habit.id} 
            className="glass-panel p-6 rounded-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 tech-corners"
          >
            {/* Tech glowing corners */}
            <div className="tech-corner-tl" style={{ borderColor: habit.color || '#4be277' }}></div>
            <div className="tech-corner-tr" style={{ borderColor: habit.color || '#4be277' }}></div>
            <div className="tech-corner-bl" style={{ borderColor: habit.color || '#4be277' }}></div>
            <div className="tech-corner-br" style={{ borderColor: habit.color || '#4be277' }}></div>

            <div>
              {/* Card Top Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${theme.bg} ${theme.text} transition-transform duration-300 group-hover:scale-110`}>
                  <span className="material-symbols-outlined animate-pulse" data-icon={theme.icon}>{theme.icon}</span>
                </div>
                
                {/* Actions: Edit & Delete (always semi-visible, fully on hover) */}
                <div className="flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-1.5 hover:bg-surface-container-highest/50 rounded-lg text-on-surface-variant transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[16px]" data-icon="edit">edit</span>
                  </button>
                  <button className="p-1.5 hover:bg-tertiary/10 rounded-lg text-tertiary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[16px]" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>

              {/* Title & Desc */}
              <div>
                <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 block ${theme.text} opacity-80`}>
                  {habit.category}
                </span>
                <h3 className="text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">{habit.name}</h3>
                <p className="text-xs text-on-surface-variant/70 mb-4 line-clamp-1">{habit.desc}</p>
              </div>

              {/* Goal Track Progress Details */}
              <div className="mb-4 border-t border-outline-variant/10 pt-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-on-surface-variant/80">Goal Progress</span>
                  <span className="font-bold" style={{ color: habit.color || '#4be277' }}>
                    {completedDays} of {totalGoalDays} Days ({completionPercentage}%)
                  </span>
                </div>

                {/* Glowing Progress Bar */}
                <div className="w-full bg-surface-container-highest/40 rounded-full h-1.5 mb-4 relative overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${completionPercentage}%`, 
                      backgroundColor: habit.color || '#4be277',
                      boxShadow: `0 0 8px ${habit.color || '#4be277'}` 
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Today's Check-in Action */}
            <div className="mb-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTodayCompleted(habit.id);
                }}
                className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                  habit.todayCompleted
                    ? 'text-black'
                    : 'bg-surface-container-low border border-outline-variant/30 text-on-surface hover:border-primary/50 hover:bg-surface-container-high'
                }`}
                style={habit.todayCompleted ? { 
                  backgroundColor: habit.color || '#4be277',
                  boxShadow: `0 0 10px ${(habit.color || '#4be277')}60`,
                  color: '#000000'
                } : {}}
              >
                {habit.todayCompleted ? (
                  <>
                    <span className="material-symbols-outlined text-[16px] font-bold text-black" data-icon="task_alt">task_alt</span>
                    Completed for Today
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant/70 animate-pulse" data-icon="radio_button_unchecked">radio_button_unchecked</span>
                    Mark Today Completed
                  </>
                )}
              </button>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between border-t border-outline-variant/20 pt-3 mt-auto">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#f59e0b] animate-bounce" data-icon="local_fire_department">
                  local_fire_department
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant/60">Current Streak</p>
                  <p className="text-sm font-bold text-on-surface">{habit.streak || 0} Days</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant/60">Missed Days</p>
                <p className="text-xs font-bold text-red-500 dark:text-red-400">{missedDays} Days</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Empty State / Add New Placeholder */}
      <Link 
        to="/create-habit"
        className="border-2 border-dashed border-outline-variant/60 rounded-xl p-6 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all group min-h-[250px] cursor-pointer tech-corners"
      >
        <div className="p-4 rounded-full bg-surface-container mb-4 group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-[32px]" data-icon="add_task">add_task</span>
        </div>
        <p className="text-sm font-semibold">Create a new discipline</p>
      </Link>
    </div>
  );
}
