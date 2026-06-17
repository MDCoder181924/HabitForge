import React from 'react';

export default function FooterVisuals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="glass-card glass-card-stroke p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[#4be277] text-lg">emoji_events</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-white/30 uppercase">Next Reward</p>
          <p className="text-xs font-bold text-white">Level 12 Badge</p>
        </div>
      </div>

      <div className="glass-card glass-card-stroke p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white/60 text-lg">groups</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-white/30 uppercase">Community</p>
          <p className="text-xs font-bold text-white">Top 5% Today</p>
        </div>
      </div>

      <div className="glass-card glass-card-stroke p-4 rounded-xl flex items-center gap-4 relative">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white/60 text-lg">history</span>
        </div>
        <div>
          <p className="text-[9px] font-mono tracking-widest text-white/30 uppercase">History</p>
          <p className="text-xs font-bold text-white">8 Day Average: 92%</p>
        </div>
      </div>
    </div>
  );
}
