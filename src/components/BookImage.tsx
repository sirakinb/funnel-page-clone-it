
import React from 'react';

const BookImage = () => {
  return (
    <div className="relative">
      <img 
        src="/lovable-uploads/3315cf52-3ede-4211-80aa-ea0d537b6924.png" 
        alt="We Are All Now Programmers Book" 
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div className="absolute -bottom-3 -right-3 bg-[#DC2626] text-white px-3 py-1 rounded font-bold">
        $29.00
      </div>
    </div>
  );
};

export default BookImage;
