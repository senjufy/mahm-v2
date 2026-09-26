"use client";

import { useState, useEffect } from "react";

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
  const [loadedIndices, setLoadedIndices] = useState(() => new Set([0]));

  useEffect(() => {
    // Preload next slide in background after initial mount
    setLoadedIndices((current) => {
      const updated = new Set(current);
      updated.add(1);
      return updated;
    });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        const upcoming = (next + 1) % HERO_IMAGES.length;
        setLoadedIndices((current) => {
          if (current.has(next) && current.has(upcoming)) return current;
          const updated = new Set(current);
          updated.add(next);
          updated.add(upcoming);
          return updated;
        });
        return next;
      });
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
        const shouldLoad = loadedIndices.has(index);
        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            {shouldLoad ? (
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-full h-full object-cover object-center"
              />
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
