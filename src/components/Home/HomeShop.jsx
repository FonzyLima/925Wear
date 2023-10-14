"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Shared/Card";

import Button from "../Shared/Button";


const HomeShop = ({products}) => {

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

  const setParams = (w) => {
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

  const slides = 14; // Update with the actual number of slides

  return (
    <>
      <div className="bg-beige w-full flex flex-col items-center justify-center">
        <div className="w-full bg-beige flex items-center justify-center px-[40px] py-[55px] gap-[40px] flex-col max-w-[1800px]">
          <div className="flex flex-col sm:flex-row justify-between w-full items-center">
            <div className="text-[22px] sm:text-[60px] font-bold text-black">
              EXPLORE THE COLLECTION 
            </div>
            <div className="hidden sm:flex flex-row gap-[10px]">
              <button
                onClick={slideRight}
                className={`btn text-[40px] text-black bg-yellowgreen rounded-full w-[78px] h-[78px] border-black border-[1px] duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black ${
                  currentPosition === 0 ? "inactive" : ""
                }`}
              >
                &larr;
              </button>
              <button
                onClick={slideLeft}
                className={`btn text-[40px] text-black bg-yellowgreen rounded-full w-[78px] h-[78px] border-black border-[1px] duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black ${
                  currentPosition === slidesCount ? "inactive" : ""
                }`}
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:container">
            <div className="slider-container">
              <div
                className="slider"
                style={{ marginLeft: `${currentMargin}%` }}
              >
                {products.items.map((product,i)=>(
                  <>
                  <div key={i} className="slide">
                  {products.includes.Asset.map((a) => (
                <div key={a.sys.id}>
                  {product.fields.image.sys.id == a.sys.id ? (
                    <Card  title={product.fields.name} price={`PHP ${product.fields.price}`} image={"https:" + a.fields.file.url}/>
                    
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
                    
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
