
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="text-xl font-bold text-[#DC2626]">We Are All Now Programmers</div>
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('why-this-matters')} 
            className="text-gray-700 hover:text-[#DC2626] transition-colors"
          >
            Why Now
          </button>
          <button 
            onClick={() => scrollToSection('whats-inside')}
            className="text-gray-700 hover:text-[#DC2626] transition-colors"
          >
            What's Inside
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-700 hover:text-[#DC2626] transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-gray-700 hover:text-[#DC2626] transition-colors"
          >
            FAQ
          </button>
        </nav>
        <Button 
          onClick={() => window.open('https://buy.stripe.com/14k8yk6nm9gc8JGbIL', '_blank')}
          className="bg-[#DC2626] hover:bg-[#B91C1C] text-white py-2 px-6 rounded-md"
        >
          Buy Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
