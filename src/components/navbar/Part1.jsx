import React from "react";
import styles from "./Part1.module.css";
import logo from "../../assets/logo.jpg";

const Part1 = () => {
  return (
    <div className={styles.part1}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.title}>
        <h1>MEDIZO</h1>
        <p>Medicines on Wheels</p>
      </div>
    </div>
  );
};

export default Part1;
