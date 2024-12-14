"use client";

import React from "react";

const Explore: React.FC = () => {
  const handleScrollRight = () => {
    const container = document.querySelector(".image-container");
    if (container) container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col md:flex-row items-start pl-4 pr-7 py-10 w-full h-[670px] space-x-2">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start w-1/4 h-auto space-y-4 px-4">
        <h2 className="text-3xl font-bold text-gray-800">50+ Beautiful rooms inspiration</h2>
        <p className="text-gray-600">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button className="px-6 py-2 bg-[#B88E2F] text-white hover:bg-blue-700">Explore More</button>
      </div>

      {/* Right Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Images Wrapper */}
        <div className="flex items-center space-x-2 image-container overflow-hidden">
          {/* Image 1 - Large */}
          <div
            className="flex-shrink-0 w-[500px] h-[600px] bg-cover bg-center shadow-lg relative"
            style={{ backgroundImage: "url('/explore1.jpg')" }}
          >
            {/* Arrow Button */}
            <button
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#B88E2F] text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-700 z-10"
              aria-label="Scroll Right"
              onClick={handleScrollRight}
            >
              &#10145;
            </button>
          </div>

          {/* Image 2 - Medium */}
          <div
            className="flex-shrink-0 w-[400px] h-[570px] bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/explore2.jpg')" }}
          ></div>

          {/* Image 3 - Partially Visible */}
          <div
            className="flex-shrink-0 w-[300px] h-[570px] bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/explore3.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
