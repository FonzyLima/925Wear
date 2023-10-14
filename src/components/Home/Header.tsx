"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import car1 from "@/assets/car1.png"
import car2 from "@/assets/car2.png"
import car3 from "@/assets/car3.png"
import car4 from "@/assets/car4.png"
import car5 from "@/assets/car5.png"
import carmob1 from "@/assets/carmob1.png"
import carmob2 from "@/assets/carmob2.png"
import carmob3 from "@/assets/carmob3.png"
import carmob4 from "@/assets/carmob4.png"
import carmob5 from "@/assets/carmob5.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../Shared/Button";

const Header = () => {
  return (
    <>
      <div className="relative w-full pt-[95px] px-[40px] bg-white font-primary">
        <Carousel
          className="w-full flex justify-center relative overflow-hidden h-full rounded-[30px]"
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showStatus={false}
          emulateTouch={true}
          showThumbs={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <span
                className={` ml-[10px] w-[10px] h-[10px] bg-white ${
                  isSelected ? "bg-yellowgreen" : "bg-white"
                } inline-block rounded-full`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              ></span>
            );
          }}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                className="z-10 absolute flex items-center justify-center top-1/2 -translate-y-1/2 w-[48px] h-[48px] right-0 bg-[#020512] bg-opacity-0"
                type="button"
                onClick={onClickHandler}
                title={label}
              ></button>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="z-10 absolute flex items-center justify-center top-1/2 -translate-y-1/2 w-[48px] h-[48px] left-0 bg-[#020512] bg-opacity-0"
              ></button>
            )
          }
        >
          <HomepageCarouselItem
            title="SHOP NEW COLLECTION 02"
            desktopImageSrc={car1}
            mobileImageSrc={carmob1}
            buttonText="See more"
            buttonUrl="/store"
          />
          <HomepageCarouselItem
            title=""
            desktopImageSrc={car2}
            mobileImageSrc={carmob2}
            buttonText=""
            buttonUrl=""
          />
          <HomepageCarouselItem
            title=""
            desktopImageSrc={car3}
            mobileImageSrc={carmob3}
            buttonText="See more"
            buttonUrl="/store"
          />
          <HomepageCarouselItem
            title=""
            desktopImageSrc={car4}
            mobileImageSrc={carmob4}
            buttonText="See more"
            buttonUrl="/store"
          />
          <HomepageCarouselItem
            title=""
            desktopImageSrc={car5}
            mobileImageSrc={carmob5}
            buttonText="See more"
            buttonUrl="/store"
          />
        </Carousel>
        <div className="absolute top-0 mt-[280px] flex flex-col justify-center items-start z-10 mx-[30px] sm:mx-[60px]">
          <div className="z-10 font-black text-white text-[20px] sm:text-[60px] text-left">
            SHOP COLLECTION 02
          </div>
          <Button text="See more" variant="outline" link="/store" />
        </div>
      </div>
    </>
  );
};

export default Header;

interface IHomepageCarousel {
  title: string | JSX.Element;
  desktopImageSrc: HTMLImageElement | string | StaticImageData;
  mobileImageSrc?: HTMLImageElement | string | StaticImageData;
  buttonText?: string;
  buttonUrl?: string;
}

function HomepageCarouselItem({
  title,
  desktopImageSrc,
  mobileImageSrc,
  buttonText,
  buttonUrl,
}: IHomepageCarousel) {
  return (
    <div className="flex flex-col border min-h-[500px] items-start h-full justify-center align-middle text-center overflow-hidden">
      {/* <div className="flex flex-col justify-center items-start z-10 h-full px-[60px]">
        <div className="z-10 font-black text-white text-[60px] text-left">
          {title}
        </div>
        {!!buttonText && !!buttonUrl && (
          <a
            href={buttonUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="px-6 py-2 border text-white text-[20px] rounded-full font-bold"
          >
            {buttonText}
          </a>
          <Button
            text={buttonText}
            classN="border text-white text-[22px] rounded-full font-semibold"
            textClass=""
            link={buttonUrl}
          />
        )}
      </div> */}
      <Image
        src={desktopImageSrc}
        alt="925"
        objectFit="cover"
        layout="fill"
        quality={90}
        className="hidden lg:!flex"
      />
      <Image
        src={mobileImageSrc ? mobileImageSrc : desktopImageSrc}
        alt="925"
        objectFit="cover"
        layout="fill"
        quality={90}
        className="lg:!hidden"
      />
    </div>
  );
}
