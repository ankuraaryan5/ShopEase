import React, { useState } from "react";

const Carousel = () => {
  const categories = [
    {
      name: "Perfumes",
      img: "https://images.unsplash.com/photo-1718466044521-d38654f3ba0a?q=80&w=773&auto=format&fit=crop",
    },
    {
      name: "Candles",
      img: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Diffusers",
      img: "https://images.unsplash.com/photo-1632322831476-f8c68bef7dba?q=80&w=775&auto=format&fit=crop",
    },
    {
      name: "Essential Oils",
      img: "https://images.unsplash.com/photo-1623826538345-192361e2d4cd?q=80&w=870&auto=format&fit=crop",
    },
    {
      name: "Gift Sets",
      img: "https://images.unsplash.com/photo-1575425939964-f309288cc007?q=80&w=870&auto=format&fit=crop",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        
        {/* Left - Categories */}
        <div className="flex flex-col justify-between h-full py-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left text-2xl font-semibold transition-colors duration-300 ${
                activeIndex === index ? "text-yellow-500" : "text-gray-700"
              } hover:text-yellow-500`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right - Image */}
        <div className="flex items-center justify-center">
          <img
            src={categories[activeIndex].img}
            alt={categories[activeIndex].name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Carousel;
