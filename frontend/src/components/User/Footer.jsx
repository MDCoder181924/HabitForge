import React from 'react';

export default function Footer() {
  return (
    <footer className="h-10 w-full bg-[#050505] border-t border-white/5 flex justify-between items-center px-8 shrink-0">
      {/* Left Info and Links */}
      <div className="flex items-center gap-6 text-[10px] font-mono text-white/30">
        <span>© {new Date().getFullYear()} HABITFORGE</span>
        <div className="hidden sm:flex gap-4">
          <a href="#" className="hover:text-[#4be277] transition-all">SYSTEM_STATUS</a>
          <a href="#" className="hover:text-[#4be277] transition-all">TERMS</a>
          <a href="#" className="hover:text-[#4be277] transition-all">PRIVACY</a>
          <a href="#" className="hover:text-[#4be277] transition-all">API</a>
        </div>
      </div>

      {/* Right Sync Status */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-[#4be277] animate-pulse"></span>
        <span className="text-[#4be277]">LIVE_SYNC: ACTIVE</span>
      </div>
    </footer>
  );
}
