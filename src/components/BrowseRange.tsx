import React from 'react';
import Image from 'next/image';

const BrowseRange = () => {
  return (
    <div className='flex flex-col justify-center py-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#333333] font-bold text-2xl sm:text-3xl md:text-4xl'>Browse The Range</h1>
        <p className='text-[#666666] text-sm sm:text-base md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center py-12 gap-6 sm:gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white p-4 w-full sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/dinning.jpg"
              alt="Dinning Area Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Dinning</h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-white p-4 w-full sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/living-room.jpg"
              alt="Living Room Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Living</h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white p-4 w-full sm:w-[300px] md:w-[381px]">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] mb-4">
            <Image
              src="/bedroom.jpg"
              alt="Bedroom Furniture"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-lg text-[#333333] font-semibold">Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseRange;
