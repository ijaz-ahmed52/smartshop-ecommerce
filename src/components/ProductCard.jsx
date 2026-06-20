import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {addToCart} = useContext(CartContext)
    return(
        <div onClick={() => navigate(`/product/${product.id}`)} className="bg-white p-5 border border-gray-200 rounded-lg shadow-lg cursor-pointer hover:-translate-y-1.5 flex flex-col gap-4 transition duration-300">
            <img src={product.image} alt={product.title}  className="w-full h-48 object-cover rounded-lg"/>
            <h3 className="text-xl font-bold text-gray-800 ">{product.title}</h3>
            <h4 className="text-sm font-semibold text-gray-600">{product.category}</h4>
            <h3 className="text-lg font-bold text-blue-900">${product.price}</h3>
            <button onClick={(e) => {e.stopPropagation(); addToCart(product)}} className="w-full p-1 rounded-lg text-white bg-blue-800 hover:bg-blue-900 cursor-pointer">Add To Cart</button>
        </div>
    )
}
export default ProductCard