import React, { createContext, useState } from 'react'


export const  ServiceContext = createContext(null);

const getDefaultCart = () => {
  // const {product} = props.data;
  let cart = {};
  for (let i = 1; i < 6 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ServiceContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId] +1 }))

  }

  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId] -1 }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    // getTotalCartAmount,
    checkout,
  };

  return (
    <ServiceContext.Provider value={contextValue} >{props.children}</ServiceContext.Provider>
  )
}

export default ServiceContextProvider