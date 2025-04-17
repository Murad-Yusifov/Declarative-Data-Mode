import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [data, setData] = useState([]);

  const getData =()=> {
    axios.get('https://fakestoreapi.com/products ')
    .then(res =>
      setData(res.data)
    )
    
  }



  const addToCart =(item)=>{
    let cart =JSON.parse(localStorage.getItem('cartAdded')) || []
    let addedToCart = cart.find((x)=>x.id==item.id)
    addedToCart
    ?(addedToCart.count +=1)
    :(cart = [...cart, {...item, count: 1}])

     localStorage.setItem('cartAdded', JSON.stringify(cart))
  }

  useEffect(()=>{
    getData()
  },[])


  
  return <div style={{width:'100%', display: 'flex',alignItems:'center',flexWrap: 'wrap', justifyContent:'space-between', gap:'20px'}}>
    {data && data.map((item)=>{
      return(
      
      <div style={{width:'30%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', gap:'20px'}}>
        <div style={{width:'60%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>  
          <img src={item.image} style={{width:'100%'}} alt="" />
        <span>{item.title}</span>
        <span>{item.price}</span>
        <div style={{width:'100%',display:'flex', justifyContent:'space-between'}}>
        <button style={{width:'45%'}} onClick={()=>addToCart(item)}>Add to Cart</button>
        <button>Add to wish</button>
        </div>
       
      </div>
      </div>
      )
       })}
  </div>;
};

export default Cart;
