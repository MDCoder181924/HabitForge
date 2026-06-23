import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditHabitForm from '../../components/User/EditHabit/EditHabitForm';
import { useHabit } from '../../context/HabitContext';
import api from '../../api/axios';
import toast from 'react-hot-toast';

export default function EditHabitPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { habits, getHabits, loading } = useHabit();

  const [habitName, setHabitName] = useState('');
  const [habitDesc, setHabitDesc] = useState('');
  const [category, setCategory] = useState('Productivity');
  const [accentColor, setAccentColor] = useState('#4be277');
  const [precisionReminders, setPrecisionReminders] = useState(true);
  const [goalDays, setGoalDays] = useState(21);
  const [reminderTime, setReminderTime] = useState('08:00');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (habits.length === 0) {
      getHabits();
    }
  }, []);

  useEffect(() => {
    const habit = habits.find((h) => h._id === id);
    if (habit) {
      setHabitName(habit.habitName || '');
      setHabitDesc(habit.habitDescription || '');
      setCategory(habit.habitCategory || 'Productivity');
      setAccentColor(habit.habitColorTheme || '#4be277');
      setPrecisionReminders(habit.habitEnableReminder !== undefined ? habit.habitEnableReminder : true);
      setGoalDays(habit.habitGoalDuration || 21);
      setReminderTime(habit.habitReminderTime || '08:00');
      setIsLoaded(true);
    }
  }, [habits, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/habit/edit', {
        habitId: id,
        newHabitName: habitName,
        newHabitDes: habitDesc,
        newHabitCategory: category,
        newHabitColorTheme: accentColor,
        newHabitEnableReminder: precisionReminders,
        newHabitGoalDuration: goalDays,
        newHabitReminderTime: reminderTime
      });

      if (res.data.success) {
        toast.success("Habit updated successfully");
        getHabits(); 
        navigate('/habits');
      } else {
        toast.error(res.data.message || "Failed to update habit");
      }
    } catch (error) {
      toast.error("Habit not updated");
      console.error(error);
    }
  };

  if (loading && !isLoaded) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-primary text-4xl animate-spin" data-icon="sync">sync</span>
          <p className="text-on-surface-variant text-sm font-semibold">Loading habit details...</p>
        </div>
      </div>
    );
  }

  if (!loading && !isLoaded && habits.length > 0) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center p-4">
        <div className="glass-panel p-8 rounded-2xl text-center max-w-md space-y-4">
          <span className="material-symbols-outlined text-red-500 text-5xl" data-icon="error">error</span>
          <h2 className="text-xl font-bold text-on-surface">Habit Not Found</h2>
          <p className="text-sm text-on-surface-variant">The habit you are trying to edit doesn't exist or you don't have access to it.</p>
          <button 
            onClick={() => navigate('/habits')}
            className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Go Back to Habits
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center p-4 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[120px] mix-blend-screen opacity-10 animate-pulse" style={{ backgroundColor: accentColor }}></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#f87171] rounded-full blur-[100px] mix-blend-screen opacity-5"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {isLoaded && (
          <EditHabitForm 
            habitName={habitName}
            setHabitName={setHabitName}
            habitDesc={habitDesc}
            setHabitDesc={setHabitDesc}
            category={category}
            setCategory={setCategory}
            accentColor={accentColor}
            setAccentColor={setAccentColor}
            precisionReminders={precisionReminders}
            setPrecisionReminders={setPrecisionReminders}
            goalDays={goalDays}
            setGoalDays={setGoalDays}
            reminderTime={reminderTime}
            setReminderTime={setReminderTime}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
