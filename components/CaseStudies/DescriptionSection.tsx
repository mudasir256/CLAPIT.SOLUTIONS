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
    <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto ">
        <div className="max-w-8xl mx-auto bg-light p-8 rounded-lg shadow-lg">
          <AnimatedSection1>
            <h1 className="lg:text-5xl text-3xl font-extrabold text-secondary mb-10 capitalize text-center">
              What is {study.title}?
            </h1>
          </AnimatedSection1>

          <div className="grid md:grid-cols-1 gap-10 mb-12 items-center">
            <div>
              <AnimatedSection1>
                <p className="lg:text-2xl text-xl font-medium text-center text-dark leading-relaxed mb-6">
                  {study.description}
                </p>
              </AnimatedSection1>

              {study.video ? (
              <div className="rounded-lg overflow-hidden flex justify-center">
                {study.video?.isMobile ? (
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
                ) : (
                  <video
                    className="rounded-lg w-full max-w-7xl"
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
                <div className="rounded-lg overflow-hidden flex justify-center">
                  {study.image && (
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={1200}
                      height={675}
                      className="rounded-lg w-full max-w-7xl object-cover"
                      priority
                    />
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
