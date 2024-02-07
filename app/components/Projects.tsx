import React from "react";
import Boxed from "./Boxed";
export default function Projects() {
  return (
    <div className="bg-[#F8F9F9]">
      <div className="py-[4rem] flex flex-col items-center gap-10">
        <div className="flex items-center justify-center flex-col">
          <p className="font-semibold">Latest projects</p>
          {/* <p className="text-[.7rem] text-[#888888]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p> */}
          <div className="h-1 w-20 bg-yellow my-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mx-[2rem] md:mx-[9rem]">
          <Boxed
            img="/assets/foxx1.jpeg"
            title=" 4D OBN acquisition project in the Gulf of Mexico "
            content=" Responsibilities include qc’ing seismic data as acquired on a daily basis, generating reports, updating project managements oftware, and reporting to the Party chief and the client rep."
          />
          <Boxed
            img="/assets/foxx5.jpeg"
            title="Offshore project management "
            content=" Involved in processing 3D marine seismic data. Responsible for all tasks related to planning,testing,running production, client communications and project management."
          />
          <Boxed
            img="/assets/foxx3.jpeg"
            title=" Offshore Project Consultant "
            content=" Involved in developing job flows using DUG Insight software for the client company, XOCEAN."
          />
        </div>
        {/* <button className="uppercase p-2 px-7 bg-yellow text-[.9rem] text-black font-semibold w-fit">
          View more projects
        </button> */}
      </div>
    </div>
  );
}
