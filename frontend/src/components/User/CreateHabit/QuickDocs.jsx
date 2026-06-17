import React from 'react';

export default function QuickDocs() {
  return (
    <aside className="w-full bg-[#050505] border border-white/5 p-6 rounded-2xl space-y-4 glass-card">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3 font-mono">
        <span className="material-symbols-outlined text-[#4be277] text-lg">info</span>
        <span className="text-[10px] font-bold tracking-widest text-white uppercase">QUICK DOCS</span>
      </div>
      
      <div className="space-y-3 font-mono text-[10px] text-white/40 uppercase tracking-wider leading-relaxed">
        <p>
          Habits use a <span className="text-[#4be277] font-bold">CRON-style</span> scheduler for high-precision tracking.
        </p>
        <p>
          Ensure your target window is at least 30 minutes for optimal streak calculation.
        </p>
      </div>
      
      <div className="pt-2">
        <img 
          className="w-full h-32 object-cover rounded-xl border border-white/5 mix-blend-luminosity opacity-40 hover:opacity-60 transition-opacity" 
          alt="Technical visualization" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXVDFbm-a0l0z_iU59nCfdN9thsHfFievjJqJR8txdaSrbAWTb3o2w1WSE-Vsg_mG52Rs5F3AmxbHnTVOkUEqAb3QrIPdz-wJ2R-a8YO22-csaYmg0-BNJ71IIp3YdDJZdwwojoIPNvyZG_vGqngcRPUIff8coz3THk0Gf_8Fz9xMLJs6tGvEoSINOWOtbdYgjAqtHWeIqQarYilen769EfGzlZx63TjqjGrEva-S0aOxghCDZ_O1haPIfQfMcPX3eKKpkPb6hVE"
        />
      </div>
    </aside>
  );
}
