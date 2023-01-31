import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import logo from "../../assets/logo.jpg";
import background from "../../assets/background.png";
import img1 from "../../assets/image1.svg";
import img2 from "../../assets/image2.svg";
import img3 from "../../assets/image3.svg";
import img4 from "../../assets/image4.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const logoAnime = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const contactUs = useRef(null);

  useEffect(() => {
    const element = [
      logoAnime.current,
      image1.current,
      image2.current,
      image3.current,
      image4.current,
      contactUs.current,
    ];
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

  const images = [
    {
      src: img1,
      className: styles.image1,
      ref: image1,
    },
    {
      src: img2,
      className: styles.image2,
      ref: image2,
    },
    {
      src: img3,
      className: styles.image3,
      ref: image3,
    },
    {
      src: img4,
      className: styles.image4,
      ref: image4,
    },
  ];

  return (
    <div
      id="Home"
      className={styles.Home}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.logo} ref={logoAnime}>
        <img src={logo} alt="" />
      </div>

      {images.map((image) => (
        <div className={image.className} ref={image.ref} key={Math.random()}>
          <img src={image.src} alt="" />
        </div>
      ))}

      <div className={styles.contactUs} ref={contactUs}>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Home;
