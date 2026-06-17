import React from 'react';

export default function HabitsTable({ habits, toggleHabit }) {
  return (
    <div className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              <th className="px-6 py-4 text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                Habit Name
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                Frequency
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                Current Streak
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {habits.map((habit) => (
              <tr 
                key={habit.id} 
                className={`hover:bg-white/[0.01] transition-colors group ${!habit.active ? 'opacity-50' : ''}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-1.5 h-8 rounded-full shadow-[0_0_8px_rgba(75,226,119,0.3)] shrink-0" 
                      style={{ backgroundColor: habit.color }}
                    />
                    <div>
                      <p className="text-sm font-bold text-white">{habit.name}</p>
                      <p className="text-[11px] text-white/40 mt-0.5">{habit.desc}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/5 text-white/60 font-mono text-[9px] border border-white/5 uppercase tracking-wider">
                    {habit.freq}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#4be277] text-lg font-fill">
                      local_fire_department
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      {habit.streak} {habit.freq === 'Daily' ? 'Days' : 'Weeks'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={habit.active} 
                      onChange={() => toggleHabit(habit.id)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4be277]" />
                  </label>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:bg-white/5 rounded text-white/40 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-base">edit</span>
                    </button>
                    <button className="p-1 hover:bg-red-500/10 rounded text-white/40 hover:text-red-400 transition-colors">
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {habits.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-white/30 font-mono text-xs uppercase tracking-widest">
                  NO_HABITS_FOUND
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
