import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/User/Dashboard/DashboardHeader';
import MetricsBento from '../../components/User/Dashboard/MetricsBento';
import ConsistencyHeatmap from '../../components/User/Dashboard/ConsistencyHeatmap';
import DailySequence from '../../components/User/Dashboard/DailySequence';
import { useHabit } from '../../context/HabitContext'
import api from '../../api/axios';
import toast from 'react-hot-toast'
import { useUser } from '../../context/UserContext'

export default function DashboardPage() {
  const { habits, setHabits, getHabits } = useHabit();
  const { user, refreshUser } = useUser();
  const [togglingId, setTogglingId] = useState(null);

  useEffect(() => {
    getHabits();
    refreshUser();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const activeHabits = habits.filter(h => (h.completedDays?.length || 0) < (h.habitGoalDuration || 21));
  const completedToday = activeHabits.filter((e) => e.habitCompletedToday == true).length;
  const todayHabits = activeHabits.length;

  const toggleHabit = async (id) => {
    const chanjHabit = habits.find((e) => e._id == id);
    setTogglingId(id);

    if (chanjHabit && chanjHabit.habitCompletedToday == true) {
      try {
        const res = await api.post('/habit/remove', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          await getHabits();
          await refreshUser();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      } finally {
        setTogglingId(null);
      }
    } else {
      try {
        const res = await api.post('/habit/complit', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          await getHabits();
          await refreshUser();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      } finally {
        setTogglingId(null);
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <DashboardHeader completedCount={completedToday} totalCount={todayHabits} user={user} />

      {/* Stats Bento Grid */}
      <MetricsBento habits={habits} completedCount={completedToday} totalCount={todayHabits} user={user}  />

      {/* 365-Day Consistency Heatmap */}
      <ConsistencyHeatmap habits={habits} user={user} />

      {/* Bottom Content Area: Habits List */}
      <div>
        <DailySequence habits={activeHabits} toggleHabit={toggleHabit} togglingId={togglingId} />
      </div>
    </div>
  );
}
