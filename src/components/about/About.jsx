import React from "react";
import styles from "./About.module.css";
import Description from "./Description";
import FoundIn from "./FoundIn";
import AreaServed from "./AreaServed";
import Outlets from "./Outlets";
import Founders from "./Founders";
import pattern from "../../assets/pattern.png";

const About = () => {
  return (
    <div id="AboutUs" className={styles.About}>
      <div className={styles.Title}>
        <p>ABOUT US</p>
      </div>
      <div className={styles.contentContainer} style={{backgroundImage: `url(${pattern})`}}>
        <Description />
        <div className={styles.stats}>
          <FoundIn />
          <AreaServed />
          <Outlets />
        </div>
        <Founders />
      </div>
    </div>
  );
};

export default About;
