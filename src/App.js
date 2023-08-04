import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
