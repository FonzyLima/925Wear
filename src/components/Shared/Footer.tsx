import Link from "next/link";
import LinkComp from "./LinkComp";
import whiteLogo from "@/assets/whitelogo.png";
import Image from "next/image";
import footerlogo from "@/assets/images/footer-logo.png";
const Footer = () => {
  return (
    <>
      <nav className="-z-20 w-screen fixed top-0 bg-yellowgreen px-[40px] max-[560px]:py-[20px] py-[55px] h-screen flex items-end">
        <div className="flex max-[560px]:flex-col flex-row justify-between items-end w-full gap-[40px] max-[560px]:items-start">
          <div className="w-[400px] max-[560px]:w-full">
            <Image className="" src={footerlogo} alt="footer-logo" />
          </div>
          <ul className="flex max-[560px]:flex-row gap-[10px] lg:gap-[40px] text-[16px] flex-col lg:flex-row font-primary max-[560px]:text-[14px] max-[560px]:w-full max-[560px]:justify-between max-[490px]:flex-col">
            <li>
              <p className="font-bold">Email</p>
              <LinkComp
                variant="a"
                link="mailto:925wear.ph@gmail.com"
                text="925wear.ph@gmail.com"
              />
            </li>
            {/* <li>
              <p className="font-bold">Call Us</p>
              <LinkComp variant="a" text="+639176380810" />
            </li> */}
            <li>
              <p className="font-bold">Instagram</p>
              <LinkComp
                variant="a"
                link="https://www.instagram.com/925.wear/"
                text="@925wear"
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Footer;
