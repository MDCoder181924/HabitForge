import React, { useState } from 'react';
import ProfileHero from '../../components/User/Profile/ProfileHero';
import DisciplineMatrix from '../../components/User/Profile/DisciplineMatrix';
import SecurityAudit from '../../components/User/Profile/SecurityAudit';
import ExecutionHistory from '../../components/User/Profile/ExecutionHistory';

export default function ProfilePage() {
  const [sessionsCount, setSessionsCount] = useState(2);
  const [logs, setLogs] = useState([
    { id: '#H772-HYDR', timestamp: '2023-10-24 08:12:04', action: 'Daily Hydration Protocol', latency: '0.4s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H910-DEEP', timestamp: '2023-10-24 09:00:00', action: 'Deep Work / Block A', latency: '1.2s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H104-EXER', timestamp: '2023-10-23 18:30:11', action: 'Physical Stress Test', latency: '0.8s', status: 'COMPLETED', statusStyle: 'text-[#4be277]' },
    { id: '#H002-MEDI', timestamp: '2023-10-23 21:45:00', action: 'Neural Deficit Check', latency: '2.5s', status: 'SKIPPED', statusStyle: 'text-white/40' },
  ]);

  const [matrixIntensities] = useState(() => 
    Array.from({ length: 364 }, () => Math.random())
  );

  const rotateKeys = () => {
    alert('Security keys rotated successfully. Authenticator cache cleared.');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Header Section */}
      <ProfileHero />

      {/* Discipline Matrix and Security Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <DisciplineMatrix matrixIntensities={matrixIntensities} />
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
