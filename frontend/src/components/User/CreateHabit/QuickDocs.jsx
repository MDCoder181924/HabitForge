import React from 'react';

export default function QuickDocs() {
  return (
    <aside className="w-full bg-surface-container border border-white/10 p-6 rounded-xl space-y-4">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="material-symbols-outlined text-primary text-lg" data-icon="info">info</span>
        <span className="text-[10px] font-bold tracking-wider text-on-surface uppercase">QUICK DOCS</span>
      </div>
      
      <div className="space-y-3 text-xs text-on-surface-variant/70 leading-relaxed">
        <p>
          Habits use a <span className="text-primary font-bold">CRON-style</span> scheduler for high-precision tracking.
        </p>
        <p>
          Ensure your target window is at least 30 minutes for optimal streak calculation.
        </p>
      </div>
      
      <div className="pt-2">
        <img 
          className="w-full h-32 object-cover rounded-xl border border-white/5 mix-blend-luminosity opacity-20 hover:opacity-40 transition-opacity" 
          alt="Technical visualization" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXVDFbm-a0l0z_iU59nCfdN9thsHfFievjJqJR8txdaSrbAWTb3o2w1WSE-Vsg_mG52Rs5F3AmxbHnTVOkUEqAb3QrIPdz-wJ2R-a8YO22-csaYmg0-BNJ71IIp3YdDJZdwwojoIPNvyZG_vGqngcRPUIff8coz3THk0Gf_8Fz9xMLJs6tGvEoSINOWOtbdYgjAqtHWeIqQarYilen769EfGzlZx63TjqjGrEva-S0aOxghCDZ_O1haPIfQfMcPX3eKKpkPb6hVE"
        />
      </div>
    </aside>
  );
}
