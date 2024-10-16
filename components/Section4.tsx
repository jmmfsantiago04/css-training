// components/SalesStepsNoOutline.tsx

import React from 'react';
import Image from 'next/image';
import Step1 from '../public/Step1.png'; // Replace paths with actual locations
import Step2 from '../public/Step2.png';
import Step3 from '../public/Step3.png';
import Step4 from '../public/Step4.png';
import Step5 from '../public/Step5.png';
import Step6 from '../public/Step6.png';

const Section4 = () => {
  const steps = [
    { imgSrc: Step1 },
    { imgSrc: Step2 },
    { imgSrc: Step3 },
    { imgSrc: Step4 },
    { imgSrc: Step5 },
    { imgSrc: Step6 },
  ];

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen mt-[188px] bg-white p-4">
      {/* Title */}
      <h2 className="text-custom-red text-[30px] md:text-3xl lg:text-4xl font-bold mb-[150px]">
        중고 차 수출 판매 절차
      </h2>

      {/* Grid layout for steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        {steps.map((step, index) => (
          <div key={index} className="p-4">
            {/* Step Image without any box or outline */}
            <Image
              src={step.imgSrc}
              alt={`Step ${index + 1}`}
              width={250}
              height={225}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;