"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "../../../public/assets/index";
import { accountOptions } from "@/constant/ChooseAccount";
import Button from "../common/Button";

interface ChooseAccountProps {
  onSelectRole: (role: string, action: "signin" | "signup") => void;
  nextAction: "signin" | "signup";
}

export default function ChooseAccount({
  onSelectRole,
  nextAction,
}: ChooseAccountProps) {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="font-bold text-lg md:text-[25px] text-black">
        Choose your accounts
      </h2>
      <h3 className="font-bold text-xl md:text-4xl text-gray-dark mt-2">
        How would like to use SeakSpaces?
      </h3>

      <div className="space-y-4 mt-8 ">
        {accountOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectRole(option.id, nextAction)}
            className="flex items-center justify-between gap-[33px] p-4 rounded-xl shadow-xl hover:shadow-md hover:bg-gray-50 cursor-pointer transition w-full"
          >
            <div className="flex items-center justify-between gap-[34px]">
              <div className="hidden md:block w-[114px] h-[122px] relative rounded-md overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-left">
                <p className="font-bold text-[18px] md:text-[25px] text-base-black">
                  {option.title}
                </p>
                <p className="font-inter font-normal text-base md:text-lg text-light-gray">
                  {option.description}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#FEB25C] to-[#EE4B8F] text-white">
              <Image
                src={Images.Right_Arrow_White}
                alt="click to login"
                width={22}
                height={17}
                className="w-[15px] md:w-[22px]"
              />
            </div>
          </button>
        ))}
      </div>
      <div className="mt-[45px] flex items-center justify-center flex-col">
        <p className="font-inter font-normal text-base md:text-[11px] text-black">
          SeakSpaces is currently limited to the following states:
        </p>
        <Link
          href="#"
          className="font-inter font-normal text-lg border-b-2 text-blue-primary hover:text-purple-900"
        >
          NY, CT, RI, MA, NJ
        </Link>
      </div>
      <Button
        label="Continue"
        className="my-10 bg-purpule-dark text-white py-3 px-16 rounded-lg font-semibold text-base hover:bg-purple-700 transition cursor-pointer w-full md:w-auto h-auto"
      />
    </div>
  );
}
