"use client";
import React, { useState, useEffect } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaHome, FaPhone, FaInfo } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 z-20 transition-all ${
        isScrolled && "bg-[rgba(0,0,0,0.5)]"
      } text-white uppercase px-4 md-px-[4rem] py-4 w-full`}
    >
      <div className="flex items-center justify-between">
        <Image src="/assets/logo1.png.png" alt="logo" height={70} width={140} />
        <div className="flex gap-[2rem] text-[.9rem] tracking-wider">
          <Link
            href="/"
            className={`hover:text-yellow ${pathname === "/" && "text-yellow"}`}
          >
            <p className="hidden md:block">Home</p>
            <FaHome className="block text-[1.5rem] md:hidden" />
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow ${
              pathname === "/about" && "text-yellow"
            }`}
          >
            <p className="hidden md:block">About us</p>
            <FaInfo className="block text-[1.5rem] md:hidden" />
          </Link>
          <Link
            href="/contact"
            className={`hover:text-yellow ${
              pathname === "/contact" && "text-yellow"
            }`}
          >
            <p className="hidden md:block">Contact us</p>
            <FaPhone className="block text-[1.5rem] md:hidden" />
          </Link>
        </div>
        <div className="gap-2 items-center text-[1.2rem] hidden md:flex">
          <Link href="/" className="hover:text-yellow">
            <ImFacebook2 />
          </Link>
          <Link href="/" className="hover:text-yellow">
            <TiSocialInstagram />
          </Link>
          <Link href="/" className="hover:text-yellow">
            <IoLogoGoogleplus />
          </Link>
        </div>
      </div>
    </div>
  );
}
