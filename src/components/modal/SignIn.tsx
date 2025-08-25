"use client";
import React from "react";
import { Images } from "../../../public/assets";
import Button from "../common/Button";
import Link from "next/link";
import FormInputField from "../form/form-elements/FormInputField";

interface SignInProps {
  onSignUp: () => void;
  onClose: () => void;
}

export default function SignIn({ onSignUp, onClose }: SignInProps) {
  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSignUp();
  };
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-dark mt-[93px] mb-4">
        Sign In
      </h2>
      <h3 className="font-normal text-[13px] text-light-gray mt-1">
        Fill in your details to log in!
      </h3>
      <div className="w-full mt-10">
        <label
          htmlFor="email"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Email Address
        </label>
        <FormInputField type="email" placeholder="Enter your email" />
      </div>

      <div className="w-full mt-7">
        <label
          htmlFor="password"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Password
        </label>
        <FormInputField type="password" placeholder="Enter your password" />
      </div>

      <div className="w-full flex justify-end">
        <Button
          label="Forgot Password?"
          onClick={onClose}
          className="w-auto h-auto mt-3 font-semibold text-base font-inter text-end cursor-pointer hover:text-gray-600"
        />
      </div>

      <div className="flex flex-row items-center justify-between gap-[11px] mt-[33px]">
        <Button
          iconSrc={Images.Google_Icon}
          iconHeight={30}
          iconWidth={30}
          label={
            <>
              <span className="hidden sm:inline">Google</span>
            </>
          }
          iconPosition="left"
          className="w-full sm:w-auto h-auto flex items-center justify-center gap-[13px] py-4 pl-[43px] pr-[47px] border border-light-gray/50 rounded-[5px] text-light-gray font-bold hover:border-light-gray"
        />
        <Button
          iconSrc={Images.Facebook_New_Icon}
          iconHeight={30}
          iconWidth={30}
          label={
            <>
              <span className="hidden sm:inline">Facebook</span>
            </>
          }
          iconPosition="left"
          className="w-full sm:w-auto h-auto flex items-center justify-center gap-[13px] py-4 pl-[43px] pr-[47px] border border-light-gray/50 rounded-[5px] text-light-gray font-bold hover:border-light-gray"
        />
      </div>
      <Button
        label="Sign In"
        className="my-10 bg-purpule-dark text-white py-3 px-12 rounded-lg font-semibold text-base hover:bg-purple-700 transition cursor-pointer w-full md:w-auto h-auto"
      />
      <p className="font-inter font-semibold text-sm md:text-[17px] text-center text-gray-lightest">
        Don’t have an account?
        <Link
          href="#"
          onClick={handleSignUpClick}
          className="text-gray-lightest hover:text-blue-600 hover:underline ml-2"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
