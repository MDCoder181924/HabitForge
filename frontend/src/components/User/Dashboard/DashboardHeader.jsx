import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardHeader({ completedCount = 4, totalCount = 6 }) {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
      <div>
        <h2 className="text-3xl font-bold font-display text-white tracking-tight">
          Good Morning, Alex
        </h2>
        <p className="text-sm text-white/40 mt-1.5 font-medium tracking-wide">
          You've completed {completedCount} of {totalCount} habits today. Stay focused.
        </p>
      </div>
      
      <div>
        <Link 
          to="/analytics"
          className="inline-block bg-[#4be277] text-black px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          View Analytics
        </Link>
      </div>
    </div>
  );
}
