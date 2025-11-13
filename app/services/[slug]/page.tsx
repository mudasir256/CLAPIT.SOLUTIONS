import { notFound } from "next/navigation";
import ServicePageClient from "@/components/Services/ServicePageClient";
import { services } from "@/data/services";
import ContactUs from "@/components/ContactUs";
import OfferServices from "@/components/Services/OfferServices";
import GetStarted from "@/components/GetStarted";
import Stats from "@/components/Stats";
import SideScroll from "@/components/Technologies";
import CustomDevelopment from "@/components/CustomDevelopment";
import WhatOurClientSay from "@/components/WhatOurClientSay";
import FAQSection from "@/components/Faqs";
import { caseStudies } from "@/data/case-studies";
import DevelopmentServices from "@/components/DevelopmentServices";

interface Params {
  slug: string;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  const industryCaseStudies = caseStudies
    .filter(
      (study) =>
        study.services &&
        study.services.some(
          (s) => s.toLowerCase() === service?.title?.toLowerCase()
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

  if (!service) {
    notFound();
  }

  return (
    <section>
      <ServicePageClient service={service} />
      
      {industryCaseStudies.length > 0 && (
        <OfferServices
          service={{ ...service, caseStudies: industryCaseStudies }}
        />
      )}
  
      {service.subServices && (
        <DevelopmentServices service={service.subServices} isSection={true} />
      )}
      
      <Stats />
      {service.technologies && service.technologies.length > 0 && (
        <SideScroll service={service} />
      )}
    
      {service.techCapabilities && (
        <CustomDevelopment
          service={service.techCapabilities}
          isSection={true}
          isDomains={true}
        />
      )}
      
      {service.industry && (
        <GetStarted data={service.industry} button={false} bgColor={"#fff"} />
      )}
      
      <WhatOurClientSay />
      
      {service.faq && (
        <FAQSection
          title={service.faq.title}
          subtitle={service.faq.subtitle}
          faqs={service.faq.faqs}
        />
      )}
      
      <div className="px-4 md:px-6">
        <ContactUs />
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}
