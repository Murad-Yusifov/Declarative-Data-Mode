import React, { useEffect, useState } from "react";
import { BiBorderRadius } from "react-icons/bi";

const Basket = () => {
  const [basket, setBasket] = useState(0);

  const getBasket = () => {
    let products = JSON.parse(localStorage.getItem("cart")) || [];
    setBasket(products);
  };

  useEffect(() => {
    getBasket();
  }, []);

  const removeProducts = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let remove = cart.find((x) => x.id == item.id);

    if (remove) {
      cart = cart.filter((x) => x.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      setBasket(cart);
    }
  };

  // const getReduce =()=>{
  //   let reducer = JSON.parse(localStorage.getItem('cart')) ||[]
  //   let reduced = reducer.
  // }

  return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        {basket &&
          basket.map((item) => {
            return (
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <img style={{ width: "150px" }} src={item.image} alt="" />
                <span>{item.title}</span>

                <span>Price: ${item.price}</span>
                <div style={{borderRadius:'50%',widows:'100%', display:'flex',justifyContent:'space-between', cursor:'pointer', gap:'10px'}}>
                <div style={{border:'none',borderRadius:'50%', width:'25px', height:'25px', display:'flex',justifyContent:'center', alignItems:'center', backgroundColor:'purple', cursor:'pointer'}}>1</div>
                <span>Amount: {item.count}</span>
                <div style={{border:'none',borderRadius:'50%', width:'25px', height:'25px', display:'flex',justifyContent:'center', alignItems:'center', backgroundColor:'purple', cursor:'pointer', fontSize:'30px'}}>+</div>
                </div>
                <span>Total price: ${item.price * item.count}</span>

                <button
                  onClick={() => {
                    removeProducts(item);
                  }}
                  style={{
                    width: "60%",
                    height: "30px",
                    cursor: "pointer",
                    backgroundColor: "violet",
                    border: "0",
                  }}
                >
                  Delete from Basket
                </button>
              </div>
            );
          })}
      </div>
  );
};

export default Basket;