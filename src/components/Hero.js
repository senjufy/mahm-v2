"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  {
    src: "/Hero/slide_1.jpeg",
    alt: "Agricultural resilience in Muksudpur",
  },
  {
    src: "/Hero/slide_2.jpeg",
    alt: "Women farmers in the field",
  },
  {
    src: "/Hero/slide_3.jpeg",
    alt: "Livestock and rural livelihood",
  },
  {
    src: "/Hero/slide_4.jpeg",
    alt: "Abdul Hye Memorial School students",
  },
  {
    src: "/Hero/slide_5.jpeg",
    alt: "Students studying in community library",
  },
  {
    src: "/Hero/slide_6.jpeg",
    alt: "Female youth sports leadership",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Hero Banner"
      className="relative w-full h-[340px] sm:h-[460px] md:h-[560px] lg:h-[660px] xl:h-[720px] overflow-hidden bg-[#2d4222]"
    >
      {HERO_IMAGES.map((image, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}
    </section>
  );
}
