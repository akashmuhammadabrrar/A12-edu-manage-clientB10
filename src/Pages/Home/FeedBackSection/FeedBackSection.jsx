import React, { useState } from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SliderRev from "./SliderRev";

const FeedBackSection = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: feedbacks = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedback");
      return res.data;
    },
  });

  console.log(feedbacks);

  return (
    <div className="mt-20">
      <div className="my-10">
        <TitleSection
          heading={"Our Teachers Feedback About This Platform"}
          subHeading={"Universal Opportunity"}></TitleSection>
      </div>

      {/* feedback data */}
      <div>
        <SliderRev></SliderRev>
      </div>
    </div>
  );
};

export default FeedBackSection;
