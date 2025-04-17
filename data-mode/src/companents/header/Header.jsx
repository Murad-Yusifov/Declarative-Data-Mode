import React from 'react'
import { Link, useNavigate } from 'react-router'
import styles from './Header.module.css'
import { FaCartArrowDown, FaHeart, FaHome } from 'react-icons/fa'

const Header = () => {
  // const location =useNavigate()

  // const pageConfig = {
  //   '/': {
      
  //   }
  // }
  return (
    <div>
        <header className={styles.header}>
        <h1>Header</h1>
        <nav>
         <ul>
         <li><Link className={styles.link} to='/'><FaHome className={styles.icons}/>Home</Link></li>
          <li><Link className={styles.link} to='/basket'><FaCartArrowDown className={styles.icons}/>Basket</Link></li>
          <li><Link className={styles.link} to='/wish'><FaHeart className={styles.icons}/>Wish</Link></li>
         </ul>
        </nav>
        </header>

    </div>
  )
}

export default Header