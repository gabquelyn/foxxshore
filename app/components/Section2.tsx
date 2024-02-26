import React from "react";
import Boxed from "./Boxed";
export default function Section2() {
  return (
    <section className="-mt-10 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mx-[2rem] md:mx-[9rem]">
        <Boxed
          img="/assets/foxx2.jpeg"
          title="Seismic data acquisition"
          content=" 10 years experience in the seismic industry working ofshore and onshore. Strong hold in 3D/ 4D Towed Streamer Hydrophone data."
        />
        <Boxed
          img="/assets/foxx3.jpeg"
          title=" Strong insight in OBN data process "
          content=" We demonstrate corresponding solutions using processing workflows comprising denoising the vertical geophones by using all four recorded nodal components."
        />
        <Boxed
          img="/assets/31.jpg.png"
          title=" Offshore and Onshore project management "
          content=" Responsible for all tasks related to planning, testing, running production, client communications and project management."
        />
      </div>
    </section>
  );
}

