"use client";
import { IMAGES } from "@/public/images";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Monitor, Cpu, BarChart3, Headphones } from "lucide-react";

const IMAGES_ARRAY = [
  IMAGES.slider1,
  IMAGES.slider16,
  IMAGES.slider7,
  IMAGES.slider8,
  IMAGES.slider9,
  IMAGES.slider10,
  IMAGES.slider12,
  IMAGES.slider13,
];

const SLIDES = IMAGES_ARRAY.filter(Boolean) as unknown as string[];

const SLIDE_INTERVAL_MS = 5000;

const FEATURES = [
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent automation & integration",
  },
  {
    icon: Monitor,
    title: "Custom Development",
    description: "Web & mobile applications",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description: "Data-driven growth plans",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Round-the-clock assistance",
  },
];

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
    <div className="px-4 pt-24 pb-4">
      <div className="container mx-auto relative w-full min-h-[calc(100vh-7rem)] overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 pointer-events-none">
          {SLIDES.map((src: string, index: number) => (
            <NextImage
              key={src}
              src={src}
              alt="Technology background"
              aria-hidden="true"
              fill
              className="absolute inset-0 object-cover transition-opacity duration-1000"
              style={{
                opacity: index === currentIndex ? 0.85 : 0,
                filter: "brightness(0.75)",
                willChange: "opacity",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col justify-center h-full min-h-[calc(100vh-7rem)] px-8 sm:px-12 md:px-16 lg:px-20 pt-8 pb-20 sm:pb-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Innovate & Build with{" "}
              <span className="text-secondary underline decoration-secondary decoration-4 underline-offset-8">
                AI-Powered
              </span>{" "}
              Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-light mb-10 max-w-2xl leading-relaxed">
              Transform your ideas into reality with cutting-edge AI-driven
              development and strategic branding for enduring growth.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border-2 border-secondary text-secondary px-5 sm:px-7 py-3 font-semibold hover:bg-secondary hover:text-white transition-colors text-sm sm:text-base"
              >
                Learn More
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-md bg-dark/80 backdrop-blur text-white border border-darkMedium px-5 sm:px-7 py-3 font-semibold hover:bg-dark transition-colors text-sm sm:text-base"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 px-8 sm:px-12 md:px-16 lg:px-20 pb-8">
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-white/95 backdrop-blur rounded-xl px-5 py-4 shadow-lg"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-medium text-xs leading-tight mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoopVideo;
