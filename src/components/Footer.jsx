import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
  return (
   <div className="p-12 bg-gray-900 text-white">
     <div className="flex-col gap-6 flex md:flex-row justify-between">
      <div className="flex gap-3 flex-col">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl cursor-pointer md:text-3xl "
        >
          Smart<span className="text-blue-800">Shop</span>
        </h1>
        <p className="w-full md:max-w-72">
          SmartShop Your trusted destination for electronics, fashion, shoes,
          and accessories.
        </p>
      </div>
        <nav className="">
                <ul className="flex flex-col gap-2 justify-start items-start">
                    <li className="text-xl font-semibold">Quick Links</li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                    <NavLink to={"/products"}>
                        Products
                    </NavLink>
                    <NavLink to={"/about"}>
                        About
                    </NavLink>
                    <NavLink to={"/contact"}>
                        Contact 
                    </NavLink>
                </ul>
            </nav>
            <div>
                <h2 className="text-xl font-semibold">Contact</h2>
                <p>Email : ijaz.builds@gmail.com</p>
                <p>Phone : 03299341587</p>
            </div>
    </div>
     <p className="mt-15 text-center">© 2026 SmartShop. All rights reserved.</p>
   </div>
  );
};

export default Footer