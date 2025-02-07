import React from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/home.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Dark Overlay */}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-6">
        <p className="text-lg md:text-2xl font-medium tracking-wide">
          Your trusted Virtual Assistant
        </p>
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold my-4">
          Bright Masibo
        </h1>
        <a href="https://wa.me/+254707912513" target="_blank">
          <button className="bg-blue-600 hover:bg-blue-800 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-full transition-all shadow-lg mt-4">
            Hire Me
          </button>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <a href="#about">
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="animate-bounce text-white text-3xl"
          />
        </a>
      </div>
    </div>
  );
}
