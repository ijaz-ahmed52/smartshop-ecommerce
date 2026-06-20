import heroimg from "../assets/images/hero-img.jpg";
const Hero = () => {
  return (
<div className="max-h-screen flex flex-col md:flex-row py-12 md:py-8 px-5 md:px-8 justify-center md:justify-start items-center bg-gray-200 gap-8 md:gap-12">      <div className="flex-1 text-center md:text-left flex flex-col gap-4">
        <h3 className="text-xl text-blue-900 font-semibold">Welcome to SmartShop</h3>
        <h2 className="text-3xl md:text-4xl font-bold ">Discover the Best Products for Your Lifestyle</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          Shop high-quality electronics, fashion, accessories, and more at great
          prices. Fast delivery and secure shopping.
        </p>
        <div className="flex gap-5 justify-center md:justify-start flex-wrap">
          <button className="bg-blue-800 text-white px-3 rounded-lg py-3 hover:bg-blue-900   hover:scale-105 transition duration-200">Shop Now</button>
          <button className="border border-blue-800 hover:bg-blue-800 hover:text-white px-3   rounded-lg py-3 transition duration-200">Explore Products</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300" src={heroimg} alt="Shop Onling image" />
      </div>
    </div>
  );
};
export default Hero;
