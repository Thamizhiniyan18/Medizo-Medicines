import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const App = () => {
  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
