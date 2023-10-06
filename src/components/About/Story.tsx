import Image from "next/image";
const Story = () => {
  return (
    <div className="bg-white w-full px-[40px] pt-[100px] pb-[40px] rounded-br-[50px] rounded-bl-[50px]">
      <div className="flex flex-col space-y-10 px-[60px] py-[55px] border-solid border rounded-[30px]">
        <div className="text-[60px] font-primary">Our Story</div>
        <div className="flex flex-row justify-between mt-[30px]">
          <div className="">
            <Image
              className="rounded-[230px]"
              src="/about-circl.jpg"
              height={400}
              width={400}
              alt="circle"
            />
          </div>
          <div>
            <Image
              className="rounded-[230px]"
              src="/about-circl.jpg"
              height={400}
              width={400}
              alt="circle"
            />
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/about-circl.jpg"
              height={400}
              width={400}
              alt="circle"
            />
          </div>
        </div>
        <div className="text-[30px] text-justify font-primary">
          925 was founded on the idea of doing work you love, or rather, the
          fear of not pursuing it. It isn’t a knock on work culture or the
          day-to-day grind, in fact, it embraces it through its designs. Hard
          work is inevitable. The brand champions those who have found the
          perfect balance of passion and practicality.
        </div>
        <div className="flex flex-row gap-[40px]">
          <div className="flex flex-col w-3/5">
            <div className="pt-5 text-[30px] text-justify font-primary">
              925 STUDIO is a Manila-based design house founded by Rafael
              Evangelista. Fueled by the desire to create, 925 was built to
              develop sub-brands whether it be clothing, videography, music, or
              home accessories.
            </div>
            <div className="text-[30px] h-[75px] font-primary bg-yellowgreen w-[252px] flex justify-center items-center rounded-[50px] hover:cursor-pointer mt-[20px]">Learn More</div>
          </div>
          <div className="w-2/5">
            <Image
              className="rounded-[50px]"
              src="/about-circl.jpg"
              height={374}
              width={543}
              alt="circle"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-2/5">
            <Image
              className="rounded-[50px]"
              src="/about-circl.jpg"
              height={374}
              width={543}
              alt="circle"
            />
          </div>
          <div className="flex flex-col w-3/5">
            <div className="text-[30px] text-justify font-primary">
              925 WEAR is a lifestyle clothing brand by Rafael and Bianca
              Evangelista. The brand takes inspiration from the seemingly
              mundane styles found in everyday work. Operating through capsule
              collections, the brand values producing limited high-quality
              pieces with each release.
            </div>
            <div className="text-[30px] h-[75px] bg-black text-white w-[252px] flex justify-center items-center rounded-[50px] hover:cursor-pointer mt-[20px]">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
