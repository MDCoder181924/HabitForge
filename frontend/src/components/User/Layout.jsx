import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-full h-screen flex bg-black text-white overflow-hidden font-sans select-none relative">
      {/* Noise background texture overlay */}
      <div className="noise-overlay"></div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in cursor-pointer" 
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar Panel (Collapsible Drawer on Mobile, Static on Desktop) */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10 bg-black">
        {/* Top Header */}
        <Header onMenuClick={toggleSidebar} />
        
        {/* Scrollable Page Body */}
        <main className="flex-grow overflow-y-auto custom-scrollbar bg-black flex flex-col">
          {/* Responsive padding (p-4 on mobile, p-8 on desktop) */}
          <div className="flex-1 w-full p-4 md:p-8 relative">
            <Outlet />
          </div>
          
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
