"use client";
import React from "react";
import { Images } from "../../../public/assets";
import Button from "../common/Button";
import Link from "next/link";
import FormInputField from "../form/form-elements/FormInputField";
import Checkbox from "../form/form-elements/CheckboxField";

interface SignInProps {
  onSignIn: () => void;
  onClose: () => void;
}

export default function SignIn({ onSignIn }: SignInProps) {
  const handleSignInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onSignIn();
  };
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-gray-dark mt-[93px] mb-4">
        Sign Up
      </h2>
      <h3 className="font-normal text-[13px] text-light-gray mt-1">
        Fill in your details to get started!
      </h3>
      <div className="w-full mt-10">
        <label
          htmlFor="firstname"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          First Name
        </label>
        <FormInputField type="text" placeholder="Enter your first name" />
      </div>
      <div className="w-full mt-7">
        <label
          htmlFor="lastname"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Last Name
        </label>
        <FormInputField type="text" placeholder="Enter your last name" />
      </div>
      <div className="w-full mt-7">
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
          htmlFor="phonenumber"
          className="block font-bold text-[15px] text-black text-left mb-1"
        >
          Phone Number
        </label>
        <FormInputField
          type="number"
          placeholder="Enter your phone number"
          max={10}
        />
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
      <div className="w-full mt-6 flex justify-start md:justify-center">
        <Checkbox
          id="terms-checkbox"
          label="I accept the Terms & Conditions by SeakSpaces"
          className="font-inter font-normal text-xs md:text-sm text-gray-lightest text-left md:text-center"
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
          className="w-full xs:w-auto h-auto flex items-center justify-center gap-[13px] py-2 md:py-4 pl-7 md:pl-[43px] pr-7 md:pr-[47px] border border-light-gray/50 rounded-[5px] text-light-gray font-bold hover:border-light-gray"
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
          className="w-full sm:w-auto h-auto flex items-center justify-center gap-[13px] py-2 md:py-4 pl-7 md:pl-[43px] pr-7 md:pr-[47px] border border-light-gray/50 rounded-[5px] text-light-gray font-bold hover:border-light-gray"
        />
      </div>
      <Button
        label="Sign Up"
        className="my-10 bg-purpule-dark text-white py-3 px-12 rounded-lg font-semibold text-base hover:bg-purple-700 transition cursor-pointer w-full md:w-auto h-auto"
      />
      <p className="font-inter font-semibold text-sm md:text-[17px] text-center text-gray-lightest">
        Already have an account?
        <Link
          href="#"
          onClick={handleSignInClick}
          className="text-gray-lightest hover:text-blue-600 hover:underline ml-2"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
