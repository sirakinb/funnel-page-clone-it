
import React from 'react';

const features = [
  {
    id: 1,
    title: 'AI Fundamentals',
    description: 'Learn how AI works and why it matters. No technical jargon, just practical understanding you can immediately apply.',
  },
  {
    id: 2,
    title: 'Real-World Examples',
    description: 'See practical applications of AI in different domains and how professionals across industries are using it effectively.',
  },
  {
    id: 3,
    title: 'Prompt Engineering',
    description: 'Master the art of communicating with AI to get exactly the results you want, with proven frameworks and techniques.',
  },
  {
    id: 4,
    title: 'Step-by-Step Playbooks',
    description: 'Follow detailed workflows for common AI tasks, making adoption seamless and immediately valuable to your work.',
  },
  {
    id: 5,
    title: 'Intelligent Agents',
    description: 'Learn about AI agents, what's real versus what's hype, and where this rapidly evolving space is heading in the future.',
  },
  {
    id: 6,
    title: 'Cultural Context',
    description: 'Navigate the social and organizational implications of AI adoption with confidence in how this will shape work.',
  },
];

const WhatsInside = () => {
  return (
    <section id="whats-inside" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">What's Inside</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          This comprehensive playbook includes everything you need to effectively use AI and make it work
          for your specific goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {features.map((feature) => (
            <div key={feature.id} className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold">
                  {feature.id}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
