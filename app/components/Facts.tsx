"use client";
import React from "react";
import Image from "next/image";
interface Details {
  icon: string;
  count: number;
  title: string;
}
export default function Facts() {
  const details: Details[] = [
    {
      icon: "a.png",
      count: 1532,
      title: "served client",
    },
    {
      icon: "b.png",
      count: 2119,
      title: "analytics & tests",
    },
    {
      icon: "c.png",
      count: 2303,
      title: "feedbacks",
    },
    {
      icon: "d.png",
      count: 128,
      title: "certifications",
    },
  ];
  return (
    <div className="bg-[#F8F9F9] p-[4rem] flex flex-col text-center items-center justify-center">
      <div className="text-[1.5rem] flex flex-col items-center justify-center gap-1">
        <p className="uppercase  font-semibold">Interesting facts</p>
        <div className="h-1 w-20 bg-yellow"></div>
        <p className=" text-[.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eaque? Lorem
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-[3rem] mt-[3rem] w-full">
        {details.map((detail) => (
          <div className="flex flex-col items-center justify-center gap-1" key={detail.icon}>
            <Image
              src={`/assets/${detail.icon}`}
              unoptimized
              alt="icon"
              width={50}
              height={50}
            />
            <p className={`text-[1.4rem]`}>{detail.count}</p>
            <p className="capitalize text-[.8rem]">{detail.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
