
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Get the Playbook Now</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Start the journey to mastering AI with this comprehensive guide
        </p>
        
        <div className="flex justify-center">
          <div className="max-w-3xl w-full bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Book image on left */}
                <div className="flex items-center justify-center bg-gray-100 p-8 rounded-md">
                  <img 
                    src="/lovable-uploads/f562aa8a-d086-4c06-96aa-9814b7ff57a7.png" 
                    alt="Digital Playbook" 
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
                
                {/* Features and pricing on right */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>PDF & EPUB formats</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Lifetime updates included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Instant digital delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-600 p-0.5 flex items-center justify-center mt-1 flex-shrink-0">
                      <Check size={16} className="text-white" />
                    </div>
                    <span>Access to future bonuses</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6">
                    <span className="text-4xl font-bold">$29</span>
                  </div>
                  
                  {/* Smaller button with less height and padding */}
                  <Button className="w-full bg-[#d32f2f] hover:bg-red-700 text-white font-semibold py-4 text-base h-auto mt-2">
                    Buy Now
                  </Button>
                  
                  {/* Removed the text that was here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
