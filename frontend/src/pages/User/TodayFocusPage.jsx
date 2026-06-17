import React, { useState } from 'react';
import TodayHeader from '../../components/User/TodayFocus/TodayHeader';
import MomentumCircle from '../../components/User/TodayFocus/MomentumCircle';
import InsightCard from '../../components/User/TodayFocus/InsightCard';
import TodayHabitList from '../../components/User/TodayFocus/TodayHabitList';
import FooterVisuals from '../../components/User/TodayFocus/FooterVisuals';

export default function TodayFocusPage() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Deep Work Session', category: 'Focus', categoryStyle: 'bg-white/5 text-white/60', details: 'Completed at 9:15 AM', completed: true },
    { id: 2, name: '15-min Meditation', category: 'Wellness', categoryStyle: 'bg-emerald-500/10 text-emerald-400', details: 'Next reminder in 2 hours', completed: false },
    { id: 3, name: 'Hydration Goal', category: 'Health', categoryStyle: 'bg-[#4be277]/10 text-[#4be277]', details: 'Target: 2.5 Liters', completed: false, hasProgress: true, progressPct: 45 },
    { id: 4, name: 'Read 20 Pages', category: 'Growth', categoryStyle: 'bg-blue-500/10 text-blue-400', details: 'Completed at 7:30 AM', completed: true },
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header Section */}
      <TodayHeader completedCount={completedCount} totalCount={totalCount} />

      {/* Progress Hero Area (Bento Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <MomentumCircle completedCount={completedCount} totalCount={totalCount} percentage={percentage} />
        </div>
        <div className="md:col-span-4">
          <InsightCard />
        </div>
      </div>

      {/* Interactive Habit List */}
      <TodayHabitList habits={habits} toggleHabit={toggleHabit} />

      {/* Footer Visual Section */}
      <FooterVisuals />
    </div>
  );
}
