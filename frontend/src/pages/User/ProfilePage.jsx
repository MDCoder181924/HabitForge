import React, { useEffect } from 'react';
import ProfileHero from '../../components/User/Profile/ProfileHero';
import DisciplineMatrix from '../../components/User/Profile/DisciplineMatrix';
import ExecutionHistory from '../../components/User/Profile/ExecutionHistory';
import {useUser} from '../../context/UserContext'
import {useHabit} from '../../context/HabitContext'

export default function ProfilePage() {
  const {user,loading : userLoading, refreshUser} = useUser();
  const {habits , loading : habitsLoading , getHabits} = useHabit();

  useEffect(()=>{
    getHabits();
    refreshUser();
  },[]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Header Section */}
      <ProfileHero user={user} userLoading={userLoading} habits={habits} habitLoading={habitsLoading} />

      {/* Discipline Matrix */}
      <DisciplineMatrix habits={habits} user={user} />

      {/* Recent Logs (System Table Style) */}
      <ExecutionHistory logs={user?.executionHistory || []} />
    </div>
  );
}
