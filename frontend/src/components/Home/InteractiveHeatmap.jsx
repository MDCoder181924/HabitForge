import React, { useState } from 'react';

export default function InteractiveHeatmap() {
  // Generate 28 days of consistency data
  const [grid, setGrid] = useState(
    Array.from({ length: 28 }, (_, i) => ({
      day: i + 1,
      level: i % 4 === 0 ? 0 : (i % 7 === 0 ? 1 : 2)
    }))
  );

  const toggleLevel = (index) => {
    setGrid(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        level: (updated[index].level + 1) % 3
      };
      return updated;
    });
  };

  // Calculate statistics dynamically
  const activeDays = grid.filter(cell => cell.level > 0).length;
  const consistencyRate = Math.round((activeDays / 28) * 100);

  // Compute current streak (longest consecutive run of active days)
  let currentStreak = 0;
  let tempStreak = 0;
  grid.forEach(cell => {
    if (cell.level > 0) {
      tempStreak += 1;
      if (tempStreak > currentStreak) {
        currentStreak = tempStreak;
      }
    } else {
      tempStreak = 0;
    }
  });

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="font-mono text-[9px] font-bold text-on-surface-variant tracking-widest uppercase">
              Interactive Analytics
            </span>
          </div>
          
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            Visualize your <span className="text-primary underline decoration-white/20">momentum.</span>
          </h2>
          
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Click on individual grid squares to toggle your completion levels for that day. Watch your consistency rate and active streaks update dynamically in the stats preview.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
            <div className="bg-white/2 border border-white/5 rounded-xl p-4">
              <span className="text-[9px] font-semibold text-on-surface-variant uppercase tracking-wider block">CONSISTENCY</span>
              <span className="text-2xl font-black text-white">{consistencyRate}%</span>
              <span className="text-[10px] text-on-surface-variant ml-1">last 28d</span>
            </div>
            
            <div className="bg-white/2 border border-white/5 rounded-xl p-4">
              <span className="text-[9px] font-semibold text-on-surface-variant uppercase tracking-wider block">MAX STREAK</span>
              <span className="text-2xl font-black text-white">{currentStreak}</span>
              <span className="text-[10px] text-on-surface-variant ml-1">Days</span>
            </div>
          </div>
        </div>

        {/* Right Side Sandbox Grid */}
        <div className="lg:col-span-7 flex justify-center order-1 lg:order-2 w-full">
          <div className="glass-card p-6 rounded-2xl w-full border border-white/10 shadow-2xl glass-card-stroke space-y-6 tech-corners">
            <div className="tech-corner-tl"></div>
            <div className="tech-corner-tr"></div>
            <div className="tech-corner-bl"></div>
            <div className="tech-corner-br"></div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div>
                <h3 className="text-xs font-bold text-on-surface font-mono uppercase tracking-wider">Consistency Board</h3>
                <p className="text-[10px] text-on-surface-variant">Configure your past month checkmarks below.</p>
              </div>
              
              <div className="flex gap-1.5 items-center">
                <span className="text-[9px] text-on-surface-variant font-mono">0%</span>
                <div className="w-2.5 h-2.5 bg-neutral-900 rounded-[2px]"></div>
                <div className="w-2.5 h-2.5 bg-[#166534] rounded-[2px]"></div>
                <div className="w-2.5 h-2.5 bg-primary rounded-[2px]"></div>
                <span className="text-[9px] text-on-surface-variant font-mono">100%</span>
              </div>
            </div>

            {/* Grid display of 28 squares */}
            <div className="grid grid-cols-7 gap-2">
              {grid.map((cell, idx) => {
                let cellColor = 'bg-neutral-900 border border-white/5';
                if (cell.level === 1) {
                  cellColor = 'bg-[#166534] border border-white/5';
                } else if (cell.level === 2) {
                  cellColor = 'bg-primary';
                }
                
                return (
                  <div
                    key={idx}
                    onClick={() => toggleLevel(idx)}
                    className={`aspect-square rounded-[3px] cursor-pointer hover:scale-105 transition-transform relative group ${cellColor}`}
                  >
                    <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-[9px] font-mono font-bold px-2 py-1 rounded border border-white/10 text-white z-10 whitespace-nowrap">
                      Day {cell.day}: {cell.level === 0 ? 'Missed' : cell.level === 1 ? 'Partial' : 'Full'}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
