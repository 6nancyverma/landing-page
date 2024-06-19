// src/components/Features.tsx
import React from "react";
import Image from "next/image";
import FeaturesCard from "./FeaturesCard";
import Button from "./Button";
import featuresData from "../data/Features.json";
import Amenities from "./Amenities";

interface Feature {
  id: number;
  imageSrc: string;
  text: string;
}
const Features: React.FC = () => {
  return (
    <div className="py-8 md:py-12 w-full md:w-[85%] m-auto">
      <div>
        <Image
          src="/features/harberLights.svg"
          alt="Harbours lights"
          width={300}
          height={200}
          quality={100}
          className="m-auto py-[2rem] px-[5rem] md:p-8"
        />
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-[1.9375rem] md:text-[2.25rem] text-center leading-[2.9375rem] mb-4 text-blue-200 font-medium">
          FEATURES & AMENITIES
        </h1>
        <p className="text-[1rem] leading-6 text-center mb-8 md:mb-12 w-[70%] m-auto">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature: Feature) => (
            <FeaturesCard
              key={feature.id}
              imageSrc={feature.imageSrc}
              text={feature.text}
            />
          ))}
        </div>
      </div>
      <div className="my-8 px-4">
        <p className="text-[#686868] text-center m-auto md:text-right text-[0.625rem] w-[90%] my-4 leading-[0.9375rem] tracking-[3%] px-4 md:w-full md:leading-[2.9375rem]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
        <div className="flex justify-center md:justify-end items-center gap-2">
          <Button variant="bluePrimary" size="large">
            EXTERIORS
          </Button>
          <Button variant="blueSecondary" size="large">
            INTERIORS
          </Button>
        </div>
      </div>
      <Amenities />
    </div>
  );
};

export default Features;
