import React from 'react';

export default function InterfaceSettings({ darkMode, setDarkMode, highDensity, setHighDensity }) {
  return (
    <section className="glass-panel inner-glow rounded-xl overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-outline-variant">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Interface Settings
        </h3>
      </div>
      <div className="p-6 space-y-6">
        {/* Toggle Dark Mode */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-on-surface">OLED Black Mode</h4>
            <p className="text-xs text-on-surface-variant">Enable pure dark backdrops for energy efficiency.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={(e) => setDarkMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
          </label>
        </div>
        
        {/* Toggle High Density Mode */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-on-surface">High Density Mode</h4>
            <p className="text-xs text-on-surface-variant">Maximize information on screen with compact spacing.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={highDensity} 
              onChange={(e) => setHighDensity(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
          </label>
        </div>
      </div>
    </section>
  );
}
