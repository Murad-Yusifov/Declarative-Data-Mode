import React from "react";
import styles from "./Carts.module.scss";
import Button from "../button/Button";

const Cart = ({backgroundImage, buttonText}) => {
  return (
    <div className={styles.cart1} style={{backgroundImage:`url(${backgroundImage})`}}>
        <Button buttonText={buttonText}/>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      
    </div>
  );
};

export default Cart;
