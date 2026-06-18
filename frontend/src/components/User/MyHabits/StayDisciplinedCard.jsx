import React from 'react';

export default function StayDisciplinedCard() {
  return (
    <div className="relative h-full min-h-[176px] rounded-xl overflow-hidden border border-outline-variant group">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <img 
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30 group-hover:scale-105 transition-transform duration-700" 
        alt="Clean productive workspace" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArhv5Ob8vQhALoeaupKWeY-UmQ9d-eKDOrqPL25m5h9k6_ISb3PWLMQ0_CDRedDZmhfJfRwxipzEseJOm0YZ2qrlAbAQeSziT0YS-Wfnck3l-LYmaBOX6Y3L4SwCsdug6uDb8okmvgZUuqSP5_LqKBAf3T6nM7ExaA9QtiJpoisjiq3lIdf1k_SU0SfPoyTPQhvZsx1zhjgZ0cmtMLbVkxQD5aLG0nEPa3YBaqjqP_UUHEmEGLdenCsMny5M-nLfgGcxV_1tzvt9k"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h4 className="text-on-surface font-bold text-lg tracking-wider uppercase font-display">
          Stay Disciplined.
        </h4>
        <p className="text-on-surface-variant/60 text-xs mt-1 max-w-md">
          Consistency is the secret to mastery. Your habits define your future self.
        </p>
      </div>
    </div>
  );
}
