import React from 'react';

export default function AnalyticsHeader({ timeframe, setTimeframe }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white font-display">Performance Insights</h2>
        <p className="text-xs text-white/40 font-mono tracking-wider mt-1 uppercase">
          Analyze your behavioral patterns and consistency metrics.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0">
        <div className="flex bg-[#0a0a0a] rounded-xl p-1 border border-white/5 font-mono">
          {['7 Days', '30 Days', 'Year'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-4 py-1.5 text-[10px] tracking-wider uppercase rounded-lg transition-all ${
                timeframe === t 
                  ? 'bg-white/[0.03] border border-white/10 text-[#4be277]' 
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="bg-[#0a0a0a] border border-white/5 text-white/80 p-2.5 rounded-xl hover:bg-white/5 transition-all flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase">
          <span className="material-symbols-outlined text-base">ios_share</span>
          EXPORT
        </button>
      </div>
    </div>
  );
}
