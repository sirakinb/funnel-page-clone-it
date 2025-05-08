
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Red section with CTA */}
      <div className="bg-[#d32f2f] text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">I'm excited for you to explore this guide!</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Start building your future with AI today and gain the skills needed to thrive in 
              this new technological landscape.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-[#d32f2f] font-bold py-2 px-8 rounded-md text-lg h-auto">
              Get the Playbook Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dark navy section with copyright and social icons */}
      <div className="bg-[#111827] text-white py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">© Pentridge Media 2025, all rights reserved</div>
            
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/sirakinb/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/sirakinb/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@sirakinb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                {/* Using SVG for TikTok since lucide-react doesn't have a TikTok icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M16 8v8"></path>
                  <path d="M12 16v-8"></path>
                  <path d="M21 11v1a8 8 0 0 1-8 8h-1c-3.3 0-6-2.7-6-6v-1"></path>
                  <path d="M16 8a4 4 0 0 0-4-4"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@sirakinb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
