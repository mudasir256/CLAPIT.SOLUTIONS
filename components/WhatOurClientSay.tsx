
'use client';

import React, { useState, useEffect } from 'react';
import { textTestimonials } from "@/data/testimonials";

export default function WhatOurClientSay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
            CLIENT REVIEW
          </h2>
        </div>
        
        <div className="relative">
          <div className="relative bg-secondary/5 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden">
            {/* Slider Content */}
            <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
              {textTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    {/* Profile Icon - Circular at top */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-secondary to-accent border-2 sm:border-4 border-white shadow-lg flex items-center justify-center">
                        <svg
                          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-dark text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 max-w-2xl mx-auto px-2 sm:px-4">
                      {testimonial.text}
                    </p>

                    {/* Client Name */}
                    <h3 className="text-dark text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
              
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-colors z-20"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator - Inside the box */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1.5 sm:gap-2 z-20">
              {textTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full touch-manipulation ${
                    index === currentIndex
                      ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-secondary'
                      : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 active:bg-white/80'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
