import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  variant?: "yellowgreen" | "outline" | "black";
  classN?: string;
  text: string;
  link: HTMLLinkElement | string;
  target?: "_blank" | "_self";
}

const Button = ({
  classN,
  text,
  link,
  variant = "yellowgreen",
  target = "_self",
}: ButtonProps) => {
  const type = {
    variant: {
      yellowgreen:
        "bg-yellowgreen sm:text-[22px] text-[18px] border-[1px] border-black font-primary font-semibold duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black",
      outline:
        "border text-white sm:text-[22px] text-[18px] rounded-full font-semibold duration-300 hover:bg-white hover:text-black",
      black:
        "border border-white text-white sm:text-[22px] bg-black text-[18px] rounded-full font-semibold duration-300 hover:bg-white hover:border-black hover:text-black",
    },
  };

  return (
    <Link href={link} target={target}>
      <button
        className={`sm:py-2 sm:px-6 py-1 px-5 ${classN} ${type.variant[variant]} rounded-full`}
      >
        <div className="">{text}</div>
      </button>
    </Link>
  );
};

export default Button;
