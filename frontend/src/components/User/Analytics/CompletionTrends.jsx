import React from 'react';

export default function CompletionTrends() {
  return (
    <div className="glass-panel inner-glow p-6 rounded-xl h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Completion Trends
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Completed</span>
        </div>
      </div>
      
      <div className="h-64 w-full relative flex items-end justify-between group mt-auto">
        {/* SVG Line Chart */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chart-glow" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid Lines */}
          <line stroke="currentColor" className="text-outline-variant/20" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
          <line stroke="currentColor" className="text-outline-variant/20" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
          <line stroke="currentColor" className="text-outline-variant/20" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
          <line stroke="currentColor" className="text-outline-variant/20" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
          
          {/* Trend path */}
          <path 
            d="M0,160 Q100,140 200,100 T400,60 T600,120 T800,20" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path 
            d="M0,160 Q100,140 200,100 T400,60 T600,120 T800,20 V200 H0 Z" 
            fill="url(#chart-glow)" 
          />
        </svg>
        
        {/* Hover Tooltip placeholder */}
        <div className="absolute left-[50%] bottom-[60%] flex flex-col bg-surface-container border border-outline-variant text-on-surface p-2 rounded-xl shadow-2xl pointer-events-none translate-x-[-50%] font-mono text-[9px] tracking-wider uppercase">
          <span className="text-on-surface-variant/40">Wed, Oct 14</span>
          <span className="text-primary font-bold mt-0.5">85% Complete</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 px-2 text-[9px] font-mono text-on-surface-variant/40 uppercase tracking-wider">
        <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
      </div>
    </div>
  );
}
