"use client";

import React, { useRef, useState, useEffect } from "react";

const Explore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const images = [
    { src: "/explore1.jpg", alt: "Modern Living Room 1" },
    { src: "/explore2.jpg", alt: "Modern Living Room 2" },
    { src: "/explore3.jpg", alt: "Modern Living Room 3" },
  ];

  // Handle scrolling logic
  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = containerRef.current.offsetWidth / 1.2;
    let newIndex = currentIndex;

    if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, images.length - 1);
    }

    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);

    containerRef.current.scrollTo({
      left: scrollAmount * newIndex,
      behavior: "smooth",
    });
  };

  // Handle resizing responsiveness
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center pl-4 pr-7 pt-2 w-full bg-gray-100 md:h-[700px] h-auto">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/4 h-auto px-4 space-y-4">
        <h2 className="text-lg md:text-3xl font-bold text-gray-800">50+ Beautiful Room Inspirations</h2>
        <p className="text-sm md:text-base text-gray-600">
          Explore designer prototypes to inspire your next living space project.
        </p>
        <button className="px-4 py-2 md:px-6 bg-[#B88E2F] text-white hover:bg-blue-700" title="Explore More">
          Explore More
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-center overflow-x-auto scrollbar-hidden space-x-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "w-[300px] h-[400px] md:w-[400px] md:h-[500px]"
                  : "w-[200px] h-[300px] md:w-[250px] md:h-[350px] opacity-80"
              } bg-cover bg-center shadow-lg`}
              style={{ backgroundImage: `url(${image.src})` }}
              aria-label={image.alt}
            />
          ))}
        </div>

        {/* Scroll Buttons - Centered in the Explore Section */}
        {isMobile && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 md:hidden">
            {/* Left Scroll Button */}
            <button
              className="bg-[#B88E2F] text-white w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-700"
              title="Scroll Left"
              aria-label="Scroll Left"
              onClick={() => handleScroll("left")}
            >
              &#10144;
            </button>
            {/* Right Scroll Button */}
            <button
              className="bg-[#B88E2F] text-white w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-700"
              title="Scroll Right"
              aria-label="Scroll Right"
              onClick={() => handleScroll("right")}
            >
              &#10145;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
