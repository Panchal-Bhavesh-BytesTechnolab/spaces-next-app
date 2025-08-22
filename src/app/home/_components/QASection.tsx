"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import GradientCarouselCard from "@/components/common/GradientCarouselCard";
import { slides } from "@/constant/QASection";

const QASection: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <section className="w-full relative justify-center bg-white py-10">
      <div className="pl-10 mx-auto relative z-10">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div className="embla__slide flex-[0_0_90%] px-4" key={index}>
                <GradientCarouselCard
                  images={slide.images}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  paragraph={slide.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QASection;
