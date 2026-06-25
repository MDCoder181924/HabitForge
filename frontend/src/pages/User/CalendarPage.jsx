import React, { useState, useEffect, useMemo } from 'react';
import CalendarHeader from '../../components/User/Calendar/CalendarHeader';
import MonthlyGrid from '../../components/User/Calendar/MonthlyGrid';
import CalendarSidebar from '../../components/User/Calendar/CalendarSidebar';
import { useHabit } from '../../context/HabitContext';
import { useUser } from '../../context/UserContext';

export default function CalendarPage() {
  const { habits, getHabits } = useHabit();
  const { user } = useUser();

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-11
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]); // "2026-06-25"
  const [viewMode, setViewMode] = useState('Grid');

  useEffect(() => {
    getHabits();
  }, []);

  // Navigate months
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Build days data for the current month from real habits
  const days = useMemo(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const result = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

      // Find which habits were active on this date and which were completed
      const activeHabits = habits.filter(h => {
        const createdDate = new Date(h.createdAt).toISOString().split('T')[0];
        return createdDate <= dateStr;
      });

      const completedHabits = activeHabits.filter(h =>
        (h.completedDays || []).includes(dateStr)
      );

      result.push({
        day,
        dateStr,
        habits: completedHabits.map(h => h.habitName),
        allHabitNames: activeHabits.map(h => h.habitName),
        completed: completedHabits.length,
        total: activeHabits.length,
      });
    }

    return result;
  }, [habits, currentMonth, currentYear]);

  // Consistency score for this month
  const consistencyScore = useMemo(() => {
    const totalPossible = days.reduce((sum, d) => sum + d.total, 0);
    const totalCompleted = days.reduce((sum, d) => sum + d.completed, 0);
    return totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
  }, [days]);

  // Get selected day data
  const currentDayData = useMemo(() => {
    const found = days.find(d => d.dateStr === selectedDate);
    if (found) return found;

    // Default when selected date is not in current month
    return {
      day: new Date(selectedDate).getDate(),
      dateStr: selectedDate,
      habits: [],
      allHabitNames: [],
      completed: 0,
      total: 0,
    };
  }, [days, selectedDate]);

  // Month/Year label
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const monthLabel = `${monthNames[currentMonth]} ${currentYear}`;

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 animate-fade-in">
      {/* Monthly Grid Section */}
      <section className="flex-grow space-y-6">
        <CalendarHeader
          monthLabel={monthLabel}
          consistencyScore={consistencyScore}
          goToPrevMonth={goToPrevMonth}
          goToNextMonth={goToNextMonth}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <MonthlyGrid
          viewMode={viewMode}
          days={days}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentMonth={currentMonth}
          currentYear={currentYear}
        />
      </section>

      {/* Detailed Right Sidebar Panel */}
      <CalendarSidebar
        currentDayData={currentDayData}
        user={user}
      />
    </div>
  );
}
