"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Explore: React.FC = () => {
  const [zoomedIndex, setZoomedIndex] = useState(0);

  useEffect(() => {
    const container =
      document.querySelector<HTMLDivElement>(".image-container");
    if (container) {
      const handleScroll = () => {
        const scrollPosition = container.scrollLeft;
        const imageWidth = container.children[0]?.clientWidth || 1; // Avoid division by 0
        const index = Math.floor(scrollPosition / imageWidth);
        setZoomedIndex(index);
      };

      container.addEventListener("scroll", handleScroll);

      // Cleanup listener on unmount
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  // Empty dependency array ensures this runs only on mount/unmount

  const handleScrollRight = () => {
    const container =
      document.querySelector<HTMLDivElement>(".image-container");
    if (container) {
      const images = container.children;
      const totalImages = images.length;

      // Set the next image to zoom
      setZoomedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalImages;
        container.scrollBy({ left: 200, behavior: "smooth" });
        return nextIndex;
      });
    }
  };

  const images = ["/explore1.jpg", "/explore2.jpg", "/explore3.jpg"];

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start px-4 py-10 w-full space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start pt-10 md:pt-24 w-full md:w-1/3 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          50+ Beautiful Rooms Inspiration
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="px-6 py-2 bg-[#B88E2F] text-white hover:bg-blue-700 transition-colors">
          Explore More
        </button>
      </div>

      {/* Right Content */}
      <div className="relative flex-1 overflow-hidden w-full md:w-2/3">
        {/* Images Wrapper */}
        <div className="flex items-center space-x-4 image-container overflow-x-scroll no-scrollbar">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 relative w-full sm:w-[300px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[570px] shadow-lg transition-transform duration-300 ${
                zoomedIndex === index ? "scale-110 z-10" : "scale-100"
              }`}
            >
              <Image
                src={image}
                alt={`Beautiful Room ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Arrow Button */}
        <button
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#B88E2F] text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-700 z-10"
          aria-label="Scroll Right"
          onClick={handleScrollRight}
        >
          &#10145;
        </button>
      </div>
    </div>
  );
};

export default Explore;
