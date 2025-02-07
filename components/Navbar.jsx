"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white">Bright</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["About", "Services", "Projects", "Clients", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg font-medium hover:text-blue-400 transition"
              >
                <span
                  className={`text-lg font-medium transition ${
                    activeSection === item.toLowerCase()
                      ? "text-primary-a20"
                      : "text-white hover:text-primary-a50"
                  }`}
                >
                  {item}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-16 right-6 w-48 bg-black/90 text-white rounded-lg shadow-md overflow-hidden transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {["About", "Services", "Projects", "Clients", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-lg hover:bg-blue-600"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
