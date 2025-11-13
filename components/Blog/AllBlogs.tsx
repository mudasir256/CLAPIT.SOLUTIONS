"use client";
import React, { useState } from "react";
import { blogPosts } from "@/data/blogsData";
import BlogCard from "./BlogCard";

const categories = [
  "All",
  "Web Design",
  "UI/UX Design",
  "Advertising Design",
  "Branding",
  "Graphic Design",
  "Infographic Design & Illustration",
  "Motion Graphics",
];

const ITEMS_PER_PAGE = 6;

export default function AllBlogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-light">
      <div className="mb-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2 heading">
            Browse Articles
          </h2>
          <p className="text-darkMedium">Select a category to explore topics that matter to you</p>
        </div>
        <div className="overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
          <div className="flex items-center space-x-3 min-w-max mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-full border-2 whitespace-nowrap transition-all duration-300 font-medium text-sm md:text-base ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-secondary to-lightMedium text-white border-secondary shadow-lg scale-105"
                    : "bg-white text-darkMedium hover:bg-gray-50 border-lightMedium/30 hover:border-secondary/50 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.slug}
                id={post.slug}
                title={post.title}
                description={post.description}
                image={post.coverImage}
                category={post.category}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-white text-dark border-secondary hover:bg-secondary hover:text-white hover:shadow-md"
                }`}
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-secondary to-lightMedium text-white border-secondary shadow-md scale-110"
                        : "bg-white text-darkMedium border-lightMedium/30 hover:border-secondary hover:shadow-md"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-white text-dark border-secondary hover:bg-secondary hover:text-white hover:shadow-md"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-darkMedium mb-2">No articles found in this category.</p>
          <p className="text-darkMedium">Try selecting a different category to explore more content.</p>
        </div>
      )}
    </div>
  );
}
