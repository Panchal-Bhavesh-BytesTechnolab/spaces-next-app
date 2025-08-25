import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  isGradient: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  isGradient,
  width,
  height,
  className = "",
}) => {
  const cardClasses = isGradient
    ? "bg-gradient-to-br from-[#EE4B8F] to-[#FEB25C] text-white"
    : "bg-white text-black border border-gray-200";

  return (
    <div
      className={`flex flex-col rounded-2xl shadow-lg w-full pt-3 px-3 pb-[43px] max-w-sm overflow-hidden transition-transform duration-300 hover:scale-105 ${cardClasses} ${className}`}
    >
      <div className="relative w-full h-[200px] aspect-[1.5]">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="px-3 pb-7 text-start flex flex-col justify-start">
        <h3
          className={`text-[25px] font-semibold font-montserrat mt-5 text-start`}
        >
          {title}
        </h3>
        <p
          className={`text-sm font-normal font-montserrat text-start opacity-80 leading-5`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
