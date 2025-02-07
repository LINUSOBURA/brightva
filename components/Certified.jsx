import React from "react";
import { CertificationCard } from "./CertificationCard";

export const Certified = () => {
  const certification = {
    imageUrl: "/aiceBadge.gif",
    title: "React Certification",
    description:
      "This certification demonstrates proficiency in React.js, including components, hooks, and state management.",
    date: "October 2023",
  };

  return (
    <div className="flex items-center justify-center rounded-md">
      <CertificationCard {...certification} />
    </div>
  );
};
