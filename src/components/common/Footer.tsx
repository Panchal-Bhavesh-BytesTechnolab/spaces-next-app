"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Images } from "../../../public/assets";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const footerLinks = {
    Company: ["About", "Press", "Careers", "Terms", "Privacy"],
    Explore: ["Activities", "Locations", "Resources", "Ambassador Program"],
    Host: ["List your space", "Community", "Become a Vendor"],
    Support: [
      "Help Center",
      "Trust and Safety",
      "Cookie preferences",
      "Report vulnerability",
    ],
  };

  return (
    <footer className="bg-gray-footer pt-8 lg:pt-[57px] pb-4 lg:pb-[38px]">
      <div className="container mx-auto lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8">
          <div className="flex-shrink-0 flex justify-center lg:justify-start items-center lg:items-start ">
            <Image
              src={Images.Logo}
              alt="SeakSpaces Logo"
              width={180}
              height={50}
              className="object-contain w-[91.43px] lg:w-[180px] h-auto"
            />
          </div>

          <div className="hidden lg:flex lg:gap-[105px] xl:gap-[116px]">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-lg pb-[23px]">{title}</h4>
                <ul className="space-y-1 text-[15px] leading-8 text-light-gray mb-[85px]">
                  {links.map((link) => (
                    <li key={link} className="cursor-pointer hover:underline">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:hidden w-full">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="py-2">
                <button
                  className="flex justify-between items-center w-full font-semibold"
                  onClick={() => toggleSection(title)}
                >
                  {title}
                  {openSections.includes(title) ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {openSections.includes(title) && (
                  <ul className="mt-2 pl-2 space-y-2 text-sm text-gray-700">
                    {links.map((link) => (
                      <li key={link} className="cursor-pointer hover:underline">
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center text-center lg:justify-between items-center border-t border-gray-line pt-6 mt-6">
          <p className="text-[13px] font-normal font-montserrat text-gray-lightest pt-4 lg:pt-0 lg:mb-0 order-2 lg:order-1">
            Copyright © 2024 SeakSpaces. All rights reserved.
          </p>

          <div className="flex gap-4 order-1 lg:order-2">
            {["facebook", "instagram", "x", "tiktok"].map((icon) => (
              <button
                key={icon}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-lightest hover:bg-gray-400 cursor-pointer"
              >
                <Image
                  src={`/assets/icons/${icon}.svg`}
                  alt={icon}
                  width={11}
                  height={11}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
