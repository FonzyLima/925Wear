"use client";

import { useState } from "react";
import Card from "@/components/Shared/Card";

const cards = [
  { title: "Card 1", description: "Description 1" },
  { title: "Card 2", description: "Description 2" },
  { title: "Card 3", description: "Description 3" },
  { title: "Card 4", description: "Description 4" },
];

interface CardProps {
  title: string;
  description: string;
}

interface CardSliderProps {
  cards: CardProps[];
  visibleIndices: number[];
  onPrevCard: () => void;
  onNextCard: () => void;
}

const CardSlider: React.FC<CardSliderProps> = ({
  cards,
  visibleIndices,
  onPrevCard,
  onNextCard,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-4">
        {visibleIndices.map((index) => (
          <Card key={index} {...cards[index]} />
        ))}
      </div>
    </div>
  );
};

const HomeShop = () => {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3]);

  const nextCard = () => {
    setVisibleIndices((prevIndices) =>
      prevIndices.map((index) => (index + 1) % cards.length)
    );
  };

  const prevCard = () => {
    setVisibleIndices((prevIndices) =>
      prevIndices.map((index) => (index === 0 ? cards.length - 1 : index - 1))
    );
  };

  return (
    <>
      <div className="w-full bg-beige flex items-center justify-center p-[100px] flex-col">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="text-[60px] font-bold text-black">
            EXPLORE THE COLLECTION
          </div>
          <div className="flex flex-row gap-[10px]">
          <button onClick={prevCard} className="text-[40px] bg-yellowgreen rounded-full w-[78px] h-[78px]">
            &larr;
          </button>
          <button onClick={nextCard} className="text-[40px] bg-yellowgreen rounded-full w-[78px] h-[78px]">
            &rarr;
          </button>
          </div>
         
        </div>
        <CardSlider
          cards={cards}
          visibleIndices={visibleIndices}
          onPrevCard={prevCard}
          onNextCard={nextCard}
        />
      </div>
    </>
  );
};

export default HomeShop;
