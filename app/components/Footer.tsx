import React from "react";
import Image from "next/image";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
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
                src="/assets/fx.png"
                alt="logo"
                height={70}
                width={140}
                className="-ml-3"
              />
              <p>
                Foxxshore an oil and gas exploration and production comapny.
              </p>
              <p>
                We provide integrated data acquisition and processing services
                in an effective way.
              </p>
            </div>
            <div className="flex flex-col gap-6 capitalize">
              <p className="font-semibold">get in touch</p>
              <div className="flex flex-col gap-1 icons">
                <p>
                  <FaPhoneFlip />
                  phone
                  <span>+44 7842 310262</span>
                </p>

                <p>
                  <MdOutlineMail />
                  email
                  <span>info@foxxshore.com</span>
                </p>
                <p>
                  <TiLocation />
                  address
                  <span>2 walter carringhton VI.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-[.7rem] flex items-center gap-3 justify-center text-center mt-[5rem]">
            <Link
              href="https://www.linkedin.com/company/foxxshore/"
              className="hover:text-yellow"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://www.instagram.com/foxxshore/"
              className="hover:text-yellow"
            >
              <TiSocialInstagram />
            </Link>

            <Link
              href="https://twitter.com/foxxshore/"
              className="hover:text-yellow"
            >
              <FaTwitter />
            </Link>
          </div>
          <p className="text-center text-[#888888] my-2 text-[.8rem]">{`© ${new Date().getFullYear()}  Petroleum All rights reserved`}</p>
        </footer>
      </div>
    </div>
  );
}
