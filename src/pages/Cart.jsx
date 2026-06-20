
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cart, setCart , decreaseQty , increaseQty , total , removeFromCart} = useContext(CartContext)

    const navigate = useNavigate()
  if (cart.length === 0) {
    return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[60vh]">
      <h2 className="text-2xl font-semibold">Cart is empty</h2>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 border rounded hover:bg-gray-100"
      >
        ← Back
      </button>
    </div>
  )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
       <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 border rounded">
        ← Back
      </button>
      
      {cart.map(item => (
        <div key={item.id} className="flex items-center gap-4 border-b py-4">
          <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
          
          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item.id)} className="px-2 border">-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)} className="px-2 border">+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="bg-black text-white px-6 py-2 mt-2">Checkout</button>
      </div>
    </div>
  )
}

export default Cart