import { StaticImageData } from "next/image";
import Image from "next/image";

interface CardProps {
  title: string | number;
  price: string;
  image: HTMLImageElement | string | StaticImageData;
}

const Card = ({ title, price, image }: CardProps) => {
  return (
    <div className="w-full flex flex-col font-primary">
      <div className="w-full h-[250px]">
        <Image
          src={image}
          alt="item"
          // objectFit="cover"
          // layout="fill"
          className="rounded-[30px] object-cover h-full"
        />
      </div>
      <div className="py-[10px] px-[14px]">
        <div className="text-[22px] font-medium">{title}</div>
        <div className="text-[20px] font-normal">{price}</div>
      </div>
    </div>
  );
};

export default Card;
