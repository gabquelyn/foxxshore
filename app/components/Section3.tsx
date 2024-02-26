import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const pair = Playfair_Display({ subsets: ["latin"] });
export default function Section3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src="/assets/foxx4.jpeg"
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
        <p
          className={`${pair.className} font-bold text-[6rem] -mb-4 text-white opacity-25`}
        >
          01
        </p>
        <p className="text-[2rem] font-bold">Vison</p>

        <p className="text-[2rem]">
          Ingretrated digital seismic data acquisition and processing.
        </p>
        <p>
          To reduce downtime, uncertainty, improve data integrity, improve
          workflow, reduce risk on investment, improve insight and
          profitability.
        </p>
      </div>
    </div>
  );
}
