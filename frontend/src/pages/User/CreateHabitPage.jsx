import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateHabitForm from '../../components/User/CreateHabit/CreateHabitForm';
import QuickDocs from '../../components/User/CreateHabit/QuickDocs';

export default function CreateHabitPage() {
  const navigate = useNavigate();
  const [habitName, setHabitName] = useState('');
  const [habitDesc, setHabitDesc] = useState('');
  const [category, setCategory] = useState('Productivity');
  const [frequency, setFrequency] = useState('DAILY');
  const [accentColor, setAccentColor] = useState('#4be277');
  const [precisionReminders, setPrecisionReminders] = useState(true);
  const [publicApi, setPublicApi] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`HABIT SEQUENCE INITIALIZED:\nName: ${habitName}\nCategory: ${category}\nFrequency: ${frequency}`);
    navigate('/habits');
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center p-4 relative overflow-hidden animate-fade-in">
      {/* Background Atmospheric Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#4be277] rounded-full blur-[120px] mix-blend-screen opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#f87171] rounded-full blur-[100px] mix-blend-screen opacity-5"></div>
      </div>

      {/* Grid container to hold Form modal & Quick Docs on desktop */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Form component */}
        <div className="lg:col-span-8 w-full">
          <CreateHabitForm 
            habitName={habitName}
            setHabitName={setHabitName}
            habitDesc={habitDesc}
            setHabitDesc={setHabitDesc}
            category={category}
            setCategory={setCategory}
            frequency={frequency}
            setFrequency={setFrequency}
            accentColor={accentColor}
            setAccentColor={setAccentColor}
            precisionReminders={precisionReminders}
            setPrecisionReminders={setPrecisionReminders}
            publicApi={publicApi}
            setPublicApi={setPublicApi}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Aesthetic Sidebar Reference (Quick Docs) */}
        <div className="lg:col-span-4 w-full">
          <QuickDocs />
        </div>
      </div>
    </div>
  );
}
