import React from 'react';

export default function NotificationSettings({ emailNotify, setEmailNotify }) {
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
      </div>
    </section>
  );
}
