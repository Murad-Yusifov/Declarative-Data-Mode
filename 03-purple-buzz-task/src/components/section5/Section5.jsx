import React from 'react'
import styles from './Section5.module.scss'
import Cart2 from '../cart2/Cart2'

const Section5 = () => {
  return (
    <section className={styles.section5}>
        <div className={styles.container}>
        <Cart2 text="Social Media" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-01.jpg"/>
        <Cart2 text="Web Marketing" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-02.jpg"/>
        <Cart2 text="R & D" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-03.jpg"/>
        <Cart2 text="Public Relation" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-04.jpg"/>
        <Cart2 text="Branding" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-05.jpg"/>
        <Cart2 text="Creative Design" mainText="Ullamco laboris nisi ut aliquip ex" backgroundImg="https://themewagon.github.io/purple-buzz/assets/img/recent-work-06.jpg"/>
        </div>
    </section>
  )
}

export default Section5