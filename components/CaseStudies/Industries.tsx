"use client";

import { industriesData } from "@/data/industries";
import React, { useState, useRef, useEffect } from "react";
import IndustriesCard from "./IndustriesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IndustriesComponent() {
  const [selected, setSelected] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const allIndustries = [
    { id: "all", title: "All" },
    ...industriesData.map(industry => ({
      id: industry.id,
      title: industry.title
    }))
  ];

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full ">
      <div className="relative mb-8 sm:mb-10 md:mb-12">
        <div className="md:hidden relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-dark" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-dark" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide px-4 pb-2 scroll-smooth"
          >
            {allIndustries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelected(industry.title)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selected === industry.title
                    ? "bg-secondary text-white shadow-md shadow-secondary/30"
                    : "bg-white text-dark border border-gray-200 active:border-secondary/50 active:text-secondary"
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-3 px-4">
          {allIndustries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelected(industry.title)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300  ${
                selected === industry.title
                  ? "bg-secondary text-white shadow-md shadow-secondary/30 "
                  : "bg-secondary/10 text-dark border border-secondary hover:border-secondary/50 hover:text-secondary "
              }`}
            >
              {industry.title}
            </button>
          ))}
        </div>
      </div>
      
      <IndustriesCard selectedIndustry={selected} />
    </div>
  );
}
