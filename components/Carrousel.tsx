"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const Carrousel: React.FC = () => {
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const carrouselRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carrouselRef.current) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    carrouselRef.current.scrollLeft += diff;
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="overflow-x-hidden whitespace-nowrap mt-6 ml-4"
      ref={carrouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
        <div className="inline-block mr-4">
          <Image
            src={"/example.webp"}
            alt={'testImg'}
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="inline-block mr-4">
          <Image
            src={"/example.webp"}
            alt={'testImg'}
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="inline-block mr-4">
          <Image
            src={"/example.webp"}
            alt={'testImg'}
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="inline-block mr-4">
          <Image
            src={"/example.webp"}
            alt={'testImg'}
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>
    </div>
  );
};

export default Carrousel;
