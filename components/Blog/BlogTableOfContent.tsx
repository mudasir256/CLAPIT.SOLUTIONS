"use client";
import React, { useEffect, useState } from "react";
import { BlogPost } from "../types";

export default function BlogTableOfContent({
  blogPost,
}: {
  blogPost: BlogPost;
}) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    blogPost.tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      blogPost.tableOfContents.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [blogPost.tableOfContents]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full lg:sticky lg:top-24 lg:bottom-auto bg-white/95 backdrop-blur-sm shadow-lg lg:shadow-none lg:bg-transparent lg:backdrop-blur-none z-30">
      <div className="container mx-auto px-4 py-3 lg:p-0">
        <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4 text-secondary hidden lg:block">
          Table of Contents
        </h2>
        <nav className="flex flex-row lg:flex-col gap-4 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {blogPost.tableOfContents.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink  lg:text-base ${
                activeSection === item.id
                  ? "text-secondary font-medium border-secondary bg-secondary/5"
                  : "text-dark hover:text-darkMedium border-secondary/20 lg:border-transparent hover:border-secondary"
              } transition-all text-md duration-300 ease-in-out transform hover:translate-x-2 active:translate-x-3 hover:font-medium py-2 px-4 lg:px-3 rounded-full lg:rounded-none border lg:border-l-2 lg:border-0 lg:hover:border-secondary active:text-secondary active:scale-[0.98] bg-white/50 lg:bg-transparent`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
