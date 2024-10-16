"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[350px] h-[350px]">
          <Image
            src="/vectors/documents-dark.png"
            alt="documents image"
            fill
            className="dark:block hidden object-contain"
          />
          <Image
            src="/vectors/documents.png"
            alt="documents image"
            fill
            className="dark:hidden object-contain"
          />
        </div>
        <div className="md:block relative hidden w-[350px] h-[350px]">
          <Image
            src="/vectors/reading-dark.png"
            alt="reading image"
            fill
            className="dark:block hidden object-contain"
          />
          <Image
            src="/vectors/reading.png"
            alt="reading image"
            fill
            className="dark:hidden object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
