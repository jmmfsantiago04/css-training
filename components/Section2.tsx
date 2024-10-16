// components/PromoBannerCombined.tsx

import React from 'react';
import Image from 'next/image';
import BlueColumn from '../public/BlueColumn.png'; // Path to your blue image
import RedColumn from '../public/RedColumn.png';  // Path to your red image

const Section2 = () => {
  return (
    <div className="flex mt-[180px] flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      {/* First Text (Red) */}
      <h1 className="text-custom-red text-[30px] md:text-2xl lg:text-3xl font-bold mb-[38px]">
        자동차 연식이 높아 걱정하시나요?
      </h1>

      {/* Second Text (Black) */}
      <p className="text-black font-bold text-[20px] md:text-lg lg:text-xl mb-[97px]">
        팔지는 못 하고 폐차 하기 아까우시면 수출!
      </p>

      {/* Promo Text */}
      <p className="text-black text-[30px] md:text-xl lg:text-2xl font-bold mb-[67px]">
        폐차 대비{' '}
        <span className="text-custom-orange">50~300만원</span>{' '}
        더 높은 가격에 내차 팔기!
      </p>

      {/* Flex Container for the two columns */}
      <div className="flex gap-[100px]  flex-col md:flex-row justify-center items-center md:items-end space-y-8 md:space-y-0 md:space-x-8 mb-[148px]">
        {/* Blue Column */}
        <div className="flex flex-col items-center">
          <Image src={BlueColumn} alt="Blue Column" width={203} height={396} className="md:w-[200px] md:h-[400px]" />
        </div>

        {/* Red Column */}
        <div className="flex flex-col items-center">
          <Image src={RedColumn} alt="Red Column" width={203} height={496} className="md:w-[200px] md:h-[450px]" />
        </div>
      </div>

      {/* Button */}
      <button className="bg-custom-red text-white py-2 md:py-3 px-6 md:px-8 rounded-md text-[20px] md:text-lg font-bold hover:bg-red-600">
        지금 바로 상담 받기
      </button>
    </div>
  );
};

export default Section2;
