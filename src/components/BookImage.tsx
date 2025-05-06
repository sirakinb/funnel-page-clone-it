
import React from 'react';

const BookImage = () => {
  return (
    <div className="relative">
      {/* Top right shadow */}
      <div className="absolute -top-2 -right-2 w-3/4 h-1/2 bg-black/10 blur-md rounded-lg -z-10"></div>
      
      {/* Book image */}
      <img 
        src="/lovable-uploads/3315cf52-3ede-4211-80aa-ea0d537b6924.png" 
        alt="We Are All Now Programmers Book" 
        className="w-full h-auto rounded-lg shadow-lg relative z-10"
      />
      
      {/* Bottom shadow */}
      <div className="absolute -bottom-3 left-5 right-5 h-6 bg-black/20 blur-md rounded-lg -z-10"></div>
      
      {/* Price tag */}
      <div className="absolute -bottom-3 -right-3 bg-[#DC2626] text-white px-3 py-1 rounded font-bold z-20">
        $29.00
      </div>
    </div>
  );
};

export default BookImage;
