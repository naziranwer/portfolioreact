import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hello, I'm Mohd Nazir Anwer, a Frontend Developer crafting stunning
            websites using React and Tailwind CSS.
          </p>
          <p className="pb-5">
            My expertise lies in Frontend technologies such as React.js, Redux,
            Redux Tool Kit, and Tailwind CSS, among others.
          </p>

          <p className="pb-5">
            When it comes to Server Side, I've gained practical experience in
            Node.js, Express.js, MongoDB, and Mongoose.
          </p>

          <p>
            I thrive on a problem-solving approach, embrace new technologies
            readily, and possess an unyielding enthusiasm for ongoing learning,
            all geared towards steering impactful and pioneering projects. Let's
            collaborate and build cutting-edge applications together!
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
