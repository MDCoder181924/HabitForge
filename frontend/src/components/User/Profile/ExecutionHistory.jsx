import React from 'react';

export default function ExecutionHistory({ logs }) {
  return (
    <section className="glass-card glass-card-stroke rounded-2xl overflow-hidden relative tech-corners">
      <div className="tech-corner-tl"></div>
      <div className="tech-corner-tr"></div>
      <div className="tech-corner-bl"></div>
      <div className="tech-corner-br"></div>

      <div className="px-6 py-4 border-b border-white/5 bg-white/[0.01] flex justify-between items-center font-mono">
        <h3 className="text-[10px] font-bold text-white tracking-widest uppercase">
          HABIT_EXECUTION_HISTORY
        </h3>
        <span className="text-[9px] text-white/30 tracking-widest uppercase">
          TOTAL_RECORDS: 1,492
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-xs border-collapse">
          <thead>
            <tr className="text-white/40 border-b border-white/5 text-left bg-white/[0.005]">
              <th className="px-6 py-3 font-bold uppercase tracking-widest text-[9px]">HAB-ID</th>
              <th className="px-6 py-3 font-bold uppercase tracking-widest text-[9px]">TIMESTAMP</th>
              <th className="px-6 py-3 font-bold uppercase tracking-widest text-[9px]">ACTION</th>
              <th className="px-6 py-3 font-bold uppercase tracking-widest text-[9px]">LATENCY</th>
              <th className="px-6 py-3 font-bold uppercase tracking-widest text-[9px] text-right">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {logs.map((log, idx) => (
              <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-3.5 text-[#4be277]">{log.id}</td>
                <td className="px-6 py-3.5 text-white/40">{log.timestamp}</td>
                <td className="px-6 py-3.5 text-white">{log.action}</td>
                <td className="px-6 py-3.5 text-white/40">{log.latency}</td>
                <td className="px-6 py-3.5 text-right font-bold">
                  <span className={log.statusStyle}>{log.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
