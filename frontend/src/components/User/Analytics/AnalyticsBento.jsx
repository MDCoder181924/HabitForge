import React, { useMemo } from 'react';

export default function AnalyticsBento({ habits = [], timeframe = '7 Days', user = null }) {
  const stats = useMemo(() => {
    // 1. Total Checkins (Lifetime)
    const totalCheckins = habits.reduce((sum, h) => sum + (h.completedDays?.length || 0), 0);

    // 2. Completion Rate over selected timeframe
    let daysCount = 7;
    if (timeframe === '30 Days') daysCount = 30;
    else if (timeframe === '90 Days') daysCount = 90;
    else if (timeframe === '1 Year') daysCount = 365;

    let completionsInTimeframe = 0;
    let totalPossibleInTimeframe = 0;

    const today = new Date();
    for (let i = 0; i < daysCount; i++) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const date = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${date}`;

      // Habits active on this specific date
      const activeOnDate = habits.filter(h => {
        const createdDate = new Date(h.createdAt).toISOString().split('T')[0];
        return createdDate <= dateStr;
      });

      const completedOnDate = activeOnDate.filter(h =>
        (h.completedDays || []).includes(dateStr)
      );

      completionsInTimeframe += completedOnDate.length;
      totalPossibleInTimeframe += activeOnDate.length;
    }

    const completionRate = totalPossibleInTimeframe > 0
      ? Math.round((completionsInTimeframe / totalPossibleInTimeframe) * 1000) / 10
      : 0;

    // 3. Consistency Grade based on completion rate
    let grade = 'D';
    let gradeDesc = 'Developing habit';
    if (completionRate >= 90) { grade = 'A+'; gradeDesc = 'Top tier efficiency'; }
    else if (completionRate >= 80) { grade = 'A'; gradeDesc = 'Highly consistent'; }
    else if (completionRate >= 70) { grade = 'B+'; gradeDesc = 'Good progress'; }
    else if (completionRate >= 60) { grade = 'B'; gradeDesc = 'Moderate sync'; }
    else if (completionRate >= 50) { grade = 'C'; gradeDesc = 'Getting started'; }

    return {
      totalCheckins,
      completionRate,
      longestStreak: user?.longestStreak || 0,
      activeStreak: user?.activeStreak || 0,
      grade,
      gradeDesc
    };
  }, [habits, timeframe, user]);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
      {/* KPI 1: Total Checkins */}
      <div className="glass-panel inner-glow rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Total Checkins</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="done_all">done_all</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">
          {stats.totalCheckins.toLocaleString()}
        </h3>
        <p className="text-xs text-on-surface-variant/50 font-medium">Lifetime completions</p>
      </div>

      {/* KPI 2: Completion Rate */}
      <div className="glass-panel inner-glow rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Completion Rate</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="percent">percent</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">
          {stats.completionRate}%
        </h3>
        <p className="text-xs text-primary font-bold">For last {timeframe}</p>
      </div>

      {/* KPI 3: Longest Streak */}
      <div className="glass-panel inner-glow rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Longest Streak</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="local_fire_department">local_fire_department</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">
          {stats.longestStreak} <span className="text-base font-normal text-on-surface-variant">days</span>
        </h3>
        <p className="text-xs text-on-surface-variant/70 font-medium">Active: {stats.activeStreak} days</p>
      </div>

      {/* KPI 4: Consistency Score */}
      <div className="glass-panel inner-glow rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[140px]">
        <div className="flex justify-between items-center text-on-surface-variant/70">
          <span className="text-[10px] uppercase tracking-wider font-bold">Consistency Score</span>
          <span className="material-symbols-outlined text-[20px]" data-icon="bolt">bolt</span>
        </div>
        <h3 className="text-4xl font-extrabold text-on-surface font-display my-2">{stats.grade}</h3>
        <p className="text-xs text-primary font-bold">{stats.gradeDesc}</p>
      </div>
    </section>
  );
}
