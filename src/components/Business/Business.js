"use client"
import React from "react";
import TravelBG from '@/images/travel-bg.png';
import Image from 'next/image';

export default function Business() {
  return (
    <>
      <div className="rounded-none mt-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-2xl font-medium text-black max-md:mt-10">
              <h1 className="self-stretch text-4xl font-bold max-md:mr-2.5 sm:text-md">
                Put Travel on Repeat and Rest
              </h1>
              <h3 className="self-stretch mt-10">
                Customizable Travel Expense Tools
              </h3>
              <p className="mt-4 text-base">
                You set the budget, company policies and location. Employees use a app to find
                what they need to travel from a large selection.
              </p>
              {/* Flexible Section */}
              <h3 className="mt-9">Flexible and Scalable</h3>
               <p className="mt-4 text-base">
                You can easily lower your budget and make your budget higher. Company policies, changed? No problem, just adjust 
                your company policy.
               </p>
               {/* Easy Section */}
              <h3 className="mt-10 max-md:mt-10">Seriously Easy and User Friendly.</h3>
              <p className="mt-4 text-base">
                Once you have an account, JetHR takes care of all the travel
                planning. Start focusing on your journey and focusing on the adventure.
              </p>
              <button className="px-4 py-2.5 mt-10 text-base font-semibold text-center bg-amber-400 rounded-xl">
                Let’s Go!
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image 
              src={TravelBG}
              width={500}
              height={500}
              alt="Airplane flying through the golden hour"
              className="object-contain w-full rounded-3xl aspect-[0.9] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}