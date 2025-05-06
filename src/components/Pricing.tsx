
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Get the Playbook Now</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Start your journey to mastering AI skills. Lifetime access to all content updates.
        </p>
        
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 max-w-lg w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-xl mb-1">Digital Playbook Package</h3>
                <div className="text-gray-600">PDF + Bonus Content</div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">$29</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">$49.99</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check size={20} className="text-[#DC2626] mr-2" />
                <span>PDF & EPUB formats</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-[#DC2626] mr-2" />
                <span>Free lifetime updates</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-[#DC2626] mr-2" />
                <span>Premium AI templates</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-[#DC2626] mr-2" />
                <span>Private Discord access</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-3 px-4 rounded">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
