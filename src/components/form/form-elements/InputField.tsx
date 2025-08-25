"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  containerClassName = "",
  labelClassName = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {label && (
        <label
          className={`font-inter font-bold text-[18px] leading-9 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className={`font-inter font-normal text-[16px] text-light-gray outline-none ${className}`}
      />
    </div>
  );
};

export default InputField;
