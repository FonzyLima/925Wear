"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Shared/Card";
import sample from "@/assets/sample.png";
import Button from "../Shared/Button";

const HomeShop = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentMargin, setCurrentMargin] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    // Update the number of slides and margins on resize
    const checkWidth = () => {
      const containerWidth = window.innerWidth;
      setParams(containerWidth);
    };

    window.addEventListener("resize", checkWidth);
    checkWidth();

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const setParams = (w: number) => {
    let newSlidesPerPage = 1;
    if (w >= 551 && w < 901) newSlidesPerPage = 2;
    else if (w >= 901 && w < 1101) newSlidesPerPage = 3;
    else if (w >= 1101) newSlidesPerPage = 4;

    setSlidesPerPage(newSlidesPerPage);
    setSlidesCount(slides - newSlidesPerPage);

    if (currentPosition > slidesCount) {
      setCurrentPosition(currentPosition - newSlidesPerPage);
    }

    const newCurrentMargin = -currentPosition * (100 / newSlidesPerPage);
    setCurrentMargin(newCurrentMargin);
  };

  const slideRight = () => {
    if (currentPosition !== 0) {
      const newMargin = currentMargin + 100 / slidesPerPage;
      setCurrentMargin(newMargin);
      setCurrentPosition(currentPosition - 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition !== slidesCount) {
      const newMargin = currentMargin - 100 / slidesPerPage;
      setCurrentMargin(newMargin);
      setCurrentPosition(currentPosition + 1);
    }
  };

  const slides = 10; // Update with the actual number of slides

  return (
    <>
      <div className="bg-beige w-full flex flex-col items-center justify-center">
        <div className="w-full bg-beige flex items-center justify-center px-[100px] py-[55px] gap-[40px] flex-col max-w-[1800px]">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-[60px] font-bold text-black">
              EXPLORE THE COLLECTION
            </div>
            <div className="flex flex-row gap-[10px]">
              <button
                onClick={slideRight}
                className={`btn text-[40px] bg-yellowgreen rounded-full w-[78px] h-[78px] ${
                  currentPosition === 0 ? "inactive" : ""
                }`}
              >
                &larr;
              </button>
              <button
                onClick={slideLeft}
                className={`text-[40px] bg-yellowgreen rounded-full w-[78px] h-[78px] btn ${
                  currentPosition === slidesCount ? "inactive" : ""
                }`}
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="container">
            <div className="slider-container">
              <div
                className="slider"
                style={{ marginLeft: `${currentMargin}%` }}
              >
                {Array.from({ length: slides }, (_, index) => (
                  <>
                    {/* <div key={index} className="slide">
                  <span>{index + 1}</span>
                   </div> */}
                    <div key={index} className="slide">
                      <Card
                        image={sample}
                        price="P 1,400"
                        title={`Knot Skirt ${index}`}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button text="Shop Now" variant="yellowgreen" link="/store" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShop;
