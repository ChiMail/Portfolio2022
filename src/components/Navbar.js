import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Chihiro Mailhot
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-green-400">
            Past Work
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-green-400">
            Skills
          </a>
          <a
            href="#experiences"
            className="mr-5 text-white hover:text-green-400"
          >
            Work Experiences
          </a>
          <a
            href="#testimonials"
            className="mr-5 text-white hover:text-green-400"
          >
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-white hover:text-green-400 hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
