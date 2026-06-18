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
    <div className="w-full h-screen flex bg-background text-on-background overflow-hidden font-sans relative">
      {/* Noise background texture overlay */}
      <div className="noise-overlay"></div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in cursor-pointer" 
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar Panel */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative z-10 bg-background">
        {/* Top Header */}
        <Header onMenuClick={toggleSidebar} />
        
        {/* Scrollable Page Body */}
        <main className="flex-grow overflow-y-auto custom-scrollbar flex flex-col">
          {/* Responsive padding */}
          <div className="flex-1 w-full p-4 md:p-8 max-w-7xl mx-auto">
            <Outlet />
          </div>
          
          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
