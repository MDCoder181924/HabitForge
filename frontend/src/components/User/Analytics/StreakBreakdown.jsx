import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StreakBreakdown({ habits = [] }) {
  const navigate = useNavigate();

  const processedHabits = useMemo(() => {
    return habits.map(h => {
      // Calculate current streak
      let streak = 0;
      if (h.completedDays && h.completedDays.length > 0) {
        const sortedDays = [...h.completedDays].sort((a, b) => new Date(b) - new Date(a));
        
        const todayObj = new Date();
        const todayStr = `${todayObj.getFullYear()}-${String(todayObj.getMonth() + 1).padStart(2, '0')}-${String(todayObj.getDate()).padStart(2, '0')}`;
        
        const yesterdayObj = new Date();
        yesterdayObj.setDate(yesterdayObj.getDate() - 1);
        const yesterdayStr = `${yesterdayObj.getFullYear()}-${String(yesterdayObj.getMonth() + 1).padStart(2, '0')}-${String(yesterdayObj.getDate()).padStart(2, '0')}`;

        if (sortedDays.includes(todayStr) || sortedDays.includes(yesterdayStr)) {
          let currentDate = sortedDays.includes(todayStr) ? new Date() : yesterdayObj;
          while (true) {
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
            if (sortedDays.includes(dateStr)) {
              streak++;
              currentDate.setDate(currentDate.getDate() - 1);
            } else {
              break;
            }
          }
        }
      }

      // Calculate completion ratio compared to total goal duration (default 21 days)
      const pct = h.habitGoalDuration > 0
        ? Math.min(100, Math.round(((h.completedDays?.length || 0) / h.habitGoalDuration) * 100))
        : 0;

      return {
        name: h.habitName,
        streak: `${streak}d`,
        pct
      };
    });
  }, [habits]);

  return (
    <div className="glass-panel inner-glow p-6 rounded-xl flex flex-col justify-between h-full">
      <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">
        Streak Breakdown
      </h3>
      
      <div className="space-y-4 text-xs my-auto">
        {processedHabits.length > 0 ? (
          processedHabits.map((habit, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-[11px] uppercase tracking-wider">
                <span className="text-on-surface-variant truncate pr-2">{habit.name}</span>
                <span className="font-bold text-on-surface font-mono shrink-0">{habit.streak}</span>
              </div>
              <div className="h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000" 
                  style={{ width: `${habit.pct}%` }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-6 text-xs text-on-surface-variant/40 font-mono uppercase tracking-wider">
            No habits active
          </p>
        )}
      </div>

      <button 
        onClick={() => navigate('/habits')}
        className="w-full mt-6 text-primary font-mono text-[9px] tracking-widest uppercase text-center py-2 hover:underline transition-all cursor-pointer bg-transparent border-none"
      >
        VIEW_ALL_HABITS
      </button>
    </div>
  );
}
