
import React from 'react';

const BookImage = () => {
  return (
    <div className="relative">
      {/* Top right shadow - more pronounced */}
      <div className="absolute -top-3 -right-4 w-3/4 h-1/2 bg-black/20 blur-md rounded-lg -z-10"></div>
      
      {/* Book image */}
      <img 
        src="/lovable-uploads/3315cf52-3ede-4211-80aa-ea0d537b6924.png" 
        alt="We Are All Now Programmers Book" 
        className="w-full h-auto rounded-lg shadow-xl relative z-10"
      />
      
      {/* Bottom shadow - more pronounced */}
      <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/25 blur-md rounded-lg -z-10"></div>
      
      {/* Price tag - more vibrant */}
      <div className="absolute -bottom-4 -right-4 bg-[#F97316] text-white px-4 py-2 rounded-md font-bold z-20 shadow-lg transform rotate-3">
        $29.00
      </div>
    </div>
  );
};

export default BookImage;
