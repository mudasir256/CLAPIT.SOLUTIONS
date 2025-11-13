import Image from "next/image";
import React from "react";
import { IMAGES } from "@/public/images";

const images = [
  {
    src: IMAGES.Mudasir,
    name: "Syed Mudasir Bukhari",
    title: "CEO",
    rotate: "-rotate-6",
    position: "top-10 left-10",
  },  
  {
    src: IMAGES.Mehwish,
    name: "Syeda Mehwish Kanwal",
    title: "Head of Marketing",
    rotate: "rotate-6",
    position: "top-10 right-10",
  },
  {
    src: IMAGES.Mubashir,
    name: "Syed Mubashir Bukhari",
    title: "Head of Sales",
    position: "top-40 left-1/2 -translate-x-1/2",
  },
];

export default function ImageCard() {
  return (
    <div className="w-full bg-black min-h-screen py-20">
      <div className="relative w-full h-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative transform ${img.rotate} transition-transform hover:scale-105 duration-300`}
            >
              <div className="bg-white p-3 w-72 rounded-sm shadow-xl my-20 mx-auto">
                <div className="relative ">
                  <Image
                    src={typeof img.src === 'string' ? img.src : img.src?.src || img.src}
                    alt={`Leadership Team ${index + 1}`}
                    width={384}
                    height={384}
                    className="object-cover rounded pb-4"
                    priority={index < 4}
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-dark">{img.name}</h2>
                  <p className="text-dark">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
