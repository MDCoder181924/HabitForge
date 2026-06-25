import React, { useState , useEffect } from 'react';
import ProfileHero from '../../components/User/Profile/ProfileHero';
import DisciplineMatrix from '../../components/User/Profile/DisciplineMatrix';
import SecurityAudit from '../../components/User/Profile/SecurityAudit';
import ExecutionHistory from '../../components/User/Profile/ExecutionHistory';
import {useUser} from '../../context/UserContext'
import {useHabit} from '../../context/HabitContext'

export default function ProfilePage() {
  const {user,loading : userLoading} = useUser();
  const {habits , loading : habitsLoading , getHabits} = useHabit();
  const [sessionsCount, setSessionsCount] = useState(2);
  const [logs, setLogs] = useState([
    { id: '#H772-HYDR', timestamp: '2023-10-24 08:12:04', action: 'Daily Hydration Protocol', latency: '0.4s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H910-DEEP', timestamp: '2023-10-24 09:00:00', action: 'Deep Work / Block A', latency: '1.2s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H104-EXER', timestamp: '2023-10-23 18:30:11', action: 'Physical Stress Test', latency: '0.8s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H002-MEDI', timestamp: '2023-10-23 21:45:00', action: 'Neural Deficit Check', latency: '2.5s', status: 'SKIPPED', statusStyle: 'text-white/40' },
  ]);



  const rotateKeys = () => {
    alert('Security keys rotated successfully. Authenticator cache cleared.');
  };

  useEffect(()=>{
    getHabits();
  },[]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Header Section */}
      <ProfileHero user={user} userLoading={userLoading} habits={habits} habitLoading={habitsLoading} />

      {/* Discipline Matrix and Security Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <DisciplineMatrix habits={habits} user={user} />
        </div>
        <div>
          <SecurityAudit sessionsCount={sessionsCount} rotateKeys={rotateKeys} />
        </div>
      </div>

      {/* Recent Logs (System Table Style) */}
      <ExecutionHistory logs={logs} />
    </div>
  );
}
