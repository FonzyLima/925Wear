"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LinkComp from "./LinkComp";

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
        <div className="tracking-[-8.2px] text-yellowgreen font-bold text-[40px] font-brand">
          925
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
