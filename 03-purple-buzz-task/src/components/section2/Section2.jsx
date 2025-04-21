import React from "react";
import styles from "./Section2.module.scss";
import { IoGiftOutline } from "react-icons/io5";

const Section2 = () => {
  return (
    <section className={styles.section2}>
      <h1>Services</h1>
      <div className={styles.text}>
         
        <p className={styles.make}>
        <IoGiftOutline />

        Make Success for future
        </p>
        <div className={styles.verticle}></div>
        <p>
          You are free to use this template for your commercial or business
          websites. You are not allowed to re-distribute this template ZIP file
          on any template collection websites. It is too easy to illegally copy
          and repost this template.
        </p>
      </div>
      <div className={styles.purple}>
        <ul>
          <li>All</li>
          <li>Graphics</li>
          <li>UI/UX</li>
          <li>Branding</li>
        </ul>
      </div>
    </section>
  );
};

export default Section2;
