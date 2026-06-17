import React from 'react';

export default function SettingsHeader() {
  return (
    <header className="border-b border-white/5 pb-4">
      <div className="flex items-center gap-1.5 text-white/40 mb-1.5">
        <span className="font-mono text-[10px] uppercase tracking-widest">System</span>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#4be277]">Preferences</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-white font-display">Application Settings</h2>
      <p className="text-xs text-white/40 font-mono tracking-wider mt-1.5 uppercase">
        Configure your workspace preferences and notification triggers.
      </p>
    </header>
  );
}
