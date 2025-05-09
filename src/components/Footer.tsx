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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start building with AI now</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Get instant access, lifetime updates, and the systems I use every day.
            </p>
            <Button 
              asChild
              className="bg-white hover:bg-gray-100 text-[#d32f2f] font-bold py-2 px-8 rounded-md text-lg h-auto"
            >
              <a href="https://payhip.com/b/ZPEU2">
                Get the Playbook Now
              </a>
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
                {/* Using custom SVG for TikTok that matches the provided image */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-5.155-5.156h-3.76v15.98a3.063 3.063 0 0 1-3.063 3.063 3.063 3.063 0 0 1-3.062-3.063 3.063 3.063 0 0 1 3.062-3.063c.17 0 .334.02.495.043v-3.798a6.82 6.82 0 0 0-.495-.017A6.857 6.857 0 0 0 .5 16.407 6.857 6.857 0 0 0 7.343 23.25a6.857 6.857 0 0 0 6.843-6.844V9.328a8.88 8.88 0 0 0 5.135 1.626V7.188a5.113 5.113 0 0 1-3.14-1.042 5.12 5.12 0 0 1 3.14-1.042v-3.76Z" />
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
