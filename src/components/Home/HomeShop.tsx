"use client";

import { useState } from "react";
import Card from "@/components/Shared/Card";

const cards = [
  { title: "Card 1", description: "Description 1" },
  { title: "Card 2", description: "Description 2" },
  { title: "Card 3", description: "Description 3" },
  { title: "Card 4", description: "Description 4" },
];

const HomeShop = () => {
  return (
    <>
      <div className="w-full bg-white flex items-center justify-center p-[50px]">
        <CardSlider cards={cards} />
      </div>
    </>
  );
};
export default HomeShop;

interface CardProps {
  title: string;
  description: string;
}

interface CardSliderProps {
  cards: CardProps[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
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
    <div className="flex items-center justify-center">
      <button onClick={prevCard} className="text-2xl mr-4">
        &larr;
      </button>
      <div className="flex space-x-4">
        {visibleIndices.map((index) => (
          <Card key={index} {...cards[index]} />
        ))}
      </div>
      <button onClick={nextCard} className="text-2xl ml-4">
        &rarr;
      </button>
    </div>
  );
};
