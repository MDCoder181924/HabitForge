import React from 'react';

export default function Header({ onMenuClick }) {
  return (
    <header className="h-14 w-full bg-[#050505] border-b border-white/5 flex justify-between items-center px-4 md:px-8 shrink-0 sticky top-0 z-40">
      {/* Left Search input & Hamburger Menu */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger menu toggle */}
        <button 
          type="button"
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center text-white/60 hover:text-[#4be277] p-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">
            menu
          </span>
        </button>

        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-[18px]">
            search
          </span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#0c0c0c] border border-white/5 rounded-xl pl-10 pr-4 py-1.5 text-xs font-mono w-32 focus:w-44 sm:w-64 sm:focus:w-72 transition-all duration-300 text-white placeholder:text-white/20 focus:outline-none focus:border-[#4be277]"
          />
        </div>
      </div>

      {/* Right Tools/Avatar */}
      <div className="flex items-center gap-4">
        <button 
          type="button"
          className="text-white/50 hover:text-[#4be277] transition-colors p-1.5 rounded-lg hover:bg-white/[0.02]"
        >
          <span className="material-symbols-outlined text-lg">
            notifications
          </span>
        </button>
        
        <div className="h-[18px] w-[1px] bg-white/10"></div>
        
        <div className="h-8 w-8 rounded-full border border-white/10 overflow-hidden bg-white/5">
          <img 
            alt="User Avatar" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmp3jlP2ANiS1kDVM3AEhFNM0pYmbcrskYBoUGDssdUOYOVKfTcRD8-KJf5Sf4qP42xv_tnGYaNvfEmY-B3oZtEiOA9Aqhv30qspSZnIxaKs-0KMgLoe6JmM9_on4msYyiVCIpUUu84oKG9_zRsaTKxG4j5YIfIbbGAVFkHNw3T4Zn3Cb1qyAdkrNYp-PZOT_GW3_x-gr4UwHa_nY3HdbnP8n-CGE-c7xITK0foCtKLJFHaabYqypOgCpPm-T_ng3YyRgBZ_j1GI"
          />
        </div>
      </div>
    </header>
  );
}
