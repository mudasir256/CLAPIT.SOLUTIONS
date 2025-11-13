"use client";
import React, { ReactElement } from "react";
import LeadershipPrincipleCard from "./People/LeadershipPrincipleCard";
import { SubService, SubServicesSection } from "./types";

interface CustomDevelopmentProps {
  service?: SubService[] | SubServicesSection;
  isSection?: boolean;
}

export default function DevelopmentServices({
  service = [],
  isSection = false,
}: CustomDevelopmentProps) {
  if (!service) {
    return null;
  }

  const items = Array.isArray(service) ? service : service.items;
  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <div className="text-dark py-20 px-6 md:px-12">
        {isSection && !Array.isArray(service) && (
          <div className="text-center mb-16">
            <h2 className="text-3xl max-w-5xl mx-auto md:text-6xl font-semibold mb-6 text-dark">
              {service?.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-2xl text-darkMedium">
              {service?.description}
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-6 max-w-[1000px] mx-auto">
          {items.map((item, idx) =>
            item.title && item.description ? (
              <LeadershipPrincipleCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={item.icon as ReactElement}
              />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
