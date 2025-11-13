"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { IMAGES } from "@/public/images";

const truncateToWords = (str: string, numWords: number) => {
  const words = str.split(" ");
  if (words.length <= numWords) return str;
  return words.slice(0, numWords).join(" ") + "...";
};

export default function IndustryHeader() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.min(caseStudies.length, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.min(caseStudies.length, 5) - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
          {caseStudies.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              
              <div className="absolute inset-0">
                <Image
                  src={
                    typeof item.image === "string"
                      ? item.image
                      : IMAGES.CoreValuesbg
                  }
                  alt={item.alt || item.title || "Case Study"}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/80 to-dark/60"></div>
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8 md:p-12">
                <div className="space-y-4">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                    {item.title}
                  </h4>
                  <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                    {truncateToWords(item.description || "", 30)}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => router.push(`/industries/${item.id}`)}
                    className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white text-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-md font-medium "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
        >
          →
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          {caseStudies.slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
