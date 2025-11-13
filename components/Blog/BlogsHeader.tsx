import React from "react";

export default function BlogsHeader() {
  return (
    <div className="bg-gradient-to-br from-white via-[#fff5f2] to-[#feeae6] text-dark px-6 flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lightMedium rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-dark heading">
          Insights & Stories
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-lightMedium mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-darkMedium leading-relaxed px-4">
          Discover the latest trends, insights, and expert perspectives on design, 
          technology, and innovation that drive exceptional digital experiences.
        </p>
      </div>
    </div>
  );
}
