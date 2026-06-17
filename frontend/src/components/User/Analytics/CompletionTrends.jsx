import React from 'react';

export default function CompletionTrends() {
  return (
    <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners h-full flex flex-col justify-between">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Completion Trends
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#4be277] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#4be277]"></span>
          <span>Active Habits</span>
        </div>
      </div>
      
      <div className="h-64 w-full relative flex items-end justify-between group mt-auto">
        {/* SVG Line Chart */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chart-glow" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4be277" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4be277" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid Lines */}
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
          <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
          
          {/* Trend path */}
          <path 
            d="M0,160 Q100,140 200,100 T400,60 T600,120 T800,20" 
            fill="none" 
            stroke="#4be277" 
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path 
            d="M0,160 Q100,140 200,100 T400,60 T600,120 T800,20 V200 H0 Z" 
            fill="url(#chart-glow)" 
          />
        </svg>
        
        {/* Hover Tooltip placeholder */}
        <div className="absolute left-[50%] bottom-[60%] flex flex-col bg-[#050505] border border-white/10 text-white p-2 rounded-xl shadow-2xl pointer-events-none translate-x-[-50%] font-mono text-[9px] tracking-widest uppercase">
          <span className="text-white/40">Wed, Oct 14</span>
          <span className="text-[#4be277] font-bold mt-0.5">85% Complete</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 px-2 text-[9px] font-mono text-white/30 uppercase tracking-widest">
        <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
      </div>
    </div>
  );
}
