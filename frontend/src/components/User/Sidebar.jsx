import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'My Habits', path: '/habits', icon: 'checklist' },
    { name: 'Today', path: '/today', icon: 'today' },
    { name: 'Calendar', path: '/calendar', icon: 'calendar_today' },
    { name: 'Analytics', path: '/analytics', icon: 'analytics' },
    { name: 'Profile', path: '/profile', icon: 'person' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  // Helper to close sidebar drawer on navigation clicks on mobile
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className={`fixed md:static inset-y-0 left-0 w-64 shrink-0 bg-[#0a0a0a] border-r border-white/5 h-screen flex flex-col p-6 gap-6 z-50 transform transition-transform duration-300 md:translate-x-0 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-1 mb-2">
        <div className="w-8 h-8 bg-[#4be277]/10 border border-[#4be277]/20 rounded flex items-center justify-center">
          <span className="material-symbols-outlined text-[#4be277] text-xl font-bold animate-pulse">
            bolt
          </span>
        </div>
        <div>
          <h1 className="text-sm font-bold text-[#4be277] tracking-wider uppercase font-display">
            HabitForge
          </h1>
          <p className="text-[10px] text-white/40 font-mono tracking-widest leading-none">
            v1.0.4
          </p>
        </div>
      </div>

      {/* New Habit CTA */}
      <Link
        to="/create-habit"
        onClick={handleLinkClick}
        className="w-full py-2.5 bg-[#4be277] text-black rounded-xl font-bold text-xs font-mono tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 focus:outline-none"
      >
        <span className="material-symbols-outlined text-sm">add</span>
        NEW_HABIT
      </Link>

      {/* Nav List */}
      <nav className="flex-1 flex flex-col gap-1 overflow-y-auto pr-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`flex items-center gap-4 px-4 py-2.5 rounded-xl transition-all duration-150 text-xs font-semibold uppercase tracking-wider ${
                isActive
                  ? 'bg-white/[0.03] border border-white/10 text-[#4be277] font-bold'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.02] border border-transparent'
              }`}
            >
              <span className={`material-symbols-outlined text-base ${isActive ? 'text-[#4be277]' : 'text-white/50'}`}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Session profile */}
      <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-white/5">
            <img 
              alt="Alex Rivera" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQmp3jlP2ANiS1kDVM3AEhFNM0pYmbcrskYBoUGDssdUOYOVKfTcRD8-KJf5Sf4qP42xv_tnGYaNvfEmY-B3oZtEiOA9Aqhv30qspSZnIxaKs-0KMgLoe6JmM9_on4msYyiVCIpUUu84oKG9_zRsaTKxG4j5YIfIbbGAVFkHNw3T4Zn3Cb1qyAdkrNYp-PZOT_GW3_x-gr4UwHa_nY3HdbnP8n-CGE-c7xITK0foCtKLJFHaabYqypOgCpPm-T_ng3YyRgBZ_j1GI"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-white font-semibold text-xs truncate">Alex Rivera</p>
            <p className="text-[9px] text-[#4be277] font-mono tracking-widest uppercase mt-0.5 leading-none">
              PRO_PLAN
            </p>
          </div>
        </div>

        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-4 px-4 py-2.5 rounded-xl text-white/50 hover:text-red-400 hover:bg-red-500/5 transition-all text-xs font-semibold uppercase tracking-wider"
        >
          <span className="material-symbols-outlined text-base">logout</span>
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
