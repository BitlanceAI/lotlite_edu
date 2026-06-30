import React from 'react';
import { useApp } from '../../AppContext';
import { Sparkles, Send } from 'lucide-react';

export default function FinalCTA() {
  const { setApplyPopupOpen } = useApp();

  return (
    <section className="py-16 bg-transparent relative overflow-hidden" id="final-cta">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white border border-black/5 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background red gradient/glow towards the right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-wine/5 to-transparent pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-wine/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex-1 text-left space-y-4 relative z-10">
            <span className="inline-block bg-wine/5 text-wine border border-wine/10 px-3.5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
              Admissions Open
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight">
              Ready to choose your <span className="text-wine font-extrabold">pathway?</span>
            </h2>
            <div className="space-y-1.5 text-muted text-xs md:text-sm font-semibold max-w-xl leading-relaxed">
              <p>Speak to the admissions team and understand which programme is right for your stage, interest and career goal.</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-1.5 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 px-3.5 py-1.5 rounded-full text-[9px] font-bold text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Admissions Desk Active
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 px-3.5 py-1.5 rounded-full text-[9px] font-bold text-neutral-600 dark:text-neutral-400">
                <Sparkles size={10} className="text-wine animate-spin" /> Interactive Profiling
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col items-center md:items-end justify-center shrink-0 w-full md:w-auto text-center md:text-right gap-3.5 relative z-10">
            <button
              onClick={() => setApplyPopupOpen(true)}
              className="bg-wine hover:bg-wine-hover text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-wine/15 flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto transition-all transform hover:-translate-y-0.5"
            >
              <Send size={12} className="text-white" /> Start Admission
            </button>
            <span className="text-[8.5px] font-black uppercase tracking-[0.15em] text-neutral-400">
              Apply in under 2 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
