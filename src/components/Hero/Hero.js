"use client"
import React from "react";
// import HeroBG from '@/images/bg-hero.png';
// import Image from 'next/image';

// icons
import { IoGlobeSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

export default function MyComponent() {
  return (
    <>
      <div className="flex flex-col rounded-none ml-20">
        <div className="flex relative flex-col justify-center items-center px-16 py-32 w-full min-h-[501px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          {/* <Image
            loading="lazy"
            alt=""
            src={HeroBG}
            className="object-fill absolute w-100 inset-0 size-full"
          /> */}
          <div className="relative px-9 pt-9 pb-16 mb-0 max-w-full bg-green-700 rounded-[30px] w-[933px] max-md:px-5 max-md:mb-2.5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col w-full max-md:mt-10">
                  <div className="text-4xl text-white">
                    Need Help Planning?
                    <br />
                    Go with the experts.
                  </div>
                  <div className="flex gap-5 justify-between pl-4 mt-5 max-w-full text-black bg-white rounded-xl w-[322px]">
                    <div className="my-auto text-xs">Enter your budget</div>
                    <button className="z-10 px-6 py-2.5 text-sm whitespace-nowrap bg-amber-400 rounded max-md:px-5 max-md:-mr-0.5">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col items-start mt-5 w-full text-base text-white max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-1 self-stretch">
                    <FaGlassMartiniAlt className="mt-1" />
                    <h2 className="flex-auto w-[424px] max-md:max-w-full">
                      Over 100,000 Restaurants, Tourist Experiences, Lodgings &
                      More
                    </h2>
                  </div>
                  <div className="flex gap-1.5 mt-3">
                    <MdAttachMoney className="mt-1" />
                    <div className="flex-auto">
                      Any budget, group size or dietary restrictions
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-4">
                  <IoGlobeSharp className="mt-1" />
                    <div className="basis-auto">Anywhere in the world</div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    <TbChecklist className="mt-1" />
                    <div className="basis-auto">
                      See Your Itinerary Made Simple
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
