import { Metadata } from "next";
import ServicesSection from "@/components/Services/ServicesSwitchSection";
import CaseStudyScroll from "@/components/CaseStudies/CaseStudyScroll";
import Stats from "@/components/Stats";
import GetStarted from "@/components/GetStarted";
import ContactUs from "@/components/ContactUs";
import LoopVideo from "@/components/LoopVideo";
import { steps } from "@/data/getStarted";
import FAQSection from "@/components/Faqs";
import { faq } from "@/data/faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blogs from "@/components/Blog";
import { categories, services } from "@/data/services";
import WhatOurClientSay from "@/components/WhatOurClientSay";
import OurPartners from "@/components/OurPartners";
// import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "CLAPIT SOLUTIONS - Development and Branding Agency",
  description:
    "CLAPIT SOLUTIONS is a full-service development and branding agency that combines cutting-edge software development with strategic brand building to deliver exceptional results.",
  keywords:
    "development, branding, agency, software development, brand building, CLAPIT SOLUTIONS",
};

export default function Home() {
  return (
    <div>
      <LoopVideo />
      <OurPartners />
      <WhyChooseUs />
      <ServicesSection services={services} categories={categories} />
      <Stats />
      <CaseStudyScroll />
      <WhatOurClientSay />
      {/* <Testimonials /> */}
      <GetStarted data={steps} bgColor={"#fff"} button={true} />
      <div className="px-4 md:px-8">
        <ContactUs />
      </div>
      <FAQSection title={faq.title} subtitle={faq.subtitle} faqs={faq.faqs} />
      {/* <Blogs limit={3} /> */}
    </div>
  );
}
