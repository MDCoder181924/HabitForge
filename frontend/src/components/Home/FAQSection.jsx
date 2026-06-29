import React, { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      q: "Why does it look so dark?",
      a: "It is optimized for OLED displays and late-night coding sessions. HabitForge uses absolute blacks (#000000) and elevated charcoal dark surfaces to minimize eye strain and screen glare."
    },
    {
      q: "Does it have AI coaches or notifications?",
      a: "Absolutely not. We believe push notifications and AI nag-bots degrade self-discipline. HabitForge is a silent, glassmorphic tracking grid. You open it, check your logs, look at your progress, and get back to work."
    },
    {
      q: "Can I self-host it?",
      a: "Yes! The core repository is lightweight and standard React. We support direct git workflows and hosting templates on Vercel/Netlify with a single command."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="py-24 px-8 max-w-3xl mx-auto w-full" id="faq">
      <h2 className="text-2xl sm:text-3xl font-black text-on-surface mb-12 text-center font-display tracking-tight">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div 
              key={idx}
              className="glass-card rounded-xl border border-outline-variant/20 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveFaq(isOpen ? null : idx)}
                className="w-full p-5 flex justify-between items-center text-left hover:bg-surface-container-high cursor-pointer transition-colors"
              >
                <span className="font-bold text-sm sm:text-base text-on-surface">{faq.q}</span>
                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-40 border-t border-outline-variant/20 p-5' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
