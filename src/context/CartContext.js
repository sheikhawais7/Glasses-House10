import React, { createContext, useContext, useState } from 'react'
import { message } from 'antd'
const CartContext = createContext()

export default function CartContextProvider(props) {

  const [isAppLoading, setIsAppLoading] = useState(true)
  const [cart, setCart] = useState([])

  setTimeout(() => {
    setIsAppLoading(false)
  }, 2000)

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
    message.success("Removed Successfully")
  }

  return (
    <CartContext.Provider value={{ cart, setCart ,removeFromCart , isAppLoading }}>
      {props.children}
    </CartContext.Provider>
  )
}
export const useCartContext = () => useContext(CartContext)

