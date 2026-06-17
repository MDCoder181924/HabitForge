import React from 'react';

export default function ProfileHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-end gap-4">
          <div className="w-24 h-24 bg-white/5 border border-white/5 rounded-2xl p-2 shrink-0">
            <img 
              alt="Profile Avatar" 
              className="w-full h-full rounded-xl object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADaqsibVG1FZWMK__Cu7hjEhP50OL66WmlfG8IdWsuQ_h7mItguD-HcEQg2c28Pej5c4ET5zIuz0XGSvggF4u7fdgmR_KSu9HASna6ZEptIGYX-CTWd5uHAN4VucjfuEwGuPTBKu42l_tfxi320p0L9yUftF2coIEeiU2bEDdMNiEwEf_z7D_hyiXN91P9_NPfUvE8FJEXnnit70_BW1IbRffwdSLS1OAaOA0GTdHUtu24GqeMdk3xt-omX509Ca4x4xs8wMg467c"
            />
          </div>
          <div className="pb-1">
            <h2 className="text-2xl font-bold tracking-tight text-white font-display">DevZero Rivera</h2>
            <p className="text-xs font-mono text-[#4be277] flex items-center gap-1.5 mt-1 uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">terminal</span>
              Senior Systems Architect
            </p>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-white/50 font-mono tracking-wider uppercase max-w-xl">
          Optimizing biological runtime through systematic iterative improvement. Focus: Low-latency cognition and high-availability discipline.
        </p>
      </div>
      
      {/* Stats Row */}
      <div className="glass-card glass-card-stroke p-4 grid grid-cols-2 gap-3 rounded-2xl relative tech-corners font-mono">
        <div className="tech-corner-tl"></div>
        <div className="tech-corner-tr"></div>
        <div className="tech-corner-bl"></div>
        <div className="tech-corner-br"></div>
        
        <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">CURRENT STREAK</p>
          <p className="text-lg font-black text-[#4be277] mt-1">124 Days</p>
        </div>
        <div className="p-3 bg-white/[0.01] rounded-xl border border-white/5">
          <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">COMPLETION</p>
          <p className="text-lg font-black text-[#4be277] mt-1">98.2%</p>
        </div>
      </div>
    </section>
  );
}
