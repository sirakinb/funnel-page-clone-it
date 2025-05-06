
import React from 'react';

const BookImage = () => {
  return (
    <div className="relative">
      <img 
        src="/lovable-uploads/01d35735-1de6-4f55-91a3-a80e2689360c.png" 
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
