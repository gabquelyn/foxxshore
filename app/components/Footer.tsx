
import React from "react";
import Image from "next/image";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFax, FaDiscord, FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoGoogleplus } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import Link from "next/link";
import { TiLocation } from "react-icons/ti";
export default function Hero() {
  return (
    <div className="footer text-white flex items-center relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0"></div>
      <div className="z-10">
      <footer className="text-white py-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-[2rem] md:mx-[9rem]">
        <div className="flex flex-col gap-6">
          <Image
            src="/assets/logo1.png.png"
            alt="logo"
            height={70}
            width={140}
          />
          <p>
            Petroleum is the leader in the country sed diam nonumy eirmod tempor
            invidunt ut labore and efficient strategy.
          </p>
          <p>
            We provide the energy to medium and big company, sadipscing elitr,
            sed diam nonumy.
          </p>
        </div>
        <div className="flex flex-col gap-6 capitalize">
          <p className="font-semibold">get in touch</p>
          <div className="flex flex-col gap-1 icons">
            <p>
              <FaPhoneFlip />
              phone
              <span>+12 34567 888</span>
            </p>
            <p>
              <FaFax />
              fax
              <span>+90 998 988</span>
            </p>
            <p>
              <MdOutlineMail />
              email
              <span>example@example.com</span>
            </p>
            <p>
              <TiLocation />
              address
              <span>some location in the world, planet earth.</span>
            </p>
          </div>
          <div className="flex gap-4 items-center text-[1.2rem]">
            <Link href="/" className="hover:text-yellow">
              <ImFacebook2 />
            </Link>
            <Link href="/" className="hover:text-yellow">
              <TiSocialInstagram />
            </Link>
            <Link href="/" className="hover:text-yellow">
              <IoLogoGoogleplus />
            </Link>
            <Link href="/" className="hover:text-yellow">
              <FaDiscord />
            </Link>
            <Link href="/" className="hover:text-yellow">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-[.7rem] flex items-center gap-3 justify-center text-center mt-[5rem]">
        <Link href="/" className="hover:text-yellow">
          Home
        </Link>
        <div className="w-[2px] h-3 bg-yellow"></div>

        <Link href="/" className="hover:text-yellow">
          About
        </Link>
        <div className="w-[2px] h-3 bg-yellow"></div>

        <Link href="/" className="hover:text-yellow">
          Contact
        </Link>
      </div>
      <p className="text-center text-[#888888] my-2 text-[.8rem]">{`© ${new Date().getFullYear()}  Petroleum All rights reserved`}</p>
    </footer>
        </div>
    </div>
  );
}




