import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { BrowserRouter } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      {/* <div className="div1"></div>
      <div className="div2"></div> */}
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
