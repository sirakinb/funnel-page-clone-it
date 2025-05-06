
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom max-w-3xl">
        <div className="flex flex-col md:flex-row items-center gap-6 border border-gray-200 rounded-lg p-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full">
              <ShieldCheck className="w-12 h-12 text-[#DC2626]" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">30-day "put it to use" guarantee</h3>
            <p className="text-gray-600 mb-2">
              If you don't get value from the playbook or the additional resources within 30 days, contact me and I'll refund you.
            </p>
            <p className="text-gray-600">
              All I ask is that you show me what you've tried from the playbook and why it didn't work for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
