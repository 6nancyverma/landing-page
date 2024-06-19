import React from "react";
import Button from "./Button";

const PricingCard = () => {
  return (
    <div className="max-w-xs 2xl:max-w-[25rem] rounded-[1rem] overflow-hidden shadow-lg animate-wiggle">
      <div className=" bg-[#396a92] bg-opacity-70 bg-blur px-4 py-4 flex flex-col justify-center items-start ">
        <div className="px-6 py-4 text-start 2xl:px-7 2xl:py-7">
          <p className="text-[0.8125rem] mb-2 text-white font-semibold leading-[1.21875rem] tracking-[15%] 2xl:mb-3">
            PRICING STARTS FROM
          </p>
          <h1 className="text-white text-[3rem] font-medium leading-[3.9rem] 2xl:text-[3.5rem] 2xl:mb-3">
            $425,000
          </h1>
          <h1 className="text-[1.5rem] text-white font-normal leading-[2.223125rem] 2xl:text-[2rem]">
            AED 1.3 Million
          </h1>
        </div>
        <div className="px-6 py-4 w-full 2xl:px-6 2xl:py-6">
          <Button variant="primary" size="large">
            GET A PRESENTATION
          </Button>
        </div>
      </div>
      <p className="text-[#98C5E8] font-normal text-[0.8125rem] leading-[1.0625rem] bg-[#398dd2] bg-opacity-70 bg-blur p-4 ">
        Get an Expert&apos;s Presentation of Real Estate in Dubai for Life and
        investment
      </p>
    </div>
  );
};

// #98C5E8
export default PricingCard;
