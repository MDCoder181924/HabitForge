import React, { useMemo } from 'react';

export default function CompletionTrends({ habits = [], timeframe = '7 Days' }) {
  const trend = useMemo(() => {
    let daysCount = 7;
    if (timeframe === '30 Days') daysCount = 30;
    else if (timeframe === '90 Days') daysCount = 90;
    else if (timeframe === '1 Year') daysCount = 365;

    const data = [];
    const labels = [];
    const today = new Date();

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const date = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${date}`;

      // Habits active on this date
      const activeOnDate = habits.filter(h => {
        const createdDate = new Date(h.createdAt).toISOString().split('T')[0];
        return createdDate <= dateStr;
      });

      const completedOnDate = activeOnDate.filter(h =>
        (h.completedDays || []).includes(dateStr)
      );

      const pct = activeOnDate.length > 0
        ? Math.round((completedOnDate.length / activeOnDate.length) * 100)
        : 0;

      data.push(pct);

      // Labels based on scale
      if (daysCount === 7) {
        labels.push(d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase());
      } else if (daysCount === 30) {
        if (i % 5 === 0) {
          labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        } else {
          labels.push('');
        }
      } else if (daysCount === 90) {
        if (i % 15 === 0) {
          labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        } else {
          labels.push('');
        }
      } else {
        // 1 Year
        if (i % 60 === 0) {
          labels.push(d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }));
        } else {
          labels.push('');
        }
      }
    }

    // Draw SVG Paths
    let pathD = 'M 0,200 L 800,200';
    let fillD = 'M 0,200 L 800,200 V 200 H 0 Z';
    if (data.length > 0) {
      const coords = data.map((val, idx) => {
        const x = (idx / (data.length - 1 || 1)) * 800;
        const y = 200 - (val / 100) * 180 - 10; // offset slightly from top/bottom
        return { x, y };
      });

      pathD = coords.map((c, idx) => `${idx === 0 ? 'M' : 'L'} ${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
      fillD = `${pathD} V 200 H 0 Z`;
    }

    return {
      labels,
      pathD,
      fillD,
      lastValue: data[data.length - 1] || 0,
      lastDate: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  }, [habits, timeframe]);

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
          
          {/* Dynamic Trend paths */}
          <path 
            d={trend.pathD} 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path 
            d={trend.fillD} 
            fill="url(#chart-glow)" 
          />
        </svg>
        
        {/* Tooltip on top right showing latest status */}
        <div className="absolute right-4 top-4 flex flex-col bg-surface-container border border-outline-variant text-on-surface p-2.5 rounded-xl shadow-2xl pointer-events-none font-mono text-[9px] tracking-wider uppercase">
          <span className="text-on-surface-variant/40">Today, {trend.lastDate}</span>
          <span className="text-primary font-bold mt-0.5">{trend.lastValue}% Complete</span>
        </div>
      </div>
      
      {/* Horizontal Axis */}
      <div className="flex justify-between mt-4 px-2 text-[9px] font-mono text-on-surface-variant/40 uppercase tracking-wider">
        {trend.labels.map((label, idx) => (
          <span key={idx} className="w-full text-center">{label}</span>
        ))}
      </div>
    </div>
  );
}
