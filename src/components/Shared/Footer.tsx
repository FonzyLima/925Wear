import Link from "next/link";
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
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:925wear.ph@gmail.com"
              className="font-normal"
            >
              925wear.ph@gmail.com
            </Link>
          </li>
          <li>
            <p className="font-bold">Call Us</p>
            <p className="font-normal">+639176380810</p>
          </li>
          <li>
            <p className="font-bold">Instagram</p>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/925.wear/"
              className="font-normal"
            >
              @925wear.ph
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
