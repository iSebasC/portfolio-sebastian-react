import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ language }) => {
  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Sebastian C") {
      return "Sebastian C";
    } else if (text === "Desarrollador Full Stack") {
      return "Full Stack Developer";
    } else if (text === "Diseño Gráfico Digital") {
      return "Digital Graphic Design";
    } else if (text === "© SEBASTIAN 2023. Derechos reservados.") {
      return "© SEBASTIAN 2023. All rights reserved.";
    } else {
      return text;
    }
  };

  return (
    <div className="bg-blue-600 text-white px-7" style={{ backgroundColor: "#0d6efd" }}>
      <div className="container mx-auto">
        {/* habilidades */}
        <div className="text-center mt-10">
          <p className="title-container" style={{ marginTop: '20px' }}>
            {getText("Sebastian C")}
          </p>
        </div>
        <div className="flex justify-center mt-5" style={{ fontSize: '15px' }}>
          <p className="mr-7">
            {getText("Desarrollador Full Stack")}
          </p>
          <p>
            {getText("Diseño Gráfico Digital")}
          </p>
        </div>
        {/* redes sociales */}
        <div className="flex justify-center mt-6">
          <a href="https://www.linkedin.com/in/sebastian-cabrera-alcala/" target="_blank" rel="noreferrer" className="rounded-3xl bg-white p-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-primary w-6 h-6" style={{ marginTop: '2px' }} />
          </a>
          <a href="https://github.com/iSebasC" target="_blank" rel="noreferrer" className="rounded-3xl bg-white p-2 ml-6">
            <FontAwesomeIcon icon={faGithub} className="text-primary w-6 h-6" style={{ marginTop: '2px' }} />
          </a>
        </div>
        {/* derechos reservados */}
        <div className="text-center mt-6" style={{ fontSize: '15px' }}>
          <p>
            {getText("© SEBASTIAN 2023. Derechos reservados.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
