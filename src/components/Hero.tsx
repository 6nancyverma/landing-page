import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import PricingCard from "./PricingCard";

const HeroMobile = () => {
  return (
    <div className="relative w-full h-[60rem] ">
      <Image
        src="/hero/heroBGMob.png"
        alt="hero bg"
        width={900}
        height={900}
        quality={100}
        className="w-full h-full"
      />
      <div className=" absolute top-[0.5rem] w-full flex items-center justify-center flex-col gap-16">
        <Navbar />
        <div className="flex justify-between items-center w-[90%] flex-col  gap-16 lg:flex-row sm:px-6 lg:px-8">
          <div className="gap-6 flex flex-col  justify-start ">
            <div>
              <h1 className="text-[2.3125rem] text-white font-medium leading-[2.875rem] md:text-[3rem] md:leading-[3.9rem]">
                HARBOUR LIGHTS
              </h1>
              <h1 className="text-[2.3125rem] text-white font-medium leading-[2.875rem] md:text-[3rem] md:leading-[3.9rem]">
                DE <span className="text-[#17ABFF]">GRESOGONO</span>
              </h1>
            </div>
            <div>
              <h3 className=" font-semibold text-[1rem] text-white md:text-[1.5625rem]">
                1, 2 & 3 Bedrooms Seaside Apartments
              </h3>
              <h3 className="font-semibold text-[1rem] text-white md:text-[1.5625rem]">
                in Dubai Maritime City
              </h3>
            </div>
            <div className="flex gap-4 flex-col text-[#E7EBEF] w-full">
              <div className="bg-black bg-opacity-50 p-3 2xl:p-4 border-l-4 border-[#17ABFF] text-[1rem] ">
                Rental Returns of <span className="font-bold">UPTO 11%**</span>
              </div>
              <div className="bg-black bg-opacity-50 p-3 2xl:p-4 border-l-4 border-[#17ABFF] text-[1rem] ">
                Capital Appreciation of{" "}
                <span className="font-bold">UPTO 32%**</span>
              </div>
            </div>
          </div>

          <PricingCard />
        </div>
      </div>
    </div>
  );
};

const HeroDesktop = () => {
  return (
    <div className="relative top-0 w-full  ">
      <Image
        src="/hero/heroBG.jpg"
        alt="hero bg"
        width={800}
        height={100}
        quality={100}
        className="w-full"
      />
      <div className=" absolute top-[0.5rem] w-full flex items-center justify-center flex-col gap-8 xl:gap-16 2xl:top-[5rem]">
        <Navbar />
        <div className="flex justify-between items-start w-[85%] 2xl:w-[70%]  lg:flex-row sm:px-6 lg:px-8">
          <div className="gap-6 flex flex-col  justify-start ">
            <div>
              <h1 className="text-[2.5rem] xl:text-[3rem] text-white font-medium leading-[2.9rem] xl:leading-[3.9rem]">
                HARBOUR LIGHTS
              </h1>
              <h1 className="text-[2.5rem] xl:text-[3rem] text-white font-medium leading-[2.9rem] xl:leading-[3.9rem]">
                DE <span className="text-[#17ABFF]">GRESOGONO</span>
              </h1>
            </div>
            <div>
              <p className=" font-semibold text-[1.2625rem] xl:text-[1.5625rem] text-white ">
                1, 2 & 3 Bedrooms Seaside Apartments
              </p>
              <h3 className="font-semibold text-[1.2625rem] xl:text-[1.5625rem] text-white">
                in Dubai Maritime City
              </h3>
            </div>
            <div className="flex gap-4 flex-col text-[#E7EBEF] w-[70%] 2xl:w-full">
              <div className="bg-black bg-opacity-50 p-3 border-l-4 border-[#17ABFF] text-[0.775rem] xl:text-[1rem] 2xl:text-[1.5rem] 2xl:p-4 ">
                Rental Returns of <span className="font-bold">UPTO 11%**</span>
              </div>
              <div className="bg-black bg-opacity-50 p-3 border-l-4 border-[#17ABFF] text-[0.775rem] xl:text-[1rem] 2xl:text-[1.5rem] 2xl:p-4">
                Capital Appreciation of{" "}
                <span className="font-bold">UPTO 32%**</span>
              </div>
            </div>
          </div>

          <PricingCard />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
      <div className="lg:hidden">
        <HeroMobile />
      </div>
    </div>
  );
};

export default Hero;
