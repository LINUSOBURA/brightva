"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between pt-4 px-8 w-full items-center sticky top-0 z-50 ${
        isScrolled ? "bg-surface-a0" : "bg-transparent"
      }`}
    >
      <div className="font-bold">B</div>
      <div>
        <div className="flex md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
        <div
          className={`w-full p-4 shadow-lg md:relative md:block md:bg-transparent md:shadow-none ${
            isOpen
              ? "block bg-primary-a50 opacity-70 absolute top-16 right-0 text-white text-right"
              : "hidden"
          }`}
        >
          <ol className="flex flex-col md:flex-row gap-5">
            <li className="active:text-blue-500 hover:text-primary-a30">
              <Link href={"#about"}>About</Link>
            </li>
            <li className="active:text-blue-500 hover:text-primary-a30">
              <Link href={"#services"}>Services</Link>
            </li>
            <li className="active:text-blue-500 hover:text-primary-a30">
              <Link href={"#expertise"}>Expertise</Link>
            </li>
            <li className="active:text-blue-500 hover:text-primary-a30">
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li className="active:text-blue-500 hover:text-primary-a30">
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
