"use client"

import React from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Tool() {
  return (
    <>
      <div className="flex flex-col ml-[130px] rounded-none max-w-[968px]">
        <div className="flex flex-col px-20 py-14 w-full bg-green-700 rounded-3xl max-md:px-5 max-md:max-w-full">
          <h1 className="self-center text-4xl font-bold text-center text-white max-md:max-w-full">
            You need travel that works
          </h1>
          <div className="max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start text-white max-md:mt-10">
                  <div className="mt-[50px] text-4xl font-bold text-center">
                    <FaRegCheckSquare className="mb-4"/>
                    On The Dot
                  </div>
                  <p className="self-stretch mt-5 text-base">
                    Get the expense tracking you can rely on.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-white max-md:mt-10">
                  <div className="mt-12 text-4xl font-bold text-center">
                    <PiHamburgerLight className="mb-4"/>
                    Lots of variety
                  </div>
                  <p className="mt-7 text-base w-[249px] max-md:mr-2.5">
                    Find food, tourist destinations, once in a lifetime
                    experiences and more for any budget.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-[45px] text-white max-md:mt-10">
                  <div className="text-4xl font-bold text-center max-md:mr-0.5">
                    <FaPhone className="mb-4"/>
                    24 / 7 Support
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