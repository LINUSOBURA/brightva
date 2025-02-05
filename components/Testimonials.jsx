"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const testimonials = [
  {
    person: "John Miller",
    role: "CEO at Tech Innovations",
    Testimony:
      "The virtual assistant service was a game-changer for our productivity.We enjoy the services & Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
  },
  {
    person: "Emma Lewis",
    role: "Marketing Director at Global Enterprises",
    Testimony:
      "Efficient, reliable, and always proactive—this virtual assistant has transformed the way we work.",
  },
  {
    person: "Alex Thompson",
    role: "Project Manager at FinTech Solutions",
    Testimony:
      "With the help of my virtual assistant, I've been able to focus more on strategic work. Excellent service!",
  },
  {
    person: "Olivia Brown",
    role: "Founder of Eco Ventures",
    Testimony:
      "The support I get is invaluable. It’s like having a dedicated team member without the overhead.",
  },
  {
    person: "David Clarke",
    role: "Head of Operations at StartUp Hub",
    Testimony:
      "This virtual assistant has consistently exceeded my expectations in terms of speed and quality of work.",
  },
  {
    person: "Sophia Williams",
    role: "Creative Director at Media Group",
    Testimony:
      "Amazing attention to detail, organization, and communication. I couldn't do my job without this assistant!",
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-5 bg-surface-a0 ">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-white text-center mb-10">
        What clients are saying
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full max-w-6xl">
        {/* Left side - text content */}
        <div className="max-w-sm sm:max-w-md md:max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-tight">
            A smile is an <span className="text-primary-a30">inexpensive</span>{" "}
            way to change your looks
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Goals are just dreams with a{" "}
            <span className="text-primary-a50">deadline</span>
          </p>
        </div>

        {/* Right side - Swiper carousel */}
        <div className="w-full max-w-md sm:max-w-lg">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
              shadowColor: "#ffffff",
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="w-full p-6 sm:p-10 bg-gray-100 dark:bg-tonal-a0 rounded-2xl text-center shadow-lg">
                  <p className="text-lg sm:text-xl leading-relaxed dark:text-gray-300">
                    {testimony.Testimony}
                  </p>

                  <div className="flex items-center justify-center mt-6 space-x-3">
                    {testimony.avatar && (
                      <div className="w-14 h-14 overflow-hidden rounded-full">
                        <img
                          alt="Avatar"
                          src={testimony.avatar}
                          loading="lazy"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <div>
                      <div className="text-lg font-medium text-gray-900 dark:text-gray-200">
                        {testimony.person}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimony.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Separator Line */}
      <div className="flex justify-center">
        <div className="absolute w-1/2 bottom-0 border-t border-gray-800 text-center"></div>
      </div>
    </div>
  );
}
