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
          content=" We demonstrate corresponding solutions using processing workflows comprising denoising the vertical geophones by using all four recorded nodal components, cross-ghosting the data or using direct wave to design calibration filters for up- and down-going wavefield separation, performing one-dimensional reversible redatuming for stacking QC and multiple prediction, and designing cascaded model and data-driven multiple elimination applications. The optimum combination of the mentioned technologies produced cleaner and high-resolution migration images mitigating the risk of false interpretations"
        />
        <Boxed
          img="/assets/31.jpg.png"
          title=" Offshore and Onshore project management "
          content=" Responsible for all tasks related to planning, testing, running production, client communications and project management. Include qc’ing seismic data as acquired on a daily basis, generating reports, updating project management software, and reporting to the Party chief and the client rep.  ."
        />
      </div>
    </section>
  );
}

