/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { ReactNode } from "react";

interface Category {
  id: string;
  label: string;
}

interface Service {
  title: string;
  description: string;
  category: string;
  icon?: ReactNode;
  link?: string;
}

interface ServiceCatagoriesProps {
  categories: Category[];
  services: Service[];
  categoryDescriptions: { [key: string]: string };
  className?: string;
  activeButtonClassName?: string;
  inactiveButtonClassName?: string;
  containerClassName?: string;
  stickyHeaderClassName?: string;
  initialCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export default function ServiceCatagories({
  categories,
  services,
  categoryDescriptions,
  className = "",
  activeButtonClassName = "bg-light text-secondary font-bold text-xl",
  inactiveButtonClassName = "bg-medium text-primary font-bold light:bg-light light:text-secondary text-lg",
  containerClassName = "container mx-auto px-4",
  stickyHeaderClassName = "sticky top-0 z-30 py-2 bg-white sm:py-4",
  initialCategory,
  onCategoryChange,
}: ServiceCatagoriesProps) {
  const [activeCategory, setActiveCategory] = useState(
    initialCategory || categories[0]?.id
  );

  const sectionRefs = useRef(
    categories.reduce((acc, category) => {
      acc[category.id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> })
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newCategory = entry.target.id;
          setActiveCategory(newCategory);
          onCategoryChange?.(newCategory);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [onCategoryChange]);

  const handleScrollToSection = (categoryId: string) => {
    const section = sectionRefs.current[categoryId];
    if (section?.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
      setActiveCategory(categoryId);
      onCategoryChange?.(categoryId);
    }
  };

  return (
    <section className={className}>
      <div className={stickyHeaderClassName}>
        <div className={containerClassName + " mt-20 sm:mt-20"}>
          <div
            className="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-hide w-full"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleScrollToSection(category.id)}
                className={`px-2 py-4 sm:px-3 sm:py-8 rounded-[10px] font-medium transition-all duration-300 whitespace-nowrap w-full ${
                  activeCategory === category.id
                    ? activeButtonClassName
                    : inactiveButtonClassName
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={containerClassName + " mt-10"}>
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            ref={sectionRefs.current[category.id]}
            className="mb-12 lg:flex justify-center"
          >
            <div className="w-full lg:py-0 py-8">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                {category.label}
              </h1>
              <p className="text-medium max-w-2xl lg:text-xl text-lg">
                {categoryDescriptions[category.id]}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
              {services
                .filter((service) => service.category === category.id)
                .map((service, index) => (
                  <ServiceCard 
                    key={index} 
                    {...service}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
