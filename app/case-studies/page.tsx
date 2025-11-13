import { Metadata } from "next";
import { generateStaticPageMetadata } from "@/utilities/metadata";
import Industries from "@/components/CaseStudies/Industries";
import FAQSection from "@/components/Faqs";
import { faq } from "@/data/faq";
import WhatOurClientSay from "@/components/WhatOurClientSay";

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Case Studies - CLAPIT SOLUTIONS",
  description:
    "Explore our successful projects and see how we've helped businesses achieve their digital transformation goals. Discover real-world solutions and client success stories.",
  keywords: [
    "case studies",
    "success stories",
    "client projects",
    "digital transformation",
    "portfolio",
    "CLAPIT SOLUTIONS"
  ],
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-secondary">
          Our Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how we&apos;ve helped businesses across various industries
          achieve their digital transformation goals with innovative solutions.
        </p>
        <Industries />
        <WhatOurClientSay />
        <FAQSection title={faq.title} subtitle={faq.subtitle} faqs={faq.faqs} />
      </div>
    </div>
  );
}
