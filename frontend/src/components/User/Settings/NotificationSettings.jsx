import React from 'react';

export default function NotificationSettings({
  emailNotify, setEmailNotify,
  emailDigest, setEmailDigest,
  morningHour, setMorningHour,
  morningMinute, setMorningMinute,
  morningPeriod, setMorningPeriod,
  eveningHour, setEveningHour,
  eveningMinute, setEveningMinute,
  eveningPeriod, setEveningPeriod
}) {
  return (
    <section className="glass-panel inner-glow rounded-xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-outline-variant">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Notification Settings
        </h3>
      </div>
      <div className="p-6 space-y-6">
        {/* Toggle Desktop Reminders */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-on-surface">Email Notifications</h4>
            <p className="text-xs text-on-surface-variant">Receive email reminders for your scheduled habits.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={emailNotify} 
              onChange={(e) => setEmailNotify(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
          </label>
        </div>
        
        <div className="h-[1px] bg-outline-variant/30"></div>
        
        {/* Toggle Email Digest */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-on-surface">Weekly Performance Digest</h4>
            <p className="text-xs text-on-surface-variant">Receive systematic email diagnostics regarding your behavior consistency.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input 
              type="checkbox" 
              checked={emailDigest} 
              onChange={(e) => setEmailDigest(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
          </label>
        </div>
        
        <div className="h-[1px] bg-outline-variant/30"></div>
        
        {/* Time Picker Section */}
        <div className="pt-2">
          <label className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider mb-4 block">
            Primary Reminder Window
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end text-xs">
            <div className="space-y-2">
              <p className="text-on-surface-variant/80 uppercase text-[10px] font-semibold">Morning Check-in</p>
              <div className="flex items-center gap-1">
                <div className="bg-surface-container-lowest/80 border border-outline-variant px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-primary focus:ring-0 p-0"
                    value={morningHour}
                    onChange={(e) => setMorningHour(e.target.value.replace(/\D/g, ''))}
                  />
                  <span className="text-on-surface-variant/30">:</span>
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-primary focus:ring-0 p-0"
                    value={morningMinute}
                    onChange={(e) => setMorningMinute(e.target.value.replace(/\D/g, ''))}
                  />
                  <select 
                    className="bg-surface-container border border-outline-variant text-[10px] text-on-surface rounded-lg py-0.5 px-2 focus:ring-0 cursor-pointer"
                    value={morningPeriod}
                    onChange={(e) => setMorningPeriod(e.target.value)}
                  >
                    <option className="bg-surface-container text-on-surface">AM</option>
                    <option className="bg-surface-container text-on-surface">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-on-surface-variant/80 uppercase text-[10px] font-semibold">Evening Review</p>
              <div className="flex items-center gap-1">
                <div className="bg-surface-container-lowest/80 border border-outline-variant px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-primary focus:ring-0 p-0"
                    value={eveningHour}
                    onChange={(e) => setEveningHour(e.target.value.replace(/\D/g, ''))}
                  />
                  <span className="text-on-surface-variant/30">:</span>
                  <input 
                    type="text" 
                    maxLength="2"
                    className="w-8 bg-transparent border-none text-center font-bold text-primary focus:ring-0 p-0"
                    value={eveningMinute}
                    onChange={(e) => setEveningMinute(e.target.value.replace(/\D/g, ''))}
                  />
                  <select 
                    className="bg-surface-container border border-outline-variant text-[10px] text-on-surface rounded-lg py-0.5 px-2 focus:ring-0 cursor-pointer"
                    value={eveningPeriod}
                    onChange={(e) => setEveningPeriod(e.target.value)}
                  >
                    <option className="bg-surface-container text-on-surface">AM</option>
                    <option className="bg-surface-container text-on-surface">PM</option>
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
