import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiChakraui, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const ProjectAnimate = ({
  projectColor,
  projectUrl,
  projectImg,
  projectTitle,
  projectDcrp,
  projectLang,
}) => {
  const iconMapping = {
    FaReact: FaReact,
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaNodeJs: FaNodeJs,
    SiRedux: SiRedux,
    SiChakraui: SiChakraui,
    SiExpress: SiExpress,
    SiMongodb: SiMongodb,
    IoLogoJavascript: IoLogoJavascript,
  };

  return (
    <div
      className={`project shadow-lg p-6 rounded-lg`}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
    >
      <div className="project_videocontainer mb-4" data-aos="fade-right">
        <img
          src={projectImg}
          alt={projectTitle}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="project_information" data-aos="fade-right">
        <h2 className="text-xl font-semibold mb-2">{projectTitle}</h2>
        <p className="mb-4">{projectDcrp}</p>
        <div className="flex justify-center space-x-2 mb-4">
          {projectLang.map((lang, index) => {
            const IconComponent = iconMapping[lang];
            return IconComponent ? (
              <IconComponent key={index} className="text-2xl" />
            ) : null;
          })}
        </div>
        <div className="flex justify-center space-x-2">
          <a
            target="_blank"
            rel="noreferrer"
            href={projectUrl.live}
            className="btn-home border border-blue-500 px-3 py-2 rounded-sm text-blue-500 opacity-90 hover:bg-blue-500 hover:text-white duration-300 active:scale-90 cursor-pointer"
          >
            See this Live
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={projectUrl.code}
            className="btn-home border border-blue-500 px-3 py-2 rounded-sm text-blue-500 opacity-90 hover:bg-blue-500 hover:text-white duration-300 active:scale-90 cursor-pointer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnimate;
