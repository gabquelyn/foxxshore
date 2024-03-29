import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
const pair = Playfair_Display({ subsets: ["latin"] });
export default function Section3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
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
          02
        </p>
        <p className="text-[2rem] font-bold">Mission</p>

        <p className="text-[2rem]">Build a sustainable future</p>
        <p>
        The future of sustainable energy is that everyone can generate, store and use it effectively and efficiently. 
        </p>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/assets/foxx6.jpeg"
          fill
          alt="constructor worker"
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
