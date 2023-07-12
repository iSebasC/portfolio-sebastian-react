import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ language }) => {

  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Portafolio") {
      return "Portfolio";
    } else if (text === "Ver Github") {
      return "View GitHub";
    } else if (text === "Ver Código") {
      return "View Code";
    } else if (text === "Ver Página") {
      return "View Page";
    } else if (text === "Carrusel Comic Marvel") {
      return "Marvel Comic Carousel";
    } else if (text === "Rick y Morty") {
      return "Rick and Morty";
    } else if (text === "Lista de Tareas") {
      return "Task List";
    } else if (text === "Rastreador de Anime") {
      return "Anime Tracker";
    } else if (text === "Sistema de Productos") {
      return "Product System";
    } else if (text === "Web Basico") {
      return "Basic Web";
    } else {
      return text;
    }
  };

  const projects = [
    {
      name: getText("Carrusel Comic Marvel"),
      image: "/src/assets/projects/1.jpg",
      language: ["React", "TypeScript"],
      githubLink: "https://github.com/iSebasC/carousel-marvel-react",
      pageLink: "https://react-ts-kmp5bg.stackblitz.io/",
    },
    {
      name: getText("Rick y Morty"),
      image: "/src/assets/projects/2.jpg",
      language: ["React", "Bootstrap 5"],
      githubLink: "https://github.com/iSebasC/react-rick-and-morty-app",
      pageLink: "https://github-ika8fw.stackblitz.io/",
    },
    {
      name: getText("Lista de Tareas"),
      image: "/src/assets/projects/3.jpg",
      language: ["Php", "Mysql"],
      githubLink: "https://github.com/iSebasC/todo_list",
      pageLink: "https://todolistsc.000webhostapp.com/todo-list-php/",
    },
    {
      name: getText("Rick y Morty"),
      image: "/src/assets/projects/4.jpg",
      language: ["Angular", "Angular Material"],
      githubLink: "https://github.com/iSebasC/sebastian-cabrera-alcala",
      pageLink: "https://rickandmortyangularmaterial.netlify.app/",
    },
    {
      name: getText("App Productos"),
      image: "/src/assets/projects/5.jpg",
      language: ["Laravel", "Bootstrap 5"],
      githubLink: "https://github.com/tuusuario/proyecto1",
      pageLink: "https://tupagina.com/proyecto1",
    },
    {
      name: getText("Rastreador de Anime"),
      image: "/src/assets/projects/6.jpg",
      language: ["VueJs"],
      githubLink: "https://github.com/tuusuario/proyecto1",
      pageLink: "https://tupagina.com/proyecto1",
    },
    {
      name: getText("Sistema de Productos"),
      image: "/src/assets/projects/7.jpg",
      language: ["Laravel", "Bootstrap 5"],
      githubLink: "https://github.com/iSebasC/appProductos",
    },
    {
      name: getText("Web Básico"),
      image: "/src/assets/projects/8.jpg",
      language: ["Bootstrap-Vue"],
      githubLink: "https://github.com/iSebasC/ProjectBoostrapVue",
      pageLink: "https://proyectobootstrapvue.netlify.app/",
    },
  ];

  const openGitHubLink = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  const openPageLink = (pageLink) => {
    window.open(pageLink, "_blank");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="md:px-14 px-7 mt-28 max-w-7xl" id="projects">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="emoji__text">✍️</p>
            <h2 className="text-primary font-semibold text-xl md:mt-0">
              {getText("Portafolio")}
            </h2>
          </div>
          <div className="items-center text-right font-normal">
            <a
              href="https://github.com/iSebasC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              {getText("Ver Github")}
            </a>
            <FontAwesomeIcon
              className="text-primary ml-2"
              icon={faArrowRight}
              style={{ strokeWidth: "1px" }}
            />
          </div>
        </div>
        <hr className="flex-grow border-gray-300 ml-1 my-2" />

        {/* Projects */}
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-none rounded-lg p-5 flex flex-col items-center justify-center w-full md:w-96 h-full my-4 md:mx-5 text-center shadow-sm"
              style={{
                backgroundColor: "#0d6efd",
                padding: "2.0rem 2rem",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="max-h-40 mb-3"
              />
              <p className="text-sm text-white">{project.name}</p>
              <div className="mt-2">
                {project.language.map((lang, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white rounded-full px-3 py-1 text-xs font-semibold text-primary mr-2"
                    style={{ backgroundColor: "#FFFFFF", color: "#0d6efd" }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-x-2">
                <button
                  className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={() => openGitHubLink(project.githubLink)}
                  style={{ backgroundColor: "#4db5ff" }}
                >
                  {getText("Ver Código")}
                </button>
                <button
                  className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={() => openPageLink(project.pageLink)}
                  style={{ backgroundColor: "#4db5ff" }}
                >
                  {getText("Ver Página")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
