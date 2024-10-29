import React, { useState, useEffect } from "react";
import MyLogo from "../assets/SMT-DEV Black.svg";

const Header = () => {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    // { id: "work", label: "Work" },
    // { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <header className="fixed w-full bg-white text-black font-bold shadow-md py-4 z-50">
      <nav className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8">
        <a
          onClick={() => scrollToSection("home")}
          className="text-xl cursor-pointer"
        >
          <img src={MyLogo} alt="SMT-DEV" className="h-8 text-black" />
        </a>
        <hr className="my-2 border-2 border-blue-400 w-full md:hidden" />
        <ul className="flex items-center space-x-6">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-200 cursor-pointer ${
                  activeLink === id
                    ? "text-blue-600 font-bold underline underline-offset-4 transition-all"
                    : "text-black"
                } hover:text-blue-600`}
                tabIndex={0}
              >
                {label}
              </a>
            </li>
          ))}
          {/* <select>
            <option>KH</option>
            <option>EN</option>
          </select> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
