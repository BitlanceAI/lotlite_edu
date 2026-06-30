import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const programs = [
  {
    id: "mba",
    name: "MBA in Real Estate, Business and PropTech",
    level: "Postgraduate pathway",
    description: "A focused postgraduate pathway for careers in real estate sales, marketing, CRM, investment, business development and property technology.",
    duration: "24 months",
    cta: "Explore MBA Curriculum",
    theme: "wine"
  },
  {
    id: "bba",
    name: "BBA in Business, Real Estate and Marketing",
    level: "Undergraduate pathway",
    description: "A foundation pathway for students who want early exposure to business management, marketing, sales, entrepreneurship and real estate.",
    duration: "36 months",
    cta: "Explore BBA Curriculum",
    theme: "bottle-green"
  },
  {
    id: "bca",
    name: "BCA in Computer Applications, AI and Digital Business",
    level: "Undergraduate pathway",
    description: "A practical undergraduate pathway for students who want to learn programming, web development, databases, AI tools, analytics and technology for business.",
    duration: "36 months",
    cta: "Explore BCA Curriculum",
    theme: "bottle-green"
  },
  {
    id: "mca",
    name: "MCA in AI, Software Engineering and Applied Computing",
    level: "Postgraduate pathway",
    description: "A postgraduate technology pathway for learners who want stronger foundations in software, cloud, data, AI, system design and deployment focused projects.",
    duration: "24 months",
    cta: "Explore MCA Curriculum",
    theme: "wine"
  }
];

export default function Programs() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-transparent relative overflow-hidden scroll-mt-20" id="programs">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 text-center" data-aos="fade-up">
          <span className="text-muted text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Lotlite SIEC</span>
          <h2 className="text-3xl md:text-5xl text-black font-serif leading-tight mb-4">
            Choose the pathway that fits your stage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((prog, idx) => (
            <div
              key={prog.id}
              className="bg-white border border-black/5 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col justify-between min-h-[380px]"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 border-b border-black/5 pb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-${prog.theme}`}>
                    {prog.level}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted text-xs font-semibold">
                    <Clock size={12} className={`text-${prog.theme}`} />
                    <span>{prog.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-black leading-tight mb-6">
                  {prog.name}
                </h3>
                <p className="text-sm text-muted font-medium leading-relaxed mb-8">
                  {prog.description}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/programs/${prog.id}-overview`);
                }}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-all bg-${prog.theme} hover:opacity-90 shadow-md cursor-pointer`}
              >
                {prog.cta} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

