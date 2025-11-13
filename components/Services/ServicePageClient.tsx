"use client";

import { useRef } from "react";
import RightLongArrowIcon from "@/public/svg/RightLongArrowIcon";
import AnimatedSection1 from "../AnimatedSection1";
import { Service } from "../types";
import { IMAGES } from "@/public/images";

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const getImageUrl = (image: string | any): string => {
    if (!image) return "";
    if (typeof image === "string") return image;
    if (image && typeof image === "object" && "src" in image) {
      return image.src;
    }
    return String(image);
  };

  const backgroundImage = getImageUrl(service.image);
  const headBackgroundImage = getImageUrl(IMAGES.Headbg);

  const textContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex items-center bg-dark bg-cover bg-center min-h-screen lg:h-[150vh]"
      style={{ backgroundImage: `url('${headBackgroundImage}')` }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center rounded-lg bg-cover bg-center">
            <div
              ref={textContainerRef}
              className="transition-all duration-700 sticky top-[18%] md:top-[15%] lg:top-[30%] mb-10 px-4 md:px-0"
            >
              <h1 className="text-2xl lg:text-6xl md:text-5xl font-bold mb-6 text-secondary leading-tight">
                <AnimatedSection1>{service.title}</AnimatedSection1>
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-Medium leading-relaxed">
                {service.description}
              </p>

              <div className="mt-10 text-center">
                <a
                  href="/contact-us"
                  className="border-2 border-secondary text-secondary px-6 py-3 md:px-8 md:py-4 rounded-full light:bg-blue-700 transition-colors inline-flex items-center space-x-3"
                >
                  <p className="text-sm md:text-lg">Get Started</p>
                  <RightLongArrowIcon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {backgroundImage && (
              <div
                className="text-center h-[40vh] md:h-[80vh] rounded-lg bg-cover bg-center mt-36 md:mt-[30vh] mx-4 md:mx-0"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
