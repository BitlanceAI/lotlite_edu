import React from 'react';

export default function PathwayStrip() {
  const pathways = [
    { title: "MBA", desc: "Real estate, business and PropTech" },
    { title: "BBA", desc: "Business, marketing and real estate" },
    { title: "BCA", desc: "Computer applications and AI tools" },
    { title: "MCA", desc: "Software, cloud and applied AI" }
  ];

  return (
    <div className="bg-[#fcfbfc] dark:bg-zinc-900/20 border-y border-neutral-200/60 dark:border-zinc-800/80 py-6 md:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-neutral-200/50 dark:divide-zinc-800/60">
        {pathways.map((path, idx) => (
          <div key={idx} className="flex flex-col items-start pt-4 sm:pt-0 lg:pl-6 first:pl-0 first:pt-0" data-aos="fade-up" data-aos-delay={idx * 100}>
            <span className="text-wine text-[10px] font-black uppercase tracking-wider bg-wine-light px-2.5 py-0.5 rounded-md border border-wine-light-border mb-1.5">{path.title}</span>
            <span className="text-black dark:text-zinc-200 text-xs md:text-sm font-semibold leading-snug">{path.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
