import React from 'react';

export default function CalendarHeader({ viewMode, setViewMode }) {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display">September 2024</h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Consistency score: 84%
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
