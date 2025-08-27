"use client";
import React from "react";
import Image from "next/image";

type ButtonProps = {
  label?: React.ReactNode;
  alt?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className,
  iconSrc,
  alt = "Button Icon",
  iconWidth = 24,
  iconHeight = 24,
  iconPosition = "right",
  disabled,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-[106px] h-9 font-montserrat cursor-pointer transition flex items-center justify-center gap-2 ${
        disabled || loading ? "opacity-70 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {iconPosition === "left" && iconSrc && (
            <Image
              src={iconSrc}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
            />
          )}
          {label}
          {iconPosition === "right" && iconSrc && (
            <Image
              src={iconSrc}
              alt={alt}
              width={iconWidth}
              height={iconHeight}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
