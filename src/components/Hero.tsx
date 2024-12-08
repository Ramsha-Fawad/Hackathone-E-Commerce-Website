import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/hero.jpg')`,
      }}
    >
      <div className=" flex flex-col inset-0 w-[643px] h-[443px] pt-56"></div>
      <div className="flex flex-col justify-center items-baseline w-[643px] h-[443px] px-6 bg-[#FFF3E3] text-black">
        <p className="text-sm uppercase tracking-wide">New Arrival</p>
        <h1 className="text-4xl text-[#B88E2F] font-bold mt-2">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-lg mt-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-6 py-3 h-[74px] w-[222px] bg-[#B88E2F] text-white font-semibold hover:bg-yellow-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
