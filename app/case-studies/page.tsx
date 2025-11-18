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
    <div className="min-h-screen bg-white mt-10">
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-dark tracking-tight">
            Case Studies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-medium max-w-2xl mx-auto leading-relaxed px-2">
            Real projects, real results. Explore how we&apos;ve transformed businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      <section className="py-4 sm:py-6 md:py-8 px-0 sm:px-4">
        <Industries />
      </section>
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-gray-50">
        <WhatOurClientSay />
      </section>
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FAQSection title={faq.title} subtitle={faq.subtitle} faqs={faq.faqs} />
        </div>
      </section>
    </div>
  );
}
