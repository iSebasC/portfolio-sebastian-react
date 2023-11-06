import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { fetchProfileData } from "../apis/profileApi";

const Home = ({ language, toggleLanguage }) => {
  const [profileData, setProfileData] = useState([]);

  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Hola, soy 👋") {
      return "Hello, I'm 👋";
    } else if (text === "Desarrollador Full Stack & Diseño Gráfico Digital") {
      return "Full Stack Developer & Digital Graphic Designer";
    }  else if (text === "Descargar CV") {
      return "Download CV";
    } else if (text === "Proyectos") {
      return "Projects";
    } else {
      return text;
    }
  };

  useEffect(() => {
    fetchProfileData()
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w md:px-10 px-7 bg-[#FFF]">
        <div className="mt-14" id="home">
          <div className="flex flex-col md:flex-row items-center justify-between text-center">
            <div className="text-black">
              <h6 className="text-xl mt-12">{getText("Hola, soy 👋")}</h6>
              {profileData.map((profile) => (
                <div key={profile.id}>
                  <h1 className="font-semibold md:text-5xl my-4 text-3xl">
                    {profile.nombre}
                  </h1>
                  <p className="md:w-96">{getText(profile.area)}</p>
                  <div className="mt-5">
                    <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-cyan-500 hover:text-white">
                      <a href={profile.cv} target="_blank">
                        {getText("Descargar CV")}
                      </a>
                      <FontAwesomeIcon
                        icon={faCircleDown}
                        style={{ marginLeft: "5px" }}
                      />
                    </button>
                    <Link
                      to="projects"
                      smooth={true}
                      duration={900}
                      className="btn transition-all duration-500 py-2 px-6 rounded ml-5 bg-primary text-white hover-bg-cyan-500 hover:text-white"
                    >
                      {getText("Proyectos")}
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ marginLeft: "5px" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
