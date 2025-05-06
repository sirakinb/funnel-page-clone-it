
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="text-sm font-semibold">We Are All Now Programmers</div>
        <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm py-1 px-3 rounded">Buy Now</Button>
      </div>
    </header>
  );
};

export default Header;
