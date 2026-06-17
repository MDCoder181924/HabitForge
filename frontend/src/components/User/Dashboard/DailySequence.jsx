import React from 'react';

export default function DailySequence({ habits, toggleHabit }) {
  // Format current date matching the design "Tuesday, Oct 24"
  const getFormattedDate = () => {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      {/* Card Header */}
      <div className="p-5 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
          Today's Habits
        </h3>
        <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
          {getFormattedDate()}
        </span>
      </div>

      {/* Habits List */}
      <div className="divide-y divide-white/5">
        {habits.map((habit) => (
          <div 
            key={habit.id}
            onClick={() => toggleHabit(habit.id)}
            className="p-5 flex items-center gap-4 hover:bg-white/[0.01] transition-all group cursor-pointer"
          >
            {/* Custom Checkbox */}
            <button
              type="button"
              className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all duration-150 shrink-0 ${
                habit.completed 
                  ? 'border-[#4be277] bg-[#4be277] text-black shadow-[0_0_8px_rgba(75,226,119,0.3)]' 
                  : 'border-white/20 group-hover:border-[#4be277] group-hover:bg-[#4be277]/10'
              }`}
            >
              {habit.completed && (
                <span className="material-symbols-outlined text-[16px] font-black">check</span>
              )}
            </button>

            {/* Habit Text & Progress Bar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className={`text-sm font-bold transition-all duration-150 ${
                  habit.completed ? 'text-white/40 line-through' : 'text-white group-hover:text-[#4be277]'
                }`}>
                  {habit.name}
                </h4>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider">
                  {habit.time}
                </span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-[#4be277] h-full shadow-[0_0_8px_rgba(75,226,119,0.2)] transition-all duration-500"
                  style={{ width: `${habit.completed ? 100 : habit.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Option Action Dot Menu */}
            <button 
              type="button"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                // Placeholder actions menu click
              }}
            >
              <span className="material-symbols-outlined text-lg">more_vert</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
