import React, { useMemo, useState, useRef, useEffect } from 'react';

export default function DisciplineMatrix({ habits = [], user = null }) {
  const thisYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(thisYear);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate year options from user join year to current year
  const yearOptions = useMemo(() => {
    const joinYear = user?.createdAt ? new Date(user.createdAt).getFullYear() : thisYear;
    const years = [];
    for (let y = thisYear; y >= joinYear; y--) {
      years.push(y);
    }
    return years;
  }, [user, thisYear]);

  const intensityClasses = [
    'bg-surface-container-highest',
    'bg-primary/30',
    'bg-primary/50',
    'bg-primary/70',
    'bg-primary'
  ];

  // Build a map: { "2026-01-15": 3, ... }
  const { heatmapData, totalCompletions } = useMemo(() => {
    const countMap = {};
    let total = 0;

    habits.forEach(habit => {
      (habit.completedDays || []).forEach(dateStr => {
        if (dateStr.startsWith(String(selectedYear))) {
          countMap[dateStr] = (countMap[dateStr] || 0) + 1;
          total++;
        }
      });
    });

    return { heatmapData: countMap, totalCompletions: total };
  }, [habits, selectedYear]);

  // Generate all days of selected year
  const days = useMemo(() => {
    const jan1 = new Date(selectedYear, 0, 1);
    const dec31 = new Date(selectedYear, 11, 31);

    const startDate = new Date(jan1);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const allDays = [];
    let currentDate = new Date(startDate);

    while (currentDate <= dec31 || currentDate.getDay() !== 0) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const isSelectedYear = currentDate.getFullYear() === selectedYear;
      const count = isSelectedYear ? (heatmapData[dateStr] || 0) : -1;

      allDays.push({ date: dateStr, count, isCurrentYear: isSelectedYear });
      currentDate.setDate(currentDate.getDate() + 1);

      if (currentDate > dec31 && currentDate.getDay() === 0) break;
    }

    return allDays;
  }, [selectedYear, heatmapData]);

  // Get intensity index (0-4)
  const getIntensity = (count) => {
    if (count <= 0) return 0;
    if (count === 1) return 1;
    if (count === 2) return 2;
    if (count === 3) return 3;
    return 4;
  };

  // Format date for tooltip
  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col h-full justify-between">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
            Discipline Matrix
          </h3>
          <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-0.5">
            {totalCompletions} completions in {selectedYear}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {/* Year Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface text-[11px] font-semibold tracking-wide hover:bg-surface-container-high transition-all duration-200"
            >
              {selectedYear === thisYear ? 'Current' : selectedYear}
              <svg className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-1.5 min-w-[120px] py-1.5 rounded-lg bg-surface-container-highest border border-outline-variant/20 shadow-xl z-50 animate-fade-in">
                {yearOptions.map(year => (
                  <button
                    key={year}
                    onClick={() => { setSelectedYear(year); setDropdownOpen(false); }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-[11px] font-medium tracking-wide transition-colors duration-150 ${
                      selectedYear === year
                        ? 'text-primary'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                    }`}
                  >
                    {year === thisYear ? 'Current' : year}
                    {selectedYear === year && (
                      <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 text-[9px] text-on-surface-variant/50 uppercase tracking-wider">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-surface-container-highest" />
            <div className="w-3 h-3 rounded-sm bg-primary/30" />
            <div className="w-3 h-3 rounded-sm bg-primary/70" />
            <div className="w-3 h-3 rounded-sm bg-primary" />
            <span>More</span>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[760px] grid grid-flow-col grid-rows-7 gap-1">
          {days.map((day, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-sm border border-outline-variant/20 hover:scale-125 cursor-pointer transition-all ${
                day.isCurrentYear
                  ? intensityClasses[getIntensity(day.count)]
                  : 'bg-transparent border-transparent'
              }`}
              title={
                day.isCurrentYear
                  ? `${formatDate(day.date)}: ${day.count} habit${day.count !== 1 ? 's' : ''} completed`
                  : ''
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
