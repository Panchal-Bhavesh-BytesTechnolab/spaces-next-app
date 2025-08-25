"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Images } from "../../../../public/assets/index";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  altText?: string;
  placeholderColor?: string;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type = "text",
      name,
      value,
      placeholder,
      className = "",
      placeholderColor = "placeholder:text-light-gray",
      iconSrc,
      altText = "icon",
      onChange,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === "password";

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative w-full">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={altText}
            width={20}
            height={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        )}
        <input
          type={isPasswordType ? (showPassword ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          ref={ref}
          className={`w-full py-[22px] px-[13px] mb-2 border border-light-gray/50 rounded-[10px] focus:outline-none focus:ring-1 ${placeholderColor} ${
            iconSrc ? "pl-10" : ""
          } ${isPasswordType ? "pr-10" : ""} ${className}`}
          {...rest}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            tabIndex={-1}
          >
            <Image
              src={showPassword ? Images.Eye_Off : Images.Eye_Show}
              alt="Toggle password visibility"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>
        )}
      </div>
    );
  }
);

FormInputField.displayName = "FormInputField";
export default FormInputField;
