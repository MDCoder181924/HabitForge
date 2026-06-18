import React from 'react';

export default function ExecutionHistory({ logs }) {
  return (
    <section className="glass-panel inner-glow rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
          Execution History
        </h3>
        <span className="text-xs text-on-surface-variant font-mono">
          1,482 Logs
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs border-collapse">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-lowest/50 text-on-surface-variant/70 uppercase">
              <th className="px-6 py-4 font-bold">Log ID</th>
              <th className="px-6 py-4 font-bold">Timestamp</th>
              <th className="px-6 py-4 font-bold">Action</th>
              <th className="px-6 py-4 font-bold">Response Time</th>
              <th className="px-6 py-4 font-bold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30 text-on-surface">
            {logs.map((log, idx) => (
              <tr key={idx} className="hover:bg-surface-container-high transition-colors">
                <td className="px-6 py-4 text-primary font-semibold">{log.id}</td>
                <td className="px-6 py-4 text-on-surface-variant/60">{log.timestamp}</td>
                <td className="px-6 py-4 text-on-surface">{log.action}</td>
                <td className="px-6 py-4 text-on-surface-variant/60">{log.latency}</td>
                <td className="px-6 py-4 text-right font-bold">
                  <span className={log.status === 'COMPLETED' ? 'text-primary' : 'text-on-surface-variant/40'}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
