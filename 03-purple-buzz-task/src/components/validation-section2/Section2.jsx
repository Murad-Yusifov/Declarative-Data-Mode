import React from "react";
import styles from "./Section2.module.scss";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { FaCamera } from "react-icons/fa6";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Section2 = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Name is too short")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    contact: Yup.string().required("Contact is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      contact: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("https://northwind.vercel.app/api/categories", values);
        resetForm();
      } catch (error) {
        console.error("Submission failed:", error);
      }
    },
  });

  return (
    <div>
      <section className={styles.section1}>
        <p className={styles.create}>Create success campaign with us!</p>
        <p className={styles.elit}>Elit, sed do eiusmod tempor</p>
        <p>
          Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate.
        </p>
      </section>

      <section className={styles.section2}>
        <div className={styles.sideBar}>
          <div className={styles.media}>
            <div className={styles.news}>
              <IoNewspaperOutline className={styles.icon} />
              <span>
                <p>Media Contact</p>
                <p>Mr. John Doe</p>
                <p>010-020-0340</p>
              </span>
            </div>
            <div className={styles.news}>
              <IoMdLaptop className={styles.icon} />
              <span>
                <p>Technical Contact</p>
                <p>Mr. John Stiles</p>
                <p>010-020-0340</p>
              </span>
            </div>
            <div className={styles.news}>
              <FaCamera className={styles.icon} />
              <span>
                <p>Technical Contact</p>
                <p>Mr. John Stiles</p>
                <p>010-020-0340</p>
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <input
            className={styles.name}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}

          <input
            className={styles.lastName}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}

          <input
            className={styles.name}
            id="contact"
            name="contact"
            type="text"
            placeholder="Contact Name"
            {...formik.getFieldProps("contact")}
          />
          {formik.touched.contact && formik.errors.contact && (
            <div>{formik.errors.contact}</div>
          )}

          <input
            className={styles.lastName}
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div>{formik.errors.phone}</div>
          )}

          <input
            className={styles.subject}
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
          />
          {formik.touched.subject && formik.errors.subject && (
            <div>{formik.errors.subject}</div>
          )}

          <textarea
            className={styles.subject}
            name="message"
            id="message"
            placeholder="Message"
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div>{formik.errors.message}</div>
          )}

          <button className={styles.btn} type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Section2;
