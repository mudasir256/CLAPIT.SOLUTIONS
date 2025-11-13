import React from "react";
import Link from "next/link";
import { IMAGES } from "@/public/images";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-dark border border-secondary rounded-lg p-6 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0  group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            backgroundImage: `url(/gif/SERVICE.gif)`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            {title}
          </h3>
          <p className="text-primary lg:text-lg md:text-md sm:text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="flex justify-end relative z-20">
          <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-primary group-hover:text-white transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
