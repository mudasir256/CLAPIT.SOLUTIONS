import React from "react";
import Image from "next/image";
import { BlogPost } from "../types";

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

const generatePlaceholder = (title: string, category?: string) => {
  const firstLetter = title.charAt(0).toUpperCase();
  const gradient = getCategoryGradient(category);
  
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-white text-8xl md:text-9xl font-bold opacity-80">
        {firstLetter}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
  );
};

export default function BlogsHeader({ blogPost }: { blogPost: BlogPost }) {
  const hasImage = blogPost.coverImage && (
    typeof blogPost.coverImage === "string" 
      ? blogPost.coverImage.length > 0 
      : true
  );

  return (
    <div className="mt-28 ">
      <h1 className="text-5xl font-bold mb-8 text-secondary">
        {blogPost.title}
      </h1>
      <div className="space-y-8">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden group">
          {hasImage && blogPost.coverImage ? (
            <Image
              src={blogPost.coverImage}
              alt={blogPost.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            generatePlaceholder(blogPost.title, blogPost.category)
          )}
        </div>
      </div>
    </div>
  );
}
