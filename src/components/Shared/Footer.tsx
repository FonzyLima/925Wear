import Link from "next/link";
import LinkComp from "./LinkComp";
import whiteLogo from "@/assets/whitelogo.png";
import Image from "next/image";
import footerlogo from "@/assets/images/footer-logo.png";
const Footer = () => {
  return (
    <>
      <nav className="-z-20 w-screen fixed top-0 bg-yellowgreen px-[40px] py-[55px] flex flex-col sm:flex-row justify-between items-end h-screen">
        <div className="w-[400px]">
          <Image className="" src={footerlogo} alt="footer-logo" />
        </div>
        <div className="sm:hidden mb-[40px]">
          <Image className="" src={footerlogo} alt="footer-logo" />
        </div>
        <ul className="hidden sm:flex sm:gap-[70px] text-[16px] flex-col sm:flex-row font-primary">
          <li>
            <p className="font-bold">Email</p>
            <LinkComp
              variant="a"
              link="mailto:925wear.ph@gmail.com"
              text="925wear.ph@gmail.com"
            />
          </li>
          <li>
            <p className="font-bold">Call Us</p>
            <LinkComp variant="a" text="+639176380810" />
          </li>
          <li>
            <p className="font-bold">Instagram</p>
            <LinkComp
              variant="a"
              link="https://www.instagram.com/925.wear/"
              text="@925wear.ph"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
