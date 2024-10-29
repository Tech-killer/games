import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import gamesData from '../../public/list.json';

function Freegames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = () => {
      try {
        console.log("Loaded games from JSON:", gamesData);
        setGames(gamesData);
      } catch (error) {
        console.error("Error loading games:", error);
      }
    };

    loadGames();
  }, []);
  const filteredGames = games.filter((game) => game.price === 0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-bold text-red-600 text-3xl text-center pb-2">Free Offered PC Games</h1>
        <p className='text-yellow-300 text-center'>
          Explore our collection of top free PC games! Dive into thrilling battles,<br />
          epic adventures, and creative worlds without spending a dime. Discover your next favorite game today!
        </p>
      </div>

      <div>
        {filteredGames.length > 0 ? (
          <Slider {...settings}>
            {filteredGames.map((item, index) => (
              <Cards 
                item={{
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  category: item.category,
                  title: item.title,
                }} 
                key={index}
              />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-red-600">No free games available.</p>
        )}
      </div>
    </div>
  );
}

export default Freegames;
