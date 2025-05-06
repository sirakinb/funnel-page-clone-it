
import React from 'react';
import { Button } from "@/components/ui/button";
import BookImage from './BookImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] py-20">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 leading-[1.1]">
            We Are All Now Programmers
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-5 drop-shadow-sm">
            Your Essential Guide to Understanding, Navigating, and Building in the Age of AI.
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            We're experiencing one of the biggest shifts in technology since the internet—AI is reshaping industries, redefining careers, and creating unprecedented opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl">
              Get the Playbook
            </Button>
            <Button variant="outline" className="border-2 border-gray-400 text-gray-800 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transform transition-all duration-200 hover:translate-y-[-2px]">
              Learn More
            </Button>
          </div>
        </div>
        <div className="transform hover:scale-105 transition-all duration-300">
          <BookImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
