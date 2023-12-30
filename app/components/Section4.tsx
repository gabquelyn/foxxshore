import React from "react";
import Description from "./Description";
interface Content {
  title: string;
  image: string;
  content: string;
}

const content: Content[] = [
  {
    title: "Awesome Employees",
    content: "Our services are so awesome of passages of Lerem ipsum available",
    image: "/assets/icon11.jpg.png",
  },
  {
    title: "Maximum Power",
    content: "Get Unlimited Energy of passages of Lerem ipsum available",
    image: "/assets/icon81.jpg.png",
  },
  {
    title: "Oil Resources",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon71.jpg.png",
  },
  {
    title: "Continues Development",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon61.jpg.png",
  },
  {
    title: "Chemical Analysis",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon51.jpg.png",
  },
  {
    title: "We Fight Polution",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon41.jpg.png",
  },
  {
    title: "We Think About The Consumer",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon31.jpg.png",
  },
  {
    title: "We Care About Envirement",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon9.jpg.png",
  },
];
export default function Section4() {
  return (
    <div className="my-[4rem] flex flex-col items-center gap-20 mx-[1rem] md:mx-[8rem]">
      <div className="flex items-center justify-center flex-col">
        <p className="font-semibold">We provide energy</p>
        <p className="text-[.7rem] text-[#888888]">
          To many clients like government, homes and offices
        </p>
        <div className="h-1 w-20 bg-yellow my-2"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {content.slice(0, 4).map((con) => (
          <Description
            title={con.title}
            image={con.image}
            content={con.content}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {content.slice(4, 8).map((con) => (
          <Description
            title={con.title}
            image={con.image}
            content={con.content}
          />
        ))}
      </div>
    </div>
  );
}
