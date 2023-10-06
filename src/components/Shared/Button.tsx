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
    <Link href={link}>
      <button className={`py-2 px-6 ${classN} rounded-full`}>
        <div className={`${textClass}`}>{text}</div>
      </button>
    </Link>
  );
};

export default Button;
