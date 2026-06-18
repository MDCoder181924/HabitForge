import React from 'react';

export default function AnalyticsBento() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {/* KPI 1 */}
      <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Total Checkins</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="done_all">done_all</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">1,482</h3>
        <p className="text-xs text-primary font-bold">+12% vs last month</p>
      </div>

      {/* KPI 2 */}
      <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Completion Rate</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="percent">percent</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">94.2%</h3>
        <p className="text-xs text-primary font-bold">+2.4% vs last week</p>
      </div>

      {/* KPI 3 */}
      <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Longest Streak</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="local_fire_department">local_fire_department</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">
          45 <span className="text-base font-normal text-on-surface-variant">days</span>
        </h3>
        <p className="text-xs text-on-surface-variant/50">Active: 12 days</p>
      </div>

      {/* KPI 4 */}
      <div className="glass-panel inner-glow rounded-xl p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Consistency Score</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="bolt">bolt</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">A+</h3>
        <p className="text-xs text-primary font-bold">Top 2% platform-wide</p>
      </div>
    </section>
  );
}
