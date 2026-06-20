import { useState } from "react";

const Category = ({activeCat , setActiveCat}) => {
  const categories = ["All", "Electronics", "Fashion", "Shoes","Accessories", "Home & Living"];
  
  
  return (
    <section className="py-12 md:py-16 px-5 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Shop by Category
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        Browse top categories and find what you need fast
      </p>

      <div className="flex flex-wrap gap-3 justify-center  mt-6">
        {categories.map((cat) => (
          <button
            onClick={() => setActiveCat(cat)}
            key={cat}
            className={`border px-4 py-2 rounded-lg transition duration-200
              ${
                activeCat === cat
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-800 hover:text-white hover:border-blue-800"
              }`}
          >
            {cat}
          </button>
        ))}
      </div >
      <hr className="mt-9 text-gray-400"/>
    </section>
  );
};
export default Category;
