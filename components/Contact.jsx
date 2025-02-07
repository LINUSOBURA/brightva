import React from "react";
import Image from "next/image";
import { FaTiktok, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export const Contact = () => {
  const socials = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/masibowanjala/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/masibothegrapher/#",
      icon: <FaInstagram />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@masibobright785",
      icon: <FaYoutube />,
    },
    {
      name: "Tiktok",
      link: "",
      icon: <FaTiktok />,
    },
  ];
  return (
    <section
      className="body-font relative bg-surface-a0 text-gray-400 min-h-screen flex flex-col justify-center"
      id="contact"
    >
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Me
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out! Whether you have a question, feedback, or a
            collaboration proposal, I'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="flex justify-center w-full">
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/+254707912513"
                target="_blank"
                className="text-center duration-300 ease-in-out hover:scale-110"
              >
                {" "}
                <Image
                  alt="Chat on WhatsApp"
                  src="/WhatsAppButtonGreenSmall.png"
                  width={200}
                  height={200}
                />{" "}
              </a>
            </div>
            <div className="mt-4 w-full border-gray-800 p-2 text-center">
              <a
                className="text-indigo-400"
                href="mailto:brightmasibova@gmail.com"
              >
                brightmasibova@gmail.com
              </a>
              <p className="my-5 leading-normal">
                00100 <br></br>
                Nairobi, Kenya
              </p>
              <span className="inline-flex text-sm sm:text-lg md:text-xg xl:text-2xl">
                {socials.map((site, index) => (
                  <a
                    key={index}
                    className="ml-4 text-gray-500 hover:scale-125 ease-in-out duration-300"
                    href={site.link}
                    target="_blank"
                  >
                    {site.icon}
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Separator Line */}
      <div className="flex relative justify-center">
        <div className="absolute w-1/2 bottom-0 border-t border-gray-800 text-center"></div>
      </div>

      <footer className="absolute w-full flex justify-center bottom-0 mb-4">
        <p className="text-center">
          ©️2025 | Developed & Mentained by{" "}
          <a
            href="https://obura.netlify.app"
            target="_blank"
            className="underline"
          >
            Lino
          </a>
        </p>
      </footer>
    </section>
  );
};
