"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CaseStudy } from "../types";

const IPhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[300px] h-[600px] rounded-[45px] bg-black p-3 shadow-xl">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[25px] bg-black rounded-b-2xl z-20">
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
    </div>
    <div className="w-full h-full bg-white rounded-[35px] overflow-hidden">
      {children}
    </div>
  </div>
);

export default function Data({ data }: { data: CaseStudy["data"] }) {
  const [sliderIndices, setSliderIndices] = useState<number[]>([]);

  useEffect(() => {
    if (data?.sections?.length) {
      setSliderIndices(new Array(data.sections.length).fill(0));
    }
  }, [data?.sections]);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    data?.sections?.forEach((section, i) => {
      if (section.sliderImages?.length) {
        const interval = setInterval(() => {
          setSliderIndices((prev) => {
            const newIndices = [...prev];
            newIndices[i] =
              section.sliderImages && section.sliderImages.length > 0
                ? (newIndices[i] + 1) % section.sliderImages.length
                : 0;
            return newIndices;
          });
        }, 3000);
        intervals.push(interval);
      }
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [data?.sections]);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {data?.sections?.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-16 sm:mb-20 last:mb-0"
          >
            {section.title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-dark font-bold mb-4 sm:mb-6">
                {section.title}
              </h2>
            )}

            {section.description && (
              <p className="text-base sm:text-lg md:text-xl text-medium mb-6 sm:mb-8 leading-relaxed">
                {section.description}
              </p>
            )}

            {section.subDescriptions && section.subDescriptions.length > 0 && (
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {section.subDescriptions.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <p className="text-base sm:text-lg text-medium leading-relaxed flex-1">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {section.images && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
                {section.images.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {image.isMobile ? (
                      <div className="flex justify-center bg-gray-50 p-4">
                        <IPhoneFrame>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            height={600}
                            width={300}
                            className="w-full h-full object-cover"
                          />
                        </IPhoneFrame>
                      </div>
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        height={500}
                        width={500}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {section.video && (
              <div className="mt-8 sm:mt-10 rounded-2xl overflow-hidden shadow-2xl">
                {section.video.isMobile ? (
                  <div className="flex justify-center bg-gray-50 p-8">
                    <IPhoneFrame>
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={section.video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </IPhoneFrame>
                  </div>
                ) : (
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={section.video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}

            {section.sliderImages && section.sliderImages.length > 0 && (
              <div className="mt-8 sm:mt-10">
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        sliderIndices[sectionIndex] * 100
                      }%)`,
                    }}
                  >
                    {section.sliderImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 flex justify-center min-w-full"
                      >
                        {image.isMobile ? (
                          <div className="flex justify-center bg-gray-50 p-8">
                            <IPhoneFrame>
                              <Image
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={600}
                                className="w-full h-full object-cover"
                              />
                            </IPhoneFrame>
                          </div>
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                  {section.sliderImages.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        sliderIndices[sectionIndex] === index
                          ? "bg-secondary w-8"
                          : "bg-gray-300 w-2 hover:bg-gray-400"
                      }`}
                      onClick={() => {
                        setSliderIndices((prev) => {
                          const newIndices = [...prev];
                          newIndices[sectionIndex] = index;
                          return newIndices;
                        });
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
