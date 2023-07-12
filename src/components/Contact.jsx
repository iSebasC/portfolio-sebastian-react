import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import imagenContact from "../assets/illustraciones/Hand-coding-amico.png";

const Contact = ({ language }) => {
  const getText = (text) => {
    return language === "ES" ? text : getEnglishText(text);
  };

  const getEnglishText = (text) => {
    // Agrega aquí la traducción al inglés para cada texto en español
    if (text === "Contáctame") {
      return "Contact Me";
    } else if (text === "¿Estás interesado en colaborar o quieres conectarte o chatear? Si es así, presiona el botón de contacto a continuación o ") {
      return "Are you interested in collaborating or want to connect and chat? If so, press the contact button below or ";
    } else if (text === "contáctame a través de LinkedIn.") {
      return "reach out to me on LinkedIn.";
    } else if (text === "Copiado") {
      return "Copied";
    } else if (text === "Contáctame") {
      return "Contact Me";
    } else {
      return text;
    }
  };

  const email = "cabreralcalasebastian@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="md:px-14 px-7 max-w-7xl" id="contact">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="emoji__text">🤙</p>
            <h2 className="text-primary font-semibold text-xl md:mt-0">
              {getText("Contáctame")}
            </h2>
          </div>
        </div>
        <hr className="flex-grow border-gray-300 ml-1 my-2" />

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <div className="flex items-center py-1 mb-5">
              <p style={{ textAlign: 'justify' }}>
                {getText("¿Estás interesado en colaborar o quieres conectarte o chatear? Si es así, presiona el botón de contacto a continuación o ")} <a href="https://www.linkedin.com/in/sebastian-cabrera-alcala/" target="_blank" className="text-primary">
                  {getText("contáctame a través de LinkedIn.")}
                </a>
              </p>
            </div>
            <div className="flex items-center bg-gray-100 p-2 rounded shadow mb-5">
              <p className="mr-4">{email}</p>
              <FontAwesomeIcon
                icon={faCopy}
                className="text-primary cursor-pointer"
                onClick={copyEmailToClipboard}
              />
              {copied && (
                <span
                  className="ml-2 text-blue-500"
                  style={{ color: "#0d6efd" }}
                >
                  {getText("Copiado")}
                </span>
              )}
            </div>
            <div className="flex mt-4">
              <a href="mailto:cabreralcalasebastian@gmail.com?subject=Contacto%20via%20Portafolio" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded ml-0"
                >
                {getText("Contáctame")}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={imagenContact}
              className="md:w-48 md:h-48 w-32 h-32"
              alt="Imagen de contacto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
