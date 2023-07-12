import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = ({ language }) => {
  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Mis Habilidades") {
      return "My Skills";
    } else if (text === "Desarrollador Front-end") {
      return "Front-end Developer";
    } else if (text === "Desarrollador Back-end") {
      return "Back-end Developer";
    } else if (text === "Base de datos") {
      return "Database";
    } else if (text === "Diseño Gráfico Digital") {
      return "Digital Graphic Design";
    } else {
      return text;
    }
  };

  const skills = [
    {
      category: getText("Desarrollador Front-end"),
      languages: ["HTML", "CSS", "JavaScript", "React", "Next.JS"],
    },
    {
      category: getText("Desarrollador Back-end"),
      languages: ["PHP", "Slim", "Laravel"],
    },
    {
      category: getText("Base de datos"),
      languages: ["MySQL", "SQL Server", "PostgreSQL"],
    },
    {
      category: getText("Diseño Gráfico Digital"),
      languages: ["Photoshop", "Illustrator", "InDesign"],
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="md:px-14 px-7 mt-32 max-w-7xl" id="skills">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="emoji__text">👨‍🎓</p>
            <h2 className="text-primary font-semibold text-xl md:mt-0">
              {getText("Mis Habilidades")}
            </h2>
          </div>
        </div>
        <hr className="flex-grow border-gray-300 ml-1 my-2" />

        {/* Skills */}
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-none rounded-lg p-5 flex flex-col items-center justify-center w-full md:w-96 h-full my-4 md:mx-5 text-center"
              style={{
                borderRadius: "25px",
                backgroundColor: "#0d6efd",
                border: "1px solid transparent",
                padding: "2.0rem 2rem",
              }}
            >
              <p className="mt-3 text-xl text-white font-semibold">
                {skill.category}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4 text-white">
                {skill.languages.map((language, index) => (
                  <div key={index} className="flex items-center mt-3">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ marginRight: "5px", padding: "0.4rem 0.5rem" }}
                    />
                    {language}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
