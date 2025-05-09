import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is this all about?",
    answer:
      "This is a practical playbook designed to help you understand and use AI in your daily work and projects. It cuts through the hype and gives you actionable steps to get started.",
  },
  {
    question: "Who is this for?",
    answer:
      "This playbook is for anyone looking to leverage AI—creators, entrepreneurs, marketers, developers, students, and business owners. If you want to work smarter and faster, this is for you.",
  },
  {
    question: "Will this become outdated?",
    answer: "We provide free lifetime updates to the book. As AI technology evolves, we'll continue updating the content to ensure it remains current and valuable.",
  },
  {
    question: "How advanced is the content?",
    answer:
      "You don't need to be technical to get value. This playbook is written to meet you where you are—whether you're new to AI or already building with it.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Everything you need to know about this playbook.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
