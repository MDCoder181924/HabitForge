import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateHabitForm({
  habitName, setHabitName,
  habitDesc, setHabitDesc,
  category, setCategory,
  accentColor, setAccentColor,
  precisionReminders, setPrecisionReminders,
  goalDays, setGoalDays,
  reminderTime, setReminderTime,
  handleSubmit
}) {
  const navigate = useNavigate();

  const colors = [
    { value: '#4be277', label: 'Primary' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#a855f7', label: 'Purple' },
    { value: '#f59e0b', label: 'Amber' },
    { value: '#ef4444', label: 'Red' }
  ];

  return (
    <form 
      onSubmit={handleSubmit}
      className="glass-panel inner-glow w-full rounded-2xl overflow-hidden animate-fade-in"
    >
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-1">New Habit</h2>
            <p className="text-sm text-on-surface-variant">Define your next step toward peak performance.</p>
          </div>
          <button 
            type="button"
            onClick={() => navigate('/habits')}
            className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        <div className="space-y-6">
          {/* Habit Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">HABIT NAME</label>
            <input 
              required
              className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all focus:border-primary/50 text-sm" 
              placeholder="e.g. Morning Meditation" 
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
          </div>
 
          {/* Description */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">DESCRIPTION</label>
            <textarea 
              className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all focus:border-primary/50 resize-none text-sm" 
              placeholder="Describe the cue and the reward..." 
              rows="3"
              value={habitDesc}
              onChange={(e) => setHabitDesc(e.target.value)}
            />
          </div>

          {/* Category Dropdown */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">CATEGORY</label>
            <div className="relative">
              <select 
                className="w-full appearance-none bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface text-sm cursor-pointer transition-all focus:border-primary/50 font-sans"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Health" className="bg-surface-container text-on-surface">Health</option>
                <option value="Fitness" className="bg-surface-container text-on-surface">Fitness</option>
                <option value="Productivity" className="bg-surface-container text-on-surface">Productivity</option>
                <option value="Study" className="bg-surface-container text-on-surface">Study</option>
                <option value="Finance" className="bg-surface-container text-on-surface">Finance</option>
                <option value="Personal" className="bg-surface-container text-on-surface">Personal</option>
                <option value="other" className="bg-surface-container text-on-surface">other</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-3 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goal Duration */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">GOAL DURATION (DAYS)</label>
              <div className="flex gap-2">
                <input 
                  required
                  min="1"
                  max="365"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all focus:border-primary/50 text-sm" 
                  placeholder="e.g. 21" 
                  type="number"
                  value={goalDays}
                  onChange={(e) => setGoalDays(parseInt(e.target.value) || '')}
                />
                <div className="flex bg-surface-container p-1 rounded-xl border border-outline-variant items-center gap-1">
                  {[21, 30, 60].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setGoalDays(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        goalDays === preset 
                          ? 'bg-surface-lowest text-on-surface shadow-sm' 
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {preset}d
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reminder Time */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">REMINDER TIME</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input 
                    type="time" 
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface transition-all focus:border-primary/50 text-sm cursor-pointer"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                  />
                </div>
                <div className="flex bg-surface-container p-1 rounded-xl border border-outline-variant items-center gap-1">
                  {[
                    { label: '8 AM', value: '08:00' },
                    { label: '2 PM', value: '14:00' },
                    { label: '8 PM', value: '20:00' }
                  ].map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => setReminderTime(preset.value)}
                      className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        reminderTime === preset.value 
                          ? 'bg-surface-lowest text-on-surface shadow-sm' 
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Color Picker */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">COLOR THEME</label>
            <div className="flex flex-wrap gap-4 p-1">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setAccentColor(color.value)}
                  className={`w-8 h-8 rounded-full transition-all cursor-pointer ${
                    accentColor === color.value 
                      ? 'scale-110 ring-2 ring-primary ring-offset-4 ring-offset-background' 
                      : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4 pt-4 border-t border-outline-variant">
            <div 
              onClick={() => setPrecisionReminders(!precisionReminders)}
              className="flex items-center justify-between group cursor-pointer gap-4"
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Enable Reminder</span>
                <span className="text-[11px] text-on-surface-variant mt-0.5">Receive notification at selected time</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 pointer-events-none">
                <input 
                  type="checkbox" 
                  checked={precisionReminders} 
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-outline-variant/30 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-outline after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary" />
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex items-center gap-4">
            <button 
              className="flex-1 px-6 py-4 rounded-xl border border-outline-variant text-on-surface font-bold hover:bg-surface-container transition-all cursor-pointer text-sm" 
              type="button"
              onClick={() => navigate('/habits')}
            >
              Cancel
            </button>
            <button 
              className="flex-[2] px-6 py-4 rounded-xl bg-primary text-on-primary font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm" 
              type="submit"
            >
              <span className="material-symbols-outlined" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Create Habit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
