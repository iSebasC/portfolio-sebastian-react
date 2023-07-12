import React from "react";
import profile from "../assets/profile_sebastian.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = ({ language }) => {
  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Sobre mí") {
      return "About Me";
    } else if (text === "Ver Linkedin") {
      return "View Linkedin";
    } else if (text === "Experiencia") {
      return "Experience";
    } else if (text === "Proyectos") {
      return "Projects";
    } else if (
      text ===
      "👉🏼 Soy Sebastián Cabrera, un apasionado de la programación y el diseño web y gráfico. Soy egresado de la carrera de Desarrollo de Software y tengo experiencia en proyectos de programación y diseño. Me especializo en el lenguaje PHP y sus frameworks Slim y Laravel."
    ) {
      return "👉🏼 I'm Sebastián Cabrera, a passionate web and graphic designer. I graduated from the Software Development program and have experience in programming and design projects. I specialize in the PHP language and its frameworks Slim and Laravel.";
    } else {
      return text;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="md:px-14 px-7 sm:mt-[-24px] max-w-7xl" id="about">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="emoji__text">👨‍💻</p>
            <h2 className="text-primary font-semibold text-xl md:mt-0">
              {getText("Sobre mí")}
            </h2>
          </div>
          <div className="items-center text-right font-normal">
            <a
              href="https://www.linkedin.com/in/sebastian-cabrera-alcala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {getText("Ver Linkedin")}
            </a>
            <FontAwesomeIcon
              className="text-primary ml-2"
              icon={faArrowRight}
              style={{ strokeWidth: "1px" }}
            />
          </div>
        </div>

        <hr className="flex-grow border-gray-300 ml-1 my-2" />

        <div className="grid md:grid-cols-2 gap-4 mt-8 md:mt-14">
          {/* Imagen */}
          <div className="md:col-span-1 flex justify-center items-center">
            <img
              src={profile}
              alt="Imagen de usuario"
              className="w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl"
              style={{
                borderRadius: "30px",
                boxShadow: "5px 2px 5px rgba(35,35,32,0.3)",
              }}
            />
          </div>
          {/* Cards y Texto */}
          <div className="md:col-span-1 grid md:grid-cols-2 gap-4">
            <div className="border-none rounded-lg p-5 flex flex-col items-center justify-center h-full bg-blue-500">
              <FontAwesomeIcon icon={faPlus} className="text-white" />
              <p className="mt-3 text-xl text-white font-semibold">
                {getText("Experiencia")}
              </p>
              <p className="text-white">1 {getText("año")}</p>
            </div>
            <div className="border-none rounded-lg p-5 flex flex-col items-center justify-center h-full bg-blue-500">
              <FontAwesomeIcon icon={faPlus} className="text-white" />
              <p className="mt-3 text-xl text-white font-semibold">
                {getText("Proyectos")}
              </p>
              <p className="text-white">5 {getText("proyectos")}</p>
            </div>
            <div className="col-span-2">
              <p
                className="my-3 text-black leading-[2]"
                style={{ textAlign: "justify" }}
              >
                {getText(
                  "👉🏼 Soy Sebastián Cabrera, un apasionado de la programación y el diseño web y gráfico. Soy egresado de la carrera de Desarrollo de Software y tengo experiencia en proyectos de programación y diseño. Me especializo en el lenguaje PHP y sus frameworks Slim y Laravel."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
