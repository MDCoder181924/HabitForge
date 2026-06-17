import React from 'react';

export default function SidebarInsights() {
  return (
    <div className="flex flex-col gap-6">
      {/* Weekly Goal Progress Card */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-4">
          Weekly Goal
        </h3>

        <div className="relative pt-1">
          <div className="flex mb-3 items-center justify-between">
            <div>
              <span className="text-[9px] font-bold font-mono py-1 px-2.5 uppercase rounded-full text-[#4be277] bg-[#4be277]/10 border border-[#4be277]/20 tracking-wider">
                SUCCESS
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold font-mono text-[#4be277]">
                75%
              </span>
            </div>
          </div>
          
          <div className="overflow-hidden h-1.5 mb-4 rounded bg-white/5 relative">
            <div 
              className="h-full rounded bg-[#4be277] shadow-[0_0_8px_rgba(75,226,119,0.3)] transition-all duration-500" 
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>

        <p className="text-xs text-white/50 leading-relaxed font-sans mt-2">
          32 habits completed this week. You are on track to beat your average of 38.
        </p>
      </div>

      {/* AI Forge Insights Card */}
      <div className="glass-card glass-card-stroke p-6 rounded-2xl relative tech-corners overflow-hidden group">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>

        {/* Decorative background brain icon */}
        <div className="absolute top-0 right-0 p-3 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-300 pointer-events-none">
          <span className="material-symbols-outlined text-[72px] text-[#4be277] font-bold">
            psychology
          </span>
        </div>

        <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-3">
          Forge Insight
        </h3>

        <p className="text-xs text-white/80 leading-relaxed italic mb-4 font-sans">
          "Your consistency with 'Deep Work' is 40% higher on Tuesdays. Schedule your most difficult tasks for tomorrow morning."
        </p>

        <a 
          href="#/analytics" 
          className="text-[#4be277] font-mono text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 hover:underline cursor-pointer transition-colors"
        >
          View Full Report
          <span className="material-symbols-outlined text-[12px] font-black">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
