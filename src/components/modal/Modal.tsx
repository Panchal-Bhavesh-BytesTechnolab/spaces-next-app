"use client";
import React, { ReactNode } from "react";
import Button from "../common/Button";
import { Images } from "../../../public/assets";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-[270px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[80vh] p-10 md:p-8 overflow-y-auto">
        <Button
          onClick={onClose}
          iconSrc={Images.Close_Icon}
          iconHeight={27}
          iconWidth={27}
          className="absolute top-5 md:top-7 right-5 md:right-11 text-gray-600 hover:text-black w-auto h-auto"
        />
        {children}
      </div>
    </div>
  );
}
