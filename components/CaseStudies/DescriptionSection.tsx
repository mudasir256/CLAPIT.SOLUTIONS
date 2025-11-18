import React from "react";
import { CaseStudy } from "../types";
import AnimatedSection1 from "../AnimatedSection1";
import Image from "next/image";

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

export default function DescriptionSection({ study }: { study: CaseStudy }) {
  if (!study || !study.title || !study.subtitle || !study.image) {
    console.error("Missing required study data", study);
    return <div>Invalid data provided. Please check the props.</div>;
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <AnimatedSection1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
              Overview
            </h2>
          </AnimatedSection1>
          <AnimatedSection1>
            <p className="text-lg sm:text-xl md:text-2xl text-medium leading-relaxed max-w-4xl mx-auto">
              {study.description}
            </p>
          </AnimatedSection1>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          {study.video ? (
            <div className="relative w-full">
              {study.video?.isMobile ? (
                <div className="flex justify-center py-8 bg-gray-50">
                  <IPhoneFrame>
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={study.video.src} type="video/mp4" />
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
                  <source src={study.video?.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <div className="relative w-full">
              {study.image && (
                <Image
                  src={study.image}
                  alt={study.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
