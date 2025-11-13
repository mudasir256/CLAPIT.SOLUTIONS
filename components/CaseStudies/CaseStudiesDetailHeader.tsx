import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

type CaseStudiesDetailHeaderProps = {
  bgImage: string | StaticImageData;
  title: string;
  subtitle?: string;
  category?: string;
  logoText: string;
  link?: string;
};

const CaseStudiesDetailHeader: React.FC<CaseStudiesDetailHeaderProps> = ({
  bgImage,
  title,
  subtitle = "",
  category,
  logoText,
  link
}) => {
  const backgroundImage = typeof bgImage === "string" ? bgImage : bgImage.src;

  return (
    <div
      className={`relative w-full h-[60vh] bg-cover bg-center py-12 rounded-br-[70px] shadow-lg`}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className="absolute inset-0 bg-black/90 rounded-br-[70px] "></div>

      <div className="relative z-10 max-w-[96rem] mx-auto px-8 pt-24">
        <nav className="text-md font-medium text-secondary mb-4">
          <Link href="/case-studies">Case Studies</Link>
          <span>{" > "}</span>
          <span>{title}</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-light mb-2 tracking-wide">
              {category}
            </p>
            <h1 className="lg:text-5xl text-2xl font-extrabold text-secondary leading-tight mb-4 drop-shadow-md">
              {title}
            </h1>
            {subtitle && (
              <h2 className="lg:text-xl text-lg font-medium text-light drop-shadow-md">
                {subtitle}
              </h2>
            )}
          </div>
          <div className="mt-6 md:mt-0">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-white bg-secondary px-4 py-2 rounded-lg shadow-md"
              >
                {logoText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesDetailHeader;
