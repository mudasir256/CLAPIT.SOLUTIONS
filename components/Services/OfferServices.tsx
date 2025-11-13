/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedSection1 from "../AnimatedSection1";
import { Button } from "../ui/button";
import Link from "next/link";
import { Service } from "../types";

export default function PrecisionServiceSlider({
  service,
}: {
  service: Service;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const caseStudies = service.caseStudies || [];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  }, [isTransitioning, caseStudies]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  }, [isTransitioning, caseStudies]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
    },
    [isTransitioning, currentIndex]
  );

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  if (caseStudies.length === 0) {
    return (
      <div className="py-12 text-left w-full container mx-auto px-4 md:px-8"></div>
    );
  }

  const slideVariants: Variants = {
    initial: {
      opacity: 0,
      x: 300,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: -300,
      scale: 0.9,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div
      className="py-12 text-left w-full container mx-auto px-4 md:px-8 "
      ref={sliderRef}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-secondary">
              Case Studies
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Service"
                disabled={isTransitioning}
                className={`p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors ${
                  isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowLeft size={24} className="text-secondary" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Service"
                disabled={isTransitioning}
                className={`p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors ${
                  isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowRight size={24} className="text-secondary" />
              </button>
            </div>
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to service ${index + 1}`}
                  disabled={isTransitioning}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-secondary w-6"
                      : "bg-secondary/30 hover:bg-secondary/50"
                  } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative text-left w-full h-auto lg:h-[65vh] bg-gradient-to-br bg-light p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={handleTransitionEnd}
          >
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center">
                  {typeof caseStudies[currentIndex].icon === "string" ? (
                    caseStudies[currentIndex].icon.startsWith("/") ||
                    caseStudies[currentIndex].icon.startsWith("http") ? (
                      <Image
                        src={caseStudies[currentIndex].icon}
                        alt={caseStudies[currentIndex].title}
                        width={700}
                        height={600}
                      />
                    ) : (
                      caseStudies[currentIndex].icon
                    )
                  ) : (
                    React.createElement(caseStudies[currentIndex].icon)
                  )}
                </div>
                <h3 className="lg:text-2xl text-lg font-bold mb-3 text-secondary text-center">
                  {caseStudies[currentIndex].title}
                </h3>
                <Button
                  asChild
                  className="bg-dark text-white light:bg-gray-100 light:text-dark mt-3"
                >
                  <Link
                    href={`/case-studies/${caseStudies[currentIndex].id}`}
                    className="pr-2"
                  >
                    Read Success Story
                    <ChevronRight
                      size={20}
                      className="text-white flex-shrink-0 ml-1"
                    />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col justify-between h-[52vh]">
                <div>
                  <p className="text-dark mb-6 lg:text-xl md:text-lg sm:text-md leading-relaxed font-semibold">
                    {caseStudies[currentIndex].description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {caseStudies[currentIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ChevronRight
                          size={20}
                          className="text-secondary flex-shrink-0"
                        />
                        <span className="text-dark lg:text-lg md:text-md sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    Tech Stack
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {caseStudies[currentIndex].techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-2 h-auto bg-secondary/10 text-secondary rounded-full text-xs lg:text-md md:text-sm sm:text-xs  text-center"
                      >
                        <AnimatedSection1>{tech}</AnimatedSection1>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
