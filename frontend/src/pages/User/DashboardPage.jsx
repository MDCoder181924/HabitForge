import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/User/Dashboard/DashboardHeader';
import MetricsBento from '../../components/User/Dashboard/MetricsBento';
import ConsistencyHeatmap from '../../components/User/Dashboard/ConsistencyHeatmap';
import DailySequence from '../../components/User/Dashboard/DailySequence';
import SidebarInsights from '../../components/User/Dashboard/SidebarInsights';
import { useHabit } from '../../context/HabitContext'
import api from '../../api/axios';
import toast from 'react-hot-toast'

export default function DashboardPage() {
  const { habits, setHabits, getHabits } = useHabit();

  useEffect(() => {
    getHabits();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const completedToday = habits.filter((e) => e.habitCompletedToday == true).length;
  const todayHabits = habits.filter((e) => e.habitEndDate >= today).length;

  const toggleHabit = async (id) => {
    const chanjHabit = habits.find((e) => e._id == id);

    if (chanjHabit && chanjHabit.habitCompletedToday == true) {
      try {
        const res = await api.post('/habit/remove', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          getHabits();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      }
    } else {
      try {
        const res = await api.post('/habit/complit', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          getHabits();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <DashboardHeader completedCount={completedToday} totalCount={todayHabits} />

      {/* Stats Bento Grid */}
      <MetricsBento habits={habits} completedCount={completedToday} totalCount={todayHabits} />

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
