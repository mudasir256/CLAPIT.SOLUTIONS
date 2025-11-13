"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { IMAGES } from "@/public/images";

export default function PeoplePageHeader() {
  const images = [IMAGES.Entertainment3, IMAGES.Entertainment2, IMAGES.Entertainment5, IMAGES.Entertainment4, IMAGES.Entertainment1];
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const initialRotations = [0, -4, -8, -12, -16];

  const smoothScroll = useCallback((value: number) => {
    setScrollY(prev => {
      const delta = value - prev;
      return prev + (delta * 0.15); 
    });
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    let scrollTimeout: NodeJS.Timeout;
    let rafId: number;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
      lastScrollY = window.scrollY;
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const animate = () => {
      if (isScrolling) {
        smoothScroll(lastScrollY);
      }
      rafId = requestAnimationFrame(animate);
    };

    const onResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling, smoothScroll]);

  const imageScrollHeight = windowHeight * 0.8 * images.length;
  const totalScrollHeight = imageScrollHeight + windowHeight; // Add extra height for header to scroll up
  const offsetAfterImages = Math.max(0, scrollY - imageScrollHeight);
  const headerTranslateY = Math.min(offsetAfterImages, windowHeight);

  // Calculate min-height based on number of images (each image takes 0.8vh, plus 1vh for header scroll)
  const minHeightVh = images.length * 0.8 + 1;

  return (
    <div className="relative bg-white text-dark" style={{ minHeight: `${minHeightVh * 100}vh` }}>
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          transform: `translateY(-${headerTranslateY}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center z-0">
          <h1 className="text-5xl md:text-[130px] font-bold">
            Life At <span className="text-secondary">CLAPIT SOLUTIONS</span>Solutions 
          </h1>
        </div>

        {images.map((img, index) => {
          const start = index * windowHeight * 0.8;
          const end = (index + 1) * windowHeight * 0.8;
          const progress = Math.min(
            1,
            Math.max(0, (scrollY - start) / (end - start))
          );

          const translateY = -progress * windowHeight * 0.8;
          const rotateDeg =
            initialRotations[index] + progress * (index % 2 === 0 ? -50 : -50);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-[50%] lg:w-[300px] lg:h-[420px] w-[200px] h-[280px] rounded-2xl shadow-xl overflow-hidden"
              style={{
                transform: `translate(-50%, -60%) translateY(${translateY}px) rotate(${rotateDeg}deg)`,
                transition: isScrolling ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: images.length - index,
              }}
            >
              <Image
                src={typeof img === 'string' ? img : img?.src || img}
                alt={`Team member ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 1024px) 200px, 300px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
