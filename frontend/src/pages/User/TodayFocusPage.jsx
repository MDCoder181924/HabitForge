import React, { useState , useEffect } from 'react';
import TodayHeader from '../../components/User/TodayFocus/TodayHeader';
import MomentumCircle from '../../components/User/TodayFocus/MomentumCircle';
import InsightCard from '../../components/User/TodayFocus/InsightCard';
import TodayHabitList from '../../components/User/TodayFocus/TodayHabitList';
import FooterVisuals from '../../components/User/TodayFocus/FooterVisuals';
import {useHabit} from '../../context/HabitContext'
import api from '../../api/axios'
import toast from 'react-hot-toast';

export default function TodayFocusPage() {
  const {habits , loading , getHabits} = useHabit();
  const [togglingId, setTogglingId] = useState(null); 
  useEffect(() => {
    getHabits();
  }, []);

  const toggleHabit = async (id) => {
    const chanjHabit = habits.find((e) => e._id == id);
    setTogglingId(id); 

    if (chanjHabit && chanjHabit.habitCompletedToday == true) {
      try {
        const res = await api.post('/habit/remove', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          await getHabits();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      }
      finally{
        setTogglingId(null);
      }
    } else {
      try {
        const res = await api.post('/habit/complit', {
          habitId: id
        })
        if (res.data.success) {
          toast.success('chanj your habit')
          await getHabits();
        }
        else {
          toast.error('not change today habit')
        }
      } catch (error) {
        toast.error('not change today habit');
        console.log(error)
      }
      finally{
        setTogglingId(null);
      }
    }
  }
  const filterHabits = (habits || []).filter(h => (h.completedDays?.length || 0) < (h.habitGoalDuration || 21));
  const completedCount = filterHabits.filter(h => h.habitCompletedToday===true).length;
  const totalCount = filterHabits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header Section */}
      <TodayHeader completedCount={completedCount} totalCount={totalCount} />

      {/* Progress Hero Area (Bento Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8">
          <MomentumCircle completedCount={completedCount} totalCount={totalCount} percentage={percentage} />
        </div>
        <div className="md:col-span-4">
          <InsightCard />
        </div>
      </div>

      {/* Interactive Habit List */}
      <TodayHabitList habits={filterHabits} toggleHabit={toggleHabit} togglingId={togglingId}/>

      {/* Footer Visual Section */}
      <FooterVisuals />
    </div>
  );
}
