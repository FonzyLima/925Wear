import Link from "next/link";
import Image from "next/image";
import sample from "@/assets/sample.png";

const Header = () => {
  return (
    <>
      <div className="w-full pt-[95px] px-[40px] bg-white font-primary">
        <div className="w-full rounded-[30px] flex flex-col justify-center relative overflow-hidden h-[500px]">
          <Image
            src={sample}
            alt="header"
            objectFit="cover"
            className="absolute top-0 z-0 h-full object-cover"
          />
          <div className="z-10 px-[60px] font-black text-white text-[60px]">SHOP NEW COLLECTION</div>
        </div>
      </div>
    </>
  );
};

export default Header;
