
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyThisMatters from '@/components/WhyThisMatters';
import WhatsInside from '@/components/WhatsInside';
import LaunchBonuses from '@/components/LaunchBonuses';
import Pricing from '@/components/Pricing';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhyThisMatters />
        <WhatsInside />
        <LaunchBonuses />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
