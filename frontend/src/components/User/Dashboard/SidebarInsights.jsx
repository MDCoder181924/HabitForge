import React from 'react';

export default function SidebarInsights() {
  return (
    <div className="space-y-8">
      {/* Weekly Completion Rate */}
      <section className="glass-panel inner-glow p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-on-surface">Weekly Completion Rate</h3>
          <span className="text-primary font-bold text-sm">84%</span>
        </div>
        
        {/* Weekly Bar Chart */}
        <div className="h-32 flex items-end justify-between gap-2 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
            <div className="border-t border-outline-variant w-full"></div>
            <div className="border-t border-outline-variant w-full"></div>
            <div className="border-t border-outline-variant w-full"></div>
          </div>
          <div className="w-full bg-primary/10 rounded-t h-[60%] hover:bg-primary/30 transition-all cursor-pointer relative group">
            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface text-[10px] px-2 py-1 rounded border border-outline-variant z-10">Mon</div>
          </div>
          <div className="w-full bg-primary/10 rounded-t h-[80%] hover:bg-primary/30 transition-all cursor-pointer"></div>
          <div className="w-full bg-primary/10 rounded-t h-[40%] hover:bg-primary/30 transition-all cursor-pointer"></div>
          <div className="w-full bg-primary/20 rounded-t h-[95%] hover:bg-primary/30 transition-all cursor-pointer border-t-2 border-primary"></div>
          <div className="w-full bg-primary/10 rounded-t h-[70%] hover:bg-primary/30 transition-all cursor-pointer"></div>
          <div className="w-full bg-primary/10 rounded-t h-[85%] hover:bg-primary/30 transition-all cursor-pointer"></div>
          <div className="w-full bg-primary/5 rounded-t h-[10%] hover:bg-primary/30 transition-all cursor-pointer"></div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-medium">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
      </section>
    </div>
  );
}
