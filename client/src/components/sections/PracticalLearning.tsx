import React from 'react';
import { BookOpen, Award, Layers } from 'lucide-react';

export default function PracticalLearning() {
  const steps = [
    {
      icon: <BookOpen className="w-5 h-5 text-wine" />,
      title: "Learn",
      desc: "Students build basics in business, technology, communication, problem solving and industry context."
    },
    {
      icon: <Layers className="w-5 h-5 text-wine" />,
      title: "Apply",
      desc: "Concepts are connected to case studies, market research, lab work, automation, software projects and presentations."
    },
    {
      icon: <Award className="w-5 h-5 text-wine" />,
      title: "Build",
      desc: "Students create projects that can be shown during interviews, counselling conversations and venture reviews."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="practical-learning">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <span className="text-wine text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Learning Model</span>
        <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-16">
          Learn. Apply. Build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-offwhite border border-black/5 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-12 h-12 rounded-2xl bg-wine/5 border border-wine/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed font-semibold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
