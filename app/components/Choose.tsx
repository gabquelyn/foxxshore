import React from "react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";
export default function Choose() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src="/assets/worker.jpg"
          fill
          alt="constructor worker"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="bg-blue-500 text-white p-[2.5rem] flex items-center text-center flex-col gap-2 relative">
        <div className="absolute">
          <Image
            src="/assets/const.png"
            alt="image"
            height={120}
            width={360}
            className="opacity-10"
          />
        </div>
        <p className={`font-bold text-[6rem] text-white opacity-25`}>
          <FaQuestion />
        </p>
        <p className="text-[2rem] font-bold">Why choose us</p>
        <p>
        We have great team of 10 years experience integrated.
        <br/>
        We keep cost low. 
        <br/>
        Our technological approach reduce downtime with high quality data
        </p>
      </div>
    </div>
  );
}
