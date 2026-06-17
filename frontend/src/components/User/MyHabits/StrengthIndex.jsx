import React from 'react';

export default function StrengthIndex() {
  const data = [20, 40, 35, 60, 55, 80, 90, 75, 85, 100, 95, 88];
  
  return (
    <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners h-full flex flex-col justify-between">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Habit Strength Index
          </h3>
          <p className="text-[11px] text-white/40 mt-1 uppercase font-mono tracking-wider">
            Overall consistency score over last 30 days
          </p>
        </div>
        <span className="text-4xl font-black text-[#4be277] font-display">88%</span>
      </div>
      
      <div className="h-24 w-full bg-white/[0.01] border border-white/5 rounded-xl flex items-end p-4 gap-1.5 mt-auto">
        {data.map((height, idx) => (
          <div 
            key={idx}
            className="flex-grow bg-[#4be277] rounded-t-sm transition-all duration-500 hover:opacity-100"
            style={{ 
              height: `${height}%`,
              opacity: idx === 9 ? 1 : 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}
