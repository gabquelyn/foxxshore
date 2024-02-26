import React from "react";
import Box from "./Box";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="background text-white flex items-center relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0"></div>
      <div className="md:mx-[4rem] mx-[1rem] z-10 grid grid-cols-1 md:grid-cols-[45%_50%] gap-10 w-full mt-[3rem]">
        <div>
          <h1 className="md:text-[2.5rem] text-[2.2rem] font-bold md:mb-4 mb-2 capitalize">
            Increase your confidence and reduce uncertainty with improve data
            quality
          </h1>
          <Link href = "https://www.linkedin.com/company/foxxshore/">
            <button className="uppercase p-2 px-7 bg-yellow text-[.9rem] text-black font-semibold">
              Read more
            </button>
          </Link>
        </div>
        <div className="bg-white hidden md:block p-[2rem] relative rounded-md shadow-lg">
          <Box
            image="/assets/foxx1.jpeg"
            className="w-[50%] shadow-lg"
            imgHeight="h-[15rem]"
          />
          <Box
            image="/assets/foxx5.jpeg"
            className="md:w-[50%] w-[60%] shadow-lg absolute md:right-9 right-8 -top-8"
            content={
              <div className="text-[.8rem]">
                <p className="uppercase text-red-700  font-semibold">
                  Deep water seismic data acquisition
                </p>
                <p className="text-black">
                  Save time and money with our high quality deep water data
                  acquistion and processing services
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
