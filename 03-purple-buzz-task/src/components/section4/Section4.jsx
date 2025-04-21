import React from 'react'
import styles from './Section4.module.scss'
import { BiSolidBox } from 'react-icons/bi'

const Section4 = () => {
  return (
    <section>
    <div className={styles.section4}>
        <div className={styles.container}>
            <BiSolidBox style={{fontSize:'50px', color:'white'}}/>
            <div className={styles.text}>
            <p style={{fontSize:'25px'}}>Great transformations successful</p>
            <p>Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <button className={styles.btn}>View Out Work</button>
        </div>

    </div>
    <h1>Recent Works</h1>
    </section>
  )
}

export default Section4