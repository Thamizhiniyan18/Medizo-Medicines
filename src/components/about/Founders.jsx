import React from "react";
import styles from "./Founders.module.css";
import CEO from "../../assets/Antony.jpg";

const Founders = () => {
  return (
    <div className={styles.Founders}>
      <div className={styles.title}>
        <h1>Founders</h1>
      </div>
      <div className={styles.founder}>
        <div className="">
          <img src={CEO} alt="" />
        </div>
        <div className={styles.details}>
          <h1>R Antony</h1>
          <p>Founder & Chairman of Medizo</p>
        </div>
      </div>
      <div className={styles.coFounder}>
        <div className="">
          <h1>Gowtham Prakash</h1>
          <p>Co-Founder</p>
        </div>
        <div className="">
          <h1>Punith Amudhan</h1>
          <p>Co-Founder</p>
        </div>
        <div className="">
          <h1>Mano</h1>
          <p>Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
