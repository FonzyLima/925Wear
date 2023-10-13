import Link from "next/link";
import LinkComp from "./LinkComp";
const Footer = () => {
  return (
    <>
      <nav className="-z-20 w-screen fixed top-0 bg-yellowgreen px-[40px] py-[55px] flex flex-row justify-between items-end h-screen">
        <div className="tracking-[-52.964px] text-white font-bold text-[250px] leading-[85%] max-h-[380px] font-brand">
          925
        </div>
        <ul className="gap-[70px] text-[16px] flex-row flex font-primary">
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
