import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedFooter from '../components/Footer';
import Explore from '../components/Explore';

function Explores() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-red-500">
          Explore Our Collection
        </h1>
        <Explore />
      </main>
      <AnimatedFooter />
    </div>
  );
}

export default Explores;
