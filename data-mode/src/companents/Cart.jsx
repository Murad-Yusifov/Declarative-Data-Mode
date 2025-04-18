import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState([]);
  const [wish, setWish] = useState([]);

  const getData = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setData(res.data);
    });
  };

  const loadWish = () => {
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setWish(storedWish);
  };

  useEffect(() => {
    getData();
    loadWish(); 
  }, []);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let visibleCart = cart.find((x) => x.id == item.id);

    visibleCart
      ? (visibleCart.count += 1)
      : (cart = [...cart, { ...item, count: 1 }]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToWish = (item) => {
    let currentWish = [...wish];
    const isInWish = currentWish.find((x) => x.id == item.id);

    if (isInWish) {
      currentWish = currentWish.filter((x) => x.id !== item.id);
      alert("Item deleted from the wishlist!");
    } else {
      currentWish.push(item);
    }

    setWish(currentWish);
    localStorage.setItem("wish", JSON.stringify(currentWish));
  };

  const inWish = (id) => {
    return wish.some((item) => item.id == id);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {data &&
        data.map((item) => {
          return (
            <div
              style={{
                width: "15%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              key={item.id}
            >
              <img style={{ width: "150px" }} src={item.image} alt="" />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                  style={{
                    width: "45%",
                    height: "30px",
                    cursor: "pointer",
                    backgroundColor: "violet",
                    border: "0",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => addToWish(item)}
                  style={{
                    width: "45%",
                    height: "30px",
                    cursor: "pointer",
                    backgroundColor: "violet",
                    border: "0",
                  }}
                >
                  {inWish(item.id) ? "Remove" : "Add"}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
