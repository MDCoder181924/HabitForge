import React, { useMemo, useState, useRef, useEffect } from 'react';

export default function ConsistencyHeatmap({ habits = [], user = null }) {
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

  // Build a map: { "2026-01-15": 3, "2026-01-16": 1, ... }
  const heatmapData = useMemo(() => {
    const countMap = {};

    habits.forEach(habit => {
      (habit.completedDays || []).forEach(dateStr => {
        if (dateStr.startsWith(String(selectedYear))) {
          countMap[dateStr] = (countMap[dateStr] || 0) + 1;
        }
      });
    });

    return countMap;
  }, [habits, selectedYear]);

  // Generate all days of selected year, organized by weeks (columns)
  const { weeks, monthLabels, totalCompletions } = useMemo(() => {
    const jan1 = new Date(selectedYear, 0, 1);
    const dec31 = new Date(selectedYear, 11, 31);

    // Start from the Sunday of the week containing Jan 1
    const startDate = new Date(jan1);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const weeksArr = [];
    const monthLabelsArr = [];
    let total = 0;
    let currentDate = new Date(startDate);
    let lastMonthShown = -1;

    while (currentDate <= dec31 || currentDate.getDay() !== 0) {
      const week = [];

      for (let d = 0; d < 7; d++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const isSelectedYear = currentDate.getFullYear() === selectedYear;
        const count = isSelectedYear ? (heatmapData[dateStr] || 0) : -1;

        if (isSelectedYear) {
          total += count;
        }

        week.push({
          date: dateStr,
          count,
          isCurrentYear: isSelectedYear,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Month label logic — show month name at the start of each month
      const firstValidDay = week.find(d => d.isCurrentYear);
      if (firstValidDay) {
        const month = new Date(firstValidDay.date).getMonth();
        if (month !== lastMonthShown) {
          const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          monthLabelsArr.push(monthNames[month]);
          lastMonthShown = month;
        } else {
          monthLabelsArr.push('');
        }
      } else {
        monthLabelsArr.push('');
      }

      weeksArr.push(week);

      if (currentDate > dec31 && currentDate.getDay() === 0) break;
    }

    return { weeks: weeksArr, monthLabels: monthLabelsArr, totalCompletions: total };
  }, [selectedYear, heatmapData]);

  // Get intensity class based on completion count
  const getIntensityClass = (count) => {
    if (count <= 0) return 'bg-surface-container-highest';
    if (count === 1) return 'bg-primary/30';
    if (count === 2) return 'bg-primary/50';
    if (count === 3) return 'bg-primary/70';
    return 'bg-primary';
  };

  // Format date for tooltip
  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl relative w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-on-surface">
            Consistency Heatmap
          </h3>
          <p className="text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-0.5">
            {totalCompletions} habit completions in {selectedYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
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

          {/* Heatmap Legend */}
          <div className="flex gap-2 items-center text-on-surface-variant/50 font-label-caps text-[10px] uppercase tracking-wider">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-surface-container-highest" title="No activity"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/30" title="1 habit"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/50" title="2 habits"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/70" title="3 habits"></div>
            <div className="w-3 h-3 rounded-sm bg-primary" title="4+ habits"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-2">
        <div className="flex flex-col gap-3 w-full min-w-[760px]">
          <div className="flex gap-[4px] w-full">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[4px]" style={{ flex: '1 1 0%' }}>
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    className={`aspect-square w-full rounded-[2px] cursor-pointer transition-all duration-150 hover:scale-125 ${
                      day.isCurrentYear ? getIntensityClass(day.count) : 'bg-transparent'
                    }`}
                    title={
                      day.isCurrentYear
                        ? `${formatDate(day.date)}: ${day.count} habit${day.count !== 1 ? 's' : ''} completed`
                        : ''
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex gap-[4px] text-on-surface-variant opacity-40 font-label-caps text-[10px] uppercase tracking-wider pointer-events-none select-none">
            {monthLabels.map((label, idx) => (
              <span key={idx} className="text-left overflow-visible whitespace-nowrap" style={{ flex: '1 1 0%' }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
