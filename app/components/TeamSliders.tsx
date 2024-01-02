"use client";
import React from "react";
import Slider from "react-slick";
import Boxed from "./Boxed";
interface Team {
  name: string;
  image: string;
  description: string;
}
const people: Team[] = [
  { name: "Dweck philip", image: "/assets/p1.jpg", description: "Founder" },
  { name: "Cal newport", image: "/assets/p2.jpg", description: "CEO" },
  {
    name: "Bil thompson",
    image: "/assets/p3.jpg",
    description: "Sales manager",
  },
  {
    name: "ges giblin",
    image: "/assets/p4.jpg",
    description: "Analysis manager",
  },
  { name: "mark nicer", image: "/assets/p5.jpg", description: "Marketer" },
];
export default function TeamSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint based on your design needs
        settings: {
          slidesToShow: 1, // Number of items to show on mobile
        },
      },
    ],
  };
  return (
    <div className="m-[2rem]">
      <Slider {...settings}>
        {people.map((p) => (
          <Boxed
            key={p.image}
            img={p.image}
            title={p.name}
            className="md:mx-3"
            content={p.description}
          />
        ))}
      </Slider>
    </div>
  );
}
