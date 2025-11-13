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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
    return isMobile ? "90px" : "130px";
  };

  const radius = isMobile ? 120 : 230;
  const centerX = isMobile ? 180 : 300;
  const centerY = isMobile ? 180 : 300;

  const getCircularPosition = (index: number, total: number) => {
    const angle = (2 * Math.PI * index) / total;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { top: `${y}px`, left: `${x}px` };
  };

  return (
    <div className="py-12 md:py-12 bg-white text-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-12 md:mb-16 tracking-tight px-4">
        Our <span className="text-dark">Team</span> Is Our{" "}
        <span className="text-medium">Greatest Asset</span>
      </h1>

      <div className="relative mx-auto h-[360px] w-[420px] md:h-[600px] md:w-[700px]">
        {teamMembers.map((member, index) => {
          const size = getSize();
          const delay = `${(index * 0.3).toFixed(2)}s`;
          const position = getCircularPosition(index, teamMembers.length);

          return (
            <div
              key={index}
              className="absolute rounded-full overflow-hidden shadow-lg border-4 border-medium hover:scale-110 transition-transform duration-300 group"
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
                sizes="(max-width: 768px) 90px, 130px"
              />

              <div
                className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
              >
                <p className="text-white font-bold text-sm md:text-base text-center">
                  {member.name}
                </p>
                {member.position && (
                  <p className="text-white text-xs md:text-sm text-center mt-1">
                    {member.position}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
