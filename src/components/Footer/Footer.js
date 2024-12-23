"use client"
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-800  text-center text-white lg:text-left">
        <hr/>
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* <!-- TW Elements section --> */}
                <div className="">
                    <h6
                        className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                        JetHR
                    </h6>
                    <p>
                     Travel anywhere and think less about company policies or budget. Making travel for buinesses easier.
                    </p>
                </div>
                {/* <!-- Products section --> */}
                <div className="">
                <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Quick Links
                </h6>
                <p className="mb-4">
                    <a className="text-white">Travel Partners</a>
                </p>
                <p className="mb-4">
                    <a className="text-white">Sign In</a>
                </p>
                </div>
                {/* <!-- Privacy & Terms section --> */}
                <div className="">
                <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Privacy & Terms
                </h6>
                <p className="mb-4">
                    <a className="text-white">Terms</a>
                </p>
                <p className="mb-4">
                    <a className="text-white">Privacy</a>
                </p>
                {/***************/}
                <p>
                    <a className="text-white">Help</a>
                </p>
            </div>
            {/* <!-- Contact Us section --> */}
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact Us
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path
                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                jethr@example.com
              </p>
            </div>
          </div>
        </div>
        {/* <!--Copyright section--> */}
        <div className="p-6 text-center bg-blue-800">
          <span className="text-white">©2024 Copyright </span>
            <a className="text-white" href="#">
                JetHR
            </a>
        </div>
    </footer>
    );
  }
