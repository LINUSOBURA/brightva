import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      emoji: "👨‍💼",
      title: "Administrative Assistance",
      items: [
        "Calendar and Email Management",
        "Data Entry and Organization Research and Report Preparation",
        "Travel Planning and Itinerary Creation",
        "Project Coordination and Task Scheduling",
      ],
    },
    {
      emoji: "📸",
      title: "Creative Content Solutions",
      items: [
        "Photography: Product photography, event coverage, and brand storytelling",
        "Videography: Promotional videos, social media reels, and documentary-style storytelling",
      ],
    },
    {
      emoji: "🎨",
      title: "Graphics Design",
      items: [
        "Branding",
        "Logo creation",
        "Social media graphics",
        "Marketing materials",
      ],
    },
    {
      emoji: "📈",
      title: "Social Media Management",
      items: [
        "Content scheduling",
        "Analytics tracking",
        "Creativity assistance",
        "Audience engagement strategies",
      ],
    },
  ];

  return (
    <div
      className="services  px-12 py-32 min-h-screen bg-surface-a0"
      id="services"
    >
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-white">
        My Services
      </h1>
      <FontAwesomeIcon
        icon={faMinus}
        style={{ color: "#7071f0", fontSize: "4rem" }}
      />
      <p className="text-lg md:text-xl xl:text-xl font-thin text-zinc-300">
        These are the main services I offer. As you can see, you will get
        everything from one source. This will ensure a seamless transition from
        one step to another.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4 md:py-8 lg:py-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card bg-surface-a10 hover:bg-tonal-a10 rounded-lg shadow-lg p-6 text-center`}
          >
            <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
              {service.emoji}
            </div>
            <h3
              className={`text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-primary-a10 text-white`}
            >
              {service.title}
            </h3>
            <span className={`text-zinc-300 text-center`}>
              <ol className="list-none list-inside">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
