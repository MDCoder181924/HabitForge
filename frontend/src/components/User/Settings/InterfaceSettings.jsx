import React from 'react';

export default function InterfaceSettings({ darkMode, setDarkMode, highDensity, setHighDensity }) {
  return (
    <section className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01]">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Interface
        </h3>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wide font-mono">Dark Mode</p>
            <p className="text-[11px] text-white/40 mt-1">Switch between dark and light themes.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={(e) => setDarkMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white/40 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#4be277] peer-checked:after:bg-black" />
          </label>
        </div>
        
        <div className="h-[1px] bg-white/5"></div>
        
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wide font-mono">High Density Mode</p>
            <p className="text-[11px] text-white/40 mt-1">Maximize information on screen with compact spacing.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={highDensity} 
              onChange={(e) => setHighDensity(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white/40 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#4be277] peer-checked:after:bg-black" />
          </label>
        </div>
      </div>
    </section>
  );
}
