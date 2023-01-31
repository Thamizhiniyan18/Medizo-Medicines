import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AreaServed.module.css";
import india from "../../assets/India.png";

gsap.registerPlugin(ScrollTrigger);

const AreaServed = () => {
  const areaServed = useRef(null);

  useEffect(() => {
    const element = [
      areaServed.current
    ];
    gsap.fromTo(
      element,
      {},
      {
        opacity: 1,
        duration: 1,
        x: 0,
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
      className={styles.areaServed}
      style={{ backgroundImage: `url(${india})` }}
      ref={areaServed} 
    >
      <div className={styles.container1}>
        <i class="fa-solid fa-location-dot"></i>
        <p>We Provide Services in</p>
        <h1>India</h1>
      </div>
    </div>
  );
};

export default AreaServed;
