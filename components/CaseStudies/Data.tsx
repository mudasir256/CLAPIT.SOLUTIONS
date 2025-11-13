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
    <div className="relative w-full max-w-8xl mx-auto mb-24">
      {data?.sections?.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="overflow-hidden rounded-lg max-w-6xl mx-auto mt-12"
        >
          {section.title && (
            <h2 className="lg:text-3xl text-2xl text-secondary font-bold mb-4 text-center md:text-left mt-8 px-4">
              {section.title}
            </h2>
          )}

          {section.description && (
            <p className="text-dark mb-4 text-center md:text-left px-4 font-bold text-xl">
              {section.description}
            </p>
          )}

          <ul className="mt-4 px-4 space-y-3 text-gray-700 w-full ">
            {section.subDescriptions?.map((text, index) => (
              <li
                key={index}
                className="flex items-start justify-center lg:justify-start font-medium text-lg"
              >
                <span className="mr-2 text-secondary">&#9671;</span>
                {text}
              </li>
            ))}
          </ul>

          {section.images && (
            <div className="flex justify-center flex-wrap gap-4 mt-8">
              {section.images.map((image, index) => (
                <div key={index} className="flex md:w-auto">
                  {image.isMobile ? (
                    <IPhoneFrame>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        height={600}
                        width={300}
                        className="w-full h-full object-cover"
                      />
                    </IPhoneFrame>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      height={500}
                      width={500}
                      className="rounded-lg shadow-md w-full h-auto max-h-[500px] max-w-[400px] object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {section.video && (
            <div className="flex justify-center mt-8">
              <div className="rounded-lg overflow-hidden">
                {section.video.isMobile ? (
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
                ) : (
                  <video
                    className="rounded-lg w-full max-w-7xl"
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
            </div>
          )}

          {section.sliderImages && section.sliderImages.length > 0 && (
            <>
              <div className="relative overflow-hidden mt-8">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      sliderIndices[sectionIndex] * 100
                    }%)`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {section.sliderImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 flex justify-center"
                    >
                      {image.isMobile ? (
                        <IPhoneFrame>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </IPhoneFrame>
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={400}
                          className="w-3/4 h-auto object-cover rounded-lg shadow-md"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-2 ">
                {section.sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      sliderIndices[sectionIndex] === index
                        ? "bg-gray-800 w-4"
                        : "bg-gray-400"
                    }`}
                    onClick={() => {
                      setSliderIndices((prev) => {
                        const newIndices = [...prev];
                        newIndices[sectionIndex] = index;
                        return newIndices;
                      });
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
