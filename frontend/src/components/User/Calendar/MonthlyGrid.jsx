import React from 'react';

export default function MonthlyGrid({ viewMode, days, selectedDate, setSelectedDate, currentMonth, currentYear }) {
  // Calculate which day of the week the 1st falls on (0=Sun, 6=Sat)
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Previous month days to show as faded
  const prevMonthDays = [];
  if (firstDayOfWeek > 0) {
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      prevMonthDays.push(prevMonthLastDay - i);
    }
  }

  // Next month days to fill remaining cells
  const totalCells = Math.ceil((prevMonthDays.length + days.length) / 7) * 7;
  const nextMonthDays = [];
  for (let i = 1; i <= totalCells - prevMonthDays.length - days.length; i++) {
    nextMonthDays.push(i);
  }

  if (viewMode === 'Grid') {
    return (
      <div className="grid grid-cols-7 gap-[1px] bg-outline-variant/30 rounded-xl overflow-hidden mb-12">
        {/* Day Headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="bg-surface-container-low py-4 text-center">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              {d}
            </span>
          </div>
        ))}

        {/* Previous month faded days */}
        {prevMonthDays.map((prevDay) => (
          <div key={`prev-${prevDay}`} className="p-4 bg-surface-container-lowest min-h-[120px] flex flex-col justify-between opacity-30">
            <span className="text-xs text-on-surface-variant font-mono">{prevDay}</span>
          </div>
        ))}

        {/* Current month days */}
        {days.map((d) => {
          const isSelected = d.dateStr === selectedDate;
          const completedAll = d.completed === d.total && d.total > 0;
          const percentage = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;

          return (
            <div
              key={d.day}
              onClick={() => setSelectedDate(d.dateStr)}
              className={`p-4 min-h-[120px] flex flex-col justify-between transition-colors cursor-pointer relative ${
                isSelected
                  ? 'bg-surface-container border-2 border-primary z-10'
                  : 'bg-surface-container-lowest hover:bg-surface-container-low'
              }`}
            >
              <span className={`text-xs font-mono font-bold ${
                isSelected ? 'text-primary' : 'text-on-surface'
              }`}>
                {d.day < 10 ? `0${d.day}` : d.day}
              </span>

              {d.total > 0 ? (
                <div className="flex flex-col gap-1.5 mt-4">
                  <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-wider ${
                    completedAll ? 'text-primary' : 'text-on-surface-variant/80'
                  }`}>
                    <span>{d.completed}/{d.total} Done</span>
                    {completedAll && (
                      <span className="material-symbols-outlined text-[14px]" data-icon="check">check</span>
                    )}
                  </div>
                  <div className="w-full bg-outline-variant/30 h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${completedAll ? 'bg-primary' : 'bg-primary/50'}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ) : (
                <span className="text-[10px] text-on-surface-variant/30 uppercase font-mono mt-auto block">Rest</span>
              )}
            </div>
          );
        })}

        {/* Next month faded days */}
        {nextMonthDays.map((nextDay) => (
          <div key={`next-${nextDay}`} className="p-4 bg-surface-container-lowest min-h-[120px] flex flex-col justify-between opacity-30">
            <span className="text-xs text-on-surface-variant font-mono">{nextDay}</span>
          </div>
        ))}
      </div>
    );
  }

  // List view mode
  return (
    <div className="space-y-3 mb-12">
      {days.map((d) => {
        const isSelected = d.dateStr === selectedDate;
        const percentage = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;
        return (
          <div
            key={d.day}
            onClick={() => setSelectedDate(d.dateStr)}
            className={`p-4 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
              isSelected
                ? 'bg-surface-container border-primary'
                : 'bg-surface-container-lowest border-outline-variant/30 hover:border-outline-variant'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-primary">
                Day {d.day < 10 ? `0${d.day}` : d.day}
              </span>
              <span className="text-xs text-on-surface-variant">
                {d.completed} of {d.total} habits completed ({percentage}%)
              </span>
            </div>
            <div className="h-1.5 w-24 bg-outline-variant/30 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full transition-all"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
