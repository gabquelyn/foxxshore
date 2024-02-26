"use client";
import React, { useState, useEffect } from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { FaHome, FaPhone, FaInfo, FaTwitter, FaLinkedin } from "react-icons/fa";
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
      } text-white uppercase px-2 md-px-[4rem] py-4 w-full`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/fx.png" alt="logo" height={60} width={150} />
        </Link>
        <div className="flex items-center gap-[1rem] md:gap-[2rem] text-[.9rem] tracking-wider">
          <Link
            href="/"
            className={`hover:text-yellow ${pathname === "/" && "text-yellow"}`}
          >
            <p className="hidden md:block">Home</p>
            <FaHome className="block text-[1.2rem] md:hidden" />
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow ${
              pathname === "/about" && "text-yellow"
            }`}
          >
            <p className="hidden md:block">About us</p>
            <FaInfo className="block text-[1.2rem] md:hidden" />
          </Link>
          <Link
            href="/contact"
            className={`hover:text-yellow ${
              pathname === "/contact" && "text-yellow"
            }`}
          >
            <p className="hidden md:block">Contact us</p>
            <FaPhone className="block text-[1rem] md:hidden" />
          </Link>
        </div>
        <div className="gap-2 items-center text-[1.2rem] hidden md:flex">
          <Link href="https://www.linkedin.com/company/foxxshore/" className="hover:text-yellow">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com/foxxshore/" className="hover:text-yellow">
            <TiSocialInstagram />
          </Link>
          <Link href="https://twitter.com/foxxshore/" className="hover:text-yellow">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}
