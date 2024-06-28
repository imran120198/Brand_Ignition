import React from "react";
import ees from "../../../Assets/ees.png";
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animation/AnimatedLetter";

const Experience = () => {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const work = ["W", "o", "r", "k"];
  const workExp = [
    {
      icon: ees,
      companyName: "Enterprising Era Solution",
      startDate: "Jan, 2021",
      endDate: "May, 2021",
      position: "IT Sales Consultant",
    },
  ];

  return (
    <div
      id="experience"
      className="max-w-7xl h-full mx-auto py-20 px-8 relative"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={work}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div
        className="flex flex-col"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
      >
        {workExp.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md"
          >
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2 my-3">
                <img src={ees} alt="" width={40} className="rounded-full" />
                <p className="text-lg">{experience.companyName}</p>
              </div>
              <p className="text-sm opacity-50">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-white opacity-50">
                {experience.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
