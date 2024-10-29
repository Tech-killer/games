import React from "react";
import { Link } from "react-router-dom"

function Contact() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white py-16 px-6 flex flex-col items-center"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/3875248.jpg')`,
        minHeight: "100vh",
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-sky-950">Contact us</h2>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Have a question or want to work together? Reach out to me!
      </p>

      <form className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="harsh.jsharma0304@gmail.com"
            id="email"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            placeholder="Type your message"
            required
          ></textarea>
        </div>

        <Link to="/">
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition-colors duration-200"
        >
          Send Message
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Contact;
