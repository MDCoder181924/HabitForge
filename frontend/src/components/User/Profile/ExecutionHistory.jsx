import React, { useState } from 'react';

export default function ExecutionHistory({ logs }) {
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleLogs = logs.slice(0, visibleCount);
  const hasMoreLogs = visibleCount < logs.length;

  return (
    <section className="glass-panel inner-glow rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Execution History
        </h3>
        <span className="text-xs text-on-surface-variant font-mono">
          {logs.length} Logs
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs border-collapse">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-lowest/50 text-on-surface-variant/70 uppercase">
              <th className="px-6 py-4 font-bold">Habit Name</th>
              <th className="px-6 py-4 font-bold">Habit Category</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Time</th>
              <th className="px-6 py-4 font-bold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-on-surface">
            {visibleLogs.map((log) => (
              <tr key={log._id || log.logId} className="hover:bg-surface-container-high transition-colors">
                <td className="px-6 py-4 text-primary font-semibold">{log.habitName}</td>
                <td className="px-6 py-4 text-on-surface">{log.habitCategory || "-"}</td>
                <td className="px-6 py-4 text-on-surface-variant/60">{log.actionDate}</td>
                <td className="px-6 py-4 text-on-surface-variant/60">{log.actionTime}</td>
                <td className="px-6 py-4 text-right font-bold">
                  <span className={log.action === 'COMPLETED' ? 'text-primary' : 'text-amber-500'}>
                    {log.action}
                  </span>
                </td>
              </tr>
            ))}
            {visibleLogs.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-on-surface-variant/60">
                  No execution history yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {hasMoreLogs && (
        <div className="px-6 py-4 border-t border-outline-variant/30 flex justify-end">
          <button
            onClick={() => setVisibleCount((count) => count + 5)}
            className="px-4 py-2 font-mono text-[10px] tracking-widest uppercase border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-outline-variant rounded-xl transition-all"
          >
            More View
          </button>
        </div>
      )}
    </section>
  );
}
