import React from "react";
import Description from "./Description";
interface Content {
  title: string;
  image: string;
  content: string;
}

const content: Content[] = [
  {
    title: "Experts",
    content: "10 years of experience in 3D and 4D processing",
    image: "/assets/icon11.jpg.png",
  },
  {
    title: "Oil spills detection and cleaning",
    content: "We detect and apply sophisticated techology for oil spills clean up",
    image: "/assets/icon81.jpg.png",
  },
  {
    title: "4D ocean-bottom node",
    content: "We provide exclusive data insnight for better deccision making through our seismic 4D high-definition bottom node data interpretion services",
    image: "/assets/icon71.jpg.png",
  },
  {
    title: "Continues Development",
    content: "Real time reservoiur pore presure monitoring to avoid blow out",
    image: "/assets/icon61.jpg.png",
  },
  {
    title: "Pore Presure Analysis",
    content: "There is many variantions of passages of Lerem ipsum available",
    image: "/assets/icon51.jpg.png",
  },
  {
    title: "We Fight Polution",
    content: "We operate with sophisticated to reduce oil spill polution during extraction ",
    image: "/assets/icon41.jpg.png",
  },
  {
    title: "optimise workflows",
    content: "Involved in a multi-survey 3D and 4D data processing and workflow optimization ",
    image: "/assets/icon31.jpg.png",
  },
  {
    title: "Pipline realtime tracking ",
    content: "Our solution track and report any pipline linkage",
    image: "/assets/icon9.jpg.png",
  },
];
export default function Section4() {
  return (
    <div className="my-[4rem] flex flex-col items-center gap-20 mx-[1rem] md:mx-[8rem]">
      <div className="flex items-center justify-center flex-col text-center">
        <p className="font-semibold">Who we help</p>
        <p className="text-[.7rem] text-[#888888]">
          Our clients are: Companies, contractors and anyone in the oil and <br/>gas exploration and production space
        </p>
        <div className="h-1 w-20 bg-yellow my-2"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {content.slice(0, 4).map((con) => (
          <Description
            key={con.image}
            title={con.title}
            image={con.image}
            content={con.content}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {content.slice(4, 8).map((con) => (
          <Description
            key={con.image}
            title={con.title}
            image={con.image}
            content={con.content}
          />
        ))}
      </div>
    </div>
  );
}
