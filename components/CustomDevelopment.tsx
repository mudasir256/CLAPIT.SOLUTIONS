/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useRef, useEffect } from "react";
import AnimatedSection1 from "./AnimatedSection1";
import { SubService, SubServicesSection } from "./types";
import { useLenis } from "@/hooks/useLenis";
import Lenis from "lenis";
interface CustomDevelopmentProps {
  service?: SubService[] | SubServicesSection;
  isSection?: boolean;
  isDomains?: boolean;
  isCustom?: boolean;
}

export default function CustomDevelopment({
  service = [],
  isSection = false,
  isDomains,
  isCustom,
}: CustomDevelopmentProps) {
  if (!service) {
    return null;
  }

  const items = Array.isArray(service) ? service : service.items;
  if (items.length === 0) {
    return null;
  }

  const [selectedSubServices, setselectedSubServices] = useState(items[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useLenis();
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const lenis = new Lenis({
      wrapper: scrollContainer,
      content: scrollContainer,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleSubServicesClick = (subService: SubService) => {
    setselectedSubServices(subService);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {isSection && !Array.isArray(service) && (
        <>
          <h1 className="text-4xl !leading-[60px] max-w-3xl sm:text-5xl font-bold text-secondary py-4">
            {service.heading}
          </h1>
          <p className="text-gray-600 mb-8 max-w-3xl">{service.description}</p>
        </>
      )}

      <div className="flex flex-col sm:flex-row items-stretch border border-secondary rounded-xl overflow-hidden min-h-[50vh] lg:h-[40vh]">
        <div className="sm:w-1/2 w-full bg-dark p-6 sm:p-10 relative">
          <div
            ref={scrollContainerRef}
            className="h-full max-h-[50vh] sm:max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar"
            data-lenis-prevent
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "-ms-autohiding-scrollbar",
            }}
          >
            <ul>
              {items?.map((item) => {
                const [number, title] = item?.title
                  ? item.title.split(". ")
                  : ["", ""];
                return (
                  <li
                    key={item.id}
                    className={`pb-10 cursor-pointer transition-colors ${
                      selectedSubServices?.id === item.id
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                    onClick={() => handleSubServicesClick(item)}
                  >
                    <div className="flex items-start gap-3 z-50">
                      <span className="text-lg font-bold">
                        {number}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 mt-10"></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {isCustom && (
          <div className="sm:w-1/2 w-full p-6 sm:p-10 bg-white flex flex-col justify-center">
            {selectedSubServices?.icon && (
              <div className="bg-secondary rounded-md p-2 w-fit mb-3">
                {selectedSubServices.icon}
              </div>
            )}
            <h1 className="text-2xl font-bold text-secondary">
              <AnimatedSection1>
                {selectedSubServices?.title?.split(".")[1]}
              </AnimatedSection1>
            </h1>
            <p className="text-lg text-medium mt-2">
              {selectedSubServices?.description}
            </p>
          </div>
        )}
        {isDomains && (
          <div className="sm:w-1/2 w-full p-6 sm:p-10 bg-white flex justify-center flex-col">
            <h1 className="text-2xl font-bold text-secondary mb-6">
              <AnimatedSection1>
                {selectedSubServices?.title?.split(".")[1]}
              </AnimatedSection1>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedSubServices?.technologies?.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-secondary transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span className="text-md font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
