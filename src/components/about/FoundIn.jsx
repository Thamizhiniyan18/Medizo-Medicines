import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FoundIn.module.css";
import rocket from "../../assets/rocket.svg";

gsap.registerPlugin(ScrollTrigger);

const FoundIn = () => {
  const foundIn = useRef(null);

  useEffect(() => {
    const element = [
      foundIn.current
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
    <div className={styles.foundIn} ref={foundIn}>
      <div style={{ backgroundImage: `url(${rocket})` }}>
        <p>Founded in </p>
        <h1>2022</h1>
      </div>
    </div>
  );
};

export default FoundIn;
