"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Name = "client" | "tests" | "feedback" | "certification";
interface Details {
  icon: string;
  count: number;
  title: string;
  name: Name;
}
export default function Facts() {
  const details: Record<Name, Details> = {
    client: {
      icon: "a.png",
      count: 5,
      title: "served client",
      name: "client",
    },
    tests: {
      icon: "b.png",
      count: 201,
      title: "analytics & tests",
      name: "tests",
    },
    feedback: {
      icon: "c.png",
      count: 10,
      title: "feedbacks",
      name: "feedback",
    },
    certification: {
      icon: "d.png",
      count: 25,
      title: "certifications",
      name: "certification",
    },
  };
  const [facts, setFacts] = useState<Record<Name, number>>({
    client: 0,
    tests: 0,
    feedback: 0,
    certification: 0,
  });

  // useEffects for 'em count downs

  useEffect(() => {
    const clientInterval = setInterval(() => {
      if (facts.client >= details.client.count) {
        return;
      }
      setFacts((prev) => ({ ...prev, client: prev.client + 1 }));
    }, 1000 / details.client.count);
    return () => clearInterval(clientInterval);
  }, [facts.client]);


  useEffect(() => {
    const testsInterval = setInterval(() => {
      if (facts.tests >= details.tests.count) {
        return;
      }
      setFacts((prev) => ({ ...prev, tests: prev.tests + 1 }));
    }, 1000 / details.tests.count);
    return () => clearInterval(testsInterval);
  }, [facts.tests]);

  useEffect(() => {
    const feedbackInterval = setInterval(() => {
      if (facts.feedback >= details.feedback.count) {
        return;
      }
      setFacts((prev) => ({ ...prev, feedback: prev.feedback + 1 }));
    }, 1000 / details.feedback.count);
    return () => clearInterval(feedbackInterval);
  }, [facts.feedback]);

  useEffect(() => {
    const certificationInterval = setInterval(() => {
      if (facts.certification >= details.certification.count) {
        return;
      }
      setFacts((prev) => ({ ...prev, certification: prev.certification + 1 }));
    }, 1000 / details.certification.count);
    return () => clearInterval(certificationInterval);
  }, [facts.certification]);

  return (
    <div className="bg-[#F8F9F9] p-[4rem] flex flex-col text-center items-center justify-center">
      <div className="text-[1.5rem] flex flex-col items-center justify-center gap-1">
        <p className="uppercase  font-semibold">Interesting facts</p>
        <div className="h-1 w-20 bg-yellow"></div>
        {/* <p className=" text-[.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eaque? Lorem
        </p> */}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-[3rem] mt-[3rem] w-full">
        {Object.keys(details).map((detail) => (
          <div
            className="flex flex-col items-center justify-center gap-1"
            key={details[detail as Name].icon}
          >
            <Image
              src={`/assets/${details[detail as Name].icon}`}
              unoptimized
              alt="icon"
              width={50}
              height={50}
            />
            <p className={`text-[1.4rem]`}>{facts[detail as Name]}+</p>
            <p className="capitalize text-[.8rem]">
              {details[detail as Name].title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
