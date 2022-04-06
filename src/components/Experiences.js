import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

function Experiences() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <IdentificationIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work Experiences
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have work experiences in Japan and Canada!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative min-h-full">
                <div className="px-8 py-10 relative z-11 w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 ">
                    {experience.occupation}{" "}
                  </h2>
                  <h1 className="title-font text-2xl font-medium text-white my-3">
                    {experience.companyName}
                  </h1>
                  <h1 className="title-font text-lg font-medium">
                    {experience.country}
                  </h1>
                  <h1 className="title-font text-lg font-medium">
                    {experience.duration}
                  </h1>
                  <br />
                  <h2 className="title-font text-lg font-medium text-white mb-3">
                    Achievements/Tasks
                  </h2>
                  <p className="leading-relaxed text-left ml-10 mt-5">
                    {experience.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
