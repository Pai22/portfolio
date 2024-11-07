import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/Scrollup";

export const userContext = createContext();

function App() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <userContext.Provider value={{activeNav, setActiveNav}}>
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </userContext.Provider>
    </>
  );
}

export default App;
