import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  
  const [language, setLanguage] = useState("ES");

  const toggleLanguage = () => {
    setLanguage(language === "ES" ? "EN" : "ES");
  };

  return (
    <>
      <div className="max-w-8xl mx-auto">
        <Header language={language} toggleLanguage={toggleLanguage}/>
        <Home language={language} toggleLanguage={toggleLanguage}/>
        <About language={language} toggleLanguage={toggleLanguage}/>
        <Skills language={language} toggleLanguage={toggleLanguage}/>
        <Projects language={language} toggleLanguage={toggleLanguage}/>
        <Contact language={language} toggleLanguage={toggleLanguage}/>
        <Footer language={language} toggleLanguage={toggleLanguage}/>
      </div>
    </>
  );
}

export default App;
