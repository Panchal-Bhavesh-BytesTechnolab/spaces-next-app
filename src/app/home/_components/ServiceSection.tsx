import React from "react";
import { services } from "../../../constant/ServiceData";
import ServiceCard from "@/components/common/ServiceCard";
import Button from "@/components/common/Button";
import { Images } from "../../../../public/assets";
import Image from "next/image";

const ServiceSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden justify-center bg-white">
      <div className="absolute top-32 left-0 z-0 hidden sm:block">
        <Image
          src={Images.Service_Section_Design_First}
          width={150}
          height={200}
          alt="Background Image"
          priority
        />
      </div>
      <div className="absolute bottom-28 right-0 hidden sm:block z-0">
        <Image
          src={Images.Service_Section_Design_Second}
          width={200}
          height={200}
          alt="Background Image"
          priority
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="w-full flex xl:flex-row flex-col items-center justify-between lg:gap-10 gap-6 mt-[64px] lg:mb-[82px] mb-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[80px] font-inter font-bold text-black md:leading-16 lg:leading-24 leading-10 md:text-center xl:text-left max-w-[728px]">
            A SERVICE FOR EVERY OCCASION
          </h2>
          <p className="text-black text-start max-w-[438px] text-base xl:text-[18px] font-normal font-montserrat leading-5 xl:leading-8">
            Etiam lacinia nibh nibh, et vehicula dolor convallis tempor. <br />
            Quisque at convallis dui, eget placerat mi. Phasellus eget ultricies
            massa, vel convallis turpis. Vivamus nunc leo, laoreet a dui in,
            imperdiet auctor dolor. Integer non odio consectetur,
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[37px] xl:pl-[80px] xl:pr-[109px] place-items-center">
          {services.map((service, index) => {
            let paddingTopClass = "";
            let hiddenClass = "";

            if (index % 3 === 1) {
              paddingTopClass = "xl:mt-[40px] mt-[24px]";
            } else if (index % 3 === 2) {
              paddingTopClass = "xl:mt-[85px] mt-[24px]";
            }

            if (index >= 3 && index <= 5) {
              hiddenClass = "hidden md:block";
            }

            return (
              <ServiceCard
                key={index}
                title={service.title}
                width={291}
                height={200}
                description={service.description}
                image={service.image}
                isGradient={service.isGradient}
                className={`w-[314px] h-[414px] ${paddingTopClass} ${hiddenClass}`}
              />
            );
          })}
        </div>
        <div className="mx-auto flex justify-center items-center xl:mt-[64px] xl:mb-[106px] mt-[24px]">
          <Button
            label="Browse All Services"
            iconSrc={Images.Rigth_Arrow}
            iconWidth={20}
            iconHeight={20}
            className="rounded-full bg-purpule-light text-white font-semibold py-5 px-8  shadow-lg transition-all hover:bg-purple-700 w-[242px] flex justify-center items-center gap-2 cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
