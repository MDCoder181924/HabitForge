import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      value: "94%",
      label: "Streak Completion Rate",
      desc: "Developers using streak-based grids are 3x more likely to sustain daily habits past 30 days."
    },
    {
      value: "<100ms",
      label: "Response Latency",
      desc: "Optimized client-first rendering, local caching, and lightweight assets ensure keyboard-only speed."
    },
    {
      value: "Zero",
      label: "Nagging Notifications",
      desc: "No emails, no push notifications, no spam. Build discipline through personal motivation, not bots."
    }
  ];

  return (
    <section className="py-20 border-t border-outline-variant/20 max-w-7xl mx-auto px-8 w-full" id="stats">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center p-6 md:p-8 first:pt-0 md:first:pt-8 last:pb-0 md:last:pb-8 group">
            {/* Stat Value */}
            <span className="text-5xl sm:text-6xl font-black text-primary font-mono tracking-tight group-hover:scale-105 transition-transform duration-300 select-none block">
              {stat.value}
            </span>
            
            {/* Label */}
            <h3 className="text-base font-bold text-on-surface font-display mt-4 mb-2">
              {stat.label}
            </h3>
            
            {/* Description */}
            <p className="text-xs text-on-surface-variant font-sans font-medium max-w-xs leading-relaxed">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
