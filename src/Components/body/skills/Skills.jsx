import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMysql,
  SiChakraui,
  SiVercel,
} from "react-icons/si";

import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animation/AnimatedLetter";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";

const technologies = [
  { image: FaHtml5, label: "HTML" },
  { image: FaCss3Alt, label: "CSS" },
  { image: FaJs, label: "JavaScript" },
  { image: FaReact, label: "React" },
  { image: SiRedux, label: "Redux" },
  { image: SiNextdotjs, label: "Next.js" },
  { image: FaNodeJs, label: "Node.js" },
  { image: SiExpress, label: "Express.js" },
  { image: SiMongodb, label: "MongoDB" },
  { image: SiMysql, label: "MySQL" },
  { image: SiChakraui, label: "Chakra-UI" },
  { image: SiTailwindcss, label: "TailwindCSS" },
  { image: FaBootstrap, label: "BootStrap" },
  { image: FaGithub, label: "GitHub" },
  { image: FaGitAlt, label: "Git" },
  { image: VscVscode, label: "VSCode" },
  { image: BiLogoNetlify, label: "Netlify" },
  { image: SiVercel, label: "Vercel" },
];

function Skills() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const skills = ["S", "k", "i", "l", "l", "s"];

  return (
    <div
      id="skills"
      className="flex flex-col max-w-7xl h-full mx-auto py-20 px-8"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skills}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4 text-center py-8 text-white text-opacity-90">
          {technologies.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="shadow-md shadow-[#06092e41] hover:!scale-110 duration-500 p-4"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              }}
            >
              <tech.image className="w-20 h-20 mx-auto" />
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
