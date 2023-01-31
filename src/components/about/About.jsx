import React from "react";
import styles from "./About.module.css";
import Description from "./Description";
import FoundIn from "./FoundIn";
import AreaServed from "./AreaServed";
import Outlets from "./Outlets";

const About = () => {
  return (
    <div id="About" className={styles.About}>
      <div className={styles.Title}>
        <p>ABOUT US</p>
      </div>
      <div className={styles.contentContainer}>
        <Description />
        <div className={styles.stats}>
          <FoundIn />
          <AreaServed />
          <Outlets />
        </div>
      </div>
    </div>
  );
};

export default About;
