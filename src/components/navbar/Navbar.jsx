import React from "react";
import styles from "./Navbar.module.css";
import Part1 from "./Part1";
import Part2 from "./Part2";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.border}>
        <Part1 />
        <Part2 />
      </div>
    </div>
  );
};

export default Navbar;
