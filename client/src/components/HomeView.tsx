import React from 'react';
import Hero from './sections/Hero';
import PathwayStrip from './sections/PathwayStrip';
import TrustMarquee from './sections/TrustMarquee';
import HomeSections from './sections/HomeSections';
import PageSEO from './PageSEO';

export default function HomeView() {
  return (
    <>
      <PageSEO
        title="Lotlite SIEC | Startup Incubation & Employment Corporation"
        description="Lotlite SIEC offers MBA, BBA, BCA, MCA and incubation pathways for students interested in business, technology, real estate, PropTech, startup building and employment focused careers."
        canonical="/"
        keywords="Lotlite SIEC, startup incubation, employment focused education, business technology programmes"
      />
      <Hero />
      <PathwayStrip />
      <TrustMarquee />
      <HomeSections />
    </>
  );
}
