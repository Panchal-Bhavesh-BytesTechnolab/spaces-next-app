"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../../../public/assets/index";
import { Menu } from "@/constant/NavbarConstant";
import Button from "@/components/common/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full fixed top-0 z-[999] shadow-lg backdrop-blur bg-white-light/70 h-[66px]">
      <div className="container mx-auto md:px-5 flex items-center justify-between relative h-full">
        <div className="flex items-center relative z-10">
          <div className="fixed -left-5 top-0 -z-10">
            <Image
              src={Images.Header_Section_Design}
              width={450}
              height={320}
              alt="Background"
              priority
              className="lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[270px] w-[250px] h-[150px]"
            />
          </div>
          <div className="md:mt-[80px] mt-[30px] ml-[40px] md:ml-[0px]">
            <Image
              src={Images.Logo}
              alt="Seak Spaces Logo"
              width={193.85}
              height={101}
              priority
              className="md:w-[193.85px] md:h-[101px] w-[91.43px] h-[48px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center gap-2.5 lg:gap-4">
          <nav className="hidden 2xl:flex relative z-10 items-center gap-10">
            <ul className="flex items-center gap-8">
              {Menu.map((data) => (
                <li key={data.id} className="flex items-center gap-2">
                  <Image
                    src={data.image}
                    alt={`${data.name} icon`}
                    width={20}
                    height={20}
                  />
                  <Link
                    href={data.link}
                    className="font-montserrat font-normal text-[16px] leading-7 hover:text-red-600"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              label="Log In"
              className="bg-purpule-dark text-white font-semibold text-base hover:bg-purpule-light rounded-md"
            />
            <Button
              label="Sign Up"
              className="bg-orange-dark text-white font-semibold text-base hover:bg-orange-300 rounded-md"
            />
          </div>

          {!isMenuOpen && (
            <>
              <Button
                iconSrc={Images.Person}
                alt="Open Menu"
                iconWidth={30}
                iconHeight={30}
                className="2xl:hidden block bg-transparent p-0 w-auto h-auto"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
                iconSrc={Images.Hamburger}
                alt="Open Menu"
                iconWidth={30}
                iconHeight={30}
                className="2xl:hidden block bg-transparent p-0 w-auto h-auto"
              />
            </>
          )}
        </div>
      </div>

      <div
        className={`2xl:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative px-6 pt-6 pb-10">
          <Button
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
            iconSrc={Images.Cancel}
            iconHeight={24}
            iconWidth={24}
            alt="Close Menu"
            className="absolute top-6 right-6 cursor-pointer p-0 w-auto h-auto"
          />

          <div className="mb-8">
            <Image
              src={Images.Logo}
              alt="Seak Spaces Logo"
              width={120}
              height={60}
              priority
              className="w-[100px] h-auto sm:w-[150px] sm:h-auto mx-auto"
            />
          </div>
          <ul className="flex flex-col items-center gap-6 mt-10">
            {Menu.map((data) => (
              <li key={data.id} className="flex items-center gap-2">
                <Image
                  src={data.image}
                  alt={`${data.name} icon`}
                  width={20}
                  height={20}
                />
                <Link
                  href={data.link}
                  onClick={toggleMenu}
                  className="font-montserrat font-normal text-[16px] leading-7 hover:text-red-600"
                >
                  {data.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center gap-2.5 mt-5">
              <Button
                label="Log In"
                className="bg-purpule-dark text-white font-semibold text-base rounded-md"
              />
              <Button
                label="Sign Up"
                className="bg-orange-dark text-white font-semibold text-base rounded-md"
              />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
