import React from "react";
import gaana from "../assets/project3.png";
import myntra from "../assets/project2.png";
import netflix from "../assets/netflixgpt.png";
import gofood from "../assets/GoFood.png";

const Projects = () => {
  const projects = [
    {
      img: gaana,
      title: "Gaana Clone",
      desc: " Gaana Clone is a replica of the popular Gaana music streaming service, aiming to replicate its functionalities and user experience. Built with  React, Redux and Material UI ",
      live: "https://gaana-clone-tau.vercel.app/",
      code: "https://github.com/naziranwer/gaana_clone",
    },
    {
      img: myntra,
      title: "Myntra Clone",
      desc: "Myntra Clone is a mirrored version of the Myntra e-commerce platform, designed to mimic its features and interface using React JS",
      live: "https://nazir.onrender.com/",
      code: "https://github.com/naziranwer/Myntra",
    },
    {
      img: netflix,
      title: "NetFlixGpt",
      desc: "Under Construction,Coming Soon",
      live: "/",
      code: "/",
    },
    {
      img: gofood,
      title: "GoFood",
      desc: "Under Construction,Coming Soon",
      live: "/",
      code: "/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} 
              style={{height:"300px",width:"1200px"}}
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center text-3xl font-bold px-2 text-red-400">
                  {project.title}
                </p>
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
