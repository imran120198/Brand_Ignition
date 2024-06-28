import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col max-w-7xl items-center justify-center text-white opacity-90 h-full mx-auto py-2 px-8 mt-10">
      <div className="flex flex-row gap-x-3 justify-center">
        <a href="https://github.com/imran120198">
          <AiFillGithub size={30} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/imran-khan-94439a135/">
          <AiFillLinkedin size={30} color="white" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100009689170000">
          <AiFillFacebook size={30} color="white" />
        </a>
      </div>
      <ul className="flex flex-row gap-x-4">
        <li className="font-light opacity-70">2024 © Imran</li>
        <li className="font-light opacity-70 border-gray-400 border-l pl-4">
          All Rights Reserved.
        </li>
      </ul>
    </div>
  );
}

export default Footer;
