import React from "react";
import Image from "next/image";
export default function Box({
  className,
  image,
  content,
  imgHeight
}: {
  className?: string;
  image: string;
  content?: React.ReactNode;
  imgHeight?:string
}) {
  return (
    <div className={`rounded-md overflow-hidden bg-white ${className}`}>
      <div className={`relative w-[100%] h-[10rem] ${imgHeight || "h-[10rem]"}`}>
        <Image
          src={image}
          alt="description"
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      {content && <div className="p-4">{content}</div>}
    </div>
  );
}
