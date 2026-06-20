import { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { CartContext } from "../contexts/CartContext";
const Header = ({searchTerm , setSearchTerm}) => {
    const [isOpen , setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { cart } = useContext(CartContext)
const cartCount = cart.length
    return(
    <>
        <header className="flex bg-gray-300 z-40 sticky top-0 left-0 justify-between px-6 md:px-12 py-3 md:py-6 items-center w-full border-b border-gray-400 shadow-lg">
            <h1 onClick={() => navigate("/")} className="text-2xl cursor-pointer md:text-3xl ">Smart<span className="text-blue-800">Shop</span></h1>
            <nav className="hidden md:block">
                <ul className="flex gap-6 ">
                    <NavLink to={"/"} className={({isActive}) =>`hover:text-blue-900 ${isActive ? "text-blue-900 border-b" : "text-black"}`}>
                        Home
                    </NavLink>
                    <NavLink to={"/products"} className={({isActive}) =>`hover:text-blue-900 ${isActive ? "text-blue-900 border-b" : "text-black"}`}>
                        Products
                    </NavLink>
                    <NavLink to={"/about"} className={({isActive}) =>`hover:text-blue-900 ${isActive ? "text-blue-900 border-b" : "text-black"}`}>
                        About
                    </NavLink>
                    <NavLink to={"/contact"} className={({isActive}) =>`hover:text-blue-900 ${isActive ? "text-blue-900 border-b" : "text-black"}`}>
                        Contact 
                    </NavLink>
                </ul>
            </nav>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
           <div className="flex items-center gap-2">
      <Link to="/cart" className="flex items-center gap-1">
        <FaCartArrowDown className="text-2xl cursor-pointer"/>
        <span>({cartCount})</span>
      </Link>
    </div>

            {/* For Mobile  */}
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <RxCross2/> : <RxHamburgerMenu/> }</button>
            
        </header>
        <div className={`md:hidden w-screen z-50 bg-white top-20 left-0 fixed ${isOpen ? "block" : "hidden" }`}>
        
    
                <ul className="flex flex-col gap-4 items-center justify-center h-full">
                      <NavLink to={"/"} onClick={() => setIsOpen(false)} className={({isActive}) =>`hover:text-blue-900 text-xl w-full border-b border-gray-500 p-1 text-center ${isActive ? "text-blue-900 font-bold" : "text-black"}`}>
                        Home
                    </NavLink>
                    <NavLink  to={"/products"} onClick={() => setIsOpen(false)} className={({isActive}) =>`hover:text-blue-900 text-xl w-full border-b border-gray-500 p-1 text-center ${isActive ? "text-blue-900 font-bold" : "text-black"}`}>
                        Products
                    </NavLink>
                    <NavLink to={"/about"} onClick={() => setIsOpen(false)} className={({isActive}) =>`hover:text-blue-900 text-xl w-full border-b border-gray-500 p-1 text-center ${isActive ? "text-blue-900 font-bold" : "text-black"}`}>
                        About
                    </NavLink>
                    <NavLink to={"/contact"} onClick={() => setIsOpen(false)} className={({isActive}) =>`hover:text-blue-900 text-xl w-full border-b border-gray-500 p-1 text-center ${isActive ? "text-blue-900 font-bold" : "text-black"}`}>
                        Contact 
                    </NavLink>
                </ul>
            </div>
    </>
    )
}
export default Header