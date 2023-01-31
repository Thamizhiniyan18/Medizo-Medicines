import React from "react";
import styles from "./Part2.module.css";

const Part2 = () => {
  const onMouseEnter_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underlineActive}`;
  };

  const onMouseLeave_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underline}`;
  };
  
  return (
    <div className={styles.part2}>
      <div className={styles.elements}>
        <ul>
          <li
            onMouseEnter={onMouseEnter_Handler}
            onMouseLeave={onMouseLeave_Handler}
          >
            <p>Home</p>
            <div className={styles.underline}></div>
          </li>
          <li
            onMouseEnter={onMouseEnter_Handler}
            onMouseLeave={onMouseLeave_Handler}
          >
            <p>About</p>
            <div className={styles.underline}></div>
          </li>
          <li
            onMouseEnter={onMouseEnter_Handler}
            onMouseLeave={onMouseLeave_Handler}
          >
            <p>Contact</p>
            <div className={styles.underline}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Part2;
