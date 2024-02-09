import React from "react";

export default function Contactbg() {
  return (
    <div className="contact flex flex-col justify-end text-white relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0"></div>
      <div className="z-10 p-4 text-[1.5rem] flex flex-col gap-1">
        <p className="md:text-[2.5rem] text-[2.2rem] font-bold uppercase">
          contact us
        </p>
        <div className="h-1 w-20 bg-yellow"></div>
        {/* <p className=" text-[.8rem] text-wrap w-[70%] md:w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eaque? Lorem ipsum dolor sit amet consectetur.
        </p> */}
      </div>
    </div>
  );
}
