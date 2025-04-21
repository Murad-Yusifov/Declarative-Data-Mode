import React from 'react'
import styles from './Cart2.module.scss'
const Cart2 = ({text,mainText, backgroundImg}) => {
  return (
    <div className={styles.cart} style={{backgroundImage:`url(${backgroundImg})`}}>
        <div className={styles.contain}>
        <p className={styles.text}>{text}</p>
        <p>{mainText}</p>
        </div>
    </div>
  )
}

export default Cart2