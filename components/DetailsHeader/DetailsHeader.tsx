"use client";

import { useState, useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderContent.length]);

  return (
    <section className="relative  bg-gradient-to-br from-dark via-dark to-dark text-white py-16 px-6 rounded-xl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-md font-medium bg-[#ffffff] text-secondary rounded-full">
              {category}
            </span>
          </div>
          <h1 className="text-5xl text-secondary  md:text-6xl font-bold mb-6 leading-tight">
            {heading}
          </h1>
          <p className="lg:text-xl text-lg text-[#fbfcfc]">{description}</p>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            {sliderContent.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <Image
                  src={item.image || "/default-image.png"}
                  alt={item.alt || "Case Study Image"}
                  className="w-full h-48 object-fill rounded-lg"
                  width={500}
                  height={200}
                />
                <div className="p-6 text-center">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold text-secondary mb-2">
                      {item.title}
                    </h4>
                    <button 
                      onClick={() => router.push(`/case-studies/${item.id}`)}
                      className="text-secondary text-lg font-semibold bg-light px-4 rounded-full hover:bg-secondary hover:text-light transition-colors"
                    >
                      Detail
                    </button>
                  </div>
                  <p className="text-lg text-center text-medium my-4 ">
                    {truncateToWords(item.description, 22)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            {sliderContent.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-secondary" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
