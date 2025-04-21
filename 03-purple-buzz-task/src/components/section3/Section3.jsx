import React from 'react'
import styles from './Section3.module.scss'
import Cart from '../carts/Cart'

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <div className={styles.container}>
        <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-01.jpg"
        buttonText="UI/UX design"
        />
         <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-02.jpg"
        buttonText="UI/UX design"
        />
         <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-03.jpg"
        buttonText="UI/UX design"
        />
         <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-04.jpg"
        buttonText="UI/UX design"
        />
         <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-05.jpg"
        buttonText="UI/UX design"
        />
         <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-06.jpg"
        buttonText="UI/UX design"
        />
          <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-07.jpg"
        buttonText="UI/UX design"
        />
          <Cart 
        backgroundImage="https://themewagon.github.io/purple-buzz/assets/img/services-08.jpg"
        buttonText="UI/UX design"
        />
      </div>

    </section>
  )
}

export default Section3