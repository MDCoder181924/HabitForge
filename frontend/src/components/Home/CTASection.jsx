import React from 'react';

export default function CTASection({ onLogin }) {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="pricing">
      <div className="glass-card rounded-3xl p-12 md:p-24 text-center relative overflow-hidden glass-card-stroke">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <h2 className="text-3xl sm:text-4xl font-black text-on-surface mb-6 font-display tracking-tight">
          Ready to Forge Your Best Self?
        </h2>
        <p className="text-base text-on-surface-variant mb-12 max-w-xl mx-auto">
          Start your 14-day free trial today. No credit card required. Pure discipline, zero noise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onLogin}
            className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:opacity-95 shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer text-sm"
          >
            Get Started Now
          </button>
          <button 
            onClick={onLogin}
            className="bg-surface-container-low border border-outline-variant/40 text-on-surface px-10 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all cursor-pointer text-sm"
          >
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
