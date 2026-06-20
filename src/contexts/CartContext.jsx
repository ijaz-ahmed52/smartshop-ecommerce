import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const STORAGE_KEY = "smartshop-cart"

  // 1. Load cart from localStorage safely
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      const parsed = saved? JSON.parse(saved) : []
      return Array.isArray(parsed)? parsed : []
    } catch {
      localStorage.removeItem(STORAGE_KEY) // clear corrupted data
      return []
    }
  })

  // 2. Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if(existing){
        return prev.map(item =>
          item.id === product.id? {...item, qty: item.qty + 1} : item
        )
      } else {
        return [...prev, {...product, qty: 1}]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id!== id))
  }

  const increaseQty = (id) => {
    setCart(prev => prev.map(item =>
      item.id === id? {...item, qty: item.qty + 1} : item
    ))
  }

  const decreaseQty = (id) => {
    setCart(prev => prev.map(item =>
      item.id === id && item.qty > 1? {...item, qty: item.qty - 1} : item
    ))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const clearCart = () => setCart([])

  return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQty, decreaseQty, total, cartCount, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}