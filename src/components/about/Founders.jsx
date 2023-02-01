import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Founders.module.css";
import CEO from "../../assets/Antony.jpg";
import profilePlaceHolder from "../../assets/default-profile.png";

gsap.registerPlugin(ScrollTrigger);

const Founders = () => {
  const founder = useRef(null);
  const coFounder = useRef(null);

  useEffect(() => {
    const element = [
      founder.current,
      coFounder.current
    ];

    gsap.fromTo(
      element[0],
      {},
      {
        opacity: 1,
        duration: 1,
        x: -235,
        delay: 0.5,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: element,
        },
      }
    );

    gsap.fromTo(
      element[1],
      {},
      {
        opacity: 1,
        duration: 1,
        x: 335,
        delay: 1,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);

  return (
    <div className={styles.Founders}>
      <div className={styles.title}>
        <h1>Founders</h1>
      </div>
      <div className={styles.founder} ref={founder}>
        <div className="">
          <h1>R Antony</h1>
          <p>Founder & CEO of Medizo</p>
        </div>
        <div className="">
          <img src={CEO} alt="" />
        </div>
      </div>
      <div className={styles.coFounder} ref={coFounder}>
        <div className="">
          <img src={profilePlaceHolder} alt="" />
        </div>
        <div className="">
          <h1>Gowtham Prakash</h1>
          <p>Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
