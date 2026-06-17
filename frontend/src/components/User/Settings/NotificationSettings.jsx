import React from 'react';

export default function NotificationSettings({
  desktopNotify, setDesktopNotify,
  emailDigest, setEmailDigest,
  morningHour, setMorningHour,
  morningMinute, setMorningMinute,
  morningPeriod, setMorningPeriod,
  eveningHour, setEveningHour,
  eveningMinute, setEveningMinute,
  eveningPeriod, setEveningPeriod
}) {
  return (
    <section className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01]">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
          Notifications
        </h3>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wide font-mono">Desktop Notifications</p>
            <p className="text-[11px] text-white/40 mt-1">Receive alerts on your desktop for habit reminders.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={desktopNotify} 
              onChange={(e) => setDesktopNotify(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white/40 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#4be277] peer-checked:after:bg-black" />
          </label>
        </div>
        
        <div className="h-[1px] bg-white/5"></div>
        
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wide font-mono">Email Reminders</p>
            <p className="text-[11px] text-white/40 mt-1">Daily digest of your habits and performance metrics.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={emailDigest} 
              onChange={(e) => setEmailDigest(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/5 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white/40 after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-[#4be277] peer-checked:after:bg-black" />
          </label>
        </div>
        
        <div className="h-[1px] bg-white/5"></div>
        
        {/* Time Picker Section */}
        <div className="pt-2">
          <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono mb-4 block">
            Primary Reminder Window
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end font-mono text-xs">
            <div className="space-y-2">
              <p className="text-white/60 uppercase text-[10px]">Morning Check-in</p>
              <div className="flex items-center gap-1">
                <div className="bg-[#050505]/60 border border-white/5 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-[#4be277] focus:ring-0 p-0"
                    value={morningHour}
                    onChange={(e) => setMorningHour(e.target.value.replace(/\D/g, ''))}
                  />
                  <span className="text-white/30">:</span>
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-[#4be277] focus:ring-0 p-0"
                    value={morningMinute}
                    onChange={(e) => setMorningMinute(e.target.value.replace(/\D/g, ''))}
                  />
                  <select 
                    className="bg-[#121212] border border-white/5 text-[10px] text-white/70 rounded-lg py-0.5 px-2 focus:ring-0"
                    value={morningPeriod}
                    onChange={(e) => setMorningPeriod(e.target.value)}
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-white/60 uppercase text-[10px]">Evening Review</p>
              <div className="flex items-center gap-1">
                <div className="bg-[#050505]/60 border border-white/5 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-[#4be277] focus:ring-0 p-0"
                    value={eveningHour}
                    onChange={(e) => setEveningHour(e.target.value.replace(/\D/g, ''))}
                  />
                  <span className="text-white/30">:</span>
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-[#4be277] focus:ring-0 p-0"
                    value={eveningMinute}
                    onChange={(e) => setEveningMinute(e.target.value.replace(/\D/g, ''))}
                  />
                  <select 
                    className="bg-[#121212] border border-white/5 text-[10px] text-white/70 rounded-lg py-0.5 px-2 focus:ring-0"
                    value={eveningPeriod}
                    onChange={(e) => setEveningPeriod(e.target.value)}
                  >
                    <option>AM</option>
                    <option selected="">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
