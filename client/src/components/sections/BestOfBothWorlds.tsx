import React from 'react';
import { Briefcase, Building2, Cpu, Rocket } from 'lucide-react';

const ecosystemPillars = [
  {
    icon: <Briefcase className="w-6 h-6 text-wine" />,
    title: "Management",
    desc: "Business, marketing, finance, operations, communication and leadership learning."
  },
  {
    icon: <Building2 className="w-6 h-6 text-wine" />,
    title: "Real Estate",
    desc: "Property markets, sales, CRM, RERA, REIT, broker networks and launch planning."
  },
  {
    icon: <Cpu className="w-6 h-6 text-wine" />,
    title: "Technology",
    desc: "Programming, web development, databases, cloud, AI tools and analytics."
  },
  {
    icon: <Rocket className="w-6 h-6 text-wine" />,
    title: "Incubation",
    desc: "Mentor guided venture building for real estate services, digital businesses and PropTech ideas."
  }
];

export default function BestOfBothWorlds() {
  return (
    <section className="bg-white py-20 relative overflow-hidden" id="best-of-both-worlds">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('/images/abstract-edu-bg.png')`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Block */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-wine text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Our Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight mb-4 font-serif">
            One ecosystem. <span className="text-wine">Four career pathways.</span>
          </h2>
          <p className="text-muted text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Lotlite SIEC is a startup incubation and employment focused ecosystem with business, real estate and technology pathways.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ecosystemPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#fcfbfc] dark:bg-zinc-900/40 border border-neutral-200/50 dark:border-zinc-800/80 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-start group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 rounded-2xl bg-wine/5 border border-wine/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-semibold">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
