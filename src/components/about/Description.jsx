import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Description.module.css";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  const description = useRef(null);

  useEffect(() => {
    const element = [
      description.current
    ];
    gsap.fromTo(
      element,
      {},
      {
        opacity: 1,
        duration: 1,
        y: -30,
        delay: 0.5,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);

  return (
    <div className={styles.description} ref={description}>
      <p>
        <span>Medizo</span> is a dynamic supplier of medicines to health care
        and medical industries, with headquarters in Anna Nagar, Chennai. The
        company was founded in 2022.
      </p>
    </div>
  );
};

export default Description;
