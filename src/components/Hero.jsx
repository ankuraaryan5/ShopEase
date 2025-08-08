import React, { useState } from "react";

const Hero = () => {
  const cards = [
    {
      title: "Perfumes",
      img: "https://images.unsplash.com/photo-1718466044521-d38654f3ba0a?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Candles",
      img: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Diffusers",
      img: "https://images.unsplash.com/photo-1632322831476-f8c68bef7dba?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Essential Oils",
      img: "https://images.unsplash.com/photo-1623826538345-192361e2d4cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Room Sprays",
      img: "https://images.unsplash.com/photo-1483333398237-d743b02f4e26?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gift Sets",
      img: "https://images.unsplash.com/photo-1575425939964-f309288cc007?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const defaultBg =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba"; // Default hero background

  const [bgImage, setBgImage] = useState(defaultBg);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Scent</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Explore our exclusive collection and find the fragrance that defines you.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-lg p-6 text-center backdrop-blur-sm cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setBgImage(card.img)}
            onMouseLeave={() => setBgImage(defaultBg)}
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
