import React from 'react';
import { Rocket, Target, Sparkles } from 'lucide-react';

const WhyThisMatters = () => {
  return (
    <section id="why-this-matters" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Why This Matters Now</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          AI is transforming how we work, create, and solve problems. This playbook provides the knowledge and tools to help you take advantage of this evolution and stay ahead
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-icon">
              <Rocket size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">An Unprecedented Time</h3>
            <p className="text-gray-600">
              AI represents the most significant shift in how we operate businesses and structure our workflow
              since computers or today's internet.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Target size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">New Skills Required</h3>
            <p className="text-gray-600">
              Mastery of core AI skills will increasingly define who thrives in this new landscape. Cut through the clutter and learn what you truly need to know
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Sparkles size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Maximize Your Potential</h3>
            <p className="text-gray-600">
              Augment what you already know to become more valuable,
              creative and productive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
