
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Get the Playbook Now</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Start your journey to mastering AI with this comprehensive guide.
        </p>
        
        <div className="flex justify-center">
          <Card className="max-w-3xl w-full p-0 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Book image */}
              <div className="flex items-center justify-center p-6 bg-gray-100">
                <div className="w-full max-w-[250px]">
                  <img 
                    src="/lovable-uploads/f562aa8a-d086-4c06-96aa-9814b7ff57a7.png" 
                    alt="Open Digital Playbook Pages" 
                    className="w-full h-auto shadow-md" 
                  />
                </div>
              </div>
              
              {/* Pricing details */}
              <CardContent className="p-6 pt-6">
                <h3 className="font-bold text-2xl mb-4">Digital Playbook Package</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>PDF & EPUB formats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Lifetime updates included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Instant digital delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Access to future bonuses</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500 line-through">$49</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 text-sm font-semibold rounded">
                    40% OFF
                  </span>
                </div>
                
                <Button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-6 text-lg h-auto">
                  Buy Now
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
