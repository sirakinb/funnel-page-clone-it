
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const bonuses = [
  {
    id: 1,
    title: 'Free Access to AI Community',
    description: 'Get 1-month of exclusive access when we launch! Join our private AI-focused community and be first in line to receive resources, live sessions, and continuous support on your AI journey.',
    icon: <Users className="w-8 h-8 text-[#DC2626]" />
  }
];

const LaunchBonuses = () => {
  return (
    <section className="py-16 bg-[#FEF2F2]">
      <div className="container-custom">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-block">
              <div className="bg-[#ea384c] text-white px-6 py-2 text-sm rounded-full font-semibold">
                SPECIAL OFFER
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-4">Special Launch Bonus</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Purchase now and get access to this exclusive bonus.
          </p>
          
          <div className="flex justify-center">
            {bonuses.map((bonus) => (
              <div key={bonus.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 max-w-xl">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-50 rounded-full">
                    {bonus.icon}
                  </div>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center">{bonus.title}</h3>
                <p className="text-gray-700 text-center text-lg">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchBonuses;
