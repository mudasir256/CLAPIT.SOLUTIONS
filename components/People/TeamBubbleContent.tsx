"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IMAGES } from "@/public/images";

interface TeamMember {
  image: string | any;
  name: string;
  position?: string;
}

const teamMembers: TeamMember[] = [
  { image: IMAGES.Saad, name: "Saad Nadeem", position: "Team Lead" },
  { image: IMAGES.Awais, name: "Awais", position: "Mobile Developer" },
  { image: IMAGES.Usama, name: "Usama", position: "Graphic Designer" },
  { image: IMAGES.Abuzar, name: "Abuzar", position: "Web Lead Developer" },
  { image: IMAGES.Arsal, name: "Arsal", position: "Backend/AI Developer" },
];

export default function TeamBubbleContent() {
  const [durations, setDurations] = useState<string[]>(Array(6).fill("4s"));
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newDurations = teamMembers.map(
      () => `${(3 + Math.random() * 2).toFixed(2)}s`
    );
    setDurations(newDurations);
  }, []);

  const getSize = () => {
    if (isMobile) return "70px";
    if (isTablet) return "100px";
    return "130px";
  };

  const getContainerDimensions = () => {
    if (isMobile) return { width: 320, height: 320 };
    if (isTablet) return { width: 500, height: 500 };
    return { width: 600, height: 600 };
  };

  const getRadius = () => {
    if (isMobile) return 100;
    if (isTablet) return 180;
    return 230;
  };

  const getCircularPosition = (index: number, total: number) => {
    const { width: containerWidth, height: containerHeight } = getContainerDimensions();
    const radius = getRadius();
    const centerX = containerWidth / 2.8;
    const centerY = containerHeight / 2;
    
    const angle = (2 * Math.PI * index) / total;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { top: `${y}px`, left: `${x}px` };
  };

  const containerDimensions = getContainerDimensions();

  return (
    <div className="py-8 md:py-12 lg:py-16 bg-white text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-secondary mb-8 md:mb-12 lg:mb-16 tracking-tight">
        Our <span className="text-dark">Team</span> Is Our{" "}
        <span className="text-medium">Greatest Asset</span>
      </h1>

      {/* Mobile: Card Layout */}
      {isMobile ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-medium">
                <Image
                  src={typeof member.image === 'string' ? member.image : member.image?.src || member.image}
                  alt={`Team member ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <p className="text-dark font-semibold text-xs text-center mb-1">
                {member.name}
              </p>
              {member.position && (
                <p className="text-darkMedium text-[10px] text-center">
                  {member.position}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Desktop/Tablet: Bubble Layout */
        <div className="flex justify-center items-center">
          <div 
            className="relative"
            style={{
              width: `${containerDimensions.width}px`,
              height: `${containerDimensions.height}px`,
              maxWidth: '90vw',
              maxHeight: '90vw'
            }}
          >
            {teamMembers.map((member, index) => {
              const size = getSize();
              const delay = `${(index * 0.3).toFixed(2)}s`;
              const position = getCircularPosition(index, teamMembers.length);

              return (
                <div
                  key={index}
                  className="absolute w-[100%] text-center flex flex-col items-center justify-center rounded-full overflow-hidden shadow-lg border-2 md:border-3 lg:border-4 border-medium hover:scale-110 transition-transform duration-300 group"
                  style={{
                    top: position.top,
                    left: position.left,
                    width: size,
                    height: size,
                    animationName: "bubble",
                    animationDuration: durations[index],
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: delay,
                    zIndex: hoveredIndex === index ? 10 : 1,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={typeof member.image === 'string' ? member.image : member.image?.src || member.image}
                    alt={`Team member ${member.name}`}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 1024px) 100px, 130px"
                  />

                  <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  >
                    <p className="text-white font-bold text-sm md:text-base text-center px-2">
                      {member.name}
                    </p>
                    {member.position && (
                      <p className="text-white text-xs md:text-sm text-center mt-1 px-2">
                        {member.position}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}