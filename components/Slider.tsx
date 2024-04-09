"use client";
import React, { useRef, useState } from "react";
import Card from "./Card";
interface Brewery {
  id: string;
  name: string;
  phone: string;
  street: string;
}

interface SliderProps {
  breweries: Brewery[];
}

const Slider: React.FC<SliderProps> = ({ breweries }) => {
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    sliderRef.current.scrollLeft += diff;
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="overflow-x-hidden whitespace-nowrap"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {breweries.map((brewery) => (
        <div key={brewery.id} className="inline-block w-full mr-[-60px]">
          <Card brewery={brewery} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
