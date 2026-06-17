import React from 'react';

export default function CalendarHeader({ viewMode, setViewMode }) {
  return (
    <div className="flex justify-between items-end border-b border-white/5 pb-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white font-display">September 2024</h2>
        <p className="text-xs text-white/40 font-mono tracking-wider mt-1 uppercase">
          MONTHLY PERFORMANCE MATRIX
        </p>
      </div>
      <div className="flex bg-[#0a0a0a] rounded-xl p-1 border border-white/5 font-mono shrink-0">
        {['Grid', 'List'].map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-1.5 text-[10px] tracking-wider uppercase rounded-lg transition-all ${
              viewMode === mode 
                ? 'bg-white/[0.03] border border-white/10 text-[#4be277]' 
                : 'text-white/40 hover:text-white'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
}
