'use client'
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const testimonials = [
  {
    person: "John Miller",
    role: "CEO at Tech Innovations",
    Testimony:
      "The virtual assistant service was a game-changer for our productivity. Highly recommend!",
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
    <div className="min-h-screen flex justify-center p-5">
      <div className="grid grid-cols-2 gap-4 items-center z-10">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
            A smile is an inexpensive way to change your looks
          </h2>

          <p className="mt-4 text-gray-300">
            Goals are just dreams with deadline
          </p>

        </div>
        <div className="h-1/2">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimony, index) => (
              <SwiperSlide>
                <div className="lg:col-span-2 xl:col-auto">
                  <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p className="text-2xl leading-normal dark:text-gray-300">
                      {testimony.Testimony}
                    </p>
                    <div className="flex items-center mt-8 space-x-3">
                      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                          alt="Avatar"
                          src={testimony.avatar}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-200">
                          {testimony.person}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {testimony.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>
      </div>
    </div>
  )
}
