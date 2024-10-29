import React from "react";
import MyLogo from "../assets/SMT-DEV.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram, FaSquareInstagram, FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Footer = () => {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // console.log(navLinks[0].id);

  return (
    <footer className="bg-[#0a4275] font-sans tracking-wide">
      <div className="w-[80%] mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a onClick={() => scrollToSection("home")}>
              <img src={MyLogo} alt="SMT-DEGV" className="w-44 mb-8 cursor-pointer" />
            </a>
            <p className="text-gray-300 text-sm">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-2">
              {navLinks.map(({ id, label }) => (
                <li key={id} className="mb-4">
                  <a
                    onClick={() => scrollToSection(id)}
                    className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white text-sm"
                  >
                    <TiTick />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">
              Contact Me
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                {" "}
                170507 Roluos Commune, Prasat Bakong District, Siem Reap
                Province
              </p>
              <p className="text-gray-300 text-sm">luysokmatra1@gmail.com</p>
              <p className="text-gray-300 text-sm">+855 61 828 767</p>
            </div>
            <div className="mt-4">
              <ul className="flex gap-4">
                <li>
                  <a href="#">
                    <FaFacebook className="text-2xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSquareInstagram className="text-2xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTelegram className="text-2xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGithub className="text-2xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoYoutube className="text-2xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdEmail className="text-2xl text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5 bg-[#08355e]">
        <p className="text-gray-300 text-sm">© SMT-DEV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
