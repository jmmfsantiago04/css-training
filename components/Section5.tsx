// components/EndBanner.tsx

import React from 'react';
import Image from 'next/image';
import End1 from '../public/End1.png';
import End2 from '../public/End2.png';
import End3 from '../public/End3.png';


const Section5 = () => {
  return (
    <div
      className="flex mt-[150px] items-center justify-center bg-cover bg-center py-12"
      style={{
        backgroundImage: `url('/EndBannerBG.png')`, 
      }}
    >
      <div className="flex flex-col shrink-1 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        {/* Inquiry Section */}
        <div className="w-full ">
          <Image src={End1} alt="Inquiry"  width={283} height={115} />
        </div>

        {/* Company Introduction Section */}
        <div className="w-full ">
          <Image src={End2} alt="Company Introduction" width={283} height={115} />
        </div>

        {/* Export Section */}
        <div className="w-full">
          <Image src={End3} alt="Export"  width={283} height={115} />
        </div>
      </div>
    </div>
  )
};

export default Section5;