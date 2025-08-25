"use client";
import React from "react";
import Image from "next/image";
import { Images } from "../../../../public/assets";
import Button from "@/components/common/Button";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-white sm:py-16 pt-10 sm:pt-0 xl:pb-0 mb-[64px]">
      <div className="container mx-auto xl:px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between rounded-3xl bg-gradient-to-r from-[#FEB25C] to-[#EE4B8F] px-4 xl:px-0 pt-0 pb-4 xl:py-[87px] xl:pl-[122px] xl:pr-[172px]">
          <div className="flex-shrink-0 w-full xl:w-1/2 flex justify-center xl:justify-start mb-6 xl:mb-0">
            <div className="realtive w-[284px] xl:h-[462px] xl:w-[389px]">
              <Image
                src={Images.Testimonial_Section_First}
                alt="Testimonial Image"
                width={389}
                height={462}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start w-full xl:w-1/2 text-white text-left">
            <h2 className="font-montserrat font-bold xl:font-medium text-[22px] sm:text-3xl xl:text-[45px] xl:leading-tight leading-9 mb-4 uppercase">
              Earn Income with <br className="hidden xl:block" /> SeakSpaces
            </h2>
            <p className="text-sm sm:text-base font-normal xl:text-xl mb-4 xl:mb-8 xl:leading-[27px]">
              eget placerat mi. Phasellus eget ultricies massa, vel convallis
              turpis. Vivamus nunc leo, laoreet a dui in, imperdiet auctor
              dolor. Integer non odio consectetur, dignissim velit vitae,
              tristique justo. Aliquam et felis nulla. Ut ut pretium mauris, in
              scelerisque erat. Etiam nulla enim, laoreet et dignissim quis,
              consectetur id libero. Proin tincidunt ut magna sed ultrices.
              Suspendisse at mauris enim. In quis libero id arcu commodo
              porttitor sit amet ac mauris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                label="List Your Space"
                className="bg-[#5D1F5D] text-white w-full sm:w-auto px-6 py-3 rounded-full font-medium text-[14px] text-center flex justify-center items-center uppercase cursor-pointer hover:bg-orange-dark"
              />
              <Button
                label="Become a Vendor"
                className="bg-white text-[#5D1F5D] w-full sm:w-auto px-6 py-3 rounded-full font-medium text-[14px] text-center flex justify-center items-center uppercase cursor-pointer hover:bg-orange-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
