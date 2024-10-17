"use client"
import React from "react";
import Image from "next/image";
import Coinbase from '../../../public/images/hero/coinbase.png';
import Atlassian from '../../../public/images/hero/atlassian.png';
import Figma from '../../../public/images/hero/figma.png';

export default function Social() {
  return (
    <>
      <div className="flex flex-col mt-11 justify-center ml-28">
        <h3 className="self-center text-3xl font-medium text-black max-md:max-w-full">
          JetHR Travel Management Tools are Trusted By
        </h3>
        <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                src={Coinbase}
                alt="Coinbase logo"
                className="object-contain mt-8 ml-12 aspect-[4.33] w-[294px] max-md:mt-10"
              />
            </div>
            {/* Atlassian Section */}
            <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
              <Image
                src={Atlassian}
                alt="Atlassian logo"
                className="object-contain grow w-full aspect-[2.58] max-md:mt-10"
              />
            </div>
            {/* Figma Section */}
            <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
              <Image
                src={Figma}
                alt="Figma logo"
                className="object-contain aspect-[3.62] mt-8 w-[294px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}