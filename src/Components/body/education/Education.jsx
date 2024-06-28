import React from "react";
import masai from "../../../Assets/masai.png";
import nist from "../../../Assets/nist.png";
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animation/AnimatedLetter";

const Education = () => {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const edu = ["E", "d", "u", "c", "a", "t", "i", "o", "n"];
  const education = [
    {
      icon: masai,
      companyName: "Masai School",
      startDate: "Jan, 2021",
      endDate: "Present",
      position: "Full Stack Web Developer",
    },
    {
      icon: nist,
      companyName: "National Institute of Science and Technology",
      startDate: "Aug, 2015",
      endDate: "Mar, 2019",
      position: "B-Tech (Mechanical Engineering)",
    },
  ];

  return (
    <div
      id="education"
      className="max-w-7xl h-full mx-auto py-20 px-8 relative"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={edu}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="flex flex-col ">
        {education.map((elem, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
          >
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2 my-3">
                <img
                  src={elem.icon}
                  alt=""
                  width={40}
                  className="rounded-full"
                />
                <p className="text-lg">{elem.companyName}</p>
              </div>
              <p className="text-sm opacity-50">
                {elem.startDate} - {elem.endDate}
              </p>
            </div>
            <div>
              <p className="text-lg text-white opacity-50">{elem.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
