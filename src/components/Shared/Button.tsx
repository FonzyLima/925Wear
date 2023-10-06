import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  classN: string;
  textClass: string;
  text: string;
  link: HTMLLinkElement | string;
}

const Button = ({ classN, text, textClass, link }: ButtonProps) => {
  return (
    <button className={`py-[17px] px-[32px] ${classN} rounded-full`}>
      <Link href={link}>
        <div className={`${textClass}`}>{text}</div>
      </Link>
    </button>
  );
};

export default Button;
