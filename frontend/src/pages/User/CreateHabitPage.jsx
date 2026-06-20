import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateHabitForm from '../../components/User/CreateHabit/CreateHabitForm';
import api from '../../api/axios';
import toast from 'react-hot-toast';

export default function CreateHabitPage() {
  const navigate = useNavigate();
  const [habitName, setHabitName] = useState('');
  const [habitDesc, setHabitDesc] = useState('');
  const [category, setCategory] = useState('Productivity');
  const [accentColor, setAccentColor] = useState('#4be277');
  const [precisionReminders, setPrecisionReminders] = useState(true);
  const [goalDays, setGoalDays] = useState(21);
  const [reminderTime, setReminderTime] = useState('08:00');

  const handleSubmit = async (e)  => {
    e.preventDefault();
    try{
      const res = await api.post('/habit/create' , {
        habitName,
        habitDescription : habitDesc,
        habitColorTheme : accentColor,
        habitCategory : category,
        habitEnableReminder : precisionReminders,
        habitGoalDuration :goalDays,
        habitReminderTime : reminderTime
      })

      if(res.data.success) {
        toast.success("Habit created");
      }
      else{
        toast.error("Habit not created");
      }
      navigate('/habits');
    }
    catch(error){
      toast.error("habit not created");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center p-4 relative overflow-hidden animate-fade-in">
      {/* Background Atmospheric Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#4be277] rounded-full blur-[120px] mix-blend-screen opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#f87171] rounded-full blur-[100px] mix-blend-screen opacity-5"></div>
      </div>

      {/* Centered Form component */}
      <div className="relative z-10 w-full max-w-2xl">
        <CreateHabitForm 
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
      </div>
    </div>
  );
}
