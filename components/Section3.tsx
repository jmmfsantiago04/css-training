import React from 'react';
import Image from 'next/image';

// Car data for demonstration
const cars = [
  {
    image: '/Car1.png', // Make sure the image paths are correct
    title: '올 뉴 모닝 디럭스 스페셜',
    year: '2013년식',
    domesticPrice: '499 만 원',
    exportPrice: '699 만 원',
    markup: '200만 원 UP',
  },
  {
    image: '/Car2.png',
    title: '아반떼 MD M16 GDI',
    year: '2013년식',
    domesticPrice: '490 만 원',
    exportPrice: '640 만 원',
    markup: '150만 원 UP',
  },
  {
    image: '/Car3.png',
    title: 'K3 1.6 GDI 프레스티지',
    year: '2015년식',
    domesticPrice: '630 만 원',
    exportPrice: '750 만 원',
    markup: '120만 원 UP',
  },
  {
    image: '/Car4.png',
    title: '더 뉴 레이',
    year: '2015년식',
    domesticPrice: '759 만 원',
    exportPrice: '929 만 원',
    markup: '170만 원 mark up',
  },
];

const Section3 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex  flex-wrap justify-between space-y-8 lg:space-y-0 lg:space-x-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md max-w-xs w-full flex flex-col"
          >
            {/* Car Image */}
            <div className="h-52 relative">
              <Image
                src={car.image}
                alt={car.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Car Info */}
            <div className="p-4">
              <div className="flex items-center sm:items-center lg:items-center md:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{car.title}</h3>
                <span className="bg-custom-red text-white px-2 py-1 text-xs rounded">
                  {car.year}
                </span>
              </div>

              {/* Domestic price with gap */}
              <div className="flex items-center justify-start mb-2">
                <p className="text-[12px] whitespace-nowrap">국내 매매상사</p>
                <p className="ml-[150px] text-[12px] font-bold">{car.domesticPrice}</p>
              </div>

              {/* Export price with gap */}
              <div className="flex items-center justify-start mb-4">
                <p className="text-[12px]">중고차 수출</p>
                <p className="ml-[150px] text-[12px] font-bold">{car.exportPrice}</p>
              </div>
            </div>

            {/* Markup Info */}
            <div className="bg-custom-red text-white text-center py-2 rounded-b-lg font-bold">
              {car.markup}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
