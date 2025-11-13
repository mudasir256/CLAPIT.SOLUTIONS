import React from "react";
import { IMAGES } from "@/public/images";
import Link from "next/link";

export default function JoinUs() {
  const joinUsImageUrl = typeof IMAGES.JOINUS === 'string' 
    ? IMAGES.JOINUS 
    : IMAGES.JOINUS?.src || IMAGES.JOINUS;

  return (
    <div
      style={{
        backgroundImage: `url(/gif/giffy.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen bg-[#0A0A0A] flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ready to Make an Impact?
            <br />
            <span className="text-secondary">Join the CLAPIT SOLUTIONS Family</span>
          </h1>
          <div className="flex gap-4 mt-8">
            <Link
              href="/contact-us"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Join Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
