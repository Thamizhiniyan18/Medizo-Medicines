import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import logo from "../../assets/logo.jpg";
import background from "../../assets/background.png";
import img1 from "../../assets/image1.svg";
import img2 from "../../assets/image2.svg";
import img3 from "../../assets/image3.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const logoAnime = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const contactUs = useRef(null);

  useEffect(() => {
    const element = [logoAnime.current, image1.current, image2.current, contactUs.current];
    gsap.fromTo(
      element,
      {},
      {
        opacity: 1,
        duration: 1,
        y: -30,
        delay: 1,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);

  return (
    <div
      className={styles.Home}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.logo} ref={logoAnime}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.image1} ref={image1}>
        <img src={img1} alt="" />
      </div>
      <div className={styles.image2} ref={image2}>
        <img src={img2} alt="" />
      </div>
      <div className={styles.contactUs} ref={contactUs}>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Home;
