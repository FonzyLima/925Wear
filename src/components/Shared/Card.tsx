import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string | number;
  price: string;
  image: HTMLImageElement | string | StaticImageData;
  link?: string;
}

const Card = ({ title, price, image, link = "" }: CardProps) => {
  return (
    <Link href="/store" className="group">
      <div className="flex flex-col font-primary w-[250px] sm:w-[380px]">
        <div className="h-[270px] sm:h-[360px] w-full">
          <Image
            src={image}
            alt="item"
            // objectFit="cover"
            // layout="fill"
            width={411}
            height={600}
            className="rounded-[30px] object-cover h-full w-full group-hover:rounded-[70px] duration-300 border-[1px] border-black"
          />
        </div>
        <div className="py-[10px] px-[14px]">
          <div className="text-[18px] sm:text-[22px] leading-[22px] sm:leading-normal font-medium">{title}</div>
          <div className="text-[16px] sm:text-[20px] font-normal">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
