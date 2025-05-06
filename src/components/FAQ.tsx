
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
    answer: "This is a comprehensive guide to understanding and using AI tools effectively in your professional and personal life. It covers everything from fundamentals to advanced techniques."
  },
  {
    question: "Do I need coding skills?",
    answer: "No, this book is designed for both technical and non-technical readers. The techniques taught focus on using AI tools that don't require traditional coding experience."
  },
  {
    question: "Is it worth the money?",
    answer: "Yes. The skills you'll learn will save you hours of work each week and potentially open up new career opportunities. Most readers report earning back the investment within days."
  },
  {
    question: "Can I get a refund?",
    answer: "Absolutely. We offer a 30-day money-back guarantee. If you're not satisfied, simply email us and show us what you tried and why it didn't work for you, and we'll process your refund."
  },
  {
    question: "Will this become outdated?",
    answer: "We provide free lifetime updates to the book. As AI technology evolves, we'll continue updating the content to ensure it remains current and valuable."
  }
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
