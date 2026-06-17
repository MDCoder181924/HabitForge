import React from 'react';
import { Link } from 'react-router-dom';

export default function MyHabitsHeader({ filter, setFilter }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white font-display">My Habits</h2>
        <p className="text-xs text-white/40 font-mono tracking-wider mt-1 uppercase">
          Track and manage your daily disciplines.
        </p>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="flex bg-[#0a0a0a] rounded-xl p-1 border border-white/5">
          {['All', 'Active', 'Archived'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-[10px] font-mono tracking-wider uppercase rounded-lg transition-all ${
                filter === tab 
                  ? 'bg-white/[0.03] border border-white/10 text-[#4be277]' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <Link
          to="/create-habit"
          className="bg-[#4be277] text-black px-4 py-2 rounded-xl font-bold text-xs font-mono tracking-wider uppercase hover:opacity-90 transition-opacity flex items-center gap-1.5 shrink-0"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          NEW_HABIT
        </Link>
      </div>
    </div>
  );
}
