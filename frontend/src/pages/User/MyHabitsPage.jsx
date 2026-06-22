import React, { useState, useEffect } from 'react';
import MyHabitsHeader from '../../components/User/MyHabits/MyHabitsHeader';
import HabitsTable from '../../components/User/MyHabits/HabitsTable';
import Milestones from '../../components/User/MyHabits/Milestones';
import StayDisciplinedCard from '../../components/User/MyHabits/StayDisciplinedCard';
import { useHabit } from '../../context/HabitContext'
import api from '../../api/axios'
import toast from 'react-hot-toast';
import {useUser} from '../../context/UserContext'

export default function MyHabitsPage() {

  const { habits, loading, getHabits } = useHabit();
  const { refreshUser } = useUser();

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    getHabits();
    refreshUser();
  }, []);

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
          refreshUser();
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
          refreshUser();
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


  const filteredHabits = habits.filter(h => {
    if (filter === 'Active') return true;
    if (filter === 'Archived') return false;
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
        <div className="md:col-span-1">
          <Milestones  habits={filteredHabits}/>
        </div>
        <div className="md:col-span-2">
          <StayDisciplinedCard />
        </div>
      </div>
    </div>
  );
}
