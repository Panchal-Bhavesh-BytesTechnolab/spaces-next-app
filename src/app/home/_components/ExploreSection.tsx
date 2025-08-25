"use client";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { categories, eventsByCategory } from "../../../constant/ExploreData";
import ImageCard from "../../../components/common/ImageCard";
import Image from "next/image";
import { Images } from "../../../../public/assets/index";

const ExploreSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Party Event");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const events = eventsByCategory[selectedCategory] || [];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full relative overflow-hidden justify-center bg-white">
      <div className="absolute sm:top-0 top-10 left-0 z-0">
        <Image
          src={Images.Section_Second_Design_First}
          width={650}
          height={400}
          alt="Background Image"
          priority
          className="sm:w-[650px] w-full sm:h-[400px] h-[100px] object-cover sm:object-contain"
        />
      </div>
      <div className="absolute top-12 right-0 hidden sm:block z-0">
        <Image
          src={Images.Section_Second_Design_Second}
          width={400}
          height={400}
          alt="Background Image"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="md:text-[80px] text-3xl font-bold font-inter text-gray text-center md:pt-[135px] pt-12">
          Explore Your Possibilities
        </h2>

        <div className="relative sm:pl-[22px] sm:pr-[49px] sm:mb-[70px] mb-8 sm:mt-10 mt-7 ">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200"></div>
          <div className="flex flex-nowrap justify-between gap-6 relative overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer relative"
                onClick={() => setSelectedCategory(cat.name)}
              >
                <span
                  className={`sm:pb-[26px] pb-2 text-lg font-semibold font-inter transition-colors ${
                    selectedCategory === cat.name
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {cat.name}
                </span>
                {selectedCategory === cat.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {selectedIndex > 0 && (
            <button
              onClick={scrollPrev}
              className="absolute sm:left-0 -left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full z-10 cursor-pointer shadow-md"
            >
              <Image
                src={Images.Left_Arrow_Section}
                alt="Previous"
                width={15}
                height={15}
              />
            </button>
          )}

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="embla__slide flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 px-2"
                >
                  <div className="w-full h-full flex justify-center">
                    <ImageCard {...event} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedIndex < events.length - 4 && (
            <button
              onClick={scrollNext}
              className="absolute sm:right-0 -right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center rounded-full z-10 cursor-pointer shadow-md"
            >
              <Image
                src={Images.Right_Arrow_Section}
                alt="Next"
                width={15}
                height={15}
              />
            </button>
          )}
        </div>

        <div className="w-full mx-auto mt-[78px] sm:block hidden">
          <div className="w-full h-1 bg-gray-200 overflow-hidden">
            <div
              className="h-1 bg-black transition-all duration-300 "
              style={{
                width: `${((selectedIndex + 1) / events.length) * 200}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
