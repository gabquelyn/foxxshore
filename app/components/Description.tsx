import React from "react";
import Image from "next/image";
export default function Description({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center text-center justify-center gap-1 text-[.8rem]">
      <Image src={image} alt="icons" width={70} height={70} unoptimized/>
      <p className="text-[#222222] font-semibold">{title}</p>
      <p className="text-[#888888] ">{content}</p>
    </div>
  );
}
