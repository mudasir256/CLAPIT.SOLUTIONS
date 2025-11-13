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
    <div className="group bg-primary text-dark p-6 rounded-lg flex-1 min-w-[380px] hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-dark text-nowrap text-xl font-semibold group-hover:text-secondary transition-colors duration-300 flex justify-between items-center w-full">
          {title}
          <div className="text-3xl mb-2 text-dark group-hover:text-secondary/90 transition-colors duration-300 ">
            {icon}
          </div>
        </h3>
        <p className="text-darkMedium text-left lg:text-lg md:text-md text-sm group-hover:text-dark transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
