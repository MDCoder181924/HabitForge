import React, { useState } from 'react';
import CalendarHeader from '../../components/User/Calendar/CalendarHeader';
import MonthlyGrid from '../../components/User/Calendar/MonthlyGrid';
import CalendarSidebar from '../../components/User/Calendar/CalendarSidebar';

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState(4);
  const [viewMode, setViewMode] = useState('Grid');

  const days = [
    { day: 1, habits: ['Deep Work', 'Read Books'], completed: 2, total: 3 },
    { day: 2, habits: ['Gym Session', 'Meditation', 'Read Books'], completed: 3, total: 3 },
    { day: 3, habits: [], completed: 0, total: 2 },
    { day: 4, habits: ['Read Docs', 'Deep work', 'Hydrate 2.5L', '10k Steps'], completed: 4, total: 5, journal: '"Maintained focus throughout the sprint session. Energy levels dipped around 4pm but coffee helped. Reached reading goal before bed."' },
    { day: 5, habits: ['Deep Work'], completed: 1, total: 1 },
    { day: 6, habits: ['Read Books'], completed: 1, total: 2 },
    { day: 7, habits: ['Gym Session', 'Meditation'], completed: 2, total: 2 },
    { day: 8, habits: ['Meditation'], completed: 1, total: 3 },
    { day: 9, habits: ['Gym Session', 'Meditation', 'Read Books'], completed: 3, total: 3 },
    { day: 10, habits: ['Deep Work'], completed: 1, total: 2 },
    { day: 11, habits: ['Read Books', 'Hydrate'], completed: 2, total: 2 },
    { day: 12, habits: ['Gym Session'], completed: 0, total: 3 },
    { day: 13, habits: ['Meditation', 'Read Books'], completed: 2, total: 2 },
    { day: 14, habits: ['Gym Session', 'Meditation'], completed: 2, total: 2 },
    { day: 15, habits: ['Deep Work', 'Meditation'], completed: 2, total: 3 },
    { day: 16, habits: ['Gym Session', 'Read Books'], completed: 2, total: 2 },
    { day: 17, habits: ['Deep Work'], completed: 1, total: 1 },
    { day: 18, habits: ['Read Books'], completed: 1, total: 2 },
    { day: 19, habits: ['Gym Session', 'Meditation'], completed: 2, total: 2 },
    { day: 20, habits: ['Meditation'], completed: 1, total: 3 },
    { day: 21, habits: ['Gym Session', 'Meditation', 'Read Books'], completed: 3, total: 3 },
    { day: 22, habits: ['Deep Work'], completed: 1, total: 2 },
    { day: 23, habits: ['Read Books', 'Hydrate'], completed: 2, total: 2 },
    { day: 24, habits: ['Gym Session'], completed: 0, total: 3 },
    { day: 25, habits: ['Meditation', 'Read Books'], completed: 2, total: 2 },
    { day: 26, habits: ['Gym Session', 'Meditation'], completed: 2, total: 2 },
    { day: 27, habits: ['Deep Work', 'Meditation'], completed: 2, total: 3 },
    { day: 28, habits: ['Gym Session', 'Read Books'], completed: 2, total: 2 },
    { day: 29, habits: ['Deep Work'], completed: 1, total: 1 },
    { day: 30, habits: ['Read Books'], completed: 1, total: 2 }
  ];

  const currentDayData = days.find(d => d.day === selectedDay) || {
    day: selectedDay,
    habits: [],
    completed: 0,
    total: 3,
    journal: '"No journal entry created for this day."'
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 animate-fade-in">
      {/* Monthly Grid Section */}
      <section className="flex-grow space-y-6">
        <CalendarHeader viewMode={viewMode} setViewMode={setViewMode} />
        <MonthlyGrid 
          viewMode={viewMode} 
          days={days} 
          selectedDay={selectedDay} 
          setSelectedDay={setSelectedDay} 
        />
      </section>

      {/* Detailed Right Sidebar Panel */}
      <CalendarSidebar currentDayData={currentDayData} />
    </div>
  );
}
