import React from 'react';

export default function ProfileHero() {
  return (
    <div className="glass-panel inner-glow rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center mb-12">
      <div className="w-32 h-32 rounded-xl bg-surface-container-highest/10 border border-outline-variant/30 p-2 shrink-0">
        <img 
          alt="Elena Rostova Avatar" 
          className="w-full h-full rounded-lg object-cover" 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start mb-2">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display">Elena Rostova</h2>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider">
            Elite Tier
          </span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">Member since January 2024</p>
        <p className="text-xs text-on-surface-variant/75 max-w-xl leading-relaxed">
          Optimizing biological runtime through systematic iterative improvement. Focus: Low-latency cognition and high-availability discipline.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 shrink-0 w-full md:w-auto">
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-4 rounded-xl text-center md:text-left min-w-[120px]">
          <p className="text-[9px] text-on-surface-variant/50 uppercase tracking-wider font-bold mb-1">Consistency</p>
          <p className="text-xl font-bold text-primary font-mono">98.2%</p>
        </div>
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-4 rounded-xl text-center md:text-left min-w-[120px]">
          <p className="text-[9px] text-on-surface-variant/50 uppercase tracking-wider font-bold mb-1">Active Streak</p>
          <p className="text-xl font-bold text-primary font-mono">124 Days</p>
        </div>
      </div>
    </div>
  );
}
