import React from 'react';
import { useUser } from '../../../context/UserContext';

export default function Milestones({habits}) {
  const {user} = useUser();

  const todayHabits = habits.length;
  const todayCompletedCount = habits.filter((e) => e.habitCompletedToday === true).length;

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between relative h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-lg" data-icon="star">star</span>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
            Milestones
          </h3>
        </div>
        
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
            <span className="text-on-surface-variant/70">Completed Today</span>
            <span className="font-bold text-primary">{todayCompletedCount} / {todayHabits}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
            <span className="text-on-surface-variant/70">Perfect Days</span>
            <span className="font-bold text-primary">{user?.perfectDays || 0}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
            <span className="text-on-surface-variant/70">Active Streak</span>
            <span className="font-bold text-primary">{user?.activeStreak || 0} Days</span>
          </div>
        </div>
      </div>
      
      <button className="mt-6 w-full py-2 border border-outline-variant rounded-xl text-[10px] font-mono tracking-widest uppercase text-on-surface hover:bg-surface-container transition-all cursor-pointer">
        VIEW_ALL_BADGES
      </button>
    </div>
  );
}
