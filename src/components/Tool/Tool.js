"use client"

import React from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Tool() {
  return (
    <>
      <div className="flex flex-col rounded-none max-w-[960px] ml-28">
        <div className="flex flex-col px-20 py-14 bg-green-700 ml-12 rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="self-center text-4xl font-bold text-center text-white max-md:max-w-full">
            You need a travel tool that works
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-white max-md:mt-10">
                  <div className="text-3xl font-bold max-md:mr-0.5">
                    <FaRegCheckSquare className="mb-4"/>
                    On The Dot
                  </div>
                  <div className="mt-4 text-base">
                    Get expense tracking you can rely on.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-white max-md:mt-10">
                  <div className="text-3xl font-bold max-md:mr-0.5">
                    <PiHamburgerLight className="mb-4"/>
                    Lots of variety
                  </div>
                  <div className="mt-4 text-base">
                    Find food, tourist destinations, once in a lifetime
                    experiences and more for any budget.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-white max-md:mt-10">
                  <div className="text-3xl font-bold max-md:mr-0.5">
                    <FaPhone className="mb-4"/>
                    24/7 Support
                  </div>
                  <p className="mt-4 text-base">
                    Reach a trained AI chatbot in seconds. If more support is
                    needed, a human will reach out to support you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}