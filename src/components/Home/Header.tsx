"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import sample from "@/assets/sample.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {
  return (
    <>
      <div className="w-full pt-[95px] px-[40px] bg-white font-primary">
        <div className="w-full flex justify-center relative overflow-hidden  rounded-[30px]">
          <Carousel
            className=""
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            showStatus={false}
            emulateTouch={true}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <span
                  className={` ml-[10px] w-[10px] h-[10px] ${
                    isSelected ? "bg-seafoam" : "bg-spaceCadet"
                  } inline-block rounded-full`}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                >
                  .
                </span>
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
            <Image
              src={sample}
              alt="header"
              objectFit="cover"
              className=" object-cover"
            />
            <HomepageCarouselItem
              title="SHOP NEW COLLECTION"
              subtitle="g"
              description="d"
              desktopImageSrc={sample}
              mobileImageSrc={sample}
              buttonText="f"
              buttonUrl="/hi"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Header;

interface IHomepageCarousel {
  title: string | JSX.Element;
  subtitle: string;
  description: string | JSX.Element;
  desktopImageSrc: HTMLImageElement | string | StaticImageData;
  mobileImageSrc?: HTMLImageElement | string | StaticImageData;
  buttonText?: string;
  buttonUrl?: string;
}

function HomepageCarouselItem({
  title,
  subtitle,
  description,
  desktopImageSrc,
  mobileImageSrc,
  buttonText,
  buttonUrl,
}: IHomepageCarousel) {
  return (
    <div className="flex flex-col items-start h-full justify-center align-middle text-center overflow-hidden">
      <div className="flex flex-col justify-center items-start z-10 h-full">
        {/* <h3 className="text-[#00E9BA] text-[10px] lg:text-sm leading-[87%] tracking-[4px] mb-2 uppercase">
          {subtitle}
        </h3> */}
        <div className="z-10 px-[60px] font-black text-white text-[60px]">
          {title}
        </div>
        {/* <h2 className="text-[32px] lg:text-[56px] leading-[%] font-bold mb-[9px] max-w-[300px] lg:max-w-none">
          {title}
        </h2> */}
        {/* <div className="text-sm lg:text-base font-normal leading-[130%] font-secondary max-w-[352px] lg:max-w-[500px] text-neutral-5 mb-[28px]">
          {description}
        </div> */}

        {/* {!!buttonText && !!buttonUrl && (
          <a href={buttonUrl} rel="noopener noreferrer" target="_blank">
            {buttonText}
          </a>
        )} */}
      </div>
      <Image
        src={desktopImageSrc}
        alt="925"
        objectFit="cover"
        layout="fill"
        quality={90}
        className="hidden lg:!flex h-full border"
      />
      <Image
        src={mobileImageSrc ? mobileImageSrc : desktopImageSrc}
        alt="925"
        objectFit="cover"
        layout="fill"
        quality={90}
        className="lg:!hidden h-full"
      />
    </div>
  );
}
