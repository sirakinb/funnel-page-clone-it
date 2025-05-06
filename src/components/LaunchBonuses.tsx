
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users, Link } from "lucide-react";

const bonuses = [
  {
    id: 1,
    title: 'Free Access to Pentridge Club',
    description: 'Enjoy 1-month free exclusive access to our private AI-focused community, offering resources and continuous support on your AI journey.',
    icon: <Users className="w-8 h-8 text-[#DC2626]" />
  },
  {
    id: 2,
    title: 'AI Automation Templates',
    description: 'Ready-to-use automation workflows for tools like Make.com, Airtable, and UX Pilot—accelerate your implementation and kickstart your AI-powered growth.',
    icon: <Link className="w-8 h-8 text-[#DC2626]" />
  }
];

const LaunchBonuses = () => {
  return (
    <section className="py-16 bg-[#FEF2F2]">
      <div className="container-custom">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="inline-block">
              <div className="bg-[#ea384c] text-white px-6 py-2 text-sm rounded-full font-semibold">
                SPECIAL OFFER
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-4">Special Launch Bonuses</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Purchase now and get access to these exclusive bonuses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-4">{bonus.icon}</div>
                <h3 className="font-bold text-xl mb-3">{bonus.title}</h3>
                <p className="text-gray-700">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchBonuses;
