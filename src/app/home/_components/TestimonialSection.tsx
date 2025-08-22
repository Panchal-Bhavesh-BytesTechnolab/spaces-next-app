"use client";
import React from "react";
import Image from "next/image";
import { Images } from "../../../../public/assets";
import Button from "@/components/common/Button";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between rounded-3xl bg-gradient-to-r from-[#FEB25C] to-[#EE4B8F] py-[87px] pl-[122px] pr-[172px]">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={Images.Testimonial_Section_First}
              alt="Testimonial Image"
              width={389}
              height={462}
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-start w-full md:w-1/2 text-white">
            <h2 className="font-montserrat font-medium text-3xl md:text-[45px] leading-tight mb-4 uppercase">
              Earn Income with <br /> SeakSpaces
            </h2>
            <p className="text-base font-normal md:text-lg mb-8 leading-[27px]">
              eget placerat mi. Phasellus eget ultricies massa, vel convallis
              turpis. Vivamus nunc leo, laoreet a dui in, imperdiet auctor
              dolor. Integer non odio consectetur, dignissim velit vitae,
              tristique justo. Aliquam et felis nulla. Ut ut pretium mauris, in
              scelerisque erat. Etiam nulla enim, laoreet et dignissim quis,
              consectetur id libero. Proin tincidunt ut magna sed ultrices.
              Suspendisse at mauris enim. In quis libero id arcu commodo
              porttitor sit amet ac mauris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                label="List Your Space"
                className="bg-[#5D1F5D] text-white min-w-[160px] px-6 py-6 rounded-full font-medium text-[12px] text-center flex justify-center items-center uppercase cursor-pointer hover:bg-orange-dark"
              />
              <Button
                label="Become a Vendor"
                className="bg-white text-[#5D1F5D] min-w-[160px] px-6 py-6 rounded-full font-medium text-[12px] text-center flex justify-center items-center uppercase cursor-pointer hover:bg-orange-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
