import { useState } from "react";
import Category from "../components/CategoryFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";

const Products = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = products
  .filter(p => activeCat === "All" || p.category === activeCat)
  .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Category activeCat={activeCat} setActiveCat={setActiveCat} />
      <div className="flex flex-col gap-3">
        <h2 className="mt-4 text-2xl text-center font-bold md:text-3xl">
          Our Products
        </h2>
        <p className="text-lg font-semibold text-center text-gray-700">
          Browse our collection of high-quality products.
        </p>
      </div>
      <div className="py-12 md:py-16 px-5 md:px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-center items-center gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Products;
