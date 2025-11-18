"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaseStudy } from "../types";

interface SectionHeaderProps {
  category: string;
  heading: string;
  description: string;
  sliderContent: CaseStudy[];
}

const truncateToWords = (text: string | undefined, limit: number) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

export default function SectionHeader({
  category,
  heading,
  description,
  sliderContent,
}: SectionHeaderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const router = useRouter();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % sliderContent.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, sliderContent.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, sliderContent.length]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Calculate positions for circular arrangement
  const getSlidePosition = (index: number) => {
    const total = sliderContent.length;
    const relativeIndex = (index - currentIndex + total) % total;
    
    switch (relativeIndex) {
      case 0: // Current slide
        return "active";
      case 1: // Next slide
        return "next";
      case total - 1: // Previous slide
        return "prev";
      default:
        return "hidden";
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-dark via-dark to-dark text-white px-4 sm:px-6 rounded-xl overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-secondary rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  sm:gap-6 md:gap-10 items-center relative z-10">
        <div className="space-y-3 sm:space-y-2 mt-6">
          <div>
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent leading-tight">
            {heading}
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="flex items-center space-x-4 pt-2">
            <span className="text-secondary font-mono text-sm">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex space-x-2">
              {sliderContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? "bg-secondary w-8" 
                      : "bg-gray-600 w-4 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400 font-mono text-sm">
              {sliderContent.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Circular Slider */}
        <div className="relative">
          <div 
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Central orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            </div>

            {sliderContent.map((item, index) => {
              const position = getSlidePosition(index);
              const isActive = position === "active";
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    position === "active" 
                      ? "opacity-100 scale-100 z-30 cursor-grab active:cursor-grabbing" 
                      : position === "next" 
                      ? "opacity-60 scale-75 translate-x-1/2 z-20 cursor-pointer" 
                      : position === "prev" 
                      ? "opacity-60 scale-75 -translate-x-1/2 z-20 cursor-pointer"
                      : "opacity-0 scale-50 z-10"
                  } ${isAnimating ? "pointer-events-none" : ""}`}
                  onClick={() => {
                    if (position === "next") nextSlide();
                    if (position === "prev") prevSlide();
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Card */}
                    <div className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col ${
                      isActive ? "w-[320px] h-[400px]" : "w-[240px] h-[300px]"
                    }`}>
                      {/* Image */}
                      <div className="relative h-48 sm:h-56 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image || "/default-image.png"}
                          alt={item.alt || "Case Study Image"}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={isActive}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-secondary text-dark px-3 py-1 rounded-full text-xs font-bold">
                            Case Study
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col flex-grow px-6 py-4 min-h-0">
                        <div className="flex-grow overflow-y-auto">
                          <h3 className={`font-bold text-secondary transition-all duration-300 mb-2 ${
                            isActive ? "text-lg" : "text-md"
                          }`}>
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {truncateToWords(item.description, isActive ? 20 : 25)}
                          </p>
                        </div>

                        {isActive && (
                          <div className="flex items-center justify-between pt-2 mt-auto flex-shrink-0 border-t border-white/10">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/case-studies/${item.id}`);
                              }}
                              className="group flex items-center space-x-2 text-secondary hover:text-accent transition-colors"
                            >
                              <span className="font-semibold text-sm">View Details</span>
                              <div className="w-6 h-6 bg-secondary group-hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                                <svg className="w-3 h-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </button>
                            
                            <div className="flex space-x-2 sm:hidden">
                              <button 
                                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                className="w-8 h-8 border border-secondary text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors"
                              >
                                ←
                              </button>
                              <button 
                                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                className="w-8 h-8 border border-secondary text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-dark transition-colors"
                              >
                                →
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="absolute inset-0 hidden sm:flex items-center justify-between px-4 pointer-events-none z-40">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                disabled={isAnimating}
                className="w-12 h-12 bg-dark/50 backdrop-blur-sm border border-secondary text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-dark transition-all duration-300 transform hover:scale-110 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed z-50"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                disabled={isAnimating}
                className="w-12 h-12 bg-dark/50 backdrop-blur-sm border border-secondary text-secondary rounded-full flex items-center justify-center hover:bg-secondary hover:text-dark transition-all duration-300 transform hover:scale-110 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed z-50"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}