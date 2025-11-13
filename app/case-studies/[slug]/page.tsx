import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import CaseStudiesDetailHeader from "@/components/CaseStudies/CaseStudiesDetailHeader";
import DescriptionSection from "@/components/CaseStudies/DescriptionSection";
import ServicesProvided from "@/components/CaseStudies/ServicesProvided";
import Objectives from "@/components/CaseStudies/Objectives";
import Result from "@/components/CaseStudies/Result";
import Conclusion from "@/components/CaseStudies/Conclusion";
import CaseStudiesStarted from "@/components/CaseStudies/CaseStudiesStarted";
import Data from "@/components/CaseStudies/Data";

interface Params {
  slug: string;
}
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((study) => study.id === slug);
  if (!study) {
    notFound();
  }
  return (
    <div>
      <CaseStudiesDetailHeader
        bgImage={study.image || ""}
        title={study.title || "Case Study"}
        subtitle={study.details}
        category={study.subtitle}
        logoText={study.title || "Case Study"}
        link={study.link}
      />
      <DescriptionSection study={study} />
      <ServicesProvided services={study.servicesProvided || []} />
      <Objectives data={study} />
      <Data data={study.data} />
      <Result results={study.results || []} />
      <Conclusion study={study} />
      <CaseStudiesStarted />
    </div>
  );
}

export function generateStaticParams() {
  return caseStudies
    .filter((study) => study.id !== undefined)
    .map((study) => ({
      slug: study.id!.toString(),
    }));
}
