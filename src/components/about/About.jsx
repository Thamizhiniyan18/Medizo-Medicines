import React from "react";
import styles from "./About.module.css";

const About = () => {
  return <div id="About" className={styles.About}>
    <div className={styles.Title}>
        <p>ABOUT US</p>
    </div>
    <div className={styles.contentContainer}>
        <div className={styles.description}>
            <p><span>Medizo</span> is a dynamic supplier of medicines to health care and medical industries, with headquarters in Anna Nagar, Chennai. The company was founded in 2022.</p>
        </div>
    </div>
  </div>;
};

export default About;
