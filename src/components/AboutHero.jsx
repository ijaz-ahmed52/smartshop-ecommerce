import aboutHeroImg from "../assets/images/about-hero.jpg"
import { Link } from "react-router-dom"

const AboutHero = () => {
    return(
      <div className="min-h-[85vh] flex flex-col md:flex-row py-16 md:py-20 px-6 md:px-12 justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 gap-10 md:gap-16">

          {/* Text Content */}
          <div className="flex-1 flex-col gap-5 text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About <span className="text-blue-800">SmartShop</span>
            </h1>

            <h3 className="text-xl md:text-2xl text-gray-700 font-medium">
              Your Trusted Online Shopping Destination
            </h3>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At SmartShop, we are committed to providing high-quality products across electronics,
              fashion, shoes, home & living, and accessories. Our goal is to make online shopping
              simple, affordable, and enjoyable for everyone through excellent service and
              carefully selected products.
            </p>

            <Link to="/products">
              <button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 w-fit mx-auto md:mx-0">
                Explore Products
              </button>
            </Link>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center w-full max-w-lg">
          <img
            className="w-full h-72 md:h-[28rem] object-cover rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            src={aboutHeroImg}
            alt="Shop Online - SmartShop products"
          />
        </div>
      </div>
    )
}
export default AboutHero