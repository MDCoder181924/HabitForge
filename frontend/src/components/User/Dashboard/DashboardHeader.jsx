import React from 'react';

export default function DashboardHeader({ completedCount , totalCount  , user}) {
  
  const isPerfectDay = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-headline-lg font-headline-lg text-on-surface">Welcome back, {user?.userName || 'Member'}.</h2>
        <p className="text-on-surface-variant mt-1">You're on track to hit your weekly goal. completed {completedCount} of {totalCount} today.</p>
      </div>
      <div className="flex gap-2">
        {isPerfectDay ? (
        <span className="bg-primary/10 text-primary text-label-caps font-label-caps px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          PERFECT DAY 🌟
        </span>
        ) : (
          <span className="bg-primary/10 text-primary text-label-caps font-label-caps px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
             STREAK ACTIVE
          </span>
        )}
      </div>
    </div>
  );
}
