"use client";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
interface Team {
  name: string;
  image: string;
  comment: string;
}
const people: Team[] = [
  {
    name: "Dweck philip",
    image: "/assets/p1.jpg",
    comment:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse culpa.",
  },
  {
    name: "Cal newport",
    image: "/assets/p2.jpg",
    comment:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse culpa.",
  },
  {
    name: "Bil thompson",
    image: "/assets/p3.jpg",
    comment:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse culpa.",
  },
  {
    name: "ges giblin",
    image: "/assets/p4.jpg",
    comment:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse culpa.",
  },
  {
    name: "mark nicer",
    image: "/assets/p5.jpg",
    comment:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis esse culpa.",
  },
];
export default function TestimonialSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
          <TestimonialCard
            key={p.image}
            image={p.image}
            name={p.name}
            comment={p.comment}
          />
        ))}
      </Slider>
    </div>
  );
}
