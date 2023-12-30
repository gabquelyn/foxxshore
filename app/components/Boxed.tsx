import React from "react";
import Box from "./Box";
export default function Boxed({
  img,
  title,
  content,
}: {
  img: string;
  title: string;
  content: string;
}) {
  return (
    <Box
      image={img}
      imgHeight="h-[15rem]"
      content={
        <div className="text-center flex flex-col gap-4 items-center mt-3">
          <p className="uppercase text-black font-semibold">{title}</p>
          <div className="h-1 w-10 bg-yellow"></div>
          <p className="text-black text-[.8rem]">{content}</p>
        </div>
      }
    />
  );
}