"use client";

import SectionHeader from "@/components/DetailsHeader/DetailsHeader";
import { caseStudies } from "@/data/case-studies";
import React from "react";
import ServiceCatagories from "@/components/Services/ServiceCatagories";
import { categories, services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          category="OUR SERVICES"
          heading="We Engineer Software Solutions"
          description="We help you envision technology that powers the future of your business"
          sliderContent={caseStudies}
        />
      </div>
      <ServiceCatagories
        categories={categories}
        services={services}
        categoryDescriptions={{
          marketing:
            "Boost your digital presence and reach with our comprehensive marketing solutions.",
          development:
            "Create powerful, scalable applications with our expert development services.",
        }}
        onCategoryChange={(categoryId) =>
          console.log("Category changed:", categoryId)
        }
      />
    </div>
  );
}
