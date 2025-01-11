import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import {
  PiOfficeChairLight,
  PiCameraThin,
  PiInstagramLogoLight,
} from "react-icons/pi";

export default function Services() {
  return (
    <div className="services container px-12 py-32 min-h-screen">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">
        My Services
      </h1>
      <FontAwesomeIcon
        icon={faMinus}
        style={{ color: "#294dea", fontSize: "4rem" }}
      />
      <p className="text-lg md:text-xl xl:text-xl font-thin">
        These are the main services I offer. As you can see, you will get
        everything from one source. This will ensure a seamless transition from
        one step to another.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  py-4 md:py-8 lg:py-12">
        <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
            👨‍💼
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
            Administrative Assistance
          </h3>
          <span className="text-gray-600 text-left px-4">
            <ol className="list-none hover:list-disc list-inside">
              <li>Calendar and Email Management</li>

              <li>
                Data Entry and Organization Research and Report Preparation{" "}
              </li>

              <li>Travel Planning and Itinerary Creation</li>

              <li>Project Coordination and Task Scheduling</li>
            </ol>
          </span>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
            📸
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
            Creative Content Solutions
          </h3>
          <span className="text-gray-600 text-left">
            <ol className="list-none hover:list-disc list-insideName">
              <li>
                Photography: Product photography, event coverage, and brand
                storytelling
              </li>

              <li>
                Videography: Promotional videos, social media reels, and
                documentary-style storytelling.
              </li>
            </ol>
          </span>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
            🎨
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
            Graphics Design
          </h3>
          <span className="text-gray-600 text-left">
            <ol className="list-none hover:list-disc list-inside">
              <li>Branding</li>

              <li>Logo creation</li>

              <li> social media graphics</li>

              <li>Marketing marterials</li>
            </ol>
          </span>
        </div>
        <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
            📈
          </div>
          <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
            Social Media Management
          </h3>
          <span className="text-gray-600 text-left">
            <ol className="list-none hover:list-disc list-inside">
              <li>Content scheduling</li>

              <li>Analytics tracking</li>

              <li>Creativity assistance</li>

              <li>Audience engagement strategies</li>
            </ol>
          </span>
        </div>
      </div>
    </div>
  );
}
