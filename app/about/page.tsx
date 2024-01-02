import React from "react";
import Aboutbg from "../components/Aboutbg";
import Choose from "../components/Choose";
import Facts from "../components/Facts";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
export default function About() {
  return (
    <div>
      <Aboutbg />
      <Facts />
      <Choose />
      <Team/>
      <Testimonial/>
    </div>
  );
}
