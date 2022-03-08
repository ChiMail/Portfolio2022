import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm Chihiro.
            <br className="hidden lg:inline-block" />I enjoy to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            After five years of the interior showroom advisor experience in
            Japan, I got interested in moveing to Canada to improve my English
            skills. I moved to Toronto in 2017, and I fell in love with Toronto.{" "}
            <br />
            <br />
            Also, I had my interests in computer programming since I used a CAD
            software for drawing blueprints at the showroom. <br />
            For further study, I started learning computer programming at Seneca
            College and guradueted with honours (GPA 3.9 out of 4.0).
            <br />
            Currently seeking for opportunities to have more experiences in the
            programming field.
            <br />
            <br />
            I'm an independent and self-motivated person with passion for
            creating product cooporating with clients and co-workers. It is the
            most fun thing for me!
            <br />
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="herophotos"
            src={process.env.PUBLIC_URL + "/images/coding.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
