import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styles from './Header.module.css'
import { FaCartArrowDown, FaHeart, FaHome } from 'react-icons/fa'

const Header = () => {
 const [count, setCount]=useState(1)
 const [wish, setWish]=useState(1)

 const getCount =()=>{
 let number = JSON.parse(localStorage.getItem('cart')) ||[]
 let allNumbers =number.reduce((acc, item)=>acc +(item.count || 1), 0)
 setCount(allNumbers)
 
 }

 const getWish =()=>{
  let number = JSON.parse(localStorage.getItem('wish')) ||[]
  let allNumbers =number.reduce((acc, item)=>acc +(item.count || 1), 0)
  setWish(allNumbers)
  
  }

 useEffect(()=>{
  getCount()
  getWish()
 })
 window.addEventListener('storage', getCount)
  return (
    <div>
        <header className={styles.header}>
        <h1>Header</h1>
        <nav>
         <ul>
         <li><Link className={styles.link} to='/'><FaHome className={styles.icons}/>Home</Link></li>
          <li><Link className={styles.link} to='/basket'><FaCartArrowDown className={styles.icons}/>Basket ({count})</Link></li>
          <li><Link className={styles.link} to='/wish'><FaHeart className={styles.icons}/>({wish}) Wish</Link></li>
         </ul>
        </nav>
        </header>

    </div>
  )
}

export default Header