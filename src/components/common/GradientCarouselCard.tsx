"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface GradientCarouselCardProps {
  images: (string | StaticImageData)[];
  title: string;
  subtitle: string;
  paragraph: string;
}

const GradientCarouselCard: React.FC<GradientCarouselCardProps> = ({
  images,
  title,
  subtitle,
  paragraph,
}) => {
  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row h-[357px] md:h-[776px]">
      <div className="w-full md:w-1/2 relative h-full">
        <Image src={images[0]} alt={title} fill className="object-cover" />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center bg-gradient-to-r from-[#EE4B8F] to-[#FEB25C] text-white">
        <h2 className="font-inter md:font-bold font-medium text-3xl md:text-[40px] lg:text-[60px] xl:text-[75px] md:mb-[29px] mb-3.5 md:leading-15 lg:leading-20 uppercase md:normal-case">
          {title}
        </h2>
        <p className="font-montserrat text-base md:text-3xl md:font-medium font-normal mb-2 md:mb-3">
          {subtitle}
        </p>
        <p className="hidden md:block font-montserrat text-base font-medium opacity-90">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
export default GradientCarouselCard;
