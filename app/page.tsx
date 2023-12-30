import React from "react";
import Hero from "./components/Hero";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Projects from "./components/Projects";
import Last from "./components/Last";
export default function Home() {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Projects />
      <Last />
    </div>
  );
}
