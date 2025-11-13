import React from "react";
import { IMAGES } from "@/public/images";


export default function BackgroundImages() {
  const teamImageUrl = typeof IMAGES.Team === 'string' 
    ? IMAGES.Team 
    : IMAGES.Team?.src || IMAGES.Team;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${teamImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex items-end justify-center h-full text-white px-6 text-center">
        <h1 className="text-4xl md:text-8xl leading-tight max-w-5xl">
          The Visionaries Behind Our Success
        </h1>
      </div>
    </div>
  );
}
