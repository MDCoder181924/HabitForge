import React, { useState } from 'react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'habitforge list' },
    { type: 'output', text: 'Active Habits:\n  • run   [Morning Run]  - Streak: 14 days [Completed]\n  • read  [Read 20 mins] - Streak: 5 days  [Pending]\n  • code  [Commit Code]  - Streak: 21 days [Pending]' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let response = '';
    if (trimmed === 'help') {
      response = 'Available commands:\n  • list                - Show all habits\n  • check <habit-name>  - Complete a habit\n  • streak              - View active streaks\n  • clear               - Clear terminal screen';
    } else if (trimmed === 'list') {
      response = 'Active Habits:\n  • run   [Morning Run]  - Streak: 14 days [Completed]\n  • read  [Read 20 mins] - Streak: 5 days  [Pending]\n  • code  [Commit Code]  - Streak: 21 days [Pending]';
    } else if (trimmed.startsWith('check ')) {
      const habit = trimmed.replace('check ', '').trim();
      if (habit === 'run') {
        response = '[Success] \'Morning Run\' already completed for today.';
      } else if (habit === 'read') {
        response = '🚀 [Success] \'Read 20 mins\' completed! Streak extended to 6 days. Great job.';
      } else if (habit === 'code') {
        response = '💻 [Success] \'Commit Code\' completed! Streak extended to 22 days. Keep shipping.';
      } else {
        response = `[Error] Habit '${habit}' not found. Type 'list' to see active codes.`;
      }
    } else if (trimmed === 'streak') {
      response = 'Streaks Log:\n  • Commit Code: 21 days (Longest)\n  • Morning Run: 14 days\n  • Read 20 mins: 5 days';
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputValue('');
      return;
    } else {
      response = `sh: command not found: ${trimmed}. Type 'help' for instructions.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmdText },
      { type: 'output', text: response }
    ]);
    setInputValue('');
  };

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Terminal Graphic */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="w-full bg-[#030303] border border-white/10 rounded-xl overflow-hidden font-mono text-xs text-neutral-400 flex flex-col shadow-2xl h-72 tech-corners">
            <div className="tech-corner-tl"></div>
            <div className="tech-corner-tr"></div>
            <div className="tech-corner-bl"></div>
            <div className="tech-corner-br"></div>
            
            {/* Terminal Top bar */}
            <div className="bg-[#0c0c0c] border-b border-white/5 px-4 py-3 flex items-center gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
              <span className="text-[10px] text-neutral-600 ml-4 font-semibold">habitforge-sh — zsh</span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-grow overflow-y-auto space-y-3 flex flex-col text-left">
              {history.map((item, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {item.type === 'input' ? (
                    <span className="text-white">
                      <span className="text-neutral-600">$ </span>
                      {item.text}
                    </span>
                  ) : (
                    <span className="text-neutral-500 font-semibold">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputValue);
              }}
              className="bg-[#070707] border-t border-white/5 p-3 flex items-center gap-2 shrink-0"
            >
              <span className="text-neutral-600 font-bold">$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-full text-xs font-mono placeholder-neutral-700 focus:ring-0 focus:border-none p-0"
                placeholder="Type 'help' or check a habit..."
              />
            </form>

          </div>
        </div>

        {/* Right Side: Copy & Quick Actions */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="font-mono text-[9px] font-bold text-on-surface-variant tracking-widest uppercase">
              Developer-First Speed
            </span>
          </div>
          
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            Log habits right <span className="text-primary underline decoration-white/20">from the CLI.</span>
          </h2>
          
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Are you tired of clicking around complex menus? HabitForge features a developer command palette. You can review and log your progress without ever taking your hands off the keyboard.
          </p>

          {/* Quick command triggers */}
          <div className="space-y-2 pt-2">
            <p className="text-[10px] font-mono font-bold uppercase text-neutral-500">Quick Commands to try:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { cmd: 'help', label: 'Show Help' },
                { cmd: 'check read', label: '✓ Read Book' },
                { cmd: 'check code', label: '✓ Commit Code' },
                { cmd: 'streak', label: 'Show Streaks' }
              ].map(item => (
                <button
                  key={item.cmd}
                  onClick={() => handleCommand(item.cmd)}
                  className="bg-neutral-900 border border-white/5 text-[11px] font-semibold font-mono text-on-surface hover:border-white/20 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
