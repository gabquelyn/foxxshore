import React from "react";
import TeamSlider from "./TeamSliders";

export default function Team() {
  return (
    <div className="bg-[#F8F9F9]  p-[4rem]">
      <div className="text-[1.5rem] flex flex-col items-center justify-center text-center gap-1">
        <p className="uppercase  font-semibold">Meet the team</p>
        <div className="h-1 w-20 bg-yellow"></div>
        <p className=" text-[.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eaque? Lorem
        </p>
      </div>
      <TeamSlider />
    </div>
  );
}
