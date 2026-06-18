import React from 'react';

export default function AnalyticsHeader({ timeframe, setTimeframe }) {
  const tabs = ['7 Days', '30 Days', '90 Days', '1 Year'];

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display mb-2">Performance Analytics</h2>
        <p className="text-base text-on-surface-variant">Deep insights into your behavioral patterns and consistency metrics.</p>
      </div>
      <div className="flex flex-wrap gap-2 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setTimeframe(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              timeframe === tab
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface hover:bg-surface-variant'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  );
}
