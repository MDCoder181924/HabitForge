import React from 'react';

export default function SecurityAudit({ sessionsCount, rotateKeys }) {
  return (
    <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between h-full">
      <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">
        Security Settings
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-on-surface-variant">2FA Authentication</span>
          <span className="font-bold text-primary">Active</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-on-surface-variant">Active Sessions</span>
          <span className="font-bold text-on-surface">{sessionsCount} Devices</span>
        </div>
        
        <button 
          onClick={rotateKeys}
          className="w-full mt-6 py-3 border border-outline-variant rounded-lg text-xs font-bold text-on-surface hover:bg-surface-container-high transition-all cursor-pointer"
        >
          Rotate API Keys
        </button>
      </div>
    </div>
  );
}
