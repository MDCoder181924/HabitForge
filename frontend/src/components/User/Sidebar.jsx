import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'My Habits', path: '/habits', icon: 'checklist' },
    { name: 'Today', path: '/today', icon: 'today' },
    { name: 'Calendar', path: '/calendar', icon: 'calendar_month' },
    { name: 'Analytics', path: '/analytics', icon: 'monitoring' },
    { name: 'Profile', path: '/profile', icon: 'person' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside className={`fixed md:static inset-y-0 left-0 w-64 shrink-0 bg-surface-container-lowest/50 backdrop-blur-xl border-r border-outline-variant h-screen flex flex-col py-8 z-50 transform transition-transform duration-300 md:translate-x-0 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Brand Logo */}
      <div className="px-6 mb-10">
        <h1 className="text-headline-md font-headline-md font-black text-primary tracking-tight flex items-center gap-2">
          HabitForge
        </h1>
        <p className="text-body-sm font-body-sm text-on-surface-variant opacity-70">
          Stay disciplined
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-6 py-3 transition-all duration-150 ${
                isActive
                  ? 'bg-primary/10 text-primary border-r-4 border-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              <span className="font-body-sm text-body-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Add Habit CTA & Logout */}
      <div className="px-6 mt-auto space-y-4">
        <Link
          to="/create-habit"
          onClick={handleLinkClick}
          className="w-full bg-[#111827] text-white dark:bg-primary dark:text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:outline-none"
        >
          <span className="material-symbols-outlined">add</span>
          <span className="font-label-caps text-label-caps uppercase tracking-wider">New Habit</span>
        </Link>
        
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-3 text-on-surface-variant px-0 py-3 hover:text-error transition-all"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-body-sm text-body-sm">Logout</span>
        </Link>
      </div>
    </aside>
  );
}
