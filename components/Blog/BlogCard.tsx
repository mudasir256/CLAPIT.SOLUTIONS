import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData | null | undefined;
  category?: string;
}

// Generate gradient colors based on category
const getCategoryGradient = (category?: string): string => {
  const categoryMap: Record<string, string> = {
    "Web Design": "from-blue-500 to-cyan-500",
    "UI/UX Design": "from-purple-500 to-pink-500",
    "Advertising Design": "from-orange-500 to-red-500",
    "Branding": "from-indigo-500 to-purple-500",
    "Graphic Design": "from-green-500 to-emerald-500",
    "Infographic Design & Illustration": "from-yellow-500 to-orange-500",
    "Motion Graphics": "from-pink-500 to-rose-500",
    "development": "from-blue-600 to-indigo-600",
    "business": "from-emerald-600 to-teal-600",
  };
  
  return categoryMap[category || ""] || "from-secondary to-lightMedium";
};

// Generate placeholder with first letter of title
const generatePlaceholder = (title: string, category?: string) => {
  const firstLetter = title.charAt(0).toUpperCase();
  const gradient = getCategoryGradient(category);
  
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-white text-6xl md:text-7xl font-bold opacity-80">
        {firstLetter}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
  );
};

export default function BlogCard({
  id,
  title,
  description,
  image,
  category,
}: BlogCardProps) {
  const hasImage = image && (typeof image === "string" ? image.length > 0 : true);
  
  return (
    <Link href={`/blogs/${id}`} className="group block h-full">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-lightMedium/20 hover:border-secondary/30 hover:-translate-y-2">
        <div className="relative overflow-hidden h-56 md:h-64 group-hover:scale-105 transition-transform duration-500">
          {hasImage ? (
            <>
              <Image
                src={image}
                height={500}
                width={500}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          ) : (
            generatePlaceholder(title, category)
          )}
          
          {category && (
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                {category}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-dark group-hover:text-secondary transition-colors duration-300 heading line-clamp-2">
            {title}
          </h2>
          <p className="text-darkMedium mb-4 line-clamp-3 flex-1">
            {description}
          </p>
          
          <div className="flex items-center text-secondary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
            <span>Continue Reading</span>
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
