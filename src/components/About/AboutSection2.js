"use client"
import React from "react";
import Image from "next/image";

import HeroBg from '../../../public/images/hero/bg-hero.png';

export default function AboutSectionTwo() {
  return (
    <section className="bg-slate-800 pt-16 md:pt-20 lg:pt-28">
      <div className="rounded-none mt-5 ml-12 container">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-2xl font-medium text-white max-md:mt-10">
              <h3 className="self-stretch text-3xl font-bold max-md:mr-2.5 sm:text-md">
                Premier support
              </h3>
              <p className="mt-4 text-base">
                We offer 24 / 7 support and if you need help quickly then message our AI-trained chatbot to answer some of the 
                most frequently asked questions.
              </p>
              {/* Flexible Section */}
              <h3 className="self-stretch text-3xl font-bold max-md:mr-2.5 mt-9 sm:text-md">
                Flexible and Scalable
              </h3>
              <p className="mt-4 text-base">
                You can easily lower your budget and make your budget higher. Company policies, changed? No problem, just adjust 
                your company policy.
              </p>
               {/* Easy Section */}
              <h3 className="self-stretch text-3xl font-bold max-md:mr-2.5 mt-9 sm:text-md">
                User Friendly and Professional Expense Tools.
              </h3>
              <p className="mt-4 text-base">
                Once you have an account, JetHR takes care of all the travel
                planning by offering stock information, admin dashboard, and expense graphs and charts.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <Image 
              src={HeroBg}
              width={500}
              height={500}
              alt=""
              className="object-contain mb-20 w-full rounded-3xl aspect-[0.9] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
