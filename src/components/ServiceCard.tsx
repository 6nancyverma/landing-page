import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="m-auto p-4">
      <div className="relative w-12 h-12 mb-2 m-auto">
        <Image src={icon} alt="Icon" layout="fill" objectFit="contain" />
      </div>
      <h4 className="text-[#00357B] text-[1rem] leading-4 m-auto capitalize text-center mb-2">
        {title}
      </h4>
      <h1 className="text-[#00357B] text-[1.875rem] leading-[1.875rem] tracking-[3%] m-auto text-center">
        {subtitle}
      </h1>
      <div>
        <Image
          src="/service/bottomBorder.png"
          alt="Bottom border"
          width={200}
          height={100}
          className=" w-[70%] m-auto mt-2"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
