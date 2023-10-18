"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LinkComp from "./LinkComp";
import Image from "next/image";
import navlogo from "@/assets/images/nav-logo.png"

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const hideNavbar = scrollY > 100 && scrollDirection === "down";

  return (
    <>
      <div
        className={`z-20 w-full fixed bg-beige px-[40px] flex flex-row justify-between items-center transition-transform duration-300 ease-in-out ${
          hideNavbar ? "hidden-nav" : ""
        }`}
      >
        <div className="w-[70px] h-[60px] flex justify-center items-center">
          <Image className="w-full object-cover" src={navlogo} alt="logo" />
        </div>
        <ul className="gap-[20px] text-[16px] flex-row flex font-primary font-medium">
          <li>
            <LinkComp link="/" text="Home" />
          </li>
          <li>
            <LinkComp link="/about" text="About" />
          </li>
          <li>
            <LinkComp link="/store" text="Store" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
