"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Input from "./Input";
import Textarea from "./Textarea";
export default function ContactForm() {
  const [details, setDetails] = useState({
    names: "",
    email: "",
    message: "",
  });

  const genericChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details);
    setDetails({
      names: "",
      email: "",
      message: ""
    })
  };

  return (
    <div className="m-[3rem] md:m-[4rem] md:mx-[10rem]">
      <div className="text-[1.5rem] flex flex-col items-center justify-center gap-1 mb-[4rem]">
        <p className="uppercase  font-semibold">Mesage us</p>
        <div className="h-1 w-20 bg-yellow"></div>
        <p className=" text-[.8rem] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="h-full w-full relative">
          <Image
            src="/assets/contact.png"
            fill
            alt="vector image"
            className="object-cover"
          />
        </div>
        <div>
          <form className="w-full" onSubmit={handleSubmit}>
            <Input
              label="names"
              onChange={genericChangeHandler}
              value={details.names}
            />
            <Input
              label="email"
              type="email"
              onChange={genericChangeHandler}
              value={details.email}
            />
            <Textarea
              label="message"
              onChange={genericChangeHandler}
              value={details.message}
            />
            <button className="w-full p-2 text-[.8rem] capitalize rounded-sm font-semibold bg-yellow">
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
