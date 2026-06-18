import React, { useState } from 'react';
import MyHabitsHeader from '../../components/User/MyHabits/MyHabitsHeader';
import HabitsTable from '../../components/User/MyHabits/HabitsTable';
import Milestones from '../../components/User/MyHabits/Milestones';
import StayDisciplinedCard from '../../components/User/MyHabits/StayDisciplinedCard';

export default function MyHabitsPage() {
  const [filter, setFilter] = useState('All');
  const [habits, setHabits] = useState([
    { 
      id: 1, 
      name: 'Deep Work Session', 
      desc: '4 hours daily concentration', 
      freq: 'Daily', 
      streak: 7, 
      active: true, 
      color: '#4be277', 
      category: 'Health',
      totalGoalDays: 21,
      completedDays: 9,
      missedDays: 2,
      todayCompleted: false,
      history: [
        'completed', 'completed', 'completed', 'completed', 'completed', 
        'missed', 'completed', 'completed', 'completed', 'completed', 
        'missed', 'pending', 'pending', 'pending', 'pending', 
        'pending', 'pending', 'pending', 'pending', 'pending', 'pending'
      ]
    },
    { 
      id: 2, 
      name: 'Weekly Retrospective', 
      desc: 'Review goals and progress', 
      freq: 'Weekly', 
      streak: 4, 
      active: true, 
      color: '#f87171', 
      category: 'Learning',
      totalGoalDays: 15,
      completedDays: 6,
      missedDays: 1,
      todayCompleted: true,
      history: [
        'completed', 'completed', 'missed', 'completed', 'completed', 
        'completed', 'completed', 'pending', 'pending', 'pending', 
        'pending', 'pending', 'pending', 'pending', 'pending'
      ]
    },
    { 
      id: 3, 
      name: '30-min Cardio', 
      desc: 'Running or cycling session', 
      freq: 'Daily', 
      streak: 15, 
      active: true, 
      color: '#a3a3a3', 
      category: 'Fitness',
      totalGoalDays: 30,
      completedDays: 18,
      missedDays: 3,
      todayCompleted: false,
      history: [
        'completed', 'completed', 'completed', 'completed', 'completed', 
        'missed', 'completed', 'completed', 'completed', 'completed', 
        'completed', 'completed', 'missed', 'completed', 'completed', 
        'completed', 'completed', 'completed', 'missed', 'completed', 
        'completed', 'pending', 'pending', 'pending', 'pending', 
        'pending', 'pending', 'pending', 'pending', 'pending'
      ]
    }
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, active: !h.active } : h));
  };

  const toggleTodayCompleted = (habitId) => {
    setHabits(habits.map(h => {
      if (h.id === habitId) {
        const nextCompleted = !h.todayCompleted;
        // Today's index in history is: completedDays + missedDays - (if completed, we shift back by 1 to target the same day)
        const todayIndex = h.completedDays + h.missedDays - (h.todayCompleted ? 1 : 0);
        
        const nextHistory = [...h.history];
        nextHistory[todayIndex] = nextCompleted ? 'completed' : 'pending';

        return {
          ...h,
          todayCompleted: nextCompleted,
          completedDays: nextCompleted ? h.completedDays + 1 : h.completedDays - 1,
          streak: nextCompleted ? h.streak + 1 : Math.max(0, h.streak - 1),
          history: nextHistory
        };
      }
      return h;
    }));
  };

  const filteredHabits = habits.filter(h => {
    if (filter === 'Active') return h.active;
    if (filter === 'Archived') return !h.active;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Title & Actions */}
      <MyHabitsHeader filter={filter} setFilter={setFilter} />

      {/* Habit List Table */}
      <HabitsTable habits={filteredHabits} toggleHabit={toggleHabit} toggleTodayCompleted={toggleTodayCompleted} />

      {/* Bento-style Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Milestones />
        </div>
        <div className="md:col-span-2">
          <StayDisciplinedCard />
        </div>
      </div>
    </div>
  );
}
