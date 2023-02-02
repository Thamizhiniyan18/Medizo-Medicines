import React from "react";
import styles from "./Part2.module.css";
import { HashLink } from "react-router-hash-link";

const Part2 = () => {
  const onMouseEnter_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underlineActive}`;
  };

  const onMouseLeave_Handler = (event) => {
    console.log(event.currentTarget.children[1].className);
    event.currentTarget.children[1].className = `${styles.underline}`;
  };

  const elements = [
    {
      name: "Home",
      Link: "#Home"
    },
    {
      name: "About Us",
      Link: "#AboutUs"
    },
    {
      name: "Contact",
      Link: "#Contact"
    },
  ]

  return (
    <div className={styles.part2}>
      <div className={styles.elements}>
        <ul>
          {elements.map((element) => (
            <li
              onMouseEnter={onMouseEnter_Handler}
              onMouseLeave={onMouseLeave_Handler}
              key={Math.random()}
            >
              <p>
                <HashLink to={element.Link} smooth>{element.name}</HashLink>
              </p>
              <div className={styles.underline}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Part2;
