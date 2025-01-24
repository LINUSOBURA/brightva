'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is the first project description.",
    image: "/bright_project.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project description.",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third project description.",
    image: "/project3.jpg",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <div className="h-1/2 bg-[#080808] text-gray-200 w-full px-12 py-32 flex items-center justify-center">
          <p className="text-xl md:text-2xl xl:text-4xl font-bold border-y-2 py-4">
            Welcome to my Creative World!
          </p>
        </div>

        <div className="flex w-full min-h-screen">


          {/* Left side - Project Cards */}
          <div className="w-2/3 bg-primary-a40 flex flex-col justify-center items-center p-6 relative">
            <div
              className="relative w-full h-full cursor-pointer transition-all duration-700 ease-in-out transform"
              onClick={() => alert(`Opening ${projects[currentIndex].title}`)}
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-2xl font-bold">{projects[currentIndex].title}</h2>
                <p className="mt-2 text-center">{projects[currentIndex].description}</p>
              </div>
            </div>

            {/* Navigation Arrow */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
              onClick={handleNext}
            >
              →
            </button>
          </div>

          {/* Right side - Image */}
          <div className="w-1/3 relative">
            <Image
              src={'/bright_project.jpg'}
              alt={projects[currentIndex].title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

    </>
  );
}
