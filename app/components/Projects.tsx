import React from "react";
import Boxed from "./Boxed";
export default function Projects() {
  return (
    <div className="bg-[#F8F9F9]">
      <div className="py-[4rem] flex flex-col items-center gap-10">
        <div className="flex items-center justify-center flex-col">
          <p className="font-semibold">Latest projects</p>
          <p className="text-[.7rem] text-[#888888]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <div className="h-1 w-20 bg-yellow my-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mx-[2rem] md:mx-[9rem]">
          <Boxed
            img="/assets/a.jpg"
            title="Frozen Trees In A Lake"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
          />
          <Boxed
            img="/assets/b.jpg"
            title="Consectetur adipiscing"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
          />
          <Boxed
            img="/assets/c.jpg"
            title="Consectetur adipiscing"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
          />
        </div>
        <button className="uppercase p-2 px-7 bg-yellow text-[.9rem] text-black font-semibold w-fit">
          View more projects
        </button>
      </div>
    </div>
  );
}
