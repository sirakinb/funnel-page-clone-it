
import React from 'react';
import { Button } from "@/components/ui/button";

const bonuses = [
  {
    id: 1,
    title: 'Early Access to Prototype AI Club',
    description: 'Get direct access to our community of early AI adopters where we share new tools, techniques and insights as they emerge.',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'AI Automation Templates',
    description: 'A library of ready-to-use AI prompts and workflows to automate repetitive tasks and enhance your productivity.',
    icon: '📋'
  }
];

const LaunchBonuses = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Special Launch Bonuses</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Pre-order now and get access to these bonuses within 3 business days.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{bonus.icon}</div>
              <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
              <p className="text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-2 px-8 rounded">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LaunchBonuses;
