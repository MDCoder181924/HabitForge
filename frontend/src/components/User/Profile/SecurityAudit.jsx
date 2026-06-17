import React from 'react';

export default function SecurityAudit({ sessionsCount, rotateKeys }) {
  return (
    <div className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners flex flex-col justify-between h-full">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01]">
        <h3 className="text-[10px] font-bold text-white font-mono tracking-widest uppercase">
          SECURITY_AUDIT
        </h3>
      </div>
      
      <div className="p-6 space-y-4 font-mono text-xs my-auto">
        <div className="flex items-center justify-between">
          <span className="text-white/45 uppercase text-[10px]">Auth Method</span>
          <span className="font-bold text-[#4be277]">WebAuthn + 2FA</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/45 uppercase text-[10px]">Sessions</span>
          <span className="font-bold text-white">{sessionsCount} Active</span>
        </div>
        
        <div className="pt-4 border-t border-white/5">
          <button 
            onClick={rotateKeys}
            className="w-full flex items-center justify-center gap-1.5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] tracking-widest uppercase font-bold text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-base">lock_reset</span>
            ROTATE_KEYS
          </button>
        </div>
      </div>
    </div>
  );
}
