import React from "react";
import { ThumbUpIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12">
          Testimonials
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          People I have worked with have said some nice things
        </p>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 p-8 rounded">
                <ThumbUpIcon className="block w-8 text-green-400 mb-4" />
                <p className="leading-relaxed mb-6 text-white">
                  {testimonial.quote}
                </p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={process.env.PUBLIC_URL + testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-green-400">
                      {testimonial.name}
                    </span>
                    <span className="text-white text-xl font-medium">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
