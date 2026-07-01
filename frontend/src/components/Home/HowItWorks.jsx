import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "ads_click",
      title: "Set Daily Routines",
      desc: "Define habits that actually matter to your craft. Keep descriptions brief, set your weekly targets, and let our clean interface structure your day."
    },
    {
      num: "02",
      icon: "dashboard_customize",
      title: "Check Off Instantly",
      desc: "No loading screens or heavy dashboards. Open HabitForge, tap your completed tasks in under 100 milliseconds, and get back to your work."
    },
    {
      num: "03",
      icon: "analytics",
      title: "Review Consistency",
      desc: "Inspect your visual history grid. Track your streak numbers and records without the stress of artificial scores or pushy notifications."
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="how-it-works">
      <div className="text-center mb-16 space-y-3">
        <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
          The Methodology
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-on-surface font-display tracking-tight">
          How HabitForge Works
        </h2>
        <p className="text-sm text-on-surface-variant font-mono max-w-lg mx-auto">
          Built for focus, designed for developers. No fluff, just absolute discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 rounded-2xl border border-outline-variant/20 relative group hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            {/* Background Step Number */}
            <span className="absolute -right-4 -top-6 text-8xl font-black font-mono text-on-surface/[0.03] group-hover:text-primary/[0.05] transition-colors duration-500 select-none">
              {step.num}
            </span>

            <div className="space-y-6 z-10">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 shadow-sm">
                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-on-surface font-display group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-sans font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
            
            {/* Bottom highlight bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
