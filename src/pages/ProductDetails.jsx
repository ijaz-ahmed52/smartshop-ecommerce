import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { products } from "../data/data"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const ProductDetails = () => {
    const {id} = useParams()
    const item = products.find(p => p.id === Number(id))
  const product = item 
  const {addToCart} = useContext(CartContext)
  
if(!product){
    return (
  <div className="text-center py-20">
    <h2>Product Not Found</h2>
  </div>
);
}

  return(
    <div>
      <Header/>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          <div className="w-full md:w-2/5">
            <div className="shadow-xl rounded-xl overflow-hidden">
              <img className="w-full h-[400px] md:h-[500px] object-cover" src={product.image} alt={product.title} />
            </div>
          </div>


          <div className="w-full flex md:w-3/5 flex-col gap-4">
            <p className="text-sm uppercase  text-gray-500">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-2xl font-bold text-blue-800">${product.price}</h2>
            <p className="text-gray-600 leading-7">{product.description}</p>

            <button onClick={() =>  addToCart(product)} className="bg-blue-800 cursor-pointer hover:bg-blue-900 text-white hover:scale-105 rounded-lg px-6 py-3 mt-4 w-full md:w-fit transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default ProductDetails;