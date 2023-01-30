import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const onMouseEnter_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underlineActive}`
  };

  const onMouseLeave_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underline}`
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.border}>
        <div className={styles.part1}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.title}>
            <h1>MEDIZO</h1>
            <p>Medicines on Wheels</p>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.elements}>
            <ul>
              <li onMouseEnter={onMouseEnter_Handler} onMouseLeave={onMouseLeave_Handler}>
                <p>Home</p>
                <div className={styles.underline}></div>
              </li>
              <li onMouseEnter={onMouseEnter_Handler} onMouseLeave={onMouseLeave_Handler}>
                <p>About</p>
                <div className={styles.underline}></div>
              </li>
              <li onMouseEnter={onMouseEnter_Handler} onMouseLeave={onMouseLeave_Handler}>
                <p>Contact</p>
                <div className={styles.underline}></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
