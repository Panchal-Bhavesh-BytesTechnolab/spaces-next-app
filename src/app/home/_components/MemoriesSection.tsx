"use client";
import React from "react";
import Image from "next/image";
import { Images } from "../../../../public/assets";
import Button from "@/components/common/Button";

const MemoriesSection: React.FC = () => {
  return (
    <section className="w-full relative bg-white py-[100px] md:py-24 px-[38px]">
      <div className="absolute xl:-bottom-35 -bottom-5 sm:-bottom-10 left-0 z-0 w-[150px] md:w-[250px] xl:w-[350px]">
        <Image
          src={Images.Memories_Section_Design}
          alt="Background Decoration Left"
          height={200}
          width={200}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="absolute xl:-top-30 -top-10 sm:-top-6 right-0 z-0 w-[150px] md:w-[250px] xl:w-[350px]">
        <Image
          src={Images.Memories_Section_Design}
          alt="Background Decoration Right"
          height={200}
          width={200}
          priority
          className="rotate-180 w-full h-auto"
        />
      </div>
      <div className="w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex justify-start self-start md:pb-32 md:order-1 order-3 w-[160px] md:w-[300px] lg:w-[320px] ">
          <Image
            src={Images.Memories_Section_First}
            alt="Memories Left"
            width={320}
            height={419}
            className="rounded-2xl object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 px-4 order-2">
          <h2 className="font-montserrat font-bold text-[27px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[110px] mb-6 leading-tight">
            CREATE <br className="hidden md:block" /> SPECIAL <br />
            <span className="bg-gradient-to-b from-[#FEB25C] to-[#EE4B8F] bg-clip-text text-transparent">
              MEMORIES
            </span>
          </h2>
          <Button
            label="Discover the possibilities"
            iconSrc={Images.Right_Arrow_Section_Black}
            iconWidth={20}
            iconHeight={20}
            className="font-montserrat text-xs md:text-base font-black md:font-semibold text-black mx-auto w-[230px] flex justify-center items-center gap-2 cursor-pointer uppercase md:normal-case"
          />
        </div>

        <div className="flex justify-end self-end md:order-3 order-1 w-[160px] md:w-[320px]">
          <Image
            src={Images.Memories_Section_Second}
            alt="Memories Right"
            width={320}
            height={419}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
