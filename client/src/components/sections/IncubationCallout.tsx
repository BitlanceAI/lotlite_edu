import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';

export default function IncubationCallout() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-transparent relative overflow-hidden" id="incubation-callout">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-wine to-[#911318] text-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background sparkles/glows */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex-1 text-left space-y-4 relative z-10" data-aos="fade-right">
            <div className="flex items-center gap-2 w-fit bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              <Rocket size={12} className="text-white animate-bounce" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white">Incubation Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight font-semibold text-white">
              For students who want to <br className="hidden sm:block" />build something of their own.
            </h2>
            <p className="text-white/80 text-xs md:text-sm font-medium max-w-xl leading-relaxed">
              A focused incubation track for property consulting ventures, technology enabled services, digital businesses, family business growth and early PropTech concepts.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full md:w-auto text-center md:text-right relative z-10" data-aos="fade-left">
            <button
              onClick={() => {
                navigate('/incubation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-wine hover:bg-neutral-50 px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-black/10 flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto transition-all transform hover:-translate-y-0.5"
            >
              Explore Incubation <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
