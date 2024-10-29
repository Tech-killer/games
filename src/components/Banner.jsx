import React from 'react';
import Done from '/Done.jpg'; 

function Banner() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 my-10 flex flex-col-reverse md:flex-row items-center pt-20"> 

      <div className="w-full md:w-1/2 mt-8 md:mt-36 space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-slate-400">
          Hello, Welcome Here to Learn Something New With{' '}
          <span className="text-violet-700 text-4xl font-bold">Tech Hub</span>
        </h1>
        <p className="text-yellow-700">
          Your gateway to knowledge and skills! Here, you’ll find engaging courses designed to empower you to learn something new and exciting every day. Join us on this journey of discovery and personal growth!
        </p>

        <div className="flex items-center justify-center md:justify-start space-x-2">
          <span className="bg-gray-200 px-3 py-2 rounded-l-md text-gray-700">@</span>
          <input
            type="text"
            className="border border-gray-300 rounded-r-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-violet-500 w-full max-w-xs"
            placeholder="Username"
            aria-label="Username input"
          />
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            type="button"
            className="bg-violet-700 text-white py-2 px-6 rounded-md hover:bg-violet-800 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          className="max-w-full h-auto rounded-full object-cover"
          src={Done}
          alt="Illustration representing completion"
        />
      </div>
    </div>
  );
}

export default Banner;
