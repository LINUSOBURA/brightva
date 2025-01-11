import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about px-12 py-32 min-h-fit text-gray-200 bg-myblue">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">
        My name is Bright
      </h1>
      <FontAwesomeIcon
        icon={faMinus}
        style={{ color: "#ffffff", fontSize: "4rem" }}
      />
      <p className="text-lg md:text-xl xl:text-xl font-thin">
        Hi, I’m a certified Virtual Assistant with a knack for efficiency,
        organization, and creative content solutions. I specialize in
        streamlining administrative tasks and crafting engaging visuals to
        elevate your brand’s presence. With a blend of smart technology and a
        personalized touch, I adapt to your unique needs and preferences,
        ensuring every interaction is smooth and efficient. I’m available 24/7,
        and my goal is to save you time, reduce stress, and help you focus on
        what truly matters. Let’s collaborate to simplify your day! 😊
      </p>
    </div>
  );
}
