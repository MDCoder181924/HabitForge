import React, { useState } from 'react';

export default function HabitSimulator() {
  const [days, setDays] = useState(21);

  const getStageInfo = (d) => {
    if (d <= 20) {
      return {
        stage: "Stage 1: Destruction",
        desc: "Breaking down old neural pathways and resistance. This is where 80% of people quit because of friction. Push through.",
        highlight: "Friction & Resistance",
        percent: Math.round((d / 66) * 100)
      };
    } else if (d <= 45) {
      return {
        stage: "Stage 2: Installation",
        desc: "Creating new habit architectures in the brain. The routine starts to feel familiar, and muscle memory begins to coordinate actions.",
        highlight: "Neural Rewiring",
        percent: Math.round((d / 66) * 100)
      };
    } else {
      return {
        stage: "Stage 3: Integration",
        desc: "The habit merges with your identity. It requires minimal cognitive effort to execute. It has become who you are.",
        highlight: "Identity Shift",
        percent: Math.round((d / 66) * 100)
      };
    }
  };

  const info = getStageInfo(days);

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="font-mono text-[9px] font-bold text-on-surface-variant tracking-widest uppercase">
              Psychological Compounding
            </span>
          </div>
          
          <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
            How streaks shape <span className="text-primary underline decoration-white/20">your identity.</span>
          </h2>
          
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Science shows it takes an average of 66 days to automate a new routine. Drag the slider to simulate the cognitive changes your brain undergoes during a streak.
          </p>

          {/* Interactive Slider */}
          <div className="space-y-3 pt-4">
            <div className="flex justify-between items-center text-xs font-mono text-on-surface-variant">
              <span>Day 1</span>
              <span className="text-primary font-bold text-sm">Day {days}</span>
              <span>Day 66</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="66" 
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full accent-white h-1.5 bg-neutral-800 rounded-lg cursor-pointer appearance-none"
            />
          </div>

          <div className="bg-white/2 border border-white/5 rounded-xl p-6 space-y-3 glass-card-stroke">
            <h4 className="font-bold text-sm text-primary font-mono tracking-wide uppercase">{info.stage}</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {info.desc}
            </p>
            <div className="flex gap-4 pt-2 text-[10px] font-mono text-on-surface-variant">
              <span>Focus state: <strong className="text-on-surface">{info.highlight}</strong></span>
              <span>Progress: <strong className="text-on-surface">{info.percent}%</strong></span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Graphic */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="glass-card p-8 rounded-2xl w-full max-w-[340px] flex flex-col items-center justify-center text-center space-y-6 glass-card-stroke relative tech-corners">
            <div className="tech-corner-tl"></div>
            <div className="tech-corner-tr"></div>
            <div className="tech-corner-bl"></div>
            <div className="tech-corner-br"></div>
            <div className="absolute inset-0 bg-white/2 blur-[40px] rounded-full -z-10"></div>
            
            {/* Interactive Progress Circle Ring */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="rgba(255,255,255,0.05)" strokeWidth="6" 
                  fill="transparent" 
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="rgba(255,255,255,0.8)" strokeWidth="6" 
                  fill="transparent" 
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * days) / 66}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center font-mono">
                <span className="text-3xl font-black text-on-surface">{days}</span>
                <span className="text-[9px] uppercase tracking-widest text-on-surface-variant">Days Streak</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs font-bold text-on-surface font-mono">Habit Automating Status</p>
              <p className="text-[10px] text-on-surface-variant font-mono">
                {days < 30 ? '🔥 Early momentum' : days < 50 ? '⚡ Habit reinforcing' : '✨ Identity integrated'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
