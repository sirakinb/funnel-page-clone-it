import React from 'react';
import { Button } from "@/components/ui/button";
import BookImage from './BookImage';
import { BookOpenText, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] py-20">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 leading-[1.1] uppercase">
            The AI Era Has Arrived — Here's How You Win In It
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-5 drop-shadow-sm">
            A practical playbook to help you think smarter, build faster, and thrive in the age of automation.
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            We're experiencing one of the biggest shifts in technology since the internet—AI is reshaping industries, redefining careers, and creating unprecedented opportunities.
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              className="px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <a href="https://payhip.com/b/ZPEU2">
                Get the Playbook
              </a>
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
