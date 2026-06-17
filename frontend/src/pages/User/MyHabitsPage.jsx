import React, { useState } from 'react';
import MyHabitsHeader from '../../components/User/MyHabits/MyHabitsHeader';
import HabitsTable from '../../components/User/MyHabits/HabitsTable';
import StrengthIndex from '../../components/User/MyHabits/StrengthIndex';
import Milestones from '../../components/User/MyHabits/Milestones';
import StayDisciplinedCard from '../../components/User/MyHabits/StayDisciplinedCard';

export default function MyHabitsPage() {
  const [filter, setFilter] = useState('All');
  const [habits, setHabits] = useState([
    { id: 1, name: 'Deep Work Session', desc: '4 hours daily concentration', freq: 'Daily', streak: 12, active: true, color: '#4be277' },
    { id: 2, name: 'Weekly Retrospective', desc: 'Review goals and progress', freq: 'Weekly', streak: 4, active: true, color: '#f87171' },
    { id: 3, name: '30-min Cardio', desc: 'Running or cycling session', freq: 'Daily', streak: 45, active: false, color: '#a3a3a3' }
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, active: !h.active } : h));
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
      <HabitsTable habits={filteredHabits} toggleHabit={toggleHabit} />

      {/* Bento-style Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <StrengthIndex />
        </div>
        <div>
          <Milestones />
        </div>
      </div>

      {/* Atmospheric Visual Element */}
      <StayDisciplinedCard />
    </div>
  );
}
