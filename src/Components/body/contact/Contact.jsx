import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "animate.css";
import "../Body.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const contact = ["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"];
  return (
    <div id="contact" className="max-w-7xl mx-auto py-20 px-8 h-full relative">
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contact}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="flex flex-row gap-12 justify-evenly max-lg:flex-col">
        <div
          data-aos="zoom-in"
          className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md p-4"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <p
            className="text-lg duration-300 
              rounded-full bg-gray-700 bg-opacity-50 p-5"
          >
            <BsFillTelephoneFill size={30} />
          </p>
          <span className="text-white opacity-90 font-light text-sm">
            +91 6204459226
          </span>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md p-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <p
            className="text-sm duration-300 
              rounded-full bg-gray-700 bg-opacity-50 p-5"
          >
            <CgMail size={30} />
          </p>
          <span className="text-white opacity-90 font-light text-sm">
            ik048941@gmail.com
          </span>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md p-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <p
            className="text-sm duration-300 
              rounded-full bg-gray-700 bg-opacity-50 p-5"
          >
            <FaGithub size={30} />
          </p>
          <span className="text-white opacity-90 font-light text-sm">
            imran120198
          </span>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-row gap-2 items-center shadow-md shadow-[#06092e41] duration-500 p-2 rounded-md p-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <p
            className="text-sm duration-300 
              rounded-full bg-gray-700 bg-opacity-50 p-5"
          >
            <MdLocationOn size={30} />
          </p>
          <span className="text-white opacity-90 font-light text-sm">
            Ramgarh, Jharkhand
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
