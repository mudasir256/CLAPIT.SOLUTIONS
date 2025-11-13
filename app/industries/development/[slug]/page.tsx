import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/Faqs";
import GetStarted from "@/components/GetStarted";
import OfferServices from "@/components/Services/OfferServices";
import ServicePageClient from "@/components/Services/ServicePageClient";
import SideScroll from "@/components/Technologies";
import Stats from "@/components/Stats";
import { industriesData } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import React from "react";
import TalkToExpert from "@/components/TalkToExpert";
import DevelopmentServices from "@/components/DevelopmentServices";
import { Metadata } from "next";
import { generateIndustryMetadata } from "@/utilities/metadata";
import ServiceSchema from "@/components/StructuredData/ServiceSchema";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((industry) => industry.id === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return generateIndustryMetadata({ ...industry, category: "development" });
}

export default async function IndustriesDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const industry = industriesData.find((industry) => industry.id === slug);
  const industryCaseStudies = caseStudies
    .filter(
      (study) =>
        study.industries &&
        study.industries.some((ind) =>
          ind.toLowerCase() === industry?.title?.toLowerCase()
        )
    )
    .map((study) => ({
      id: study.id,
      icon: study.image || "📄",
      href: study.link || "#",
      title: study.title || "",
      description: study.subtitle || "",
      features: study.objectives || [],
      techStack: study.technologies || [],
      timeline: "",
      budget: "",
      results:
        study.results?.map((result) => ({
          metric: result.label,
          value: result.value,
        })) || [],
    }));

  if (!industry) {
    return <div>Industry not found</div>;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';
  const industryUrl = `${baseUrl}/industries/development/${slug}`;
  
  // Get image URL
  let imageUrl = `${baseUrl}/images/og-image.jpg`;
  if (industry.seoImage) {
    if (typeof industry.seoImage === 'string') {
      imageUrl = industry.seoImage;
    } else if (industry.seoImage && typeof industry.seoImage === 'object' && 'src' in industry.seoImage) {
      imageUrl = industry.seoImage.src;
    }
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: "Development", url: "/industries/development" },
    { name: industry.title || "Industry", url: `/industries/development/${slug}` },
  ];

  return (
    <div>
      <ServiceSchema
        name={industry.title || "Industry"}
        description={industry.seoDescription || industry.description || ""}
        url={industryUrl}
        image={imageUrl}
        provider={{
          name: "CLAPIT SOLUTIONS",
          url: baseUrl,
        }}
        serviceType={`${industry.title} Development`}
        areaServed="Worldwide"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServicePageClient service={industry} />
      <OfferServices
        service={{ ...industry, caseStudies: industryCaseStudies }}
      />
 
      <DevelopmentServices service={industry.subServices} isSection={true} />
      <Stats />
      <SideScroll service={industry} />
      <GetStarted data={industry.industry} button={false} bgColor={"#fff"} />
      <TalkToExpert data={industry} />
      {industry.faq && (
        <FAQSection
          title={industry.faq.title}
          subtitle={industry.faq.subtitle}
          faqs={industry.faq.faqs}
        />
      )}
      <ContactUs />
    </div>
  );
}
