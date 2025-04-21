import React from "react";
import styles from "./Footer.module.scss";
import { BiBuildings } from "react-icons/bi";
import {
  FaFacebook,
  FaLinkedin,
  FaMagento,
  FaMessage,
  FaPhone,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
      <div className={styles.contain1}>
        <p className={styles.buzz}>
          <BiBuildings /> Purple Buzz
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className={styles.icons}>
          <FaFacebook />
          <FaLinkedin />
          <FaWhatsapp />
          <FaReddit />
          <FaMagento />
        </div>
      </div>

      <div className={styles.contain2}>
        <p className={styles.buzz}>Our Company</p>

        <p>&gt; Home</p>
        <p>&gt; About us</p>
        <p>&gt; Work</p>
        <p>&gt; Price</p>
        <p>&gt;Contact</p>
      </div>
      <div className={styles.contain3}>
        <p className={styles.buzz}>Our Works</p>
      <p>&gt; Branding</p>
        <p>&gt; Business us</p>
        <p>&gt; Marketing</p>
        <p>&gt; Social Media</p>
        <p>&gt; Digital Solution</p>
        <p>&gt; Graphic</p>

      </div>

      <div className={styles.contain4}>
        <p className={styles.buzz}>For Client</p>

        <p><FaPhone /> 010-020-0340</p>
        <p><FaMessage /> info@company.com</p>

      </div>
      </div>
      <div className={styles.under}>
        <p>&copy; Copyright 2021 Purple Buzz Company. All Rights Reserved.</p>
        <p>Designed by <span>TemplateMo</span></p>
        <p>Distributed by <span>Themewagon</span></p>
      </div>
    </footer>
  );
};

export default Footer;
