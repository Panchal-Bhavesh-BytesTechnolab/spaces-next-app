"use client";
import React from "react";
import Image from "next/image";
import { Images } from "../../../../public/assets/index";
import Button from "@/components/common/Button";
import InputField from "@/components/form/form-elements/InputField";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden justify-center">
      <Image
        src={Images.Hero_Section}
        alt="Hero Section"
        fill
        priority
        className="bg-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container sm:mx-auto mx-5 relative">
        <div className="pt-[40vw] xl:pt-[18vw] pb-[20vw] flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full max-w-[1033px] text-center">
            <h1 className="font-bold font-inter text-[30px] sm:text-[55px] text-white leading-tight">
              Find Your Perfect <br className="hidden sm:block" /> Event Space
              and Vendor
            </h1>
          </div>
          <div className="w-full max-w-[1033px] text-center mt-4">
            <p className="font-medium font-inter text-[16px] sm:text-[22px] text-white mt-4">
              Discover unique venues and vendors for every occasion. From
              intimate gatherings to grand celebrations.
            </p>
          </div>
          <div className="w-full max-w-[316px] sm:max-w-[400px] xl:max-w-[1033px] h-[356px] xl:h-[102px] bg-white rounded-[20px] flex flex-col xl:flex-row items-center px-5 xl:px-10 mt-10 mb-[80px] py-5 xl:py-0">
            <InputField
              label="What are you planning?"
              placeholder="Enter your activity"
              containerClassName="w-full xl:w-64 xl:border-r border-b xl:border-b-0 border-border-gary mb-4 pb-4 xl:pb-0 xl:mb-0"
            />
            <InputField
              label="Where?"
              placeholder="Enter a city or address"
              containerClassName="w-full xl:w-80 xl:px-[77px] xl:border-r border-b xl:border-b-0 border-border-gary mb-4 pb-4 xl:pb-0 xl:mb-0"
            />
            <InputField
              label="When?"
              placeholder="Anytime"
              containerClassName="w-full xl:w-64 xl:pl-[50px] mb-4 xl:mb-0"
            />
            <div className="w-full xl:w-auto">
              <Button
                label="Search"
                iconSrc={Images.Rigth_Arrow}
                className="font-inter font-bold text-[16px] leading-[50px] bg-purpule-light text-white w-full xl:w-[144px] h-[54px] rounded-[10px] flex flex-row justify-center items-center gap-3.5 cursor-pointer hover:bg-orange-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
