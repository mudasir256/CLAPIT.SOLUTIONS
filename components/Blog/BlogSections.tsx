"use client";
import React, { useState, useEffect } from "react";
import { BlogPost } from "../types";
import Image from "next/image";

export default function BlogSections({ blogPost }: { blogPost: BlogPost }) {
  const [sliderIndices, setSliderIndices] = useState<number[]>([]);

  useEffect(() => {
    if (blogPost?.sections?.length) {
      setSliderIndices(new Array(blogPost.sections.length).fill(0));
    }
  }, [blogPost?.sections]);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    blogPost?.sections?.forEach((section, i) => {
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
  }, [blogPost?.sections]);

  return (
    <div>
      {blogPost.sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary tracking-wide">
            {section.heading}
          </h2>
          {section.image && (
            <div className="mb-6 relative w-full h-[200px] md:h-[300px]">
              <Image
                src={section.image}
                alt={section.heading}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}
          {section.video && (
            <div className="mb-6">
              <video
                src={section.video}
                controls
                className="w-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
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
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={300}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={400}
                          className="w-full max-h-[300px] h-auto object-contain rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-2">
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
          <div
            className="prose prose-lg max-w-none text-lg text-dark mt-4 tracking-wider"
            dangerouslySetInnerHTML={{ __html: section.richContent }}
          />
        </section>
      ))}
    </div>
  );
}
