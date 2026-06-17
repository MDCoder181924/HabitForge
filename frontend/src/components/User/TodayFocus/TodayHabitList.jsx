import React from 'react';

export default function TodayHabitList({ habits, toggleHabit }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Today's List
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-white/5 rounded text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
          </button>
          <button className="p-1 hover:bg-white/5 rounded text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-sm">more_vert</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        {habits.map((habit) => (
          <div 
            key={habit.id}
            onClick={() => toggleHabit(habit.id)}
            className={`group border rounded-xl p-4 flex items-center gap-4 transition-all cursor-pointer ${
              habit.completed 
                ? 'bg-white/[0.01] border-white/5 opacity-60 hover:opacity-100 hover:border-white/10' 
                : 'bg-[#050505] border-white/10 hover:border-[#4be277]'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
              habit.completed 
                ? 'bg-[#4be277]/10 text-[#4be277]' 
                : 'border border-white/10 text-transparent group-hover:text-[#4be277]/40 group-hover:border-[#4be277]/40'
            }`}>
              <span className="material-symbols-outlined text-lg">
                {habit.completed ? 'check_circle' : 'check'}
              </span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className={`text-sm font-bold transition-all ${habit.completed ? 'text-white/40 line-through' : 'text-white'}`}>
                  {habit.name}
                </h4>
                <span className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${habit.categoryStyle}`}>
                  {habit.category}
                </span>
              </div>
              <p className="text-[11px] text-white/40 mt-1 font-mono tracking-wider uppercase">
                {habit.details}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {habit.hasProgress && !habit.completed && (
                <div className="w-24 bg-white/5 h-1.5 rounded-full overflow-hidden shrink-0 hidden sm:block">
                  <div 
                    className="bg-[#4be277] h-full rounded-full transition-all"
                    style={{ width: `${habit.progressPct}%` }}
                  />
                </div>
              )}
              
              <span className="material-symbols-outlined text-white/20 hover:text-white/60 cursor-grab shrink-0">
                drag_indicator
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
