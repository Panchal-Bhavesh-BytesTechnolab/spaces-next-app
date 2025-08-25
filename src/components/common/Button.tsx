"use client";
import React from "react";
import Image from "next/image";

type ButtonProps = {
  label?: React.ReactNode;
  alt?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  iconSrc,
  alt = "Button Icon",
  iconWidth = 24,
  iconHeight = 24,
  iconPosition = "right",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[106px] h-9 font-montserrat cursor-pointer transition flex items-center justify-center gap-2 ${className}`}
    >
      {iconPosition === "left" && iconSrc && (
        <Image src={iconSrc} alt={alt} width={iconWidth} height={iconHeight} />
      )}
      {label && <span>{label}</span>}
      {iconPosition === "right" && iconSrc && (
        <Image src={iconSrc} alt={alt} width={iconWidth} height={iconHeight} />
      )}
    </button>
  );
};

export default Button;
