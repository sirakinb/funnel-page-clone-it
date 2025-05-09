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
              className="group bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#991B1B] text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:translate-y-[-3px] hover:shadow-xl flex items-center gap-3"
            >
              <a href="https://payhip.com/b/ZPEU2">
                <BookOpenText className="w-5 h-5" />
                Get the Playbook
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
