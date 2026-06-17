import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateHabitForm({
  habitName, setHabitName,
  habitDesc, setHabitDesc,
  category, setCategory,
  frequency, setFrequency,
  accentColor, setAccentColor,
  precisionReminders, setPrecisionReminders,
  publicApi, setPublicApi,
  handleSubmit
}) {
  const navigate = useNavigate();

  const colors = [
    { value: '#4be277', label: 'Primary Green' },
    { value: '#ffb47f', label: 'Coral' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#a855f7', label: 'Purple' },
    { value: '#ef4444', label: 'Red' }
  ];

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full bg-[#050505] border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col glass-card"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#4be277] text-xl">add_circle</span>
          <h1 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Create New Habit</h1>
        </div>
        <button 
          type="button"
          onClick={() => navigate('/habits')}
          className="p-1 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </header>

      {/* Form Content */}
      <div className="p-6 space-y-6">
        {/* ID/Metadata Section */}
        <div className="flex items-center justify-between font-mono text-[9px] text-white/30 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <span>HABIT_ID:</span>
            <span className="text-[#4be277] font-bold">hf-uuid-7734</span>
          </div>
          <div className="flex items-center gap-1">
            <span>TIMESTAMP:</span>
            <span>{new Date().toISOString().slice(0, 16).replace('T', '.')}</span>
          </div>
        </div>

        {/* Input Group: Habit Name */}
        <div className="space-y-2">
          <label htmlFor="habit-name" className="text-[10px] font-bold text-white/45 uppercase tracking-widest font-mono">
            Habit Name
          </label>
          <div className="relative group">
            <input 
              id="habit-name"
              type="text"
              required
              placeholder="e.g. Morning Deep Work"
              className="w-full bg-[#0c0c0c] border border-white/5 p-3.5 focus:border-[#4be277] focus:ring-0 text-white font-mono text-xs transition-all rounded-xl placeholder:text-white/20"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity pointer-events-none">
              <span className="text-[9px] font-mono text-[#4be277] tracking-widest">INPUT_ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Input Group: Description */}
        <div className="space-y-2">
          <label htmlFor="habit-desc" className="text-[10px] font-bold text-white/45 uppercase tracking-widest font-mono">
            Description
          </label>
          <textarea 
            id="habit-desc"
            placeholder="Define the success criteria for this habit sequence..."
            rows="3"
            className="w-full bg-[#0c0c0c] border border-white/5 p-3.5 focus:border-[#4be277] focus:ring-0 text-white font-mono text-xs transition-all rounded-xl resize-none placeholder:text-white/20"
            value={habitDesc}
            onChange={(e) => setHabitDesc(e.target.value)}
          />
        </div>

        {/* Bento Grid Layout for Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category Dropdown */}
          <div className="space-y-2">
            <label htmlFor="category" className="text-[10px] font-bold text-white/45 uppercase tracking-widest font-mono">
              Category
            </label>
            <div className="relative">
              <select 
                id="category"
                className="w-full appearance-none bg-[#0c0c0c] border border-white/5 p-3.5 focus:border-[#4be277] focus:ring-0 text-white text-xs transition-all rounded-xl cursor-pointer font-mono"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Productivity</option>
                <option>Health & Fitness</option>
                <option>Learning</option>
                <option>Mindfulness</option>
                <option>Finance</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                expand_more
              </span>
            </div>
          </div>

          {/* Frequency */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-white/45 uppercase tracking-widest font-mono">
              Frequency
            </label>
            <div className="flex bg-[#0c0c0c] border border-white/5 p-1 rounded-xl h-[46px] items-center">
              <button 
                type="button"
                onClick={() => setFrequency('DAILY')}
                className={`flex-1 text-center font-mono text-[10px] py-1.5 uppercase rounded-lg transition-all ${
                  frequency === 'DAILY' 
                    ? 'bg-white/[0.03] border border-white/10 text-[#4be277] font-bold' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                DAILY
              </button>
              <button 
                type="button"
                onClick={() => setFrequency('WEEKLY')}
                className={`flex-1 text-center font-mono text-[10px] py-1.5 uppercase rounded-lg transition-all ${
                  frequency === 'WEEKLY' 
                    ? 'bg-white/[0.03] border border-white/10 text-[#4be277] font-bold' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                WEEKLY
              </button>
            </div>
          </div>
        </div>

        {/* Color Theme Picker */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-white/45 uppercase tracking-widest font-mono">
            Visual Identity
          </label>
          <div className="bg-[#0c0c0c] border border-white/5 p-4 rounded-xl flex items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-wide">Select accent color</span>
            <div className="flex gap-2.5">
              {colors.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setAccentColor(color.value)}
                  className={`w-6 h-6 rounded-md border transition-all duration-150 hover:scale-110 active:scale-95 ${
                    accentColor === color.value 
                      ? 'border-[#4be277] scale-110 shadow-[0_0_8px_rgba(75,226,119,0.3)]' 
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Precision Toggles */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div 
            onClick={() => setPrecisionReminders(!precisionReminders)}
            className="flex items-center justify-between group cursor-pointer gap-4"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">Precision Reminders</span>
              <span className="text-[11px] text-white/40 mt-0.5">Notify via CLI/Push 5 min before target</span>
            </div>
            <div className="relative inline-flex items-center cursor-pointer shrink-0">
              <div className={`w-9 h-5 bg-white/5 rounded-full relative transition-all ${precisionReminders ? 'bg-[#4be277]/10' : ''}`}>
                <div className={`absolute top-[3px] w-3.5 h-3.5 rounded-full transition-all ${
                  precisionReminders 
                    ? 'right-[3px] bg-[#4be277] shadow-[0_0_6px_rgba(75,226,119,0.3)]' 
                    : 'left-[3px] bg-white/20'
                }`} />
              </div>
            </div>
          </div>
          
          <div 
            onClick={() => setPublicApi(!publicApi)}
            className={`flex items-center justify-between group cursor-pointer gap-4 transition-opacity ${!publicApi ? 'opacity-60 hover:opacity-100' : ''}`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">Public API Access</span>
              <span className="text-[11px] text-white/40 mt-0.5">Expose progress to habit-bridge integrations</span>
            </div>
            <div className="relative inline-flex items-center cursor-pointer shrink-0">
              <div className={`w-9 h-5 bg-white/5 rounded-full relative transition-all ${publicApi ? 'bg-[#4be277]/10' : ''}`}>
                <div className={`absolute top-[3px] w-3.5 h-3.5 rounded-full transition-all ${
                  publicApi 
                    ? 'right-[3px] bg-[#4be277] shadow-[0_0_6px_rgba(75,226,119,0.3)]' 
                    : 'left-[3px] bg-white/20'
                }`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <footer className="px-6 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
        <button 
          type="button"
          onClick={() => navigate('/habits')}
          className="font-mono text-[9px] tracking-widest uppercase text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-sm">keyboard_backspace</span>
          DISCARD
        </button>
        <button 
          type="submit"
          className="bg-[#4be277] text-black font-bold font-mono text-[10px] tracking-wider uppercase px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
        >
          INITIALIZE_HABIT
          <span className="material-symbols-outlined text-sm">terminal</span>
        </button>
      </footer>
    </form>
  );
}
