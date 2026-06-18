import React from 'react';
import { Link } from 'react-router-dom';

export default function HabitsTable({ habits, toggleHabit }) {
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
        const theme = getCategoryTheme(habit.category || (habit.id === 1 ? 'Health' : habit.id === 2 ? 'Learning' : 'Fitness'));
        return (
          <div 
            key={habit.id} 
            className={`glass-panel p-6 rounded-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
              !habit.active ? 'opacity-50' : ''
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${theme.bg} ${theme.text}`}>
                  <span className="material-symbols-outlined" data-icon={theme.icon}>{theme.icon}</span>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-surface-container-highest/30 rounded-lg text-on-surface-variant transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                  </button>
                  <button className="p-2 hover:bg-tertiary/10 rounded-lg text-tertiary transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
                  </button>
                </div>
              </div>

              <div>
                <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 block ${theme.text} opacity-80`}>
                  {habit.category || (habit.id === 1 ? 'Health' : habit.id === 2 ? 'Learning' : 'Fitness')}
                </span>
                <h3 className="text-xl font-bold text-on-surface mb-2">{habit.name}</h3>
                <p className="text-xs text-on-surface-variant/70 mb-4">{habit.desc}</p>
                <div className="flex items-center gap-2 text-on-surface-variant/60 text-xs mb-6">
                  <span className="material-symbols-outlined text-[16px]" data-icon="event_repeat">event_repeat</span>
                  <span>{habit.freq || 'Daily'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-outline-variant/30 pt-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">Current Streak</p>
                <p className={`text-xl font-bold ${theme.text}`}>{habit.streak || 0} Days</p>
              </div>
              <div className="flex gap-1">
                <div className={`w-2 h-6 rounded-sm ${habit.streak > 0 ? theme.bg : 'bg-surface-container-highest/20 border border-outline-variant/10'}`}></div>
                <div className={`w-2 h-6 rounded-sm ${habit.streak > 5 ? theme.bg : 'bg-surface-container-highest/20 border border-outline-variant/10'}`}></div>
                <div className={`w-2 h-6 rounded-sm ${habit.streak > 15 ? theme.bg : 'bg-surface-container-highest/20 border border-outline-variant/10'}`}></div>
                <div className={`w-2 h-6 rounded-sm ${habit.streak > 30 ? theme.bg : 'bg-surface-container-highest/20 border border-outline-variant/10'}`}></div>
              </div>
            </div>

            {/* Toggle Active status at the absolute top corner or overlay */}
            <div className="absolute top-4 right-4 flex items-center group-hover:hidden transition-all">
              <label className="relative inline-flex items-center cursor-pointer scale-90">
                <input 
                  type="checkbox" 
                  checked={habit.active} 
                  onChange={() => toggleHabit(habit.id)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
              </label>
            </div>
          </div>
        );
      })}

      {/* Empty State / Add New Placeholder */}
      <Link 
        to="/create-habit"
        className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all group min-h-[250px] cursor-pointer"
      >
        <div className="p-4 rounded-full bg-surface-container mb-4 group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-[32px]" data-icon="add_task">add_task</span>
        </div>
        <p className="text-sm font-medium">Create a new discipline</p>
      </Link>
    </div>
  );
}
