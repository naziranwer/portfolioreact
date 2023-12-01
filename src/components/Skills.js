import React from "react";
import {
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaGraphQL,
  FaHtml5,
  FaCode,
} from "react-icons/fa";

const Skill = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="skills">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Skill cards */}
          <div className="text-center">
            <FaHtml5 className="mx-auto mb-2 text-5xl text-orange-500" />
            <p className="text-lg font-semibold text-gray-700">HTML5</p>
          </div>
          <div className="text-center">
            <FaCss3 className="mx-auto mb-2 text-5xl text-blue-700" />
            <p className="text-lg font-semibold text-gray-700">CSS3</p>
          </div>
          <div className="text-center">
            <FaCode className="mx-auto mb-2 text-5xl text-blue-700" />
            <p className="text-lg font-semibold text-gray-700">JavaScript</p>
          </div>
          <div className="text-center">
            <FaReact className="mx-auto mb-2 text-5xl text-pink-500" />
            <p className="text-lg font-semibold text-gray-700">React JS</p>
          </div>
          <div className="text-center">
            <FaNodeJs className="mx-auto mb-2 text-5xl text-green-400" />
            <p className="text-lg font-semibold text-gray-700">Node.js</p>
          </div>
          <div className="text-center">
            <FaServer className="mx-auto mb-2 text-5xl text-green-500" />
            <p className="text-lg font-semibold text-gray-700">Express</p>
          </div>
          <div className="text-center">
            <FaDatabase className="mx-auto mb-2 text-5xl text-blue-500" />
            <p className="text-lg font-semibold text-gray-700">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
