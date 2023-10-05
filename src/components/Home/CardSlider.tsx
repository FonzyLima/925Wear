"use client";
// components/CardSlider.tsx
import { useState } from "react";
import Card from "@/components/Shared/Card";

interface CardProps {
  // Define your card properties here
  title: string;
  description: string;
  // Add more properties as needed
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

export default CardSlider;
