
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We Are All Now Programmers</h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            Your Essential Guide to Understanding, Navigating, and Building in the Age of AI.
          </h2>
          <p className="text-gray-600 mb-6">
            Today, the ability to program with and through AI is a new, powerful
            leverage that is quickly coming to define work. This book will show you how
            to participate in this change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-2 px-4 rounded">
              Get the Playbook - $29
            </Button>
            <Button variant="outline" className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/01d35735-1de6-4f55-91a3-a80e2689360c.png" 
            alt="Book on grass" 
            className="rounded-lg w-full shadow-lg"
          />
          <div className="absolute -bottom-3 -right-3 bg-[#DC2626] text-white px-3 py-1 rounded font-bold">
            $29.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
