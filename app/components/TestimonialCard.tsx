import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
export default function TestimonialCard({
  name,
  comment,
  image,
}: {
  name: string;
  comment: string;
  image: string;
}) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md md:mx-3 relative">
      <div className="text-[.8rem] mt-2 relative">
        <p className="absolute text-[3rem] -left-3 -top-4 text-slate-100 opacity-35">
          <FaQuoteLeft />
        </p>
        <p className="italic">{comment}</p>
        <div className="flex justify-end capitalize">
          <div className="flex flex-col items-end gap-1 mt-2">
            <div className="relative h-[3rem] w-[3rem] rounded-[50%] overflow-hidden">
              <Image
                src={image}
                fill
                unoptimized
                alt="image"
                className="object-cover"
              />
            </div>
            <p>-{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
