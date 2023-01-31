import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Outlets.module.css";
import outlets from "../../assets/outlets.png";

gsap.registerPlugin(ScrollTrigger);

const Outlets = () => {
  const Outlets = useRef(null);

  useEffect(() => {
    const element = [
      Outlets.current,
    ];
    gsap.fromTo(
      element,
      {},
      {
        opacity: 1,
        duration: 1,
        y: 0,
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
      className={styles.Outlets}
      style={{ backgroundImage: `url(${outlets})` }}
      ref={Outlets}
    >
      <div>
        <p>No. of Outlets</p>
        <h1>101</h1>
      </div>
    </div>
  );
};

export default Outlets;
