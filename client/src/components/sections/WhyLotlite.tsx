import { CheckCircle2 } from 'lucide-react';

export default function WhyLotlite() {
  return (
    <section className="bg-white relative overflow-hidden" id="why-lotlite">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left">
        <span className="text-wine text-[10px] font-bold uppercase tracking-[0.4em] block mb-4 text-center">Why Lotlite SIEC</span>
        <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8 text-center">
          Ecosystem Pillars <br className="hidden md:block" />Built for Modern Careers
        </h2>

        <div className="space-y-6 text-sm md:text-base text-muted font-medium leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          <p>
            Modern careers demand professionals who understand more than traditional workflows. Success requires deep integration across business development, technology adoption, innovation strategies, incubation frameworks, and secure employment pathways.
          </p>
          <p>
            Lotlite SIEC (Startup Incubation & Employment Corporation) is designed to prepare learners for this new reality. Our programs build a strong professional foundation while delivering practical growth across our core ecosystem pillars: Real Estate, PropTech, Technology, Incubation, and Employment.
          </p>
        </div>

        <div className="bg-offwhite rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Learn real estate as a business ecosystem",
              "Understand property markets, customer journeys, and project launches",
              "Build confidence for sales, consulting, CRM, and business development roles",
              "Get exposure to technology led real estate operations",
              "Develop practical thinking through case studies and projects"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-sm text-black font-semibold">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
