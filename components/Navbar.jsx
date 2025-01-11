"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between pt-4 px-8 w-full items-center">
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
              ? "block bg-white opacity-70 absolute top-16 right-0 text-black text-right"
              : "hidden"
          }`}
        >
          <ol className="flex flex-col md:flex-row gap-5">
            <li className="active:text-blue-500 hover:text-blue-500">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="active:text-blue-500 hover:text-blue-500">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="active:text-blue-500 hover:text-blue-500">
              <Link href={"/expertise"}>Expertise</Link>
            </li>
            <li className="active:text-blue-500 hover:text-blue-500">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="active:text-blue-500 hover:text-blue-500">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
