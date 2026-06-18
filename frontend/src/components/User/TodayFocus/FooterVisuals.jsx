import React from 'react';

export default function FooterVisuals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="glass-panel inner-glow p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary text-lg" data-icon="emoji_events">emoji_events</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-on-surface-variant/40 uppercase">Next Reward</p>
          <p className="text-xs font-bold text-on-surface">Level 12 Badge</p>
        </div>
      </div>

      <div className="glass-panel inner-glow p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-surface-variant/70 text-lg" data-icon="groups">groups</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-on-surface-variant/40 uppercase">Community</p>
          <p className="text-xs font-bold text-on-surface">Top 5% Today</p>
        </div>
      </div>

      <div className="glass-panel inner-glow p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-on-surface-variant/70 text-lg" data-icon="history">history</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-on-surface-variant/40 uppercase">History</p>
          <p className="text-xs font-bold text-on-surface">8 Day Average: 92%</p>
        </div>
      </div>
    </div>
  );
}
