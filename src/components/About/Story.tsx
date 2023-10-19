import Image from "next/image";
import Button from "../Shared/Button";
import ab1 from "@/assets/ab1.jpg";
import ab2 from "@/assets/ab2.jpg";
import ab3 from "@/assets/ab3.jpg";
import abstudio from "@/assets/abstudio.png";
import abwear from "@/assets/abwear.png";
import { aboutImages } from "@/fixed/fixedImages";

const Story = () => {
  return (
    <div className="bg-white w-full px-[20px] sm:px-[40px] pt-[100px] pb-[20px] sm:pb-[40px] rounded-br-[50px] rounded-bl-[50px]">
      <div className="flex flex-col gap-[35px] px-[30px] sm:px-[60px] py-[55px] border-solid border rounded-[30px] text-[16px] sm:text-[20px]">
        <div className="leading-[40px] sm:leading-[50px] lg:leading-normal text-[40px] sm:text-[50px] lg:text-[60px] font-bold">
          ABOUT THE BRAND
        </div>
        <div className="flex flex-col sm:flex-row gap-[30px] w-full">
          {aboutImages.map((items, i) => (
            <div key={i} className="rounded-full sm:w-1/3 h-[200px] sm:h-[380px] overflow-hidden">
              <Image
                
                src={items.image}
                alt="storyimg"
                // objectFit="cover"
                // layout="fill"
                className=" object-cover h-full"
              />
            </div>
          ))}
          {/* <div className="rounded-full hidden sm:flex sm:w-1/3 h-[200px] sm:h-[380px] overflow-hidden">
            <Image
              src={ab1}
              alt="storyimg"
              // objectFit="cover"
              // layout="fill"
              className=" object-cover h-full"
            />
          </div>
          <div className="rounded-full sm:w-1/3 sm:h-[380px] overflow-hidden">
            <Image
              src={ab2}
              alt="storyimg"
              // objectFit="cover"
              // layout="fill"
              className=" object-cover h-full"
            />
          </div>
          <div className="rounded-full hidden sm:flex w-1/3 h-[380px] overflow-hidden">
            <Image
              src={ab3}
              alt="storyimg"
              // objectFit="cover"
              // layout="fill"
              className=" object-cover h-full"
            />
          </div> */}
        </div>

        <div className="text-justify font-primary">
          925 was founded on the idea of doing work you love, or rather, the
          fear of not pursuing it. It isn’t a knock on work culture or the
          day-to-day grind, in fact, it embraces it through its designs. Hard
          work is inevitable. The brand champions those who have found the
          perfect balance of passion and practicality.
        </div>
        <div className="flex flex-col-reverse justify-center items-center sm:flex-row gap-[20px] sm:gap-[40px]">
          <div className="flex flex-col gap-[10px] sm:gap-[30px] sm:w-3/5">
            <div className="text-justify font-primary">
              925 STUDIO is a Manila-based design house founded by Rafael
              Evangelista. Fueled by the desire to create, 925 was built to
              develop sub-brands whether it be clothing, videography, music, or
              home accessories.
            </div>
            <Button
              text="Learn more"
              variant="yellowgreen"
              link="https://www.instagram.com/925.files/"
              target="_blank"
            />
          </div>
          <div className="sm:w-2/5">
            <Image
              className="rounded-[50px] object-cover h-full"
              src={abstudio}
              alt="circle"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-[20px] sm:gap-[40px]">
          <div className="sm:w-2/5">
            <Image className="rounded-[50px] border-black border-[1px]" src={abwear} alt="circle" />
          </div>
          <div className="flex flex-col gap-[10px] sm:gap-[30px] sm:w-3/5">
            <div className="text-justify font-primary">
              925 WEAR is a lifestyle clothing brand by Rafael and Bianca
              Evangelista. The brand takes inspiration from the seemingly
              mundane styles found in everyday work. Operating through capsule
              collections, the brand values producing limited high-quality
              pieces with each release.
            </div>
            <Button
              text="See more"
              variant="black"
              link="https://www.instagram.com/925.wear/"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
