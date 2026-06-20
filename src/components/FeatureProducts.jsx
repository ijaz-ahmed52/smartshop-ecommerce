import { products } from "../data/data.js";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({activeCat,searchTerm}) => {
    const filtered = products
  .filter(p => activeCat === "All" || p.category === activeCat)
  .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  const sliceProduct = filtered.slice(0,8)
  if(filtered.length === 0){
    return(
      <div className="m-6 text-2xl text-center">
        <p>NO Product Found</p>
      </div>
    )
  }
  return (
    <section className="">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Featured Products</h2>

      <div className="py-12 md:py-16 px-5 md:px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-center items-center gap-5">
        {sliceProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
