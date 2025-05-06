
import React from 'react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-6 border border-gray-200 rounded-lg p-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
              <svg className="w-12 h-12 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">30-day "put it to it's use" guarantee</h3>
            <p className="text-gray-600 mb-2">
              If you don't completely love this book after trying the techniques, email us within 30 days for a complete refund.
            </p>
            <p className="text-gray-600">
              We would just ask you to show us what you tried from the book and why it didn't work for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
