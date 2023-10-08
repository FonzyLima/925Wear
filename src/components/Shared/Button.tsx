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
      yellowgreen: "bg-yellowgreen text-[22px] font-primary font-semibold",
      outline: "border text-white text-[22px] rounded-full font-semibold",
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
