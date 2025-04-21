import React from 'react'
import styles from "./Button.module.scss"

const Button = ({buttonText}) => {
  return (
    <button className={styles.btn}>
        {buttonText}
    </button>
  )
}

export default Button