import React from "react";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url("/home.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div className="p-0 m-0">
      <div
        className="flex justify-between w-full min-h-screen"
        style={backgroundImageStyle}
      >
        <Navbar />
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm md:text-xl mb-8">
            Your trusted Virtual Assistant
          </p>
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold mb-4">
            Bright Masibo
          </h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Hello...
          </button>
        </div>

        <div className="pb-4">
          <button>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              bounce
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
