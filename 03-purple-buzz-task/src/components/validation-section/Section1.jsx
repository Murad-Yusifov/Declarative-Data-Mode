import React from 'react'
import styles from './Section1.module.scss'

const Section1 = () => {
  return (
    <section className={styles.section1}>
        <div className={styles.text}>
            <span>Contact</span>
            <p className={styles.elit}>Elit, sed do eiusmod tempor</p>
            <p>Vector illustration is from <u style={{color:'purple', cursor:'pointer'}}>StorySet</u>. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <div className={styles.img}>
            <img src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg" alt="" />
        </div>


    </section>
  )
}

export default Section1