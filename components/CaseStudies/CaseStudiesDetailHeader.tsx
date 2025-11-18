import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

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
    <div className="relative w-full min-h-[60vh] sm:min-h-[30vh] bg-cover bg-center bg-fixed ">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-b-[40px]"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/90 to-black/90 rounded-b-[40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-24 pt-28 sm:pt-28 pb-16 sm:pb-24">
        <nav className="mb-8 sm:mb-12">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-sm sm:text-base text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </nav>
        <div className="max-w-4xl">
          {category && (
            <p className="text-xs sm:text-sm font-semibold uppercase text-secondary mb-3 sm:mb-4 tracking-wider">
              {category}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
              {subtitle}
            </p>
          )}
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Visit Project</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesDetailHeader;
