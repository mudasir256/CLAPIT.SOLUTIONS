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
import Head from "next/head";

interface Params {
  slug: string;
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

  return (
    <>
    <Head>
      <title>{industry.seoTitle}</title>
      <meta name="description" content={industry.seoDescription} />
      <meta name="keywords" content={industry.seoKeywords} />
      <meta property="og:title" content={industry.seoTitle} />
      <meta property="og:description" content={industry.seoDescription} />
      {industry.seoImage && (
        <meta property="og:image" content={typeof industry.seoImage === "string" ? industry.seoImage : undefined} />
      )}
    </Head>
    <div>
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
    </>
  );
}
