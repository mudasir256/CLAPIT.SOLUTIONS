import BackgroundImages from "@/components/People/BackgroundImage";
import ImageCard from "@/components/People/ImageCard";
import JoinUs from "@/components/People/JoinUs";
import LeadershipPrinciple from "@/components/People/LeadershipPrinciple";
import PeopleShuffleHeader from "@/components/People/PeopleShuffleHeader";
import TeamBubbleContent from "@/components/People/TeamBubbleContent";
import React from "react";

export default function People() {
  return (
    <div>
      <PeopleShuffleHeader />
      <TeamBubbleContent />
      <LeadershipPrinciple />
      <BackgroundImages />
      <ImageCard />
      <JoinUs />
    </div>
  );
}
