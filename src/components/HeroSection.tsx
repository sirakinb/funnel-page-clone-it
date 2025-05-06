
import React from 'react';
import { Button } from "@/components/ui/button";
import BookImage from './BookImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] py-16">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">We Are All Now Programmers</h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-5 drop-shadow-sm">
            Your Essential Guide to Understanding, Navigating, and Building in the Age of AI.
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Today, the ability to program with and through AI is a new, powerful
            leverage that is quickly coming to define work. This book will show you how
            to participate in this change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl">
              Get the Playbook - $29
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
