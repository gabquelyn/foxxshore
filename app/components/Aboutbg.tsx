import React from "react";
export default function Aboutbg() {
  return (
    <div className="about flex flex-col justify-end text-white relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0"></div>
      <div className="z-10 p-4 text-[1.5rem] flex flex-col gap-1">
        <p className="md:text-[2.5rem] text-[2.2rem] font-bold uppercase" >What we do</p>
        <div className="h-1 w-20 bg-yellow"></div>
        <p className=" text-[.8rem] text-wrap w-[70%] md:w-[50%]">
          
We are oil and gas offshore service company. We are involve in seismic data processing and  integrated data management. 

We focus on onshore and offshore seismic data procesing, oil and gas  exploration and production project management with 10 years of experience 
        </p>
      </div>
    </div>
  );
}
