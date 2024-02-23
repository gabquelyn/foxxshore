import React from "react";
import Box from "./Box";
export default function Hero() {
  return (
    <div className="background text-white flex items-center relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0"></div>
      <div className="md:mx-[4rem] mx-[1rem] z-10 grid grid-cols-1 md:grid-cols-[45%_50%] gap-7 w-full mt-[3rem]">
        <div>
          <h1 className="md:text-[2.5rem] text-[2.2rem] font-bold md:mb-4 mb-2 capitalize">
            Increase your

            <br />
            confidence 
            <br />
            and reduce uncertainty with
            <br />
            improve data quality
          </h1>
          {/* <button className="uppercase p-2 px-7 bg-red-700 text-[.9rem] text-black font-semibold">
            Read more
          </button> */}
        </div>
        <div className="bg-white hidden md:block p-[2rem] pt-[4rem] relative rounded-md shadow-lg">
          <Box
            image="/assets/foxx1.jpeg"
            className="w-[50%] shadow-lg"
            imgHeight="h-[18rem]"
          />
          <Box
            image="/assets/foxx5.jpeg"
            className="md:w-[50%] w-[60%] shadow-lg absolute md:right-12 right-10 top-8"
            content={
              <div>
                <p className="uppercase text-red-700">Deep water seismic data acquisition</p>
                <p className="text-black text-[.8rem]">
                Save time and money with our high quality deep water data acquistion and processing services

                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

