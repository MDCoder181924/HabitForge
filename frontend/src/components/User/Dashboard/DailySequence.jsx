import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DailySequence({ habits, toggleHabit, togglingId }) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-headline-md font-headline-md text-on-surface">Today's Habits</h3>
        <button 
          onClick={() => navigate('/habits')}
          className="text-primary text-sm font-bold hover:underline bg-transparent border-none cursor-pointer"
        >
          View All
        </button>
      </div>
      <div className="space-y-4">
        {habits.map((habit) => {
          const completed = habit.habitCompletedToday;
          const borderStyle = completed ? 'border-l-primary' : 'border-l-outline-variant';
          const accentColorClasses = habit._id === 1 
            ? 'bg-primary/10 text-primary' 
            : habit._id === 2 
              ? 'bg-secondary/10 text-secondary' 
              : 'bg-tertiary/10 text-tertiary';
          const iconName = habit._id === 1 ? 'directions_run' : habit._id === 2 ? 'menu_book' : 'self_improvement';
          
          return (
            <div 
              key={habit._id} 
              className={`glass-panel inner-glow p-4 rounded-xl flex items-center justify-between group transition-all hover:bg-surface-container-high border-l-4 ${borderStyle}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${accentColorClasses} flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{iconName}</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{habit.habitName}</h4>
                  <p className="text-xs text-on-surface-variant">Daily • {habit.habitReminderTime  || 'Any time'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {completed && (
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Completed
                  </span>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    !togglingId && toggleHabit(habit._id);
                  }}
                  disabled={togglingId === habit._id}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    togglingId === habit._id
                      ? 'border-outline-variant/30 text-on-surface-variant opacity-50 cursor-not-allowed'
                      : completed 
                        ? 'border-primary text-primary bg-primary/20' 
                        : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
                  }`}
                >
                  <span className={`material-symbols-outlined ${togglingId === habit._id ? 'text-xs animate-spin' : 'text-sm'}`}>
                    {togglingId === habit._id ? 'sync' : completed ? 'check' : 'circle'}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
