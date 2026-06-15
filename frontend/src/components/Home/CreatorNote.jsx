import React from 'react';

export default function CreatorNote() {
  return (
    <section className="py-24 bg-surface-lowest/40 border-y border-white/5" id="creators-note">
      <div className="max-w-3xl mx-auto px-8 space-y-6 text-left relative">
        
        {/* Glowing quote decorative symbol */}
        <span className="absolute -left-4 -top-8 text-9xl font-serif text-primary/5 pointer-events-none">“</span>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
          <span className="font-mono text-[9px] font-bold text-secondary tracking-widest uppercase">
            A Note from the Creator
          </span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-black text-on-surface font-display tracking-tight">
          Why we built HabitForge
        </h3>
        
        <div className="text-on-surface-variant text-sm sm:text-base space-y-4 leading-relaxed font-sans font-medium">
          <p>
            Every habit app I downloaded felt like it was trying to sell me something, nag me to log in, or gamify my life with XP and achievements as if I were playing a children's roleplaying game.
          </p>
          <p>
            I didn't want a game. I just wanted a simple, visual command center where I could check off my morning run, see how many days I succeeded this month, and close the tab. I wanted a black OLED grid that looked beautiful next to my code editor.
          </p>
          <p>
            So I wrote HabitForge. There are no levels, no push notifications, and no AI coaching. Just your goals, your consistency, and absolute focus.
          </p>
        </div>
        
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-mono text-sm border border-primary/30">
            DR
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Daniel Rivers</p>
            <p className="text-xs text-on-surface-variant font-mono">Lead Engineer, HabitForge</p>
          </div>
        </div>

      </div>
    </section>
  );
}
