import React, { useState } from 'react';
import SettingsHeader from '../../components/User/Settings/SettingsHeader';
import InterfaceSettings from '../../components/User/Settings/InterfaceSettings';
import NotificationSettings from '../../components/User/Settings/NotificationSettings';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [highDensity, setHighDensity] = useState(false);
  const [desktopNotify, setDesktopNotify] = useState(true);
  const [emailDigest, setEmailDigest] = useState(true);

  const [morningHour, setMorningHour] = useState('08');
  const [morningMinute, setMorningMinute] = useState('30');
  const [morningPeriod, setMorningPeriod] = useState('AM');

  const [eveningHour, setEveningHour] = useState('09');
  const [eveningMinute, setEveningMinute] = useState('00');
  const [eveningPeriod, setEveningPeriod] = useState('PM');

  const [toastMessage, setToastMessage] = useState('');

  const saveSettings = () => {
    setToastMessage('SYSTEM CONFIGURATION SAVED SUCCESSFULLY.');
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const resetSettings = () => {
    setDarkMode(true);
    setHighDensity(false);
    setDesktopNotify(true);
    setEmailDigest(true);
    setMorningHour('08');
    setMorningMinute('30');
    setMorningPeriod('AM');
    setEveningHour('09');
    setEveningMinute('00');
    setEveningPeriod('PM');
    setToastMessage('PREFERENCES RESET TO SYSTEM DEFAULT.');
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in relative">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-16 right-8 z-50 bg-[#050505] border border-[#4be277] text-[#4be277] px-6 py-3 rounded-xl shadow-2xl font-mono text-xs tracking-widest animate-pulse">
          {toastMessage}
        </div>
      )}

      {/* Header Section */}
      <SettingsHeader />

      <div className="space-y-6">
        {/* Interface Settings Card */}
        <InterfaceSettings 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          highDensity={highDensity} 
          setHighDensity={setHighDensity} 
        />

        {/* Notifications Settings Card */}
        <NotificationSettings 
          desktopNotify={desktopNotify}
          setDesktopNotify={setDesktopNotify}
          emailDigest={emailDigest}
          setEmailDigest={setEmailDigest}
          morningHour={morningHour}
          setMorningHour={setMorningHour}
          morningMinute={morningMinute}
          setMorningMinute={setMorningMinute}
          morningPeriod={morningPeriod}
          setMorningPeriod={setMorningPeriod}
          eveningHour={eveningHour}
          setEveningHour={setEveningHour}
          eveningMinute={eveningMinute}
          setEveningMinute={setEveningMinute}
          eveningPeriod={eveningPeriod}
          setEveningPeriod={setEveningPeriod}
        />

        {/* Save Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button 
            onClick={resetSettings}
            className="px-4 py-2 font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            RESET_TO_DEFAULT
          </button>
          
          <button 
            onClick={saveSettings}
            className="px-6 py-2.5 bg-[#4be277] text-black font-bold rounded-xl text-xs font-mono tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-lg">save</span>
            SAVE_CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}
