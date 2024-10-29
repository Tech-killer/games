import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Game Development",
      description: "Custom game design and development to bring your ideas to life.",
      icon: "🎮",
    },
    {
      title: "Live Streaming Setup",
      description: "Professional setup for live streaming to give your audience the best experience.",
      icon: "📹",
    },
    {
      title: "Gaming Merchandise",
      description: "Get exclusive merchandise designed for true gamers.",
      icon: "🛍️",
    },
    {
      title: "Esports Coaching",
      description: "Enhance your gaming skills with our expert esports coaching.",
      icon: "🏆",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-400">
          Elevate your gaming experience with our top-notch services.
        </p>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Link to="/explore">
          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors duration-200">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
