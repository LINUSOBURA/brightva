"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "GetLife Pharmacy",
    description:
      "A modern and trusted pharmacy brand committed to providing quality healthcare products and services. The logo reflects a professional and reliable identity in the pharmaceutical industry.",
    image: "/GetlifeLogoProject.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project description.",
    video: "https://www.youtube.com/embed/19g66ezsKAg",
  },
  {
    id: 3,
    title: "FXSA (Forex & Stock Analysis)",
    description:
      "A financial services brand specializing in forex trading, stock market analysis, and investment strategies. The logo represents growth, financial success, and strategic market insights.",
    image: "/BenaLogoProject.png",
  },
  {
    id: 4,
    title: "Project Three",
    description: "This is the third project description.",
    image: "/PriceKataPosterProject.jpg",
  },
  {
    id: 5,
    title: "Green Moove",
    description:
      "A sustainable energy solutions company focused on clean and green power alternatives. The logo symbolizes eco-friendly innovation and a commitment to a greener future.",
    image: "/GreenLogoProject.jpg",
  },
];

export default function ProjectsCopy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setOverlayVisible(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setOverlayVisible(true);
  };

  return (
    <section id="projects" className="relative min-h-screen flex flex-col">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-1/2 bg-[#080808] text-gray-200 w-full px-12 py-32 flex items-center justify-center"
      >
        <p className="text-xl md:text-2xl xl:text-4xl font-bold border-y-2 py-4">
          Welcome to my Creative World!
        </p>
      </motion.div>

      {/* Projects Container */}
      <div className="flex w-full min-h-screen">
        {/* Left Side - Project Cards */}
        <div className="w-full md:w-2/3 bg-primary-a40 flex flex-col justify-center items-center p-6 relative">
          {/* Navigation Arrow - Left */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-50"
            onClick={handlePrev}
          >
            ←
          </motion.button>

          {/* Project Display with Animation */}
          <div className="relative w-full h-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                {projects[currentIndex].image ? (
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "65%" }}
                  >
                    <iframe
                      src={projects[currentIndex].video}
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                )}

                {/* Overlay with Fade-in Effect */}
                {overlayVisible && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-zinc-300 shadow-lg p-4"
                    onClick={() => setOverlayVisible(false)}
                  >
                    <h2 className="text-2xl font-bold ">
                      {projects[currentIndex].title}
                    </h2>
                    <p className="mt-2 text-center w-3/4">
                      {projects[currentIndex].description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrow - Right */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            onClick={handleNext}
          >
            →
          </motion.button>
        </div>

        {/* Right Side - Static Image */}
        <div className="w-1/3 hidden md:block relative">
          <Image
            src={"/bright_project.jpg"}
            alt={projects[currentIndex].title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
