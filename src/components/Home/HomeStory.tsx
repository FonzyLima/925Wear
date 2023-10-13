import Button from "../Shared/Button";
import sample from "@/assets/car1.png";
import ab1 from "@/assets/ab1.jpg"
import ab2 from "@/assets/ab2.jpg"
import ab3 from "@/assets/ab3.jpg"
import Image from "next/image";

const HomeStory = () => {
  return (
    <>
      <div className="w-full bg-black flex items-center justify-center p-[40px] rounded-br-[50px] rounded-bl-[50px]">
        <div className="border-white border-[1px] w-full px-[60px] py-[55px] rounded-[30px] flex flex-col gap-[40px]">
          <div className="text-white font-bold text-[60px]">ABOUT THE BRAND</div>
          <div className="flex flex-col gap-[40px] justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-[30px] w-full">
              <div className="rounded-full sm:w-1/3 h-[380px] overflow-hidden">
              <Image
                  src={ab1}
                  alt="storyimg"
                  // objectFit="cover"
                  // layout="fill"
                  className=" object-cover h-full"
                />
              </div>
              <div className="hidden sm:flex rounded-full sm:w-1/3 h-[380px] overflow-hidden">
                <Image
                  src={ab2}
                  alt="storyimg"
                  // objectFit="cover"
                  // layout="fill"
                  className=" object-cover h-full"
                />
              </div>
              <div className="hidden sm:flex rounded-full sm:w-1/3 h-[380px] overflow-hidden">
                <Image
                  src={ab3}
                  alt="storyimg"
                  // objectFit="cover"
                  // layout="fill"
                  className=" object-cover h-full"
                />
              </div>
            </div>
            <div className="w-full text-justify text-[20px] text-white font-primary">
              925 was founded on the idea of doing work you love, or rather, the
              fear of not pursuing it. It isn&apos;t a knock on work culture or the
              day-to-day grind, in fact, it embraces it through its designs.
              Hard work is inevitable. The brand champions those who have found
              the perfect balance of passion and practicality.
            </div>
            <Button text="Learn more" variant="outline" link="/about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStory;
