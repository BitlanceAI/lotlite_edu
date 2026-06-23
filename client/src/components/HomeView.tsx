import React from 'react';
import Hero from './sections/Hero';
import CounterStrip from './sections/CounterStrip';
import TrustMarquee from './sections/TrustMarquee';
import HomeSections from './sections/HomeSections';
import PageSEO from './PageSEO';

export default function HomeView() {
  return (
    <>
      <PageSEO
        canonical="/"
        keywords="real estate school India, PropTech education, BBA real estate, MBA real estate, RERA, REIT, real estate management, Lotlite Edu, Pune business school, real estate career"
      />
      <Hero />
      <CounterStrip />
      <TrustMarquee />
      <HomeSections />
    </>
  );
}
