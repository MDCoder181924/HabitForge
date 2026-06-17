import React, { useState } from 'react';
import DashboardHeader from '../../components/User/Dashboard/DashboardHeader';
import MetricsBento from '../../components/User/Dashboard/MetricsBento';
import ConsistencyHeatmap from '../../components/User/Dashboard/ConsistencyHeatmap';
import DailySequence from '../../components/User/Dashboard/DailySequence';
import SidebarInsights from '../../components/User/Dashboard/SidebarInsights';

export default function DashboardPage() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Deep Work Session', completed: true, time: '08:00 AM', progress: 100 },
    { id: 2, name: 'Morning Run (5km)', completed: false, time: '06:30 AM', progress: 20 },
    { id: 3, name: 'Read 20 Pages', completed: true, time: '09:30 PM', progress: 100 },
    { id: 4, name: 'Hydration Target', completed: false, time: 'Ongoing', progress: 65 },
    { id: 5, name: 'Healthy Breakfast', completed: true, time: '07:30 AM', progress: 100 },
    { id: 6, name: 'Meditate', completed: true, time: '07:00 AM', progress: 100 }
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const nextCompleted = !habit.completed;
          return {
            ...habit,
            completed: nextCompleted,
            progress: nextCompleted ? 100 : 0
          };
        }
        return habit;
      })
    );
  };

  const completedCount = habits.filter((h) => h.completed).length;
  const totalCount = habits.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <DashboardHeader completedCount={completedCount} totalCount={totalCount} />

      {/* Stats Bento Grid */}
      <MetricsBento />

      {/* 365-Day Consistency Heatmap */}
      <ConsistencyHeatmap />

      {/* Bottom Content Area: Habits List & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8">
          <DailySequence habits={habits} toggleHabit={toggleHabit} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <SidebarInsights />
        </div>
      </div>
    </div>
  );
}
