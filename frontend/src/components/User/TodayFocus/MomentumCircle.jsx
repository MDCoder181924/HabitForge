import React from 'react';

export default function MomentumCircle({ completedCount, totalCount, percentage }) {
  const radius = 58;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden h-full">
      <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
        <svg className="w-full h-full -rotate-90">
          <circle 
            className="text-white/5" 
            cx="64" 
            cy="64" 
            fill="transparent" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth={strokeWidth}
          />
          <circle 
            className="text-primary transition-all duration-500" 
            cx="64" 
            cy="64" 
            fill="transparent" 
            r={radius} 
            stroke="currentColor" 
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-on-surface font-mono">{percentage}%</span>
        </div>
      </div>
      
      <div className="flex-1 space-y-2">
        <h3 className="text-base font-bold text-on-surface uppercase tracking-wider">
          Daily Momentum
        </h3>
        <p className="text-xs text-on-surface-variant/70 leading-relaxed">
          Your completion rate is up by 15% compared to last Tuesday. Keep the streak alive!
        </p>
        <div className="flex gap-1.5 pt-2">
          {[...Array(totalCount)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                i < completedCount ? 'bg-primary shadow-[0_0_8px_rgba(75,226,119,0.4)]' : 'bg-white/5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
