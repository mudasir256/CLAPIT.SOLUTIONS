import ContactUs from "@/components/ContactUs";
import ServiceCatagories from "@/components/Services/ServiceCatagories";
import Stats from "@/components/Stats";
import { categoriesIndustries, industriesData } from "@/data/industries";
import React from "react";
import IndustryHeader from "@/components/About/IndustryHeader";

export default function IndustriesPage() {
  return (
    <div className="max-w-8xl mx-auto pt-20">
      <IndustryHeader />
      <ServiceCatagories
        categories={categoriesIndustries}
        services={industriesData}
        categoryDescriptions={{
          marketing:
            "Comprehensive digital marketing solutions tailored for various industries.",
          development:
            "Industry-specific development solutions powered by cutting-edge technology.",
        }}
      />
      <Stats />
      <ContactUs />
    </div>
  );
}
