import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <div className="h-1/2 bg-[#080808] text-gray-200 w-full px-12 py-32 flex items-center justify-center">
          <p className="text-xl md:text-2xl xl:text-4xl font-bold border-y-2 py-4">
            Welcome to my Creative World!
          </p>
        </div>
        <div className="services container px-12 py-32 min-h-screen">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">
            My Projects
          </h1>
          <FontAwesomeIcon
            icon={faMinus}
            style={{ color: "#294dea", fontSize: "4rem" }}
          />
          <p className="text-lg md:text-xl xl:text-xl font-thin">
            Here is an highlight of some of my work, take a look around and I
            hope it inspires you!
          </p>
        </div>
      </div>
      <section
        id="portfolio"
        className="portfolio-section py-8 px-4 bg-[#080808] text-gray-200"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-lg text-indigo-500 font-semibold">
              Discover my latest projects and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Awesome Project 1",
                category: "App Development",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-1.png",
                link: "/project-1",
              },
              {
                title: "Awesome Project 2",
                category: "Branding",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-2.png",
                link: "/project-2",
              },
              {
                title: "Awesome Project 3",
                category: "Web Design, Branding",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-3.png",
                link: "/project-3",
              },
              {
                title: "Awesome Project 4",
                category: "Web Design, Branding",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-4.png",
                link: "/project-4",
              },
              {
                title: "Awesome Project 5",
                category: "Web Design, Branding",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-5.png",
                link: "/project-5",
              },
              {
                title: "Awesome Project 6",
                category: "Web Design, Branding",
                image:
                  "https://spacema-dev.com/elevate/assets/images/portfolio-6.png",
                link: "/project-6",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden"
              >
                <a href={project.link}>
                  <img
                    className="w-full h-60 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      {project.title}
                    </h3>
                    <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">
                      {project.category}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
