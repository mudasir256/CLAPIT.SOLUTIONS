import React, { ReactElement } from "react";

interface PrincipleCardProps {
  title: string;
  description: string;
  icon?: ReactElement;
}

export default function LeadershipPrincipleCard({
  title,
  description,
  icon
}: PrincipleCardProps) {
  return (
    <div className="group bg-primary text-dark rounded-lg w-full  sm:max-w-[calc(50%-12px)]  p-4 sm:p-4 md:p-6 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
      <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
        <h3 className="text-dark text-sm sm:text-base md:text-xl font-semibold group-hover:text-secondary transition-colors duration-300 flex justify-between items-start sm:items-center w-full gap-2 sm:gap-3">
          <span className="flex-1 break-words sm:text-nowrap sm:truncate">{title}</span>
          {icon && (
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl flex-shrink-0 text-dark group-hover:text-secondary/90 transition-colors duration-300 mt-0.5 sm:mt-0">
              {icon}
            </div>
          )}
        </h3>
        <p className="text-darkMedium text-left text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-dark transition-colors duration-300 leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  );
}
