import React from "react";
import Image from "next/image";
export default function Box({
  className,
  image,
  content,
  imgHeight,
  how
}: {
  className?: string;
  image: string;
  content?: React.ReactNode;
  imgHeight?:string;
  how?: string
}) {
  return (
    <div className={`rounded-md overflow-hidden bg-white shadow-sm ${className}`}>
      <div className={`relative w-[100%] ${imgHeight || "h-[15rem]"}`}>
        <Image
          src={image}
          alt="description"
          fill
          unoptimized
          className={how || "object-cover"}
        />
      </div>
      {content && <div className="p-4">{content}</div>}
    </div>
  );
}
