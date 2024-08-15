"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image data array
const images = [
  image1,
  image2,
  image3,
  image4,
];

export default function Header() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to show the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="relative h-screen w-full overflow-hidden">
      <div className="relative w-full h-full">
        <div
          className="relative w-full h-full overflow-hidden"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slider Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#111927] text-white p-3 rounded-full hover:bg-[#1a222f] transition-all duration-300 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-gray-400 hover:text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#111927] text-white p-3 rounded-full hover:bg-[#1a222f] transition-all duration-300 z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="text-gray-400 hover:text-white" />
        </button>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-8 rounded-full ${
                index === currentIndex
                  ? "bg-[#beff46]"
                  : "bg-gray-300"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-6">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4">Welcome to Wallmart Design</h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8">Find and Design the product according to your choice</p>
      </div>
    </header>
  );
}
