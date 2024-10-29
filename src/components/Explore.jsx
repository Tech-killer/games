import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import gameData from '../../public/list.json';

function Explore() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    const getGameData = async () => {
      try {
        setGame(gameData);
        console.log(gameData);
      } catch (error) {
        console.error("Error loading game data:", error);
      }
    };
    
    getGameData();
  }, []);

  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <div className='max-w-2xl container mx-auto md:px-20 px-4 py-10'>
        <h1 className='text-3xl font-bold mb-4 text-red-500'>
          Hidden Gems: Underrated Games You Need to Play
        </h1>
        <p className='mb-8 text-yellow-300'>
          Experience games with innovative mechanics that challenge conventional gameplay, offering refreshing twists that keep players engaged.
        </p>
        <Link to="/">
          <button className='text-slate-900 bg-white rounded-full border-l-8 w-20 h-10 text-center hover:bg-emerald-700 transition-colors duration-200'>
            Back
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {game.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
