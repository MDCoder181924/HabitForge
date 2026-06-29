import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Review 1 */}
        <div className="glass-card p-8 rounded-2xl glass-card-stroke space-y-4 relative">
          <span className="text-xs text-primary font-mono font-bold tracking-widest uppercase bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
            Verified User
          </span>
          <p className="text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
            "I was tracking my habits using git commits in a private repo. HabitForge feels like the first UI built by someone who actually writes code for a living. It's clean, OLED black, and stays out of my way."
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-mono text-sm border border-primary/30">
              MC
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">Marcus Chen</h4>
              <p className="text-xs text-on-surface-variant font-mono">Staff Infrastructure Architect</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="glass-card p-8 rounded-2xl glass-card-stroke space-y-4 relative">
          <span className="text-xs text-secondary font-mono font-bold tracking-widest uppercase bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
            Verified User
          </span>
          <p className="text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
            "Everything else has popups, level-ups, and email notifications that stress me out. HabitForge is just a peaceful grid. I click my checkmark, I see my weekly completion bar, I close the tab."
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold font-mono text-sm border border-secondary/30">
              ER
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">Elena Rodriguez</h4>
              <p className="text-xs text-on-surface-variant font-mono">Performance &amp; Focus Coach</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
