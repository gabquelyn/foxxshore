import React from "react";
import Box from "./Box";
export default function Boxed({
  img,
  title,
  content,
  how,
  className,
}: {
  img: string;
  title: string;
  content: string;
  className?: string;
  how?: string;

}) {
  return (
    <Box
      image={img}
      imgHeight="h-[15rem]"
      className={className}
      how={how}
      content={
        <div className="text-center flex flex-col gap-2 items-center mt-3">
          <p className="uppercase text-black font-semibold">{title}</p>
          <div className="h-1 w-10 bg-yellow"></div>
          <p className="text-black text-[.8rem]">{content}</p>
        </div>
      }
    />
  );
}
