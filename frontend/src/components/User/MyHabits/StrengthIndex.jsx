import React from 'react';

export default function StrengthIndex() {
  const data = [20, 40, 35, 60, 55, 80, 90, 75, 85, 100, 95, 88];
  
  return (
    <div className="glass-panel inner-glow p-6 rounded-xl relative h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
            Habit Strength Index
          </h3>
          <p className="text-[11px] text-on-surface-variant/60 mt-1 uppercase tracking-wider font-mono">
            Overall consistency score over last 30 days
          </p>
        </div>
        <span className="text-4xl font-black text-primary font-display">88%</span>
      </div>
      
      <div className="h-24 w-full bg-surface-container-highest/20 border border-outline-variant/30 rounded-xl flex items-end p-4 gap-1.5 mt-auto">
        {data.map((height, idx) => (
          <div 
            key={idx}
            className="flex-grow bg-primary rounded-t-sm transition-all duration-500 hover:opacity-100"
            style={{ 
              height: `${height}%`,
              opacity: idx === 11 ? 1 : 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
}
