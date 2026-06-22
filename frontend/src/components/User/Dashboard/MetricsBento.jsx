import React from 'react';

export default function MetricsBento({ habits , completedCount , totalCount , user }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stat Card 1 */}
      <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-on-surface-variant text-label-caps font-label-caps uppercase tracking-wider text-[11px]">Total Habits</span>
          <span className="material-symbols-outlined text-primary">list_alt</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-on-surface">{habits.length}</span>
          <span className="text-primary text-sm ml-2 font-bold">+2 this month</span>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className={`glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between border-b-2 transition-all duration-300 ${completedCount > 0 ? 'border-b-primary/50' : 'border-b-transparent'}`}>
        <div className="flex justify-between items-start">
          <span className="text-on-surface-variant text-label-caps font-label-caps uppercase tracking-wider text-[11px]">Completed Today</span>
          <span className="material-symbols-outlined text-primary">task_alt</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-on-surface">{completedCount}</span>
          <span className="text-on-surface-variant text-sm ml-2">of {totalCount} total</span>
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-on-surface-variant text-label-caps font-label-caps uppercase tracking-wider text-[11px]">Current Streak</span>
          <span className="material-symbols-outlined text-tertiary">local_fire_department</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-on-surface">{user?.activeStreak}</span>
          <span className="text-on-surface-variant text-sm ml-2">Days</span>
        </div>
      </div>

      {/* Stat Card 4 */}
      <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-on-surface-variant text-label-caps font-label-caps uppercase tracking-wider text-[11px]">Longest Streak</span>
          <span className="material-symbols-outlined text-secondary">emoji_events</span>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-black text-on-surface">{user?.longestStreak}</span>
          <span className="text-on-surface-variant text-sm ml-2">Days</span>
        </div>
      </div>
    </div>
  );
}
