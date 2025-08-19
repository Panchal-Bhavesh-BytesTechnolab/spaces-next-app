"use client";
import React from "react";
import Image from "next/image";

type ButtonProps = {
  label?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  iconSrc,
  alt = "Button Icon",
  iconWidth = 24,
  iconHeight = 24,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[106px] h-9 rounded-md font-montserrat  cursor-pointer transition ${className}`}
    >
      {label}
      {iconSrc && (
        <Image src={iconSrc} alt={alt} width={iconWidth} height={iconHeight} />
      )}
    </button>
  );
};

export default Button;
