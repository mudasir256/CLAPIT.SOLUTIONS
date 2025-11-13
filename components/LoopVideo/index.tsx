"use client";
import { IMAGES } from '@/public/images';
import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';

const IMAGES_ARRAY = [
  IMAGES.slider1,
  IMAGES.slider3,
  IMAGES.slider6,
  IMAGES.slider14,
  IMAGES.slider15,
  IMAGES.slider16,
  IMAGES.slider0,
  IMAGES.slider7,
  IMAGES.slider8,
  IMAGES.slider2,
  IMAGES.slider9,
  IMAGES.slider10,
  IMAGES.slider12,
  IMAGES.slider13,
];

const SLIDES = (IMAGES_ARRAY.filter(Boolean) as unknown as string[]);

const SLIDE_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 1000; 

const LoopVideo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % SLIDES.length;
    const img = new window.Image();
    img.src = SLIDES[nextIndex] as string;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {SLIDES.map((src: string, index: number) => (
          <NextImage
            key={src}
            src={src}
            alt="Technology background"
            aria-hidden="true"
            fill
            className="absolute top-0 left-0 object-cover transition-opacity duration-1000"
            style={{
              opacity: index === currentIndex ? 0.9 : 0,
              filter: 'brightness(0.9)',
              willChange: 'opacity',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            Innovate. Build. Thrive — with AI.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-zinc-200">
            Your idea, our intelligence — AI-driven creation and strategy for enduring growth.
          </p>
          <a
            href="/contact-us"
            className="inline-block rounded-md bg-white text-black px-6 py-3 font-semibold shadow-sm hover:shadow-md hover:bg-zinc-200 transition-colors"
            aria-label="Talk to an expert"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoopVideo;
