import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  variant?: "yellowgreen" | "outline";
  classN?: string;
  text: string;
  link: HTMLLinkElement | string;
}

const Button = ({
  classN,
  text,
  link,
  variant = "yellowgreen",
}: ButtonProps) => {
  const type = {
    variant: {
      yellowgreen:
        "bg-yellowgreen text-[22px] border-[1px] border-black font-primary font-semibold duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black",
      outline:
        "border text-white text-[22px] rounded-full font-semibold duration-300 hover:bg-white hover:text-black",
    },
  };
  
  return (
    <Link href={link}>
      <button
        className={`py-2 px-6 ${classN} ${type.variant[variant]} rounded-full`}
      >
        <div className="">{text}</div>
      </button>
    </Link>
  );
};

export default Button;
