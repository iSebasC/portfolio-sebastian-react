import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";

const Header = ({ language, toggleLanguage }) => {
  const links = [
    { name: "Inicio", link: "home", lang: { ES: "Inicio", EN: "Home" } },
    { name: "Sobre mi", link: "about", lang: { ES: "Sobre mi", EN: "About" } },
    { name: "Habilidades", link: "skills", lang: { ES: "Habilidades", EN: "Skills" } },
    { name: "Proyectos", link: "projects", lang: { ES: "Proyectos", EN: "Projects" } },
    { name: "Contacto", link: "contact", lang: { ES: "Contacto", EN: "Contact" } },
  ];
  const [open, setOpen] = useState(false);


  return (
    <div className="w-full max-w-8xl">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-black hover:text-primary">
            {language === "ES" ? "SEBASTIAN" : "SEBASTIAN"}
          </span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:justify-start md:pb-0 absolute md:static md:z-auto left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-black hover:text-primary duration-500"
              >
                {link.lang[language]}
              </Link>
            </li>
          ))}
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <button
              onClick={toggleLanguage}
              className="text-black hover:text-primary duration-500"
            >
              {language === "ES" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
