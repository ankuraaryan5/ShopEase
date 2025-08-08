import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const categories = ["Top Rated", "Best Selling", "Featured"];

  const productsData = {
    "Top Rated": [
      { name: "Luxury Perfume", price: "$120", rating: 5, img: "https://images.unsplash.com/photo-1618354691435-25c1bbf0cbb9?q=80&w=500" },
      { name: "Scented Candle", price: "$40", rating: 4.8, img: "https://images.unsplash.com/photo-1601043264858-843f0b9b3f92?q=80&w=500" },
      { name: "Aroma Diffuser", price: "$70", rating: 4.7, img: "https://images.unsplash.com/photo-1632322831476-f8c68bef7dba?q=80&w=500" },
      { name: "Essential Oil Set", price: "$50", rating: 4.9, img: "https://images.unsplash.com/photo-1623826538345-192361e2d4cd?q=80&w=500" },
      { name: "Room Spray", price: "$25", rating: 4.6, img: "https://images.unsplash.com/photo-1601998828061-38a6b5f66094?q=80&w=500" },
      { name: "Gift Set", price: "$150", rating: 4.8, img: "https://images.unsplash.com/photo-1575425939964-f309288cc007?q=80&w=500" },
    ],
    "Best Selling": [
      { name: "Vanilla Candle", price: "$35", rating: 4.9, img: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=500" },
      { name: "Rose Perfume", price: "$95", rating: 4.7, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=500" },
      { name: "Spa Diffuser", price: "$65", rating: 4.8, img: "https://images.unsplash.com/photo-1632322831476-f8c68bef7dba?q=80&w=500" },
      { name: "Lavender Oil", price: "$55", rating: 4.9, img: "https://images.unsplash.com/photo-1623826538345-192361e2d4cd?q=80&w=500" },
      { name: "Luxury Gift Set", price: "$160", rating: 4.8, img: "https://images.unsplash.com/photo-1575425939964-f309288cc007?q=80&w=500" },
      { name: "Ocean Breeze Spray", price: "$28", rating: 4.7, img: "https://images.unsplash.com/photo-1601998828061-38a6b5f66094?q=80&w=500" },
    ],
    "Featured": [
      { name: "Exclusive Perfume", price: "$140", rating: 5, img: "https://images.unsplash.com/photo-1618354691435-25c1bbf0cbb9?q=80&w=500" },
      { name: "Cozy Candle", price: "$45", rating: 4.8, img: "https://images.unsplash.com/photo-1601043264858-843f0b9b3f92?q=80&w=500" },
      { name: "Wooden Diffuser", price: "$75", rating: 4.9, img: "https://images.unsplash.com/photo-1632322831476-f8c68bef7dba?q=80&w=500" },
      { name: "Citrus Oil Set", price: "$52", rating: 4.7, img: "https://images.unsplash.com/photo-1623826538345-192361e2d4cd?q=80&w=500" },
      { name: "Fresh Linen Spray", price: "$30", rating: 4.8, img: "https://images.unsplash.com/photo-1601998828061-38a6b5f66094?q=80&w=500" },
      { name: "Premium Gift Set", price: "$170", rating: 5, img: "https://images.unsplash.com/photo-1575425939964-f309288cc007?q=80&w=500" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Auto change every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = categories.indexOf(prev);
        return categories[(currentIndex + 1) % categories.length];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-10 px-6">
      {/* Category Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-lg font-semibold border-b-2 transition-colors duration-300 ${
              activeCategory === cat ? "text-yellow-500 border-yellow-500" : "text-gray-600 border-transparent hover:text-yellow-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productsData[activeCategory].map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <div className="flex items-center justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-2 text-gray-500 text-sm">{product.rating}</span>
            </div>
            {/* Add to Cart Button */}
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
