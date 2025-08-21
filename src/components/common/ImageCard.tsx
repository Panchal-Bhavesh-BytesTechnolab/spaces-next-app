import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-[287px] h-[365px] rounded-2xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 text-white">
        <h3 className="text-lg font-bold font-montserrat">{title}</h3>
        <p className="text-sm font-medium font-montserrat">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
