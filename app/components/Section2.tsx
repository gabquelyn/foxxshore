import React from "react";
import Boxed from "./Boxed";
export default function Section2() {
  return (
    <section className="-mt-10 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mx-[2rem] md:mx-[9rem]">
        <Boxed
          img="/assets/11.jpg.png"
          title="solar project"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
        />
        <Boxed
          img="/assets/21.jpg.png"
          title="pipeline building"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
        />
        <Boxed
          img="/assets/31.jpg.png"
          title="oil refinement"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                repellendus magni ullam laboriosam. Beatae dignissimos aliquid
                dolorum illum."
        />
      </div>
    </section>
  );
}

