"use client";
import React from "react";
import OurExperience from "@/components/About/OurExperience";
import ContactUs from "@/components/ContactUs";
import AboutHeader from "@/components/About/AboutHeader";
import OurMissionVission from "@/components/About/OurMission&Vission";
import OurEssence from "@/components/About/OurEssence";

export default function AboutPage() {
  return (
    <div className="w-full mx-auto py-16 px-6 ">
      <AboutHeader />
      <OurMissionVission />
      <OurEssence/>
      <OurExperience />
      <ContactUs />
    </div>
  );
}
