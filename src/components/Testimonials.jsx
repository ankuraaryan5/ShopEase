import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "This is the best product I've ever used! Highly recommend.",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "Amazing quality and excellent customer service.",
  },
  {
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    comment: "Fast delivery and the product exceeded my expectations.",
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    comment: "I will definitely be purchasing again!",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    comment: "Worth every penny. Simply outstanding.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get visible testimonials (2 at a time for large screens)
  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <div
      className="py-10 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 lg:grid-cols-2 transition-all duration-700">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex items-center space-x-4"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
              />
              <div>
                <p className="italic text-gray-700 mb-2">"{t.comment}"</p>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
