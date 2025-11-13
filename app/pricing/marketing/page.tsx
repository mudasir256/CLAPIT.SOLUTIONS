import Blogs from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import FAQSection from "@/components/Faqs";
import AllPlans from "@/components/MarketingPricing/AllPlans";
import IncludedServices from "@/components/MarketingPricing/IncludedServices";
import PricingCards from "@/components/MarketingPricing/PricingCards";
import PricingHeader from "@/components/MarketingPricing/PricingHeader";
import { faq } from "@/data/faq";
import React from "react";

export default function MarketingPricing() {
  return (
    <section className="pb-20 bg-gradient-to-b from-white to-gray-50/30">
      <PricingHeader />
      <div className="mt-12">
        <PricingCards />
      </div>
      <div className="my-20">
        <AllPlans />
      </div>
      <div className="my-20">
        <IncludedServices />
      </div>
      <div className="my-20">
        <FAQSection title={faq.title} subtitle={faq.subtitle} faqs={faq.faqs} />
      </div>
      <div className="px-4 md:px-8 my-20">
        <ContactUs />
      </div>
      <div className="mt-20">
        <Blogs />
      </div>
    </section>
  );
}
