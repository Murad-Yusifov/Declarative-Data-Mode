import React, { useEffect, useState } from "react";

const Wish = () => {
  const [basket, setBasket] = useState(0);

  const getBasket = () => {
    let products = JSON.parse(localStorage.getItem("wish")) || [];
    setBasket(products);
  };

  useEffect(() => {
    getBasket();
  }, []);

  const removeProducts = (item) => {
    let cart = JSON.parse(localStorage.getItem("wish")) || [];
    let remove = cart.find((x) => x.id == item.id);

    if (remove) {
      cart = cart.filter((x) => x.id !== item.id);
      localStorage.setItem("wish", JSON.stringify(cart));
      setBasket(cart);
    }
  };

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
              <button
                onClick={() => {
                  removeProducts(item);
                }}
                style={{
                  width: "80%",
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

export default Wish;
