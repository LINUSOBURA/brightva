import React from "react";
import { CertificationCard } from "./CertificationCard";

export const Certified = () => {
  const certification = {
    imageUrl: "/aiceBadge.gif",
    certImage: "/aiceCert.png",
    title: "AI Augumented Professional Development",
    description:
      "Successfully completed the AI Career Essentials program by ALX Africa, gaining foundational knowledge in artificial intelligence, machine learning concepts, and practical AI applications. Developed problem-solving skills and hands-on experience with AI tools and frameworks.",
    date: "8 July 2024",
  };

  return (
    <div className="flex items-center justify-center rounded-md">
      <CertificationCard {...certification} />
    </div>
  );
};
