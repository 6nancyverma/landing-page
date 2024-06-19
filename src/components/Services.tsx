// src/components/Services.tsx
"use client";

import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "../data/Services.json";

interface Service {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}
const Services: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) =>
        prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideClick = (index: number) => {
    setHighlightedIndex(index);
  };

  return (
    <div className="bg-[#F4F9FF]">
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="flex gap-2 justify-between items-center w-[80%] py-8 px-16 mx-auto">
          {servicesData.map((service: Service, index: number) => (
            <div
              key={service.id}
              className={`relative transition-all ${
                index === highlightedIndex
                  ? "bg-[#e0eaf6] rounded-lg animate-pulse transition duration-300 delay-150 md:delay-300"
                  : ""
              }`}
              onClick={() => handleSlideClick(index)}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="block md:hidden">
        <div className="relative w-full h-[15rem]">
          <div className="absolute inset-0 flex items-center justify-center">
            <ServiceCard
              icon={servicesData[highlightedIndex].icon}
              title={servicesData[highlightedIndex].title}
              subtitle={servicesData[highlightedIndex].subtitle}
            />
          </div>
        </div>

        {/* Navigation ellipses */}
        <div className="absolute -mt-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {servicesData.map((_, index: number) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === highlightedIndex ? "bg-blue-200" : "bg-gray-300"
              } transition-all delay-[0.3s]`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
